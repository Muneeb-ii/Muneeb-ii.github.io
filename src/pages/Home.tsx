import { content } from '../data/content';
import { Section } from '../components/shared/Section';
import { TelemetryCard } from '../components/f1/TelemetryCard';
import { ProjectCard } from '../components/projects/ProjectCard';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';
import { routes } from '../utils/routing';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/shared/ScrollReveal';
import { Hero } from '../components/hero/Hero';

export function Home() {
  const featuredProjects = content.projects.filter((p) => p.featured).slice(0, 4);

  // Determine grid columns based on number of featured projects
  const gridCols = featuredProjects.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2';

  return (
    <>
      <SEO
        title="Home"
        description="Engineering intelligent systems — from data to deployment."
        path="/"
      />
      <div className="overflow-x-hidden">
        {/* Hero Section - Cinematic F1-Inspired */}
        <Hero />

        {/* Narrative / Bio Section */}
        <Section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-black dark:via-[#0a0a12] dark:to-black relative overflow-hidden">
          {/* Subtle background orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-rose-500/5 to-transparent dark:from-rose-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-blue-500/5 to-transparent dark:from-blue-500/10 blur-3xl" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative">
            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="text-sm font-racing font-bold tracking-widest text-f1-red dark:text-f1-orange mb-4 uppercase">
                Driver Profile
              </h2>
              <p className="text-xl md:text-2xl font-story leading-loose text-gray-800 dark:text-gray-200">
                {content.personalInfo.bio}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <ScrollReveal direction="up" delay={0.3}>
                  <div className="bg-gradient-to-br from-rose-50 to-white dark:from-rose-950/30 dark:to-transparent p-4 rounded-lg border border-rose-100 dark:border-rose-900/30">
                    <h3 className="text-4xl font-racing font-bold text-gray-900 dark:text-white">4.15</h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">GPA</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.4}>
                  <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-transparent p-4 rounded-lg border border-blue-100 dark:border-blue-900/30">
                    <h3 className="text-4xl font-racing font-bold text-gray-900 dark:text-white">CS+AI</h3>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Focus</p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
            <div className="relative">
              {/* Telemetry Grid */}
              <StaggerContainer staggerSpeed="slow" className="grid grid-cols-1 gap-4">
                <StaggerItem direction="right">
                  <TelemetryCard
                    title="Primary Systems"
                    value="Python • ML • Systems"
                    status="good"
                    className="md:translate-x-4"
                  />
                </StaggerItem>
                <StaggerItem direction="left">
                  <TelemetryCard
                    title="Racecraft"
                    value="Shipping • Iteration"
                    status="good"
                    className="md:-translate-x-4"
                  />
                </StaggerItem>
                <StaggerItem direction="right">
                  <TelemetryCard
                    title="Current Status"
                    value="Building & Scaling"
                    status="good"
                    className="md:translate-x-8"
                  />
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </Section>

        {/* Featured Projects Section */}
        <Section fullWidth className="pt-32 pb-20 bg-gradient-to-b from-slate-50 via-gray-100 to-gray-200 dark:from-[#080808] dark:via-[#0a0a12] dark:to-[#0a0a0f] relative overflow-hidden">
          {/* Background gradient orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-rose-500/5 to-transparent dark:from-rose-500/10 blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-indigo-500/5 to-transparent dark:from-indigo-500/10 blur-3xl" />
          </div>
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
              {featuredProjects.map((project) => (
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
