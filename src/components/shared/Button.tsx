import { ReactNode, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  magnetic?: boolean;
}

export function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  magnetic = true,
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary:
      'bg-f1-red dark:bg-f1-orange text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black focus:ring-f1-red dark:focus:ring-f1-orange shadow-lg hover:shadow-xl hover:scale-[1.02]',
    secondary:
      'bg-f1-telemetry-green text-black hover:bg-white hover:text-black focus:ring-f1-telemetry-green hover:scale-[1.02]',
    outline:
      'border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900 focus:ring-gray-200 hover:border-f1-red dark:hover:border-f1-orange hover:scale-[1.02]',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion || !magnetic) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setPosition({
      x: distanceX * 0.15,
      y: distanceY * 0.15,
    });
  }, [prefersReducedMotion, magnetic]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  // Wrap content in magnetic container
  const renderContent = (content: ReactNode) => {
    if (prefersReducedMotion || !magnetic) {
      return content;
    }

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 350,
          damping: 15,
          mass: 0.5,
        }}
        className="inline-block"
      >
        {content}
      </motion.div>
    );
  };

  if (to) {
    return renderContent(
      <Link to={to} className={classes} data-cursor="pointer">
        {children}
      </Link>
    );
  }

  if (href) {
    return renderContent(
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} data-cursor="pointer">
        {children}
      </a>
    );
  }

  return renderContent(
    <button onClick={onClick} className={classes} data-cursor="pointer">
      {children}
    </button>
  );
}
