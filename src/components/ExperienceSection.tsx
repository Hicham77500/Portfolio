import { SectionHeader } from '@/components/SectionHeader';
import type { EducationItem, ExperienceItem } from '@/data/portfolio';

type ExperienceSectionProps = {
  id?: string;
  headingId?: string;
  eyebrow: string;
  title: string;
  experiences: ExperienceItem[];
  education?: EducationItem[];
};

export function ExperienceSection({
  id = 'experience',
  headingId,
  eyebrow,
  title,
  experiences,
  education = [],
}: ExperienceSectionProps) {
  const resolvedHeadingId = headingId ?? `${id}-title`;

  return (
    <section id={id} aria-labelledby={resolvedHeadingId} className="border-t border-border/40 py-14 text-text lg:py-20">
      <SectionHeader eyebrow={eyebrow} title={title} headingId={resolvedHeadingId} />
      <div className="content space-y-10">
        {/* Mission log timeline */}
        <div className="relative border-l border-accent/20 pl-6">
          <p className="absolute -left-[52px] top-0 hidden font-mono text-[9px] uppercase tracking-[0.3em] text-accent/30 [writing-mode:vertical-lr] lg:block select-none">
            LOG OPS
          </p>
          <ol className="space-y-4">
            {experiences.map((item, index) => (
              <li key={`${item.org}-${item.period}`} className="relative">
                {/* Diamond bullet */}
                <span
                  className="absolute -left-[25px] top-[18px] h-[8px] w-[8px] rotate-45 border border-accent/50 bg-surface"
                  aria-hidden="true"
                />
                <div className="tac-card tac-hover rounded-[4px] border border-border bg-surface-raised p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent/55">
                      {item.period}
                    </p>
                    <span className="font-mono text-[9px] tracking-[0.2em] text-text-muted/40">
                      OP-{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-1.5 text-base font-semibold text-text">{item.role}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent/60">
                    {item.org}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.summary}</p>
                  {item.stack && item.stack.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.stack.map((tech) => (
                        <span key={tech} className="tech-pill">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {education.length > 0 && (
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent/50 mb-4">
              // Formation & certifications
            </p>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {education.map((item) => (
                <article
                  key={`${item.school}-${item.program}`}
                  className="tac-card tac-hover rounded-[4px] border border-border bg-surface-raised p-5"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent/50">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-text">{item.school}</h3>
                  <p className="mt-1.5 text-sm text-text-muted">{item.program}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
