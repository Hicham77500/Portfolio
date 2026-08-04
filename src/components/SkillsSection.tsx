import { SectionHeader } from '@/components/SectionHeader';

type SkillGroup = {
  title: string;
  stack: readonly string[];
};

type SkillsSectionProps = {
  id?: string;
  headingId?: string;
  eyebrow: string;
  title: string;
  groups: SkillGroup[];
  complementary?: {
    frontend: readonly string[];
    backend: readonly string[];
    databases: readonly string[];
    tools: readonly string[];
  };
};

const GROUP_CODES = ['CAP-01', 'CAP-02', 'CAP-03'];

export function SkillsSection({
  id = 'skills',
  headingId,
  eyebrow,
  title,
  groups,
  complementary,
}: SkillsSectionProps) {
  const resolvedHeadingId = headingId ?? `${id}-title`;

  return (
    <section id={id} aria-labelledby={resolvedHeadingId} className="border-t border-border/40 py-14 text-text lg:py-20">
      <SectionHeader eyebrow={eyebrow} title={title} headingId={resolvedHeadingId} />
      <div className="content space-y-4">
        <div className="grid gap-3 md:grid-cols-3">
          {groups.map((group, i) => (
            <article
              key={group.title}
              className="tac-card tac-hover rounded-[4px] border border-border bg-surface-raised p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-display text-base font-semibold text-text">{group.title}</h3>
                <span className="font-mono text-[9px] tracking-[0.28em] text-accent/35">
                  {GROUP_CODES[i] ?? `CAP-${String(i + 1).padStart(2, '0')}`}
                </span>
              </div>
              <ul className="space-y-1.5">
                {group.stack.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-sm text-text-muted">
                    <span className="font-mono text-[9px] text-accent/35" aria-hidden="true">▸</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {complementary && (
          <details className="tac-card rounded-[4px] border border-border bg-surface-raised text-sm text-text-muted">
            <summary className="cursor-pointer px-5 py-4 font-mono text-[10px] uppercase tracking-[0.25em] text-text/70 transition hover:text-accent/80 select-none">
              // Capacités complémentaires
            </summary>
            <div className="grid gap-4 border-t border-border/40 p-5 md:grid-cols-2">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent/50 mb-2">Frontend</p>
                <div className="flex flex-wrap gap-1.5">
                  {complementary.frontend.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent/50 mb-2">Backend</p>
                <div className="flex flex-wrap gap-1.5">
                  {complementary.backend.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent/50 mb-2">Bases de données</p>
                <div className="flex flex-wrap gap-1.5">
                  {complementary.databases.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent/50 mb-2">Tools</p>
                <div className="flex flex-wrap gap-1.5">
                  {complementary.tools.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
