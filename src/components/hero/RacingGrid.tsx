import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function RacingGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated diagonal racing lines */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Primary racing stripes - warm tones */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 80px,
              rgba(225, 6, 0, 0.06) 80px,
              rgba(225, 6, 0, 0.06) 82px
            )`,
            backgroundSize: '200% 200%',
          }}
          animate={prefersReducedMotion ? {} : {
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
        />

        {/* Secondary racing stripes - cool accent */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 120px,
              rgba(59, 130, 246, 0.04) 120px,
              rgba(59, 130, 246, 0.04) 122px
            )`,
            backgroundSize: '200% 200%',
          }}
          animate={prefersReducedMotion ? {} : {
            backgroundPosition: ['100% 0%', '0% 100%'],
          }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
        />

        {/* Tertiary stripes - amber highlights */}
        <motion.div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -30deg,
              transparent,
              transparent 150px,
              rgba(245, 158, 11, 0.03) 150px,
              rgba(245, 158, 11, 0.03) 151px
            )`,
            backgroundSize: '200% 200%',
          }}
          animate={prefersReducedMotion ? {} : {
            backgroundPosition: ['50% 0%', '0% 100%'],
          }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
        />

        {/* Horizontal speed lines at bottom - gradient warm to cool */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 200px,
              rgba(225, 6, 0, 0.08) 200px,
              rgba(225, 6, 0, 0.08) 202px,
              transparent 202px,
              transparent 400px,
              rgba(59, 130, 246, 0.05) 400px,
              rgba(59, 130, 246, 0.05) 402px
            )`,
          }}
          animate={prefersReducedMotion ? {} : {
            backgroundPosition: ['0% 0%', '-600px 0%'],
          }}
          transition={{
            duration: 4,
            ease: 'linear',
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Colored gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-blue-500/5 dark:from-rose-500/10 dark:to-blue-500/10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-amber-500/5 via-transparent to-transparent dark:from-amber-500/10" />
      
      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.15) 100%)',
        }}
      />
    </div>
  );
}
