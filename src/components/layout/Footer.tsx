import { content } from '../../data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-track-gray dark:bg-bg-dark text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-racing mb-4">Let's connect!</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href={content.personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="GitHub"
            >
              <img
                src="/assets/images/github-icon.png"
                alt="GitHub"
                className="w-8 h-8 dark:invert"
              />
            </a>
            <a
              href={content.personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="LinkedIn"
            >
              <img
                src="/assets/images/linkedin-icon.png"
                alt="LinkedIn"
                className="w-8 h-8 dark:invert"
              />
            </a>
            <a
              href={content.personalInfo.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="LeetCode"
            >
              <img
                src="/assets/images/leetcode-icon-430x512-6l72chsk.png"
                alt="LeetCode"
                className="w-8 h-8 dark:invert"
              />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Muneeb Azfar Nafees
          </p>
        </div>
      </div>
    </footer>
  );
}
