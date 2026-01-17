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
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-bg-dark/80 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to={routes.home}
            className="font-racing text-xl font-bold text-f1-red dark:text-f1-orange hover:opacity-80 transition-opacity"
          >
            Muneeb Azfar Nafees
          </Link>

          <div className="flex items-center space-x-1 sm:space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-f1-red dark:text-f1-orange border-b-2 border-f1-red dark:border-f1-orange'
                        : 'text-gray-700 dark:text-gray-300 hover:text-f1-red dark:hover:text-f1-orange'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              {...(mobileMenuOpen ? { 'aria-expanded': 'true' } : { 'aria-expanded': 'false' })}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-gray-200 dark:border-gray-800">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className={`block px-4 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-f1-red dark:text-f1-orange bg-gray-100 dark:bg-gray-800'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
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
