import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary:
      'bg-f1-red dark:bg-f1-orange text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black focus:ring-f1-red dark:focus:ring-f1-orange shadow-lg hover:shadow-xl',
    secondary:
      'bg-f1-telemetry-green text-black hover:bg-white hover:text-black focus:ring-f1-telemetry-green',
    outline:
      'border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 focus:ring-gray-200',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
