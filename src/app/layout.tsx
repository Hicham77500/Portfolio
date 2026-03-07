import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Sans } from 'next/font/google';
import '@/styles/design-tokens.css';
import './globals.css';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const body = IBM_Plex_Sans({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'Hicham - Fullstack Developer (Data & Automation)',
  description:
    'Développeur fullstack spécialisé en React, Next.js, Node.js et Python. Expérience en data pipelines, microservices et automatisation.',
  keywords: [
    'développeur fullstack',
    'react developer',
    'next.js developer',
    'node.js backend',
    'data pipeline',
    'python data',
    'apache spark',
    'microservices architecture',
    'docker backend',
  ],
  openGraph: {
    title: 'Hicham - Fullstack Developer (Data & Automation)',
    description:
      'Développement d\'applications web, pipelines de données et systèmes backend scalables.',
    url: 'https://example.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@hicham_dev',
    title: 'Hicham - Fullstack Developer (Data & Automation)',
    description:
      'React, Next.js, Node.js, Python, data pipelines et microservices pour des applications web robustes.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-base-900 text-text">
        <a href="#main" className="skip-link">Passer au contenu</a>
        <div className="bg-base-900 text-text">
          {children}
        </div>
      </body>
    </html>
  );
}
