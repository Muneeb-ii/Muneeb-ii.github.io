import { Project } from '../../data/types';
import { TireCompound } from '../f1/TireCompound';
import { Button } from '../shared/Button';
import { ScrollReveal } from '../shared/ScrollReveal';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const compoundMap: Record<Project['category'], 'soft' | 'medium' | 'hard'> = {
    ml: 'soft',
    nlp: 'soft',
    quant: 'medium',
    tools: 'hard',
  };

  const categoryLabels = {
    ml: 'Machine Learning',
    nlp: 'NLP',
    quant: 'Quant',
    tools: 'Tools',
  };

  return (
    <article className="max-w-4xl mx-auto pb-12">
      {/* Header */}
      <ScrollReveal direction="up">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-racing font-bold text-gray-900 dark:text-white">
              {project.title}
            </h1>
            <TireCompound compound={compoundMap[project.category]}>
              {categoryLabels[project.category]}
            </TireCompound>
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-mono text-sm uppercase tracking-wider">
            {project.period}
          </p>
        </div>
      </ScrollReveal>

      {/* Description */}
      <ScrollReveal direction="up" delay={0.1}>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-story">
          {project.description}
        </p>
      </ScrollReveal>

      <div className="space-y-8">
        {/* Problem */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="bg-gradient-to-br from-rose-50 to-white dark:from-rose-950/20 dark:to-gray-900 rounded-lg p-6 border border-rose-100 dark:border-rose-900/30">
            <h2 className="text-xl font-racing font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-f1-red dark:bg-f1-orange" />
              Problem
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.problem}</p>
          </div>
        </ScrollReveal>

        {/* Approach */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900 rounded-lg p-6 border border-blue-100 dark:border-blue-900/30">
            <h2 className="text-xl font-racing font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Approach
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.approach}</p>
          </div>
        </ScrollReveal>

        {/* Results */}
        <ScrollReveal direction="up" delay={0.25}>
          <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-gray-900 rounded-lg p-6 border border-emerald-100 dark:border-emerald-900/30">
            <h2 className="text-xl font-racing font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-f1-telemetry-green" />
              Results
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.results}</p>
          </div>
        </ScrollReveal>

        {/* Next Steps */}
        {project.nextSteps && (
          <ScrollReveal direction="up" delay={0.3}>
            <div className="bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-gray-900 rounded-lg p-6 border border-amber-100 dark:border-amber-900/30">
              <h2 className="text-xl font-racing font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-f1-telemetry-yellow" />
                What's Next
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.nextSteps}</p>
            </div>
          </ScrollReveal>
        )}

        {/* Skills */}
        <ScrollReveal direction="up" delay={0.35}>
          <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-sm font-racing font-bold mb-4 text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Links */}
        {project.links && (
          <ScrollReveal direction="up" delay={0.4}>
            <div className="flex flex-wrap gap-4 pt-4">
              {project.links.github && (
                <Button href={project.links.github} variant="primary">
                  View on GitHub
                </Button>
              )}
              {project.links.demo && (
                <Button href={project.links.demo} variant="outline">
                  Live Demo
                </Button>
              )}
              {project.links.article && (
                <Button href={project.links.article} variant="secondary">
                  Read Article
                </Button>
              )}
            </div>
          </ScrollReveal>
        )}
      </div>
    </article>
  );
}
