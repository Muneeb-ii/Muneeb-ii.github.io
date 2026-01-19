import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { easings, durations } from '../../utils/animations';

interface StatusTickerProps {
  items: string[];
  interval?: number;
  className?: string;
}

export function StatusTicker({ items, interval = 3000, className = '' }: StatusTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval, prefersReducedMotion]);

  const variants = {
    enter: {
      y: 20,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        duration: durations.normal,
        ease: easings.smooth,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: durations.fast,
        ease: easings.smooth,
      },
    },
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <span className="text-xs font-mono text-f1-red dark:text-f1-orange uppercase tracking-widest mr-2">
        CURRENTLY:
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          variants={prefersReducedMotion ? undefined : variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="inline-block text-sm font-mono text-gray-600 dark:text-gray-400"
        >
          {items[currentIndex]}
        </motion.span>
      </AnimatePresence>

      {/* Progress bar */}
      {!prefersReducedMotion && items.length > 1 && (
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-f1-red/50 dark:bg-f1-orange/50"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{
            duration: interval / 1000,
            ease: 'linear',
            repeat: Infinity,
          }}
          key={currentIndex}
        />
      )}
    </div>
  );
}
