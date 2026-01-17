import { ReactNode } from 'react';

interface TelemetryCardProps {
  title: string;
  value: string | number;
  unit?: string;
  status?: 'good' | 'warning' | 'critical';
  children?: ReactNode;
  className?: string;
}

export function TelemetryCard({
  title,
  value,
  unit,
  status = 'good',
  children,
  className = '',
}: TelemetryCardProps) {
  const statusColors = {
    good: 'border-f1-telemetry-green',
    warning: 'border-f1-telemetry-yellow',
    critical: 'border-f1-red',
  };

  return (
    <div
      className={`bg-white dark:bg-gray-900 border-2 ${statusColors[status]} rounded-lg p-4 shadow-lg ${className}`}
    >
      <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
        {title}
      </div>
      <div className="flex items-baseline">
        <span className="text-2xl font-racing font-bold text-gray-900 dark:text-white">
          {value}
        </span>
        {unit && (
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
            {unit}
          </span>
        )}
      </div>
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
