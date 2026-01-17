import { Section } from '../components/shared/Section';
import { SEO } from '../components/shared/SEO';
import { content } from '../data/content';

export function Quant() {
  return (
    <>
      <SEO
        title="Quant Systems"
        description="Exploring algorithmic trading, portfolio optimization, and market data analysis."
        path="/quant"
      />
      <Section className="pt-20">
      <div className="mb-8">
        <h1 className="text-4xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
          Race Log: Quant Systems
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Exploring algorithmic trading, portfolio optimization, and market data
          analysis.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-8">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
            What "Quant Systems" Means to Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Quant systems combine mathematics, statistics, and computer science
            to make data-driven decisions in financial markets. I'm interested in
            building tools that help understand risk, optimize portfolios, and
            identify patterns in market data.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            This isn't about predicting the future—it's about building robust
            systems that can handle uncertainty, manage risk, and execute
            strategies systematically. The same principles apply to other
            domains: optimization, signal processing, and decision-making under
            uncertainty.
          </p>
        </div>

        <div className="space-y-8">
          {content.quantInterests.map((interest, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-900 border-2 border-f1-telemetry-yellow rounded-lg p-6"
            >
              <h3 className="text-2xl font-racing font-bold mb-3 text-gray-900 dark:text-white">
                {interest.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {interest.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {interest.concepts.map((concept, cIdx) => (
                  <span
                    key={cIdx}
                    className="px-3 py-1 bg-f1-telemetry-yellow/20 dark:bg-f1-telemetry-yellow/10 rounded-full text-sm text-gray-700 dark:text-gray-300"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-f1-telemetry-yellow rounded">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Note:</strong> This page describes technical interests and
            research directions. It does not constitute financial advice or
            investment recommendations.
          </p>
        </div>
      </div>
    </Section>
    </>
  );
}
