
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Section } from '../components/shared/Section';
import { TelemetryCard } from '../components/f1/TelemetryCard';
import { ProjectCard } from '../components/projects/ProjectCard';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { routes } from '../utils/routing';
import { GitHubRepos } from '../components/shared/GitHubRepos';
import { githubRepos } from '../data/githubRepos';

export function Home() {
  const featuredProjects = content.projects.filter((p) => p.featured).slice(0, 4);
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.6 },
  };

  return (
    <>
      <SEO
        title="Home"
        description={content.personalInfo.headline}
        path="/"
      />
      <div>
        {/* Hero Section */}
        <Section className="pt-20 pb-12">
          <motion.div
            className="text-center mb-12"
            {...fadeIn}
          >
            <div className="mb-6">
              <motion.img
                src="/assets/images/Picture.jpeg"
                alt={content.personalInfo.name}
                className="w-32 h-32 rounded-full mx-auto border-4 border-f1-red dark:border-f1-orange object-cover"
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
              {content.personalInfo.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
              {content.personalInfo.headline}
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500">
              {content.personalInfo.location} • {content.personalInfo.origin}
            </p>
          </motion.div>

          {/* Telemetry Snapshot */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial="initial"
            animate="animate"
            variants={
              prefersReducedMotion
                ? {}
                : {
                  animate: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }
            }
          >
            <motion.div variants={prefersReducedMotion ? {} : fadeIn}>
              <TelemetryCard
                title="Telemetry Snapshot"
                value="Python • ML • Systems"
                status="good"
              />
            </motion.div>
            <motion.div variants={prefersReducedMotion ? {} : fadeIn}>
              <TelemetryCard
                title="Racecraft"
                value="Shipping • Debugging • Iteration"
                status="good"
              />
            </motion.div>
            <motion.div variants={prefersReducedMotion ? {} : fadeIn}>
              <TelemetryCard
                title="Current Status"
                value="Building"
                status="good"
              />
            </motion.div>
          </motion.div>

          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              {content.personalInfo.bio}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to={routes.projects} variant="primary">
                View Garage
              </Button>
              <Button to={routes.about} variant="outline">
                Enter Paddock
              </Button>
            </div>
          </div>
        </Section>

        {/* Featured Projects */}
        <Section className="bg-gray-50 dark:bg-gray-900">
          <motion.h2
            className="text-3xl font-racing font-bold mb-8 text-gray-900 dark:text-white"
            {...fadeIn}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="initial"
            animate="animate"
            variants={
              prefersReducedMotion
                ? {}
                : {
                  animate: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }
            }
          >
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={prefersReducedMotion ? {} : fadeIn}
                custom={idx}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <Button to={routes.projects} variant="outline">
              View All Projects →
            </Button>
          </div>
        </Section>

        {/* Proof of Work - GitHub Repos */}
        {githubRepos.length > 0 && (
          <Section className="bg-gray-50 dark:bg-gray-900">
            <GitHubRepos repos={githubRepos} />
          </Section>
        )}
      </div>
    </>
  );
}
