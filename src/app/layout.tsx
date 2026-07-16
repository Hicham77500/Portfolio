import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Sans } from 'next/font/google';
import '@/styles/design-tokens.css';
import './globals.css';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const body = IBM_Plex_Sans({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://hicham77500.github.io/Portfolio'),
  title: 'Hicham — Fullstack & Mobile Developer',
  description:
    'Développeur fullstack et mobile. Créateur de Reply Fitness (App Store). SwiftUI, React, Next.js, Firebase, Node.js et Python.',
  keywords: [
    'développeur fullstack',
    'développeur iOS',
    'SwiftUI',
    'Reply Fitness',
    'react developer',
    'next.js developer',
    'firebase',
    'node.js backend',
    'python data',
  ],
  openGraph: {
    title: 'Hicham — Fullstack & Mobile Developer',
    description:
      'Applications iOS et web de bout en bout. Reply Fitness disponible sur l’App Store.',
    url: 'https://hicham77500.github.io/Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@hicham_dev',
    title: 'Hicham — Fullstack & Mobile Developer',
    description:
      'SwiftUI, React, Next.js, Firebase — produits publiés, dont Reply Fitness sur l’App Store.',
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
