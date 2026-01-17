import { Link } from 'react-router-dom';
import { Section } from '../components/shared/Section';
import { Button } from '../components/shared/Button';
import { routes } from '../utils/routing';

export function NotFound() {
  return (
    <Section className="pt-20 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-6xl font-racing font-bold mb-4 text-f1-red dark:text-f1-orange">
          404
        </h1>
        <h2 className="text-3xl font-racing font-bold mb-4 text-gray-900 dark:text-white">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Looks like you took a wrong turn. This page doesn't exist in the race
          log.
        </p>
        <Button to={routes.home} variant="primary">
          Return to Paddock
        </Button>
      </div>
    </Section>
  );
}
