
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Section } from '../components/shared/Section';
import { TelemetryCard } from '../components/f1/TelemetryCard';
import { ProjectCard } from '../components/projects/ProjectCard';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { routes } from '../utils/routing';
import { AnimatedHeading } from '../components/shared/AnimatedText';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/shared/ScrollReveal';
import { easings, durations } from '../utils/animations';


export function Home() {
  const featuredProjects = content.projects.filter((p) => p.featured).slice(0, 4);
  const prefersReducedMotion = useReducedMotion();

  // Determine grid columns based on number of featured projects
  const gridCols = featuredProjects.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2';

  // Image reveal animation
  const imageReveal = {
    initial: { 
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      opacity: 0,
    },
    animate: { 
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      opacity: 1,
      transition: { 
        duration: durations.cinematic, 
        ease: easings.expo,
        delay: 0.5,
      },
    },
  };

  return (
    <>
      <SEO
        title="Home"
        description={content.personalInfo.headline}
        path="/"
      />
      <div className="overflow-x-hidden">
        {/* Hero Section - Asymmetrical & Story Driven */}
        <Section fullWidth className="h-screen min-h-[800px] relative flex items-center p-0">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40">
            <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-gray-100 to-transparent dark:from-gray-900" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
            {/* Text Content - Left Side (7/12) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Kinetic Typography Hero */}
              <AnimatedHeading
                lines={[
                  { 
                    text: 'MUNEEB', 
                    className: 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-400 dark:to-gray-600' 
                  },
                  { 
                    text: 'NAFEES', 
                    className: 'text-gray-900 dark:text-white ml-2' 
                  },
                ]}
                lineClassName="text-7xl md:text-8xl lg:text-9xl font-racing font-bold tracking-tighter"
                className="mb-8"
                delay={0.2}
              />

              <motion.div
                className="pl-2 border-l-4 border-f1-red dark:border-f1-orange"
                initial={{ opacity: 0, x: -30, scaleY: 0 }}
                animate={{ opacity: 1, x: 0, scaleY: 1 }}
                transition={{ 
                  delay: 0.8, 
                  duration: durations.slow, 
                  ease: easings.smooth,
                }}
                style={{ transformOrigin: 'top left' }}
              >
                <motion.p 
                  className="text-2xl md:text-3xl font-story italic text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0, duration: durations.slow }}
                >
                  "Building intelligent systems that push the boundaries of what's possible."
                </motion.p>
              </motion.div>

              <motion.div
                className="mt-12 flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.2, 
                  duration: durations.slow, 
                  ease: easings.smooth,
                }}
              >
                <Button to={routes.projects} variant="primary" className="text-lg px-8 py-4">
                  Explore Garage
                </Button>
                <Button href={content.personalInfo.links.email} variant="outline" className="text-lg px-8 py-4">
                  Get In Touch
                </Button>
              </motion.div>
            </div>

            {/* Image/Graphic - Right Side (5/12) - Overlapping with clip-path reveal */}
            <motion.div
              className="hidden lg:block lg:col-span-5 relative h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: durations.normal }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full aspect-[3/4]">
                {/* Image with clip-path reveal animation */}
                <motion.div
                  className="relative w-full h-full overflow-hidden"
                  variants={prefersReducedMotion ? undefined : imageReveal}
                  initial="initial"
                  animate="animate"
                >
                  <motion.img
                    src="/assets/images/Picture.jpeg"
                    alt={content.personalInfo.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl"
                    style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: durations.normal }}
                  />
                </motion.div>
                {/* Decorative Overlay with staggered animation */}
                <motion.div 
                  className="absolute -bottom-10 -left-10 w-40 h-40 border-l-2 border-b-2 border-f1-red dark:border-f1-orange opacity-60"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  transition={{ delay: 1.4, duration: durations.slow, ease: easings.smooth }}
                />
                <motion.div 
                  className="absolute -top-10 -right-10 w-40 h-40 border-r-2 border-t-2 border-f1-red dark:border-f1-orange opacity-60"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  transition={{ delay: 1.6, duration: durations.slow, ease: easings.smooth }}
                />
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator with bounce animation */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: durations.slow, ease: easings.smooth }}
          >
            <span className="text-sm font-racing tracking-widest text-gray-400">SCROLL</span>
            <motion.div 
              className="w-[1px] h-12 bg-gradient-to-b from-f1-red to-transparent dark:from-f1-orange"
              animate={{ 
                scaleY: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: easings.smooth,
              }}
            />
          </motion.div>
        </Section>

        {/* Narrative / Bio Section - Text Heavy, Editorial */}
        <Section className="py-24 bg-white dark:bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="text-sm font-racing font-bold tracking-widest text-f1-red dark:text-f1-orange mb-4 uppercase">
                Driver Profile
              </h2>
              <p className="text-xl md:text-2xl font-story leading-loose text-gray-800 dark:text-gray-200">
                {content.personalInfo.bio}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <ScrollReveal direction="up" delay={0.3}>
                  <h3 className="text-4xl font-racing font-bold text-gray-900 dark:text-white">4.15</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">GPA</p>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.4}>
                  <h3 className="text-4xl font-racing font-bold text-gray-900 dark:text-white">CS+AI</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Focus</p>
                </ScrollReveal>
              </div>
            </ScrollReveal>
            <div className="relative">
              {/* Telemetry Grid Reimagined with staggered reveal */}
              <StaggerContainer staggerSpeed="slow" className="grid grid-cols-1 gap-4">
                <StaggerItem direction="right">
                  <TelemetryCard
                    title="Primary Systems"
                    value="Python • ML • Systems"
                    status="good"
                    className="transform translate-x-4"
                  />
                </StaggerItem>
                <StaggerItem direction="left">
                  <TelemetryCard
                    title="Racecraft"
                    value="Shipping • Iteration"
                    status="good"
                    className="transform -translate-x-4"
                  />
                </StaggerItem>
                <StaggerItem direction="right">
                  <TelemetryCard
                    title="Current Status"
                    value="Building & Scaling"
                    status="good"
                    className="transform translate-x-8"
                  />
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </Section>

        {/* Featured Projects - Full Width Showcase */}
        <Section fullWidth className="py-32 bg-gray-50 dark:bg-[#080808]">
          <div className="container mx-auto px-6 md:px-12">
            <ScrollReveal direction="up" className="flex justify-between items-end mb-16">
              <h2 className="text-5xl md:text-7xl font-racing font-bold text-gray-900 dark:text-white">
                THE GARAGE
              </h2>
              <Button to={routes.projects} variant="outline" className="hidden md:inline-flex">
                View All Specs
              </Button>
            </ScrollReveal>

            <StaggerContainer staggerSpeed="normal" className={`grid ${gridCols} gap-8`}>
              {featuredProjects.map((project: any) => (
                <StaggerItem key={project.id} direction="up">
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
            <ScrollReveal direction="up" delay={0.3} className="mt-12 text-center md:hidden">
              <Button to={routes.projects} variant="outline">
                View All Specs
              </Button>
            </ScrollReveal>
          </div>
        </Section>

      </div>
    </>
  );
}
