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
    <section id={id} aria-labelledby={resolvedHeadingId} className="relative py-16 lg:py-24 text-text">
      {/* Classification + status bar */}
      <div className="mb-7 flex flex-wrap items-center gap-3">
        <span className="classif-badge">OPERATOR PROFILE // CLEARANCE: PUBLIC</span>
        <span className="status-dot font-mono text-[9px] uppercase tracking-[0.2em] text-[#4a8a3e]/80">
          SYS: ACTIF
        </span>
      </div>

      {/* Hero title — custom layout, not via SectionHeader */}
      <header className="mb-10">
        {eyebrow && (
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.32em] text-accent/50">
            // {eyebrow}
          </p>
        )}
        <h1
          id={resolvedHeadingId}
          className="font-display font-semibold leading-tight text-text text-[clamp(2.25rem,4vw,3.75rem)]"
        >
          {title}
        </h1>
        <span className="accent-underline" aria-hidden="true" />
      </header>

      <div className="flex flex-col gap-8">
        <p className="max-w-2xl text-base leading-relaxed text-text-muted lg:text-lg">
          {description}
        </p>

        <div className="flex flex-wrap gap-3">
          {renderAction(primaryAction, 'primary')}
          {secondaryAction && renderAction(secondaryAction, 'secondary')}
        </div>

        {metrics.length > 0 && (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="tac-card tac-hover rounded-[4px] border border-border bg-surface-raised p-5"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent/65">
                  ▸ {metric.label}
                </p>
                <p className="mt-2 text-lg font-semibold leading-snug text-text">
                  {metric.value}
                </p>
                {metric.detail && (
                  <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                    {metric.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Coordinate / system footer */}
        <div className="border-t border-border/25 pt-3">
          <p className="select-none font-mono text-[9px] tracking-[0.22em] text-text-muted/30">
            48°51′N 002°21′E &nbsp;//&nbsp; BUILD-2026 &nbsp;//&nbsp; OPERATOR.DEV
          </p>
        </div>
      </div>
    </section>
  );
}

function renderAction(action: HeroAction, variant: 'primary' | 'secondary') {
  const baseClass =
    'inline-flex items-center justify-center gap-2 rounded-[3px] px-6 py-3 text-sm font-mono font-semibold uppercase tracking-[0.12em] transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';

  const variantClass =
    variant === 'primary'
      ? 'bg-accent text-[#04060a] hover:bg-accent/90 hover:shadow-[0_0_22px_rgba(201,168,80,0.28)]'
      : 'border border-accent/30 bg-accent/5 text-accent/80 hover:border-accent/55 hover:text-accent';

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
