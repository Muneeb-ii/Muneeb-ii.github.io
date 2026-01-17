import { Section } from '../components/shared/Section';
import { SEO } from '../components/shared/SEO';
import { content } from '../data/content';
import { LapTimeline } from '../components/f1/LapTimeline';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function Achievements() {
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.6 },
  };

  const achievementsByCategory = {
    academic: content.achievements.filter((a) => a.category === 'academic'),
    leadership: content.achievements.filter((a) => a.category === 'leadership'),
    competition: content.achievements.filter((a) => a.category === 'competition'),
    other: content.achievements.filter((a) => a.category === 'other'),
  };

  const timelineItems = content.achievements.map((achievement) => ({
    period: achievement.period,
    title: achievement.title,
    subtitle: achievement.description,
    type: 'achievement' as const,
  }));

  const categoryLabels = {
    academic: 'Academic Excellence',
    leadership: 'Leadership',
    competition: 'Competitions',
    other: 'Other',
  };

  return (
    <>
      <SEO
        title="Achievements"
        description="Academic achievements, awards, and recognitions. Qualifying results."
        path="/achievements"
      />
      <Section className="pt-20">
        <div className="mb-12">
          <h1 className="text-4xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
            Qualifying
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Academic achievements, awards, and recognitions. Qualifying results.
          </p>
        </div>

        <motion.div
          className="space-y-12 mb-12"
          initial="initial"
          animate="animate"
          variants={
            prefersReducedMotion
              ? {}
              : {
                  animate: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }
        >
          {Object.entries(achievementsByCategory).map(
            ([category, achievements]) => {
              if (achievements.length === 0) return null;

              return (
                <motion.div key={category} variants={prefersReducedMotion ? {} : fadeIn}>
                  <h2 className="text-2xl font-racing font-bold mb-6 text-gray-900 dark:text-white">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-gray-900 border-2 border-f1-gold rounded-lg p-6 shadow-lg"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-racing font-bold text-gray-900 dark:text-white">
                            {achievement.title}
                          </h3>
                          <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
                            {achievement.period}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {achievement.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            }
          )}
        </motion.div>

        <div className="mb-8">
          <h2 className="text-2xl font-racing font-bold mb-6 text-gray-900 dark:text-white">
            Timeline
          </h2>
          <LapTimeline items={timelineItems} />
        </div>
      </Section>
    </>
  );
}
