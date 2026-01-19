import { Section } from '../components/shared/Section';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { SEO } from '../components/shared/SEO';
import { content } from '../data/content';
import { ScrollReveal } from '../components/shared/ScrollReveal';

export function Projects() {
  return (
    <>
      <SEO
        title="Projects"
        description="Projects I've built. Each one solves a real problem."
        path="/projects"
      />
      
      {/* Page with gradient background */}
      <div className="relative pb-20">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-rose-500/10 via-red-500/5 to-transparent dark:from-rose-600/15 dark:via-red-500/10 blur-3xl" />
          <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-indigo-500/5 via-purple-500/5 to-transparent dark:from-indigo-600/10 dark:via-purple-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-500/5 to-transparent dark:from-blue-600/10 blur-3xl" />
        </div>

        <Section className="pt-20 relative">
          <ScrollReveal direction="up">
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
                Garage
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Projects I've built. Each one solves a real problem.
              </p>
            </div>
          </ScrollReveal>
          
          <ProjectGrid projects={content.projects} />
        </Section>
      </div>
    </>
  );
}
