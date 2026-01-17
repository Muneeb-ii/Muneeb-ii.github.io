import { Section } from '../components/shared/Section';
import { SEO } from '../components/shared/SEO';
import { PitStopCard } from '../components/f1/PitStopCard';
import { content } from '../data/content';

export function Experience() {
  const research = content.experience.filter((e) => e.type === 'research');
  const internships = content.experience.filter((e) => e.type === 'internship');
  const other = content.experience.filter((e) => e.type === 'other');

  return (
    <>
      <SEO
        title="Experience"
        description="Work experience, internships, and research. Pit Wall decisions and impact."
        path="/experience"
      />
      <Section className="pt-20">
      <div className="mb-8">
        <h1 className="text-4xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
          Pit Wall
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Experience and decisions. Where I've been, what I've built.
        </p>
      </div>

      {research.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-racing font-bold mb-6 text-gray-900 dark:text-white">
            Research
          </h2>
          <div className="space-y-6">
            {research.map((exp, idx) => (
              <PitStopCard key={idx} experience={exp} />
            ))}
          </div>
        </div>
      )}

      {internships.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-racing font-bold mb-6 text-gray-900 dark:text-white">
            Internships
          </h2>
          <div className="space-y-6">
            {internships.map((exp, idx) => (
              <PitStopCard key={idx} experience={exp} />
            ))}
          </div>
        </div>
      )}

      {other.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-racing font-bold mb-6 text-gray-900 dark:text-white">
            Other Experience
          </h2>
          <div className="space-y-6">
            {other.map((exp, idx) => (
              <PitStopCard key={idx} experience={exp} />
            ))}
          </div>
        </div>
      )}
    </Section>
    </>
  );
}
