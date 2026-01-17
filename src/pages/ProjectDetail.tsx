import { useParams, Navigate } from 'react-router-dom';
import { Section } from '../components/shared/Section';
import { ProjectDetail as ProjectDetailComponent } from '../components/projects/ProjectDetail';
import { content } from '../data/content';
import { Button } from '../components/shared/Button';
import { routes } from '../utils/routing';

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = content.projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to={routes.projects} replace />;
  }

  return (
    <Section className="pt-20">
      <div className="mb-6">
        <Button to={routes.projects} variant="outline">
          ← Back to Garage
        </Button>
      </div>
      <ProjectDetailComponent project={project} />
    </Section>
  );
}
