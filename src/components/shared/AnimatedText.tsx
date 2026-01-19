import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { easings, stagger as staggerConfig } from '../../utils/animations';

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  stagger?: 'fast' | 'normal' | 'slow' | 'dramatic';
  animation?: 'chars' | 'words' | 'lines';
}

export function AnimatedText({
  text,
  className = '',
  as = 'span',
  delay = 0,
  stagger = 'normal',
  animation = 'chars',
}: AnimatedTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  if (prefersReducedMotion) {
    const StaticComponent = as;
    return <StaticComponent className={className}>{text}</StaticComponent>;
  }

  const staggerDelay = staggerConfig[stagger];

  // Split text based on animation type
  const items = animation === 'chars' 
    ? text.split('') 
    : animation === 'words'
    ? text.split(' ')
    : [text];

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    initial: { 
      opacity: 0, 
      y: 50,
      rotateX: -40,
    },
    animate: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
  };

  return (
    <Component
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      style={{ perspective: 1000 }}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          variants={itemVariants}
          className="inline-block"
          style={{ 
            transformOrigin: 'center bottom',
            display: 'inline-block',
          }}
        >
          {item === ' ' ? '\u00A0' : item}
          {animation === 'words' && i < items.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </Component>
  );
}

// Separate component for multi-line animated text (e.g., hero names)
interface AnimatedHeadingProps {
  lines: string[] | { text: string; className?: string }[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}

export function AnimatedHeading({
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
}: AnimatedHeadingProps) {
  const prefersReducedMotion = useReducedMotion();

  // Normalize lines to objects
  const normalizedLines = lines.map((line) => 
    typeof line === 'string' ? { text: line, className: '' } : line
  );

  if (prefersReducedMotion) {
    return (
      <div className={className}>
        {normalizedLines.map((line, i) => (
          <div key={i} className={`${lineClassName} ${line.className || ''}`}>{line.text}</div>
        ))}
      </div>
    );
  }

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay,
      },
    },
  };

  const lineVariants = {
    initial: { 
      opacity: 0, 
      y: 100,
      skewY: 7,
    },
    animate: { 
      opacity: 1, 
      y: 0,
      skewY: 0,
      transition: {
        duration: 0.8,
        ease: easings.expo,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {normalizedLines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            variants={lineVariants}
            className={`${lineClassName} ${line.className || ''}`}
            style={{ transformOrigin: 'left center' }}
          >
            {line.text}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
