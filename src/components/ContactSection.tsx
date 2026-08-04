import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/forms/ContactForm';

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
  const formAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  return (
    <section id={id} aria-labelledby={resolvedHeadingId} className="border-t border-border/40 py-14 text-text lg:py-20">
      <SectionHeader eyebrow={eyebrow} title={title} headingId={resolvedHeadingId} />
      <div className="content grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        {/* Left: comms info panel */}
        <div className="space-y-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-accent/40 mb-1">
            // CANAL DE COMMUNICATION
          </p>
          <p className="text-sm leading-relaxed text-text-muted">{description}</p>
          <p className="text-sm text-text-muted">
            Disponible pour échanger sur des projets techniques ou des missions freelance.
          </p>

          <div className="tac-card rounded-[4px] border border-border bg-surface p-5 space-y-4">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent/50 mb-1">
                  GitHub
                </dt>
                <dd>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text/80 transition duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    Profil GitHub ↗
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent/50 mb-1">
                  LinkedIn
                </dt>
                <dd>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text/80 transition duration-200 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    Profil LinkedIn ↗
                  </a>
                </dd>
              </div>
            </dl>
            <div className="border-t border-border/40 pt-4">
              {renderCTA({ label: 'Voir les projets', href: '#production' })}
            </div>
          </div>
        </div>

        {/* Right: contact form */}
        <ContactForm accessKey={formAccessKey} />
      </div>
    </section>
  );
}

function renderCTA(cta: { label: string; href: string; external?: boolean }) {
  const className =
    'inline-flex items-center justify-center gap-2 rounded-[3px] border border-accent/30 bg-accent/5 px-5 py-2.5 font-mono text-sm font-semibold uppercase tracking-[0.1em] text-accent/75 transition duration-200 hover:border-accent/55 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';

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
