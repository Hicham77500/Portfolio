import { SectionHeader } from '@/components/SectionHeader';

type CurrentFocusSectionProps = {
  id?: string;
  headingId?: string;
  eyebrow: string;
  title: string;
  goal: readonly string[];
};

export function CurrentFocusSection({
  id = 'now',
  headingId,
  eyebrow,
  title,
  goal,
}: CurrentFocusSectionProps) {
  const resolvedHeadingId = headingId ?? `${id}-title`;

  return (
    <section id={id} aria-labelledby={resolvedHeadingId} className="py-14 lg:py-20 border-t border-border/60 text-text">
      <SectionHeader eyebrow={eyebrow} title="En ce moment" headingId={resolvedHeadingId} />
      <div className="content rounded-2xl border border-border bg-surface-raised p-6">
        <p className="text-base text-text">{title}</p>
        <div className="mt-5">
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-text-muted">Objectif</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text-muted">
            {goal.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
