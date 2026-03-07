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
    <section id={id} aria-labelledby={resolvedHeadingId} className="py-14 lg:py-20 border-t border-border/60 text-text">
      <SectionHeader eyebrow={eyebrow} title={title} headingId={resolvedHeadingId} />
      <div className="content space-y-12">
        <div className="relative border-l border-border pl-6">
          <ol className="space-y-10">
            {experiences.map((item) => (
              <li key={`${item.org}-${item.period}`} className="relative">
                <span className="absolute -left-[15px] top-2 h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted">{item.period}</p>
                <h3 className="mt-1 text-lg font-semibold text-text">{item.role}</h3>
                <p className="text-sm text-text-muted">{item.org}</p>
                <p className="mt-3 text-sm text-text">{item.summary}</p>
                {item.stack && item.stack.length > 0 && (
                  <p className="mt-2 text-sm text-text-muted">Stack: {item.stack.join(' / ')}</p>
                )}
              </li>
            ))}
          </ol>
        </div>

        {education.length > 0 && (
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted">Formation</p>
            <div className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {education.map((item) => (
                <article
                  key={`${item.school}-${item.program}`}
                  className="rounded-2xl border border-border bg-surface-raised p-6 shadow-soft"
                >
                  <p className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted">{item.period}</p>
                  <h3 className="mt-2 text-lg font-semibold text-text">{item.school}</h3>
                  <p className="mt-2 text-sm text-text-muted">{item.program}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
