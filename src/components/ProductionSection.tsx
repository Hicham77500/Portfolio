import { SectionHeader } from '@/components/SectionHeader';
import type { ProductionProject } from '@/data/portfolio';
import { withBasePath } from '@/lib/paths';

type ProductionSectionProps = {
  id?: string;
  headingId?: string;
  eyebrow: string;
  title: string;
  description?: string;
  projects: ProductionProject[];
};

const MISSION_CODES = ['DOSSIER-001', 'DOSSIER-002', 'DOSSIER-003'];
const DEPLOY_STATUS: Record<string, string> = {
  'App Store': 'EN PRODUCTION',
  'Open Source': 'OPEN SOURCE',
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
    <section id={id} aria-labelledby={resolvedHeadingId} className="border-t border-border/40 py-14 text-text lg:py-20">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        headingId={resolvedHeadingId}
      />
      <div className="content grid gap-6">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="tac-card tac-hover overflow-hidden rounded-[4px] border border-border bg-surface-raised"
          >
            {/* Classified dossier header */}
            <div className="flex items-center justify-between border-b border-border/50 bg-surface/70 px-5 py-2.5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] tracking-[0.28em] text-accent/40">
                  {MISSION_CODES[index] ?? `DOSSIER-${String(index + 1).padStart(3, '0')}`}
                </span>
                <span className="h-3 w-[1px] bg-border" aria-hidden="true" />
                {project.badge && (
                  <span className="classif-badge">{project.badge}</span>
                )}
              </div>
              {project.badge && (
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#4a8a3e]/65">
                  ● {DEPLOY_STATUS[project.badge] ?? 'ACTIF'}
                </span>
              )}
            </div>

            {/* Mobile: text then visual / Desktop: text left, visual right */}
            <div className="flex flex-col xl:flex-row xl:items-stretch">
              <div className="flex min-w-0 flex-1 flex-col justify-center p-5 sm:p-6 lg:p-8">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-text sm:text-2xl">{project.title}</h3>
                  {project.tagline && (
                    <p className="mt-1 text-sm text-text-muted">{project.tagline}</p>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text-muted sm:mt-5">
                  {project.description}
                </p>

                <div className="mt-4 sm:mt-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent/55">
                    // Équipements & travaux
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {project.work.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text/80">
                        <span className="font-mono text-[10px] text-accent/40 mt-[3px] flex-shrink-0">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.repoStatus && (
                  <p className="mt-4 font-mono text-[10px] text-text-muted/60">{project.repoStatus}</p>
                )}

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-[3px] border border-accent/35 bg-accent/8 px-5 py-2.5 font-mono text-sm font-semibold uppercase tracking-[0.1em] text-accent/85 transition hover:border-accent/60 hover:bg-accent/12 hover:text-accent hover:shadow-[0_0_16px_rgba(201,168,80,0.15)]"
                >
                  {project.ctaLabel ?? 'Accéder au dossier'}
                  <span aria-hidden="true" className="text-xs opacity-70">↗</span>
                </a>
              </div>

              {project.imageSrc && (
                <div className="w-full shrink-0 border-t border-border/50 bg-surface/50 p-4 sm:p-5 xl:w-[min(52%,34rem)] xl:border-l xl:border-t-0 xl:p-6">
                  {/* eslint-disable-next-line @next/next/no-img-element -- static GH Pages needs explicit basePath */}
                  <img
                    src={withBasePath(project.imageSrc)}
                    alt={`Aperçu ${project.title}`}
                    width={950}
                    height={1024}
                    className="mx-auto h-auto w-full max-w-md rounded-[3px] object-contain opacity-90 xl:max-h-[min(85vh,42rem)] xl:max-w-none"
                    loading="lazy"
                    decoding="async"
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
