import Image from 'next/image';
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
      <div className="content grid gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-2xl border border-border bg-surface-raised"
          >
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div className="flex flex-col p-6 sm:p-8">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-semibold text-text sm:text-2xl">{project.title}</h3>
                    {project.badge && (
                      <span className="rounded-md border border-accent/40 bg-accent/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-accent">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  {project.tagline && (
                    <p className="mt-1 text-sm text-text-muted">{project.tagline}</p>
                  )}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-text-muted">{project.description}</p>

                <div className="mt-5">
                  <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-text-muted">
                    Travaux réalisés
                  </p>
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
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-base-900 transition hover:bg-accent-soft"
                >
                  {project.ctaLabel ?? project.url}
                </a>
              </div>

              {project.imageSrc && (
                <div className="relative flex items-center border-t border-border bg-base-800 p-4 sm:p-6 lg:border-l lg:border-t-0">
                  <Image
                    src={project.imageSrc}
                    alt={`Aperçu ${project.title}`}
                    width={1024}
                    height={317}
                    className="h-auto w-full rounded-lg"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority={false}
                  />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
