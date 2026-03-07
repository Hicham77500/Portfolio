import { ElementType } from 'react';

type SectionHeaderProps = {
  eyebrow: string;
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
      <p className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted">{eyebrow}</p>
      <HeadingTag
        id={headingId}
        className={`mt-3 font-display text-3xl leading-tight text-text ${titleClassName}`.trim()}
      >
        {title}
      </HeadingTag>
      {description && <p className="mt-4 max-w-2xl text-sm text-text-muted">{description}</p>}
    </header>
  );
}

