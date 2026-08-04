import { ElementType } from 'react';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  headingLevel?: 'h1' | 'h2' | 'h3';
  headingId?: string;
  className?: string;
  titleClassName?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  headingLevel = 'h2',
  headingId,
  className = '',
  titleClassName = '',
}: SectionHeaderProps) {
  const HeadingTag = headingLevel.toLowerCase() as ElementType;
  return (
    <header className={`mb-8 ${className}`}>
      {eyebrow && (
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.32em] text-accent/55">
          // {eyebrow}
        </p>
      )}
      <div className="flex items-center gap-3">
        <span className="h-[1px] w-5 flex-shrink-0 bg-gradient-to-r from-accent/55 to-accent/10" aria-hidden="true" />
        <HeadingTag
          id={headingId}
          className={`font-display text-2xl font-semibold leading-tight text-text ${titleClassName}`.trim()}
        >
          {title}
        </HeadingTag>
      </div>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">{description}</p>
      )}
    </header>
  );
}

