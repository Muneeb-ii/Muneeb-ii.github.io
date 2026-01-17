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

  const motionVariants = prefersReducedMotion ? {} : fadeIn;

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
          }
        >
          {achievementsByCategory.academic.length > 0 && (
            <motion.div variants={motionVariants} className="mb-16">
              <h2 className="text-4xl font-racing font-bold mb-8 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
                {categoryLabels.academic}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {achievementsByCategory.academic.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col md:flex-row md:items-center justify-between bg-white dark:bg-[#0A0A0A] border-l-2 border-transparent hover:border-f1-red dark:hover:border-f1-orange p-6 transition-all hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    <div>
                      <h3 className="text-xl font-bold font-racing text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-lg font-story italic text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                    <span className="mt-4 md:mt-0 text-sm font-mono text-gray-500 uppercase tracking-widest whitespace-nowrap ml-8">
                      {achievement.period}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          {achievementsByCategory.leadership.length > 0 && (
            <motion.div variants={motionVariants} className="mb-16">
              <h2 className="text-4xl font-racing font-bold mb-8 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
                {categoryLabels.leadership}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {achievementsByCategory.leadership.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col md:flex-row md:items-center justify-between bg-white dark:bg-[#0A0A0A] border-l-2 border-transparent hover:border-f1-red dark:hover:border-f1-orange p-6 transition-all hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    <div>
                      <h3 className="text-xl font-bold font-racing text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-lg font-story italic text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                    <span className="mt-4 md:mt-0 text-sm font-mono text-gray-500 uppercase tracking-widest whitespace-nowrap ml-8">
                      {achievement.period}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          {achievementsByCategory.competition.length > 0 && (
            <motion.div variants={motionVariants} className="mb-16">
              <h2 className="text-4xl font-racing font-bold mb-8 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
                {categoryLabels.competition}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {achievementsByCategory.competition.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col md:flex-row md:items-center justify-between bg-white dark:bg-[#0A0A0A] border-l-2 border-transparent hover:border-f1-red dark:hover:border-f1-orange p-6 transition-all hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    <div>
                      <h3 className="text-xl font-bold font-racing text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-lg font-story italic text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                    <span className="mt-4 md:mt-0 text-sm font-mono text-gray-500 uppercase tracking-widest whitespace-nowrap ml-8">
                      {achievement.period}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
          {achievementsByCategory.other.length > 0 && (
            <motion.div variants={motionVariants} className="mb-16">
              <h2 className="text-4xl font-racing font-bold mb-8 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
                {categoryLabels.other}
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {achievementsByCategory.other.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="group flex flex-col md:flex-row md:items-center justify-between bg-white dark:bg-[#0A0A0A] border-l-2 border-transparent hover:border-f1-red dark:hover:border-f1-orange p-6 transition-all hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    <div>
                      <h3 className="text-xl font-bold font-racing text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-lg font-story italic text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                    <span className="mt-4 md:mt-0 text-sm font-mono text-gray-500 uppercase tracking-widest whitespace-nowrap ml-8">
                      {achievement.period}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
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
