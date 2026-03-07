"use client";

import { FormEvent, useState } from 'react';

const fieldClassName =
  'w-full rounded-2xl border border-border bg-surface/60 px-4 py-3 text-sm text-text placeholder:text-text-muted transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus';

const labelClassName = 'text-xs font-mono uppercase tracking-[0.25em] text-text-muted';

const statusStyles: Record<string, string> = {
  success: 'text-accent',
  error: 'text-red-300',
  idle: 'text-text-muted',
  submitting: 'text-text-muted',
};

export type ContactFormProps = {
  accessKey?: string;
};

export function ContactForm({ accessKey }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!accessKey) {
      setStatus('error');
      setStatusMessage("Ajoute ta clé NEXT_PUBLIC_WEB3FORMS_KEY pour activer l'envoi.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      access_key: accessKey,
      name: (formData.get('name') as string) ?? '',
      email: (formData.get('email') as string) ?? '',
      company: (formData.get('company') as string) ?? '',
      subject: (formData.get('subject') as string) ?? 'Message portfolio',
      message: (formData.get('message') as string) ?? '',
      page: typeof window !== 'undefined' ? window.location.href : '',
      botcheck: '',
    };

    setStatus('submitting');
    setStatusMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result?.message || "Impossible d'envoyer le message pour le moment.");
      }

      setStatus('success');
      setStatusMessage('Message envoyé, merci. Je reviens vers toi rapidement.');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
      setStatusMessage("Une erreur est survenue. Tu peux aussi me contacter via LinkedIn.");
    } finally {
      window.setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }
  };

  const isSubmitting = status === 'submitting';
  const isDisabled = isSubmitting || !accessKey;

  return (
    <form
      className="rounded-2xl border border-border bg-surface-raised p-6 shadow-soft"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClassName}>
            Nom complet
          </label>
          <input id="name" name="name" type="text" className={fieldClassName} required />
        </div>
        <div>
          <label htmlFor="email" className={labelClassName}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            className={fieldClassName}
            required
          />
        </div>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClassName}>
            Société / Projet
          </label>
          <input id="company" name="company" type="text" className={fieldClassName} />
        </div>
        <div>
          <label htmlFor="subject" className={labelClassName}>
            Sujet
          </label>
          <input id="subject" name="subject" type="text" className={fieldClassName} required />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="message" className={labelClassName}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${fieldClassName} resize-none`}
          required
        />
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className={`text-xs ${statusStyles[status]}`} aria-live="polite">
          {statusMessage ?? "Réponse sous 24h. Je suis aussi dispo sur LinkedIn."}
        </p>
        <button
          type="submit"
          disabled={isDisabled}
          className={`inline-flex items-center justify-center rounded-pill px-6 py-3 text-sm font-semibold transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus ${
            isDisabled ? 'cursor-not-allowed border border-border/60 bg-transparent text-text-muted' : 'bg-accent text-base-900 hover:bg-accent/90'
          }`}
        >
          {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
        </button>
      </div>
    </form>
  );
}
