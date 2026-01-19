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

  // Group achievements by category
  const achievementsByCategory = {
    academic: content.achievements.filter((a) => a.category === 'academic'),
    leadership: content.achievements.filter((a) => a.category === 'leadership'),
    competition: content.achievements.filter((a) => a.category === 'competition'),
  };

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

            {/* Academic Excellence */}
            {achievementsByCategory.academic.length > 0 && (
              <div className="mb-10">
                <ScrollReveal direction="left">
                  <h3 className="text-xl font-racing font-bold mb-4 text-f1-red dark:text-f1-orange uppercase tracking-wide">
                    Academic Excellence
                  </h3>
                </ScrollReveal>
                <StaggerContainer staggerSpeed="fast" className="space-y-3">
                  {achievementsByCategory.academic.map((achievement, idx) => (
                    <StaggerItem key={idx} direction="up">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white dark:bg-[#0A0A0A] border-l-2 border-transparent hover:border-f1-telemetry-green p-4 transition-all hover:bg-gray-50 dark:hover:bg-gray-900 rounded-r-lg">
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {achievement.description}
                          </p>
                        </div>
                        <span className="mt-2 sm:mt-0 text-xs font-mono text-gray-500 uppercase tracking-widest whitespace-nowrap">
                          {achievement.period}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            )}

            {/* Leadership */}
            {achievementsByCategory.leadership.length > 0 && (
              <div className="mb-10">
                <ScrollReveal direction="left">
                  <h3 className="text-xl font-racing font-bold mb-4 text-f1-red dark:text-f1-orange uppercase tracking-wide">
                    Leadership
                  </h3>
                </ScrollReveal>
                <StaggerContainer staggerSpeed="fast" className="space-y-3">
                  {achievementsByCategory.leadership.map((achievement, idx) => (
                    <StaggerItem key={idx} direction="up">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white dark:bg-[#0A0A0A] border-l-2 border-transparent hover:border-f1-telemetry-yellow p-4 transition-all hover:bg-gray-50 dark:hover:bg-gray-900 rounded-r-lg">
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {achievement.description}
                          </p>
                        </div>
                        <span className="mt-2 sm:mt-0 text-xs font-mono text-gray-500 uppercase tracking-widest whitespace-nowrap">
                          {achievement.period}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            )}

            {/* Competitions */}
            {achievementsByCategory.competition.length > 0 && (
              <div className="mb-10">
                <ScrollReveal direction="left">
                  <h3 className="text-xl font-racing font-bold mb-4 text-f1-red dark:text-f1-orange uppercase tracking-wide">
                    Competitions
                  </h3>
                </ScrollReveal>
                <StaggerContainer staggerSpeed="fast" className="space-y-3">
                  {achievementsByCategory.competition.map((achievement, idx) => (
                    <StaggerItem key={idx} direction="up">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white dark:bg-[#0A0A0A] border-l-2 border-transparent hover:border-f1-gold p-4 transition-all hover:bg-gray-50 dark:hover:bg-gray-900 rounded-r-lg">
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {achievement.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {achievement.description}
                          </p>
                        </div>
                        <span className="mt-2 sm:mt-0 text-xs font-mono text-gray-500 uppercase tracking-widest whitespace-nowrap">
                          {achievement.period}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
