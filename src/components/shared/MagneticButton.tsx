import { ReactNode, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number; // 0 to 1, how much the element moves
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Apply strength factor
    setPosition({
      x: distanceX * strength,
      y: distanceY * strength,
    });
  }, [strength, prefersReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
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
      data-cursor="pointer"
    >
      {children}
    </motion.div>
  );
}

// Magnetic wrapper for social icons and small interactive elements
interface MagneticIconProps {
  children: ReactNode;
  className?: string;
  href?: string;
  ariaLabel?: string;
}

export function MagneticIcon({
  children,
  className = '',
  href,
  ariaLabel,
}: MagneticIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setPosition({
      x: distanceX * 0.4,
      y: distanceY * 0.4,
    });
    setScale(1.15);
  }, [prefersReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
    setScale(1);
  }, []);

  if (prefersReducedMotion) {
    if (href) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className={className}
        >
          {children}
        </a>
      );
    }
    return <div className={className}>{children}</div>;
  }

  const content = (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        x: position.x,
        y: position.y,
        scale,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 17,
        mass: 0.4,
      }}
      data-cursor="pointer"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return content;
}
