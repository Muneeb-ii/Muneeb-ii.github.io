interface SectorBarProps {
  label: string;
  value: number; // 0-100
  color?: 'green' | 'yellow' | 'red' | 'blue';
  className?: string;
}

export function SectorBar({
  label,
  value,
  color = 'green',
  className = '',
}: SectorBarProps) {
  const colorClasses = {
    green: 'bg-f1-telemetry-green',
    yellow: 'bg-f1-telemetry-yellow',
    red: 'bg-f1-red',
    blue: 'bg-blue-500',
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {value}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} transition-all duration-500 ease-out`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
