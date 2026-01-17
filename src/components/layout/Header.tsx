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
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
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
