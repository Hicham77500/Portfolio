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
};

export function SkillsSection({
  id = 'skills',
  headingId,
  eyebrow,
  title,
  groups,
}: SkillsSectionProps) {
  const resolvedHeadingId = headingId ?? `${id}-title`;

  return (
    <section id={id} aria-labelledby={resolvedHeadingId} className="py-14 lg:py-20 border-t border-border/60 text-text">
      <SectionHeader eyebrow={eyebrow} title={title} headingId={resolvedHeadingId} />
      <div className="content grid gap-6 md:grid-cols-3">
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
    </section>
  );
}
