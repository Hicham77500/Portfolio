'use client';

import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';

type HeroAction = {
  label: string;
  href: string;
  external?: boolean;
};

type HeroMetric = {
  label: string;
  value: string;
  detail?: string;
};

export type HeroSectionProps = {
  id?: string;
  headingId?: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
  metrics: HeroMetric[];
};

export function HeroSection({
  id = 'hero',
  headingId,
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  metrics,
}: HeroSectionProps) {
  const resolvedHeadingId = headingId ?? `${id}-title`;

  return (
    <section id={id} aria-labelledby={resolvedHeadingId} className="py-16 lg:py-24 text-text">
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        headingLevel="h1"
        headingId={resolvedHeadingId}
        titleClassName="text-[clamp(2.25rem,4vw,3.75rem)]"
      />
      <div className="content flex flex-col gap-8">
        <p className="text-base lg:text-lg text-text-muted max-w-2xl">{description}</p>
        <div className="flex flex-wrap gap-4">
          {renderAction(primaryAction, 'primary')}
          {secondaryAction && renderAction(secondaryAction, 'secondary')}
        </div>
        {metrics.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg bg-surface-raised border border-border p-5"
              >
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted">{metric.label}</p>
                <p className="mt-1 text-3xl font-semibold text-text">{metric.value}</p>
                {metric.detail && <p className="mt-1 text-sm text-text-muted">{metric.detail}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function renderAction(action: HeroAction, variant: 'primary' | 'secondary') {
  const baseClass =
    'inline-flex items-center justify-center rounded-pill px-6 py-3 text-sm font-semibold transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border';

  const variantClass =
    variant === 'primary'
      ? 'bg-accent text-base-900 hover:bg-accent/90'
      : 'border border-border text-text hover:text-accent hover:border-accent';

  if (action.external) {
    return (
      <a
        key={action.label}
        href={action.href}
        target="_blank"
        rel="noreferrer"
        className={`${baseClass} ${variantClass}`}
      >
        {action.label}
      </a>
    );
  }

  return (
    <Link key={action.label} href={action.href} className={`${baseClass} ${variantClass}`}>
      {action.label}
    </Link>
  );
}
