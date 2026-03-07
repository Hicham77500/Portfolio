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
    <section id={id} aria-labelledby={resolvedHeadingId} className="py-14 lg:py-20 border-t border-border/60 text-text">
      <SectionHeader eyebrow={eyebrow} title={title} headingId={resolvedHeadingId} />
      <div className="content space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-border bg-surface-raised p-6">
              <h3 className="text-lg font-semibold text-text">{group.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-text-muted">
                {group.stack.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {complementary && (
          <details className="rounded-2xl border border-border bg-surface-raised p-6 text-sm text-text-muted">
            <summary className="cursor-pointer font-semibold text-text">Technologies complémentaires</summary>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted">Frontend</p>
                <p className="mt-1">{complementary.frontend.join(' / ')}</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted">Backend</p>
                <p className="mt-1">{complementary.backend.join(' / ')}</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted">Bases de données</p>
                <p className="mt-1">{complementary.databases.join(' / ')}</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted">Tools</p>
                <p className="mt-1">{complementary.tools.join(' / ')}</p>
              </div>
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
