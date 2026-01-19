import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function MouseSpotlight() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const spotlightX = useSpring(mouseX, springConfig);
  const spotlightY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, prefersReducedMotion, isMobile]);

  if (prefersReducedMotion || isMobile) {
    return null;
  }

  return (
    <>
      {/* Primary warm spotlight */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(800px circle at ${spotlightX.get()}px ${spotlightY.get()}px, rgba(225, 6, 0, 0.08), transparent 40%)`,
        }}
      />
      {/* Secondary cool accent */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${spotlightX.get()}px ${spotlightY.get()}px, rgba(59, 130, 246, 0.04), transparent 40%)`,
          transform: 'translate(50px, 50px)',
        }}
      />
    </>
  );
}
