import { SectionHeader } from '@/components/SectionHeader';

type PositioningBlock = {
  label: string;
  description: string;
};

type PositioningSectionProps = {
  id?: string;
  headingId?: string;
  eyebrow: string;
  title: string;
  intro: string;
  blocks: readonly PositioningBlock[];
};

export function PositioningSection({
  id = 'positioning',
  headingId,
  eyebrow,
  title,
  intro,
  blocks,
}: PositioningSectionProps) {
  const resolvedHeadingId = headingId ?? `${id}-title`;

  return (
    <section id={id} aria-labelledby={resolvedHeadingId} className="py-14 lg:py-20 border-t border-border/60 text-text">
      <SectionHeader eyebrow={eyebrow} title={title} headingId={resolvedHeadingId} />
      <div className="content grid gap-8 lg:grid-cols-2">
        <div className="text-base text-text-muted">
          <p>{intro}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.label} className="rounded-2xl border border-border bg-surface-raised p-6">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-accent">{block.label}</p>
              <p className="mt-2 text-sm text-text-muted">{block.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
