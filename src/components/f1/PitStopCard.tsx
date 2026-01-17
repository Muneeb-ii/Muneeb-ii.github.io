import { Experience } from '../../data/types';

interface PitStopCardProps {
  experience: Experience;
  className?: string;
}

export function PitStopCard({ experience, className = '' }: PitStopCardProps) {
  const typeColors = {
    research: 'border-f1-telemetry-green',
    internship: 'border-f1-telemetry-yellow',
    other: 'border-gray-400',
  };

  const typeLabels = {
    research: 'Research',
    internship: 'Internship',
    other: 'Other',
  };

  return (
    <div
      className={`bg-white dark:bg-gray-900 border-l-4 ${typeColors[experience.type]} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
        <div>
          <h3 className="text-lg font-racing font-bold text-gray-900 dark:text-white mb-1">
            {experience.title}
          </h3>
          <p className="text-sm font-medium text-f1-red dark:text-f1-orange">
            {experience.company}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {experience.location}
          </p>
        </div>
        <div className="mt-2 sm:mt-0 sm:text-right">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded text-gray-700 dark:text-gray-300">
            {typeLabels[experience.type]}
          </span>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {experience.period}
          </p>
        </div>
      </div>

      {experience.impact && (
        <div className="mb-3 p-2 bg-f1-gold/10 dark:bg-f1-gold/20 rounded text-xs text-gray-700 dark:text-gray-300">
          <strong>Impact:</strong> {experience.impact}
        </div>
      )}

      <ul className="space-y-2">
        {experience.bullets.map((bullet, idx) => (
          <li
            key={idx}
            className="text-sm text-gray-700 dark:text-gray-300 flex items-start"
          >
            <span className="text-f1-red dark:text-f1-orange mr-2">▸</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
