import { SectionHeader } from '@/components/SectionHeader';

type ArchitectureSectionProps = {
  id?: string;
  headingId?: string;
  eyebrow: string;
  title: string;
  description: string;
  nodes: readonly string[];
};

export function ArchitectureSection({
  id = 'architecture',
  headingId,
  eyebrow,
  title,
  description,
  nodes,
}: ArchitectureSectionProps) {
  const resolvedHeadingId = headingId ?? `${id}-title`;

  return (
    <section id={id} aria-labelledby={resolvedHeadingId} className="border-t border-border/40 py-14 text-text lg:py-20">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} headingId={resolvedHeadingId} />
      <div className="grid gap-2 md:grid-cols-5">
        {nodes.map((node, index) => (
          <div
            key={node}
            className="tac-card tac-hover relative rounded-[4px] border border-border bg-surface-raised p-4 text-center"
          >
            <p className="font-mono text-[9px] tracking-[0.28em] text-accent/40 mb-1.5">
              SYS.{String(index + 1).padStart(2, '0')}
            </p>
            <p className="text-xs font-semibold text-text/90">{node}</p>
            {/* Connector arrow on md+ */}
            {index < nodes.length - 1 && (
              <span
                className="absolute -right-[9px] top-1/2 z-10 hidden -translate-y-1/2 text-[8px] text-accent/30 md:block"
                aria-hidden="true"
              >
                ▶
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
