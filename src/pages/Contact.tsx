import { Section } from '../components/shared/Section';
import { SEO } from '../components/shared/SEO';
import { content } from '../data/content';
import { Button } from '../components/shared/Button';

export function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch. Email, LinkedIn, GitHub, and LeetCode links."
        path="/contact"
      />
      <Section className="pt-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
          Let's Connect
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Interested in collaborating, discussing projects, or just saying hello?
          Reach out through any of these channels.
        </p>

        <div className="bg-white dark:bg-gray-900 rounded-lg border-2 border-gray-200 dark:border-gray-800 p-8 mb-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-racing font-bold mb-2 text-gray-900 dark:text-white">
                Email
              </h3>
              <Button
                href={content.personalInfo.links.email}
                variant="primary"
                className="w-full sm:w-auto"
              >
                Send Email
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={content.personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <img
                  src="/assets/images/linkedin-icon.png"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
                LinkedIn
              </a>
              <a
                href={content.personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <img
                  src="/assets/images/github-icon.png"
                  alt="GitHub"
                  className="w-5 h-5 dark:invert"
                />
                GitHub
              </a>
              <a
                href={content.personalInfo.links.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <img
                  src="/assets/images/leetcode-icon-430x512-6l72chsk.png"
                  alt="LeetCode"
                  className="w-5 h-5"
                />
                LeetCode
              </a>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          I typically respond within 24-48 hours.
        </p>
      </div>
    </Section>
    </>
  );
}
