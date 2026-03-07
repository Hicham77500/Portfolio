import type { EducationItem } from '@/data/portfolio';
import { SectionHeader } from '@/components/SectionHeader';

type EducationSectionProps = {
  id?: string;
  headingId?: string;
  eyebrow: string;
  title: string;
  items: EducationItem[];
};

export function EducationSection({
  id = 'education',
  headingId,
  eyebrow,
  title,
  items,
}: EducationSectionProps) {
  const resolvedHeadingId = headingId ?? `${id}-title`;

  return (
    <section id={id} aria-labelledby={resolvedHeadingId} className="py-14 lg:py-20 border-t border-border/60 text-text">
      <SectionHeader eyebrow={eyebrow} title={title} headingId={resolvedHeadingId} />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={`${item.school}-${item.program}`} className="rounded-2xl border border-border bg-surface-raised p-6">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted">{item.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-text">{item.school}</h3>
            <p className="mt-2 text-sm text-text-muted">{item.program}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
