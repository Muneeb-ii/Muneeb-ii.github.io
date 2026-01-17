import { Link } from 'react-router-dom';
import { Project } from '../../data/types';
import { routes } from '../../utils/routing';
import { TireCompound } from '../f1/TireCompound';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
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
    <Link
      to={routes.projectDetail(project.id)}
      className="block bg-white dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-800 p-6 hover:border-f1-red dark:hover:border-f1-orange transition-all hover:shadow-lg"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-racing font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <TireCompound compound={compoundMap[project.category]}>
          {categoryLabels[project.category]}
        </TireCompound>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {project.period}
      </p>

      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.skills.slice(0, 4).map((skill, idx) => (
          <span
            key={idx}
            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-600 dark:text-gray-400"
          >
            {skill}
          </span>
        ))}
        {project.skills.length > 4 && (
          <span className="text-xs px-2 py-1 text-gray-500 dark:text-gray-400">
            +{project.skills.length - 4} more
          </span>
        )}
      </div>
    </Link>
  );
}
