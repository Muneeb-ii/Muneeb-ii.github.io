import { ReactNode } from 'react';

interface TireCompoundProps {
  compound: 'soft' | 'medium' | 'hard';
  children: ReactNode;
  className?: string;
}

export function TireCompound({
  compound,
  children,
  className = '',
}: TireCompoundProps) {
  const colors = {
    soft: 'bg-f1-red dark:bg-f1-orange text-white',
    medium: 'bg-f1-telemetry-yellow text-gray-900',
    hard: 'bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors[compound]} ${className}`}
    >
      {children}
    </span>
  );
}
