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
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black dark:from-[#0a0a0f] dark:via-[#050508] dark:to-black text-gray-300 py-16 border-t border-gray-800/50 overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] rounded-full bg-gradient-to-t from-rose-600/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[150px] rounded-full bg-gradient-to-t from-blue-600/5 to-transparent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <ScrollReveal direction="up">
            <p className="text-2xl md:text-3xl font-racing mb-4 text-white">
              Let's Build Something
            </p>
            <a 
              href={content.personalInfo.links.email}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-f1-orange transition-colors mb-8 group"
              data-cursor="pointer"
            >
              <svg 
                className="w-4 h-4 transition-transform group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-mono text-sm">manafe28@colby.edu</span>
            </a>
          </ScrollReveal>

          <StaggerContainer staggerSpeed="slow" className="flex justify-center space-x-6 sm:space-x-8 mb-10">
            {socialLinks.map((link, idx) => (
              <StaggerItem key={idx} direction="up">
                <MagneticIcon
                  href={link.href}
                  ariaLabel={link.label}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 hover:from-rose-900/50 hover:to-gray-800 flex items-center justify-center transition-all duration-300 group border border-gray-700/50 hover:border-rose-500/30"
                >
                  <img
                    src={link.icon}
                    alt={link.alt}
                    className="w-6 h-6 invert opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </MagneticIcon>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal direction="fade" delay={0.3}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />
              <span className="text-xs font-racing tracking-widest text-gray-500 uppercase">
                Engineered with precision
              </span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />
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
