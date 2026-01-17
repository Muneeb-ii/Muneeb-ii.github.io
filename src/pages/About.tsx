import { Section } from '../components/shared/Section';
import { SEO } from '../components/shared/SEO';
import { content } from '../data/content';
import { LapTimeline } from '../components/f1/LapTimeline';

export function About() {
  const timelineItems = content.education.map((edu) => ({
    period: edu.period,
    title: edu.degree,
    subtitle: `${edu.institution}, ${edu.location}`,
    description: edu.gpa
      ? `GPA: ${edu.gpa}${edu.awards ? ` • ${edu.awards.join(', ')}` : ''}`
      : undefined,
    type: 'education' as const,
  }));

  return (
    <>
      <SEO
        title="About"
        description="Who I am, what I value, how I build. Story, philosophy, and education."
        path="/about"
      />
      <Section className="pt-20">
      <div className="mb-12">
        <h1 className="text-4xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
          Paddock
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Who I am, what I value, how I build.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
            Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            {content.personalInfo.bio}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Originally from Karachi, now building in Waterville, Maine. I'm
            drawn to problems that require both technical depth and creative
            thinking. Whether it's building ML models, optimizing algorithms, or
            designing systems, I focus on shipping solutions that work.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
            Build Philosophy
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              <strong>I build things that should exist.</strong> If something is
              missing or broken, I'll figure out how to fix it. This means
              writing clean code, documenting decisions, and iterating based on
              feedback.
            </p>
            <p>
              <strong>Proof over promises.</strong> I'd rather show you what
              I've built than tell you what I can build. Every project on this
              site is real, tested, and documented.
            </p>
            <p>
              <strong>Systems thinking.</strong> I'm interested in how things
              connect. In ML, that means understanding data pipelines,
              model architectures, and deployment. In quant systems, that means
              risk management, execution, and backtesting frameworks.
            </p>
            <p>
              <strong>Ship fast, iterate faster.</strong> The best way to learn
              is to build. I prototype quickly, test assumptions, and refine
              based on results. This applies to code, research, and products.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-racing font-bold mb-6 text-gray-900 dark:text-white">
            Education Timeline
          </h2>
          <LapTimeline items={timelineItems} />
        </div>
      </div>
    </Section>
    </>
  );
}
