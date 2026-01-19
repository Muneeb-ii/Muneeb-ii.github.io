import { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Project } from '../../data/types';
import { routes } from '../../utils/routing';
import { TireCompound } from '../f1/TireCompound';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const compoundMap: Record<Project['category'], 'soft' | 'medium' | 'hard'> = {
    ml: 'soft',
    nlp: 'soft',
    quant: 'medium',
    tools: 'hard',
  };

  const categoryLabels = {
    ml: 'Machine Learning',
    nlp: 'NLP',
    quant: 'Quant',
    tools: 'Tools',
  };

  const categoryGradients = {
    ml: 'from-rose-50/50 via-white to-white dark:from-rose-950/20 dark:via-[#0A0A0A] dark:to-[#0A0A0A]',
    nlp: 'from-indigo-50/50 via-white to-white dark:from-indigo-950/20 dark:via-[#0A0A0A] dark:to-[#0A0A0A]',
    quant: 'from-amber-50/50 via-white to-white dark:from-amber-950/20 dark:via-[#0A0A0A] dark:to-[#0A0A0A]',
    tools: 'from-blue-50/50 via-white to-white dark:from-blue-950/20 dark:via-[#0A0A0A] dark:to-[#0A0A0A]',
  };

  // 3D Tilt effect handler
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || prefersReducedMotion) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate tilt (max 8 degrees)
    const maxTilt = 8;
    const tiltX = (mouseY / (rect.height / 2)) * -maxTilt;
    const tiltY = (mouseX / (rect.width / 2)) * maxTilt;

    setTilt({ x: tiltX, y: tiltY });
  }, [prefersReducedMotion]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovering(false);
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovering ? 1.02 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      className="h-full"
      data-cursor="pointer"
    >
      <Link
        to={routes.projectDetail(project.id)}
        className={`group relative block w-full h-full min-h-[400px] overflow-hidden bg-gradient-to-br ${categoryGradients[project.category]} border-l-2 border-gray-200 dark:border-gray-800 hover:border-f1-red dark:hover:border-f1-orange transition-all duration-500 rounded-lg shadow-lg hover:shadow-2xl`}
      >
        {/* Shine effect on hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ 
            opacity: isHovering ? 1 : 0,
            x: isHovering ? '100%' : '-100%',
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />

        <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
          <TireCompound compound={compoundMap[project.category]}>
            {categoryLabels[project.category]}
          </TireCompound>
        </div>

        <div className="flex flex-col h-full justify-between p-6 md:p-8 relative z-10">
          <div className="mt-6 md:mt-8 pr-16">
            <span className="text-xs font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2 block">
              {project.period}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-racing font-bold text-gray-900 dark:text-white group-hover:text-f1-red dark:group-hover:text-f1-orange transition-colors leading-tight mb-4 break-words hyphens-auto">
              {project.title}
            </h3>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 line-clamp-3 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t border-gray-100 dark:border-gray-800 group-hover:border-f1-red/20 dark:group-hover:border-f1-orange/20 transition-colors">
            {project.skills.slice(0, 4).map((skill, idx) => (
              <motion.span
                key={idx}
                className="text-xs font-mono px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-gray-600 dark:text-gray-400 group-hover:bg-white dark:group-hover:bg-black group-hover:text-black dark:group-hover:text-white transition-colors border border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
            {project.skills.length > 4 && (
              <span className="text-xs font-mono px-2 py-1 text-gray-500 dark:text-gray-400">
                +{project.skills.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Background Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
      </Link>
    </motion.div>
  );
}
