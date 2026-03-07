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
    <section id={id} aria-labelledby={resolvedHeadingId} className="py-14 lg:py-20 border-t border-border/60 text-text">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} headingId={resolvedHeadingId} />
      <div className="grid gap-3 md:grid-cols-5">
        {nodes.map((node) => (
          <div key={node} className="rounded-xl border border-border bg-surface-raised p-4 text-center text-sm text-text">
            {node}
          </div>
        ))}
      </div>
    </section>
  );
}
