import { Section } from '../components/shared/Section';
import { SEO } from '../components/shared/SEO';
import { PitStopCard } from '../components/f1/PitStopCard';
import { content } from '../data/content';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/shared/ScrollReveal';

export function Experience() {
  const research = content.experience.filter((e) => e.type === 'research');
  const internships = content.experience.filter((e) => e.type === 'internship');
  const other = content.experience.filter((e) => e.type === 'other');
  const { research: featuredResearch } = content;

  return (
    <>
      <SEO
        title="Experience"
        description="Work experience, research, and internships. Where I've been, what I've built."
        path="/experience"
      />
      <Section className="pt-20">
        <ScrollReveal direction="up">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
              Pit Wall
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Experience and decisions. Where I've been, what I've built.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Research - MultiSOCIAL Toolbox */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-16">
            <div className="bg-gradient-to-br from-f1-telemetry-green/10 to-transparent dark:from-f1-telemetry-green/20 border-2 border-f1-telemetry-green rounded-lg p-8">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-f1-telemetry-green uppercase tracking-widest mb-2 block">
                    Featured Research
                  </span>
                  <h2 className="text-3xl font-racing font-bold text-gray-900 dark:text-white">
                    MultiSOCIAL Toolbox
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {featuredResearch.period} • {featuredResearch.institution}
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {featuredResearch.description}
              </p>

              {/* Modules */}
              <div className="mb-8">
                <h3 className="text-xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
                  Modules I Work With
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuredResearch.modules.map((module, idx) => (
                    <div
                      key={idx}
                      className="bg-white dark:bg-[#0A0A0A] rounded-lg p-4 border border-gray-200 dark:border-gray-800"
                    >
                      <h4 className="font-racing font-bold text-gray-900 dark:text-white mb-1">
                        {module.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {module.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="bg-f1-gold/10 dark:bg-f1-gold/20 rounded-lg p-4">
                <h3 className="font-racing font-bold text-gray-900 dark:text-white mb-2">
                  Impact
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {featuredResearch.impact}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Research Positions */}
        {research.length > 0 && (
          <div className="mb-12">
            <ScrollReveal direction="left">
              <h2 className="text-2xl font-racing font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
                Research Positions
              </h2>
            </ScrollReveal>
            <StaggerContainer staggerSpeed="normal" className="space-y-6">
              {research.map((exp, idx) => (
                <StaggerItem key={idx} direction="up">
                  <PitStopCard experience={exp} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        {/* Internships */}
        {internships.length > 0 && (
          <div className="mb-12">
            <ScrollReveal direction="left">
              <h2 className="text-2xl font-racing font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
                Internships
              </h2>
            </ScrollReveal>
            <StaggerContainer staggerSpeed="normal" className="space-y-6">
              {internships.map((exp, idx) => (
                <StaggerItem key={idx} direction="up">
                  <PitStopCard experience={exp} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        {/* Other Experience */}
        {other.length > 0 && (
          <div className="mb-12">
            <ScrollReveal direction="left">
              <h2 className="text-2xl font-racing font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-4">
                Other Experience
              </h2>
            </ScrollReveal>
            <StaggerContainer staggerSpeed="normal" className="space-y-6">
              {other.map((exp, idx) => (
                <StaggerItem key={idx} direction="up">
                  <PitStopCard experience={exp} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}
      </Section>
    </>
  );
}
