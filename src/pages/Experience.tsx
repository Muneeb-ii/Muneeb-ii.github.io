import { Section } from '../components/shared/Section';
import { SEO } from '../components/shared/SEO';
import { PitStopCard } from '../components/f1/PitStopCard';
import { Button } from '../components/shared/Button';
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
      
      {/* Page with gradient background */}
      <div className="relative pb-20">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-emerald-500/10 via-teal-500/5 to-transparent dark:from-emerald-600/15 dark:via-teal-500/10 blur-3xl" />
          <div className="absolute top-1/3 -left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-500/5 to-transparent dark:from-blue-600/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-tl from-amber-500/5 to-transparent dark:from-amber-600/10 blur-3xl" />
        </div>

        <Section className="pt-20 relative">
          <ScrollReveal direction="up">
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <h1 className="text-5xl md:text-6xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
                    Pit Wall
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    Experience and decisions. Where I've been, what I've built.
                  </p>
                </div>
                <Button
                  href="/assets/documents/Resume.pdf"
                  variant="primary"
                  className="group shrink-0"
                >
                  <svg 
                    className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Featured Research - MultiSOCIAL Toolbox */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="mb-16">
              <div className="bg-gradient-to-br from-emerald-50 via-teal-50/50 to-white dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-[#0A0A0A] border-2 border-f1-telemetry-green/50 dark:border-f1-telemetry-green/30 rounded-lg p-8 backdrop-blur-sm">
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
                        className="bg-white/80 dark:bg-[#0A0A0A]/80 rounded-lg p-4 border border-emerald-200/50 dark:border-emerald-800/30 backdrop-blur-sm"
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
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50/50 dark:from-amber-950/30 dark:to-yellow-950/20 rounded-lg p-4 border border-amber-200/50 dark:border-amber-800/30">
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
      </div>
    </>
  );
}
