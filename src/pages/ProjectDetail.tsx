import { useParams, Navigate } from 'react-router-dom';
import { Section } from '../components/shared/Section';
import { ProjectDetail as ProjectDetailComponent } from '../components/projects/ProjectDetail';
import { content } from '../data/content';
import { Button } from '../components/shared/Button';
import { SEO } from '../components/shared/SEO';
import { routes } from '../utils/routing';
import { ScrollReveal } from '../components/shared/ScrollReveal';

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = content.projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to={routes.projects} replace />;
  }

  return (
    <>
      <SEO
        title={project.title}
        description={project.description}
        path={`/projects/${project.id}`}
      />
      
      {/* Page with gradient background */}
      <div className="relative pb-20">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-rose-500/10 via-orange-500/5 to-transparent dark:from-rose-600/15 dark:via-orange-500/10 blur-3xl" />
          <div className="absolute top-1/2 -left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-500/5 to-transparent dark:from-blue-600/10 blur-3xl" />
        </div>

        <Section className="pt-20 relative">
          <ScrollReveal direction="left">
            <div className="mb-8">
              <Button to={routes.projects} variant="outline" magnetic={false}>
                ← Back to Garage
              </Button>
            </div>
          </ScrollReveal>
          <ProjectDetailComponent project={project} />
        </Section>
      </div>
    </>
  );
}
