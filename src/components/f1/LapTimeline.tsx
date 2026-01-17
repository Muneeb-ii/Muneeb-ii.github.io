

interface TimelineItem {
  period: string;
  title: string;
  subtitle?: string;
  description?: string;
  type?: 'education' | 'experience' | 'achievement';
}

interface LapTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function LapTimeline({ items, className = '' }: LapTimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />

      <div className="space-y-8">
        {items.map((item, idx) => (
          <div key={idx} className="relative flex items-start">
            {/* Timeline dot */}
            <div className="absolute left-3 w-3 h-3 rounded-full bg-f1-red dark:bg-f1-orange border-2 border-white dark:border-bg-dark z-10" />

            <div className="ml-12 flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-racing font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-f1-red dark:text-f1-orange mt-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-0 sm:ml-4 whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              {item.description && (
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
