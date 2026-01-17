import { Section } from '../components/shared/Section';
import { SEO } from '../components/shared/SEO';
import { content } from '../data/content';

export function Research() {
  const { research } = content;

  return (
    <>
      <SEO
        title="Research"
        description="MultiSOCIAL Toolbox research. Working with MediaPipe, OpenSMILE, and Whisper."
        path="/research"
      />
      <Section className="pt-20">
      <div className="mb-8">
        <h1 className="text-4xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
          Research: MultiSOCIAL Toolbox
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {research.period} • {research.institution}
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
            Overview
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {research.description}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-racing font-bold mb-6 text-gray-900 dark:text-white">
            Modules I Work With
          </h2>
          <div className="space-y-6">
            {research.modules.map((module, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 border-2 border-f1-telemetry-green rounded-lg p-6"
              >
                <h3 className="text-xl font-racing font-bold mb-2 text-gray-900 dark:text-white">
                  {module.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-f1-gold/10 dark:bg-f1-gold/20 rounded-lg p-6">
          <h2 className="text-2xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
            Impact
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{research.impact}</p>
        </div>
      </div>
    </Section>
    </>
  );
}
