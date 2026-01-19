import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { easings } from '../../utils/animations';

interface LoadingScreenProps {
  minDuration?: number; // Minimum time to show loading screen in ms
}

export function LoadingScreen({ minDuration = 1500 }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Show loading screen for minimum duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  // Skip loading screen for reduced motion or if already loaded
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg-light dark:bg-bg-dark"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: easings.smooth },
          }}
        >
          {/* Logo Animation */}
          <div className="relative">
            {/* Animated initials */}
            <motion.div
              className="text-7xl md:text-9xl font-racing font-bold tracking-tighter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* M */}
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-f1-red to-f1-orange"
                initial={{ y: 50, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: easings.expo,
                  delay: 0.1,
                }}
                style={{ transformOrigin: 'center bottom' }}
              >
                M
              </motion.span>
              
              {/* N */}
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-f1-orange to-f1-red"
                initial={{ y: 50, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: easings.expo,
                  delay: 0.3,
                }}
                style={{ transformOrigin: 'center bottom' }}
              >
                N
              </motion.span>
            </motion.div>

            {/* Racing line underneath */}
            <motion.div
              className="absolute -bottom-4 left-0 h-1 bg-gradient-to-r from-f1-red via-f1-orange to-f1-red rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: easings.expo,
                delay: 0.5,
              }}
            />

            {/* Pulsing dot */}
            <motion.div
              className="absolute -right-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-f1-telemetry-green"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 1, 1],
                opacity: [0, 1, 1, 0.5],
              }}
              transition={{ 
                duration: 1.5,
                ease: easings.smooth,
                delay: 0.7,
                times: [0, 0.2, 0.8, 1],
              }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            className="absolute bottom-20 text-sm font-racing tracking-widest text-gray-400 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Loading Systems
            </motion.span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
