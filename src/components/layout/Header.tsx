import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { routes } from '../../utils/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const navItems = [
  { label: 'Paddock', path: routes.about, id: 'about' },
  { label: 'Garage', path: routes.projects, id: 'projects' },
  { label: 'Telemetry', path: routes.skills, id: 'skills' },
  { label: 'Pit Wall', path: routes.experience, id: 'experience' },
  { label: 'Qualifying', path: routes.achievements, id: 'achievements' },
  { label: 'Research', path: routes.research, id: 'research' },
  { label: 'Race Log', path: routes.quant, id: 'quant' },
  { label: 'Contact', path: routes.contact, id: 'contact' },
];

export function Header() {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const mobileMenuVariants = {
    closed: {
      opacity: prefersReducedMotion ? 0 : 0,
      height: prefersReducedMotion ? 0 : 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.2 },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: prefersReducedMotion ? 0 : 0.2 },
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/50 dark:bg-black/50 border-b border-gray-200/50 dark:border-gray-800/50 transition-all duration-300">
      <nav className="w-full px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          <Link
            to={routes.home}
            className="font-racing text-2xl font-bold tracking-tighter text-gray-900 dark:text-white hover:text-f1-red dark:hover:text-f1-orange transition-colors"
          >
            MN <span className="hidden sm:inline text-f1-red dark:text-f1-orange">.</span>
          </Link>

          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`relative text-sm font-medium tracking-wide uppercase transition-colors group ${isActive
                      ? 'text-f1-red dark:text-f1-orange'
                      : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                      }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-px bg-f1-red dark:bg-f1-orange transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </Link>
                );
              })}
            </div>

            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 transition-all duration-300 hover:border-f1-red dark:hover:border-f1-orange focus:outline-none focus:ring-2 focus:ring-f1-red/50 dark:focus:ring-f1-orange/50"
              aria-label="Toggle theme"
            >
              {/* Track indicator lights */}
              <span className="absolute top-1/2 left-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-f1-telemetry-yellow opacity-50" />
              <span className="absolute top-1/2 right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-f1-telemetry-green opacity-50" />
              
              {/* Toggle knob */}
              <span
                className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
                  isDark
                    ? 'left-7 bg-gradient-to-br from-gray-700 to-gray-900 border border-f1-orange'
                    : 'left-0.5 bg-gradient-to-br from-white to-gray-100 border border-f1-red'
                }`}
              >
                {/* Sun/Moon icon */}
                {isDark ? (
                  <svg className="w-3 h-3 text-f1-orange" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 text-f1-red" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                )}
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-900 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="text-xl font-bold">MENU</span>
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden bg-white dark:bg-black absolute top-[100%] left-0 right-0 border-b border-gray-200 dark:border-gray-800"
            >
              <div className="px-6 py-8 flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className={`text-2xl font-racing font-bold uppercase transition-colors ${isActive
                        ? 'text-f1-red dark:text-f1-orange'
                        : 'text-gray-900 dark:text-white'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
