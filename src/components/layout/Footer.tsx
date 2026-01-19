import { content } from '../../data/content';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../shared/ScrollReveal';
import { MagneticIcon } from '../shared/MagneticButton';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: content.personalInfo.links.github,
      icon: '/assets/images/github-icon.png',
      alt: 'GitHub',
      label: 'GitHub',
    },
    {
      href: content.personalInfo.links.linkedin,
      icon: '/assets/images/linkedin-icon.png',
      alt: 'LinkedIn',
      label: 'LinkedIn',
    },
    {
      href: content.personalInfo.links.leetcode,
      icon: '/assets/images/leetcode-icon-430x512-6l72chsk.png',
      alt: 'LeetCode',
      label: 'LeetCode',
    },
  ];

  return (
    <footer className="bg-track-gray dark:bg-bg-dark text-gray-300 py-16 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <ScrollReveal direction="up">
            <p className="text-2xl md:text-3xl font-racing mb-8 text-white">
              Let's Build Something
            </p>
          </ScrollReveal>

          <StaggerContainer staggerSpeed="slow" className="flex justify-center space-x-8 mb-10">
            {socialLinks.map((link, idx) => (
              <StaggerItem key={idx} direction="up">
                <MagneticIcon
                  href={link.href}
                  ariaLabel={link.label}
                  className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-300 group"
                >
                  <img
                    src={link.icon}
                    alt={link.alt}
                    className="w-6 h-6 dark:invert opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </MagneticIcon>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal direction="fade" delay={0.3}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-px bg-gray-700" />
              <span className="text-xs font-racing tracking-widest text-gray-500 uppercase">
                Engineered with precision
              </span>
              <div className="w-8 h-px bg-gray-700" />
            </div>
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Muneeb Azfar Nafees
            </p>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
