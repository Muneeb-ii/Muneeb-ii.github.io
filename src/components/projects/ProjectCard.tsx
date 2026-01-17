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
      className="group relative block w-full h-full min-h-[400px] overflow-hidden bg-white dark:bg-[#0A0A0A] border-l border-gray-200 dark:border-gray-800 hover:border-f1-red dark:hover:border-f1-orange transition-all duration-500"
    >
      <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
        <TireCompound compound={compoundMap[project.category]}>
          {categoryLabels[project.category]}
        </TireCompound>
      </div>

      <div className="flex flex-col h-full justify-between p-8 relative z-10">
        <div className="mt-8">
          <span className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2 block">
            {project.period}
          </span>
          <h3 className="text-4xl md:text-5xl font-racing font-bold text-gray-900 dark:text-white group-hover:text-f1-red dark:group-hover:text-f1-orange transition-colors leading-none mb-6">
            {project.title}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md line-clamp-3 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t border-gray-100 dark:border-gray-800 group-hover:border-f1-red/20 dark:group-hover:border-f1-orange/20 transition-colors">
          {project.skills.slice(0, 4).map((skill, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-gray-600 dark:text-gray-400 group-hover:bg-white dark:group-hover:bg-black group-hover:text-black dark:group-hover:text-white transition-colors border border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-800"
            >
              {skill}
            </span>
          ))}
          {project.skills.length > 4 && (
            <span className="text-xs font-mono px-2 py-1 text-gray-500 dark:text-gray-400">
              +{project.skills.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
    </Link>
  );
}
