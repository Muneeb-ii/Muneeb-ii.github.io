import { Section } from '../components/shared/Section';
import { SEO } from '../components/shared/SEO';
import { content } from '../data/content';
import { LapTimeline } from '../components/f1/LapTimeline';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/shared/ScrollReveal';

export function About() {
  // Education timeline with awards integrated
  const educationItems = content.education.map((edu) => ({
    period: edu.period,
    title: edu.degree,
    subtitle: `${edu.institution}, ${edu.location}`,
    description: edu.gpa
      ? `GPA: ${edu.gpa}`
      : undefined,
    type: 'education' as const,
  }));

  return (
    <>
      <SEO
        title="About"
        description="Who I am, what I value, how I build. Story, philosophy, education, and recognition."
        path="/about"
      />
      <Section className="pt-20">
        <ScrollReveal direction="up">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
              Paddock
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Who I am, what I value, how I build.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-none mb-16">
          {/* Story Section */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-racing font-bold mb-6 text-gray-900 dark:text-white">
                The Story
              </h2>
              <p className="text-xl font-story text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {content.personalInfo.bio}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Originally from Karachi, now building in Waterville, Maine. I'm
                drawn to problems that require both technical depth and creative
                thinking. Whether it's building ML models, optimizing algorithms, or
                designing systems, I focus on shipping solutions that work.
              </p>
            </div>
          </ScrollReveal>

          {/* Build Philosophy */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mb-16">
              <h2 className="text-3xl font-racing font-bold mb-8 text-gray-900 dark:text-white">
                Build Philosophy
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-[#0A0A0A] border-l-2 border-f1-red dark:border-f1-orange p-6 rounded-r-lg">
                  <h3 className="font-racing font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    Build what should exist
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    If something is missing or broken, I'll figure out how to fix it. 
                    Clean code, documented decisions, iteration based on feedback.
                  </p>
                </div>
                <div className="bg-white dark:bg-[#0A0A0A] border-l-2 border-f1-red dark:border-f1-orange p-6 rounded-r-lg">
                  <h3 className="font-racing font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    Proof over promises
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I'd rather show you what I've built than tell you what I can build. 
                    Every project on this site is real, tested, and documented.
                  </p>
                </div>
                <div className="bg-white dark:bg-[#0A0A0A] border-l-2 border-f1-red dark:border-f1-orange p-6 rounded-r-lg">
                  <h3 className="font-racing font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    Systems thinking
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Interested in how things connect—data pipelines, model architectures, 
                    deployment, risk management, execution frameworks.
                  </p>
                </div>
                <div className="bg-white dark:bg-[#0A0A0A] border-l-2 border-f1-red dark:border-f1-orange p-6 rounded-r-lg">
                  <h3 className="font-racing font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    Ship fast, iterate faster
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The best way to learn is to build. Prototype quickly, test assumptions, 
                    refine based on results.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Education Section */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="mb-16">
              <h2 className="text-3xl font-racing font-bold mb-8 text-gray-900 dark:text-white">
                Education
              </h2>
              <LapTimeline items={educationItems} />
            </div>
          </ScrollReveal>

          {/* Recognition Section - Merged from Achievements */}
          <div className="mb-8">
            <ScrollReveal direction="up">
              <h2 className="text-3xl font-racing font-bold mb-8 text-gray-900 dark:text-white">
                Recognition
              </h2>
            </ScrollReveal>

            {/* All achievements in a single list with new format */}
            <StaggerContainer staggerSpeed="fast" className="space-y-4">
              {content.achievements.map((achievement, idx) => (
                <StaggerItem key={idx} direction="up">
                  <div className="bg-white dark:bg-[#0A0A0A] border-l-2 border-transparent hover:border-f1-red dark:hover:border-f1-orange p-5 transition-all hover:bg-gray-50 dark:hover:bg-gray-900 rounded-r-lg">
                    {/* Header row: Title | Institution ... Period */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-racing font-bold text-lg text-gray-900 dark:text-white">
                          {achievement.title}
                        </h4>
                        <span className="text-gray-400 dark:text-gray-600 hidden sm:inline">|</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement.institution}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest whitespace-nowrap shrink-0">
                        {achievement.period}
                      </span>
                    </div>
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Section>
    </>
  );
}
