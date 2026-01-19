import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { easings, durations } from '../../utils/animations';

interface HUDBracketsProps {
  className?: string;
}

export function HUDBrackets({ className = '' }: HUDBracketsProps) {
  const prefersReducedMotion = useReducedMotion();

  const bracketVariants = {
    initial: { 
      opacity: 0, 
      scale: 1.5,
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: durations.slow,
        ease: easings.expo,
      },
    },
  };

  const pulseAnimation = prefersReducedMotion ? {} : {
    opacity: [0.4, 0.7, 0.4],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const bracketStyle = "w-16 h-16 md:w-24 md:h-24 border-f1-red dark:border-f1-orange";

  return (
    <div className={`absolute inset-0 pointer-events-none z-10 ${className}`}>
      {/* Top Left Bracket */}
      <motion.div
        className={`absolute top-8 left-8 ${bracketStyle} border-l-2 border-t-2`}
        variants={prefersReducedMotion ? undefined : bracketVariants}
        initial="initial"
        animate="animate"
        whileInView={pulseAnimation}
        style={{ originX: 0, originY: 0 }}
      />

      {/* Top Right Bracket */}
      <motion.div
        className={`absolute top-8 right-8 ${bracketStyle} border-r-2 border-t-2`}
        variants={prefersReducedMotion ? undefined : bracketVariants}
        initial="initial"
        animate="animate"
        whileInView={pulseAnimation}
        style={{ originX: 1, originY: 0 }}
        transition={{ delay: 0.1 }}
      />

      {/* Bottom Left Bracket */}
      <motion.div
        className={`absolute bottom-8 left-8 ${bracketStyle} border-l-2 border-b-2`}
        variants={prefersReducedMotion ? undefined : bracketVariants}
        initial="initial"
        animate="animate"
        whileInView={pulseAnimation}
        style={{ originX: 0, originY: 1 }}
        transition={{ delay: 0.15 }}
      />

      {/* Bottom Right Bracket */}
      <motion.div
        className={`absolute bottom-8 right-8 ${bracketStyle} border-r-2 border-b-2`}
        variants={prefersReducedMotion ? undefined : bracketVariants}
        initial="initial"
        animate="animate"
        whileInView={pulseAnimation}
        style={{ originX: 1, originY: 1 }}
        transition={{ delay: 0.2 }}
      />

      {/* Center crosshair elements */}
      <motion.div
        className="absolute top-1/2 left-8 w-8 h-px bg-f1-red/30 dark:bg-f1-orange/30"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: durations.slow }}
        style={{ originX: 0 }}
      />
      <motion.div
        className="absolute top-1/2 right-8 w-8 h-px bg-f1-red/30 dark:bg-f1-orange/30"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: durations.slow }}
        style={{ originX: 1 }}
      />
    </div>
  );
}
