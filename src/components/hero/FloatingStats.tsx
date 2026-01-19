import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { easings, durations } from '../../utils/animations';

interface Stat {
  label: string;
  value: string;
}

interface FloatingStatsProps {
  stats: Stat[];
  className?: string;
}

export function FloatingStats({ stats, className = '' }: FloatingStatsProps) {
  const prefersReducedMotion = useReducedMotion();

  const floatAnimation = (delay: number) => prefersReducedMotion ? {} : {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.5,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.8,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: durations.slow,
        ease: easings.smooth,
      },
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap gap-4 ${className}`}
      variants={prefersReducedMotion ? undefined : containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.label}
          className="group relative"
          variants={prefersReducedMotion ? undefined : itemVariants}
          animate={floatAnimation(idx * 0.5)}
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-f1-red/20 dark:bg-f1-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Stat card - Light mode: white card, Dark mode: dark card */}
          <div className="relative bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-gray-200 dark:border-gray-800 px-4 py-2 rounded shadow-lg dark:shadow-none">
            {/* Top accent line */}
            <div className="absolute top-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-f1-red dark:via-f1-orange to-transparent" />
            
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-mono text-gray-500 dark:text-gray-500 uppercase tracking-widest">
                {stat.label}
              </span>
              <span className="text-lg font-racing font-bold text-gray-900 dark:text-white">
                {stat.value}
              </span>
            </div>

            {/* Status indicator */}
            <motion.div
              className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-f1-telemetry-green"
              animate={prefersReducedMotion ? {} : {
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
