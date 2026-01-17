import { Section } from '../components/shared/Section';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { SEO } from '../components/shared/SEO';
import { content } from '../data/content';

export function Projects() {
  return (
    <>
      <SEO
        title="Projects"
        description="Projects I've built. Each one solves a real problem."
        path="/projects"
      />
      <Section className="pt-20">
      <div className="mb-8">
        <h1 className="text-4xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
          Garage
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Projects I've built. Each one solves a real problem.
        </p>
      </div>
      <ProjectGrid projects={content.projects} />
    </Section>
    </>
  );
}
