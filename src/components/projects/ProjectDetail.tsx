import { Project } from '../../data/types';
import { TireCompound } from '../f1/TireCompound';
import { Button } from '../shared/Button';

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
    <article className="max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-racing font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>
          <TireCompound compound={compoundMap[project.category]}>
            {categoryLabels[project.category]}
          </TireCompound>
        </div>
        <p className="text-gray-500 dark:text-gray-400">{project.period}</p>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
            Problem
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{project.problem}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
            Approach
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{project.approach}</p>
        </div>

        <div className="bg-f1-telemetry-green/10 dark:bg-f1-telemetry-green/20 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
            Results
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{project.results}</p>
        </div>

        {project.nextSteps && (
          <div className="mb-8">
            <h2 className="text-2xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
              What I'd Do Next
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {project.nextSteps}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {project.links && (
          <div className="flex gap-4">
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
        )}
      </div>
    </article>
  );
}
