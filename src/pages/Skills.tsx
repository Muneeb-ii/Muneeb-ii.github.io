import { Section } from '../components/shared/Section';
import { SEO } from '../components/shared/SEO';
import { content } from '../data/content';
import { TelemetryCard } from '../components/f1/TelemetryCard';
import { SectorBar } from '../components/f1/SectorBar';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function Skills() {
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.6 },
  };

  const getProficiencyValue = (proficiency?: string): number => {
    switch (proficiency) {
      case 'expert':
        return 95;
      case 'advanced':
        return 85;
      case 'intermediate':
        return 65;
      case 'beginner':
        return 40;
      default:
        return 75;
    }
  };

  const getProficiencyColor = (proficiency?: string): 'green' | 'yellow' | 'red' | 'blue' => {
    switch (proficiency) {
      case 'expert':
      case 'advanced':
        return 'green';
      case 'intermediate':
        return 'yellow';
      case 'beginner':
        return 'blue';
      default:
        return 'green';
    }
  };

  return (
    <>
      <SEO
        title="Skills"
        description="Technical skills and proficiencies. Telemetry snapshot of capabilities."
        path="/skills"
      />
      <Section className="pt-20">
        <div className="mb-12">
          <h1 className="text-4xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
            Telemetry
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Technical skills and proficiencies. A snapshot of capabilities.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
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
          {content.skills.map((skillCategory, idx) => (
            <motion.div key={idx} variants={prefersReducedMotion ? {} : fadeIn}>
              <TelemetryCard
                title={skillCategory.category}
                value={skillCategory.items.length}
                unit="tools"
                status="good"
                className="h-full"
              >
                <div className="mt-4 space-y-3">
                  {skillCategory.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                {skillCategory.proficiency && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <SectorBar
                      label="Proficiency"
                      value={getProficiencyValue(skillCategory.proficiency)}
                      color={getProficiencyColor(skillCategory.proficiency)}
                    />
                  </div>
                )}
              </TelemetryCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
            Telemetry Snapshot
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Python • ML • Systems • React • FastAPI • Quant Tools
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Continuously learning and building. Skills are tools, not destinations.
            Each project adds depth and breadth to this toolkit.
          </p>
        </div>
      </Section>
    </>
  );
}
