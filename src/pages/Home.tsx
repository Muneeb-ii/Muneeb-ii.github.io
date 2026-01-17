
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Section } from '../components/shared/Section';
import { TelemetryCard } from '../components/f1/TelemetryCard';
import { ProjectCard } from '../components/projects/ProjectCard';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { routes } from '../utils/routing';


export function Home() {
  const featuredProjects = content.projects.filter((p) => p.featured).slice(0, 4);
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.6 },
  };

  // Determine grid columns based on number of featured projects
  const gridCols = featuredProjects.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2';

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
            <motion.div
              className="lg:col-span-7 flex flex-col justify-center"
              {...fadeIn}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-racing font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-400 dark:to-gray-600 mb-2">
                  MUNEEB
                </h1>
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-racing font-bold tracking-tighter text-gray-900 dark:text-white mb-8 ml-2">
                  NAFEES
                </h1>
              </motion.div>

              <motion.div
                className="pl-2 border-l-4 border-f1-red dark:border-f1-orange"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="text-2xl md:text-3xl font-story italic text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                  "Building intelligent systems that push the boundaries of what's possible."
                </p>
              </motion.div>

              <motion.div
                className="mt-12 flex flex-wrap gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button to={routes.projects} variant="primary" className="text-lg px-8 py-4">
                  Explore Garage
                </Button>
                <Button to={routes.contact} variant="outline" className="text-lg px-8 py-4">
                  Contact Team
                </Button>
              </motion.div>
            </motion.div>

            {/* Image/Graphic - Right Side (5/12) - Overlapping */}
            <motion.div
              className="hidden lg:block lg:col-span-5 relative h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full aspect-[3/4]">
                <motion.img
                  src="/assets/images/Picture.jpeg"
                  alt={content.personalInfo.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-2xl"
                  style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }}
                />
                {/* Decorative Overlay */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 border-l-2 border-b-2 border-f1-red dark:border-f1-orange opacity-60" />
                <div className="absolute -top-10 -right-10 w-40 h-40 border-r-2 border-t-2 border-f1-red dark:border-f1-orange opacity-60" />
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span className="text-sm font-racing tracking-widest text-gray-400">SCROLL</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-f1-red to-transparent dark:from-f1-orange" />
          </motion.div>
        </Section>

        {/* Narrative / Bio Section - Text Heavy, Editorial */}
        <Section className="py-24 bg-white dark:bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-racing font-bold tracking-widest text-f1-red dark:text-f1-orange mb-4 uppercase">
                Driver Profile
              </h2>
              <p className="text-xl md:text-2xl font-story leading-loose text-gray-800 dark:text-gray-200">
                {content.personalInfo.bio}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-4xl font-racing font-bold text-gray-900 dark:text-white">4.15</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">GPA</p>
                </div>
                <div>
                  <h3 className="text-4xl font-racing font-bold text-gray-900 dark:text-white">CS+AI</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Focus</p>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Telemetry Grid Reimagined */}
              <div className="grid grid-cols-1 gap-4">
                <TelemetryCard
                  title="Primary Systems"
                  value="Python • ML • Systems"
                  status="good"
                  className="transform translate-x-4"
                />
                <TelemetryCard
                  title="Racecraft"
                  value="Shipping • Iteration"
                  status="good"
                  className="transform -translate-x-4"
                />
                <TelemetryCard
                  title="Current Status"
                  value="Building & Scaling"
                  status="good"
                  className="transform translate-x-8"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Featured Projects - Full Width Showcase */}
        <Section fullWidth className="py-32 bg-gray-50 dark:bg-[#080808]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-5xl md:text-7xl font-racing font-bold text-gray-900 dark:text-white">
                THE GARAGE
              </h2>
              <Button to={routes.projects} variant="outline" className="hidden md:inline-flex">
                View All Specs
              </Button>
            </div>

            <div className={`grid ${gridCols} gap-8`}>
              {featuredProjects.map((project: any) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="mt-12 text-center md:hidden">
              <Button to={routes.projects} variant="outline">
                View All Specs
              </Button>
            </div>
          </div>
        </Section>

      </div>
    </>
  );
}
