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

const BLOCK_CODES = ['OBJ-01', 'OBJ-02', 'OBJ-03', 'OBJ-04'];

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
    <section id={id} aria-labelledby={resolvedHeadingId} className="border-t border-border/40 py-14 text-text lg:py-20">
      <SectionHeader eyebrow={eyebrow} title={title} headingId={resolvedHeadingId} />
      <div className="content grid gap-8 lg:grid-cols-2">
        <div className="text-sm leading-relaxed text-text-muted">
          <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-accent/40 mb-3">
            // POSITIONNEMENT STRATÉGIQUE
          </p>
          <p>{intro}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {blocks.map((block, i) => (
            <article
              key={block.label}
              className="tac-card tac-hover rounded-[4px] border border-border bg-surface-raised p-5"
            >
              <p className="font-mono text-[9px] tracking-[0.3em] text-accent/35 mb-2">
                {BLOCK_CODES[i] ?? `OBJ-${String(i + 1).padStart(2, '0')}`}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent/75 mb-2">
                {block.label}
              </p>
              <p className="text-xs leading-relaxed text-text-muted">{block.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
