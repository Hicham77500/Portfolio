import { SectionHeader } from '@/components/SectionHeader';
import type { ProductionProject } from '@/data/portfolio';

type ProductionSectionProps = {
  id?: string;
  headingId?: string;
  eyebrow: string;
  title: string;
  description?: string;
  projects: ProductionProject[];
};

export function ProductionSection({
  id = 'production',
  headingId,
  eyebrow,
  title,
  description,
  projects,
}: ProductionSectionProps) {
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
          <article key={project.title} className="rounded-2xl border border-border bg-surface-raised p-6">
            <h3 className="text-xl font-semibold text-text">{project.title}</h3>
            <p className="mt-3 text-sm text-text-muted">{project.description}</p>
            <div className="mt-4">
              <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-text-muted">Travaux réalisés</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text">
                {project.work.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            {project.repoStatus && (
              <p className="mt-4 text-xs text-text-muted">{project.repoStatus}</p>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex text-sm text-text underline-offset-2 transition hover:text-accent hover:underline"
            >
              {project.url}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
