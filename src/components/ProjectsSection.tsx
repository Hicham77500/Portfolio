import { SectionHeader } from '@/components/SectionHeader';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';
import type { CaseStudy } from '@/data/portfolio';

type ProjectsSectionProps = {
  id?: string;
  headingId?: string;
  eyebrow: string;
  title: string;
  description?: string;
  projects: CaseStudy[];
};

export function ProjectsSection({
  id = 'projects',
  headingId,
  eyebrow,
  title,
  description,
  projects,
}: ProjectsSectionProps) {
  const resolvedHeadingId = headingId ?? `${id}-title`;

  return (
    <section id={id} aria-labelledby={resolvedHeadingId} className="py-14 lg:py-20 border-t border-border/60 text-text">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        headingId={resolvedHeadingId}
      />
      <div className="content grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <CaseStudyCard key={project.title} caseStudy={project} />
        ))}
      </div>
    </section>
  );
}
