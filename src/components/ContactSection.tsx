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
    <section id={id} aria-labelledby={resolvedHeadingId} className="py-14 lg:py-20 border-t border-border/60 text-text">
      <SectionHeader eyebrow={eyebrow} title={title} headingId={resolvedHeadingId} />
      <div className="content grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-6 text-base text-text-muted">
          <p>{description}</p>
          <p className="text-sm text-text-muted">
            Disponible pour échanger sur des projets techniques ou des missions freelance.
          </p>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted">GitHub</dt>
                <dd>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text hover:text-accent transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    Profil GitHub
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-mono uppercase tracking-[0.25em] text-text-muted">LinkedIn</dt>
                <dd>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text hover:text-accent transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                  >
                    Profil LinkedIn
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-6">{renderCTA({ label: 'Voir les projets', href: '#projects' })}</div>
          </div>
        </div>
        <ContactForm accessKey={formAccessKey} />
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
