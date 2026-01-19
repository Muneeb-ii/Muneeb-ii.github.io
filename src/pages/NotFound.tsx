import { Section } from '../components/shared/Section';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';
import { routes } from '../utils/routing';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function NotFound() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEO title="404 - Page Not Found" description="This page doesn't exist." path="/404" />
      <Section className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1 
            className="text-8xl md:text-9xl font-racing font-bold mb-4 text-f1-red dark:text-f1-orange"
            initial={prefersReducedMotion ? {} : { scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.h1>
          <motion.h2 
            className="text-3xl font-racing font-bold mb-4 text-gray-900 dark:text-white"
            initial={prefersReducedMotion ? {} : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Off Track
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 mb-8"
            initial={prefersReducedMotion ? {} : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Looks like you've gone off the racing line. This page doesn't exist.
          </motion.p>
          <motion.div
            initial={prefersReducedMotion ? {} : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button to={routes.home} variant="primary">
              Back to Start
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
