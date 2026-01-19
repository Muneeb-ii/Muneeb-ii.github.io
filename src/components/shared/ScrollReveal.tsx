import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { easings, durations, stagger } from '../../utils/animations';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: keyof typeof durations;
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'span';
}

interface RevealVariant {
  initial: { opacity: number; y?: number; x?: number; scale?: number };
  animate: { opacity: number; y?: number; x?: number; scale?: number };
}

const getVariants = (direction: RevealDirection): RevealVariant => {
  const distance = 50;
  
  const directions: Record<RevealDirection, RevealVariant> = {
    up: {
      initial: { opacity: 0, y: distance },
      animate: { opacity: 1, y: 0 },
    },
    down: {
      initial: { opacity: 0, y: -distance },
      animate: { opacity: 1, y: 0 },
    },
    left: {
      initial: { opacity: 0, x: distance },
      animate: { opacity: 1, x: 0 },
    },
    right: {
      initial: { opacity: 0, x: -distance },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  };
  
  return directions[direction];
};

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 'slow',
  threshold = 0.2,
  once = true,
  className = '',
  as = 'div',
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    margin: '-10% 0px -10% 0px',
    amount: threshold,
  });
  const prefersReducedMotion = useReducedMotion();
  
  const Component = motion[as];
  const variants = getVariants(direction);

  if (prefersReducedMotion) {
    const StaticComponent = as;
    return <StaticComponent className={className}>{children}</StaticComponent>;
  }

  return (
    <Component
      ref={ref}
      className={className}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={{
        initial: variants.initial,
        animate: {
          ...variants.animate,
          transition: {
            duration: durations[duration],
            ease: easings.smooth,
            delay,
          },
        },
      }}
    >
      {children}
    </Component>
  );
}

// Staggered container for lists/grids
interface StaggerContainerProps {
  children: ReactNode;
  staggerSpeed?: keyof typeof stagger;
  delayStart?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerSpeed = 'normal',
  delayStart = 0.1,
  threshold = 0.2,
  once = true,
  className = '',
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    margin: '-10% 0px -10% 0px',
    amount: threshold,
  });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: stagger[staggerSpeed],
            delayChildren: delayStart,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Child item for use inside StaggerContainer
interface StaggerItemProps {
  children: ReactNode;
  direction?: RevealDirection;
  className?: string;
}

export function StaggerItem({
  children,
  direction = 'up',
  className = '',
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const variants = getVariants(direction);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        initial: variants.initial,
        animate: {
          ...variants.animate,
          transition: {
            duration: durations.normal,
            ease: easings.smooth,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
