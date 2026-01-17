import { useState } from 'react';
import { Project } from '../../data/types';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [filter, setFilter] = useState<'all' | Project['category']>('all');

  const categories: Array<{ value: 'all' | Project['category']; label: string }> = [
    { value: 'all', label: 'All Projects' },
    { value: 'ml', label: 'Machine Learning' },
    { value: 'nlp', label: 'NLP' },
    { value: 'quant', label: 'Quant' },
    { value: 'tools', label: 'Tools' },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === cat.value
                ? 'bg-f1-red dark:bg-f1-orange text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          No projects found in this category.
        </div>
      )}
    </div>
  );
}
