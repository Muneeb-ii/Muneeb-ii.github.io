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
      'bg-f1-red dark:bg-f1-orange text-white hover:opacity-90 focus:ring-f1-red dark:focus:ring-f1-orange',
    secondary:
      'bg-f1-telemetry-green text-gray-900 hover:opacity-90 focus:ring-f1-telemetry-green',
    outline:
      'border-2 border-f1-red dark:border-f1-orange text-f1-red dark:text-f1-orange hover:bg-f1-red dark:hover:bg-f1-orange hover:text-white focus:ring-f1-red dark:focus:ring-f1-orange',
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
