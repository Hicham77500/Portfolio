import type { CaseStudy } from '@/data/portfolio';

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface-raised p-6">
      <h3 className="text-xl font-semibold text-text">{caseStudy.title}</h3>

      <div className="mt-4 space-y-4">
        <Field label="Contexte" value={caseStudy.context} />

        <div>
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-text-muted">Architecture</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-text">
            {caseStudy.architecture.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-text-muted">Stack</p>
          <p className="mt-1 text-sm text-text">{caseStudy.stack.join(' / ')}</p>
        </div>

        {caseStudy.repoUrl && (
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-text-muted">Repo</p>
            <a
              href={caseStudy.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex text-sm text-text underline-offset-2 transition hover:text-accent hover:underline"
            >
              {caseStudy.repoUrl}
            </a>
          </div>
        )}

        <Field label="Ce que le projet démontre" value={caseStudy.demonstrates} />
      </div>
    </article>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-text-muted">{label}</p>
      <p className="mt-1 text-sm text-text">{value}</p>
    </div>
  );
}
