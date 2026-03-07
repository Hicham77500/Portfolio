import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';

type ContactSectionProps = {
  id?: string;
  headingId?: string;
  eyebrow: string;
  title: string;
  description: string;
  links: {
    github: string;
    linkedin: string;
  };
};

export function ContactSection({
  id = 'contact',
  headingId,
  eyebrow,
  title,
  description,
  links,
}: ContactSectionProps) {
  const resolvedHeadingId = headingId ?? `${id}-title`;

  return (
    <section id={id} aria-labelledby={resolvedHeadingId} className="py-14 lg:py-20 border-t border-border/60 text-text">
      <SectionHeader eyebrow={eyebrow} title={title} headingId={resolvedHeadingId} />
      <div className="content grid gap-10 lg:grid-cols-2">
        <div className="space-y-6 text-base text-text-muted">
          <p>{description}</p>
          <p className="text-sm text-text-muted">Disponible pour echanger sur des opportunites fullstack, data engineering et IA appliquee.</p>
        </div>
        <div className="rounded-2xl border border-border bg-surface-raised p-6">
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted">GitHub</dt>
              <dd>
                <a href={links.github} target="_blank" rel="noreferrer" className="text-text hover:text-accent transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
                  Profil GitHub
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted">LinkedIn</dt>
              <dd>
                <a href={links.linkedin} target="_blank" rel="noreferrer" className="text-text hover:text-accent transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus">
                  Profil LinkedIn
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-6">{renderCTA({ label: 'Voir les projets', href: '#projects' })}</div>
        </div>
      </div>
    </section>
  );
}

function renderCTA(cta: { label: string; href: string; external?: boolean }) {
  const className = 'inline-flex items-center justify-center rounded-pill border border-border px-6 py-3 text-sm font-semibold text-text transition duration-200 ease-out hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border';

  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noreferrer" className={className}>
        {cta.label}
      </a>
    );
  }

  return (
    <Link href={cta.href} className={className}>
      {cta.label}
    </Link>
  );
}
