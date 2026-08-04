import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import '@/styles/design-tokens.css';
import './globals.css';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const body = IBM_Plex_Sans({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500'] });
const mono = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '500', '600'] });

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

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
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: 'any' },
      { url: `${basePath}/favicon.svg`, type: 'image/svg+xml' },
      { url: `${basePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${basePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: `${basePath}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-base-900 text-text">
        <a href="#main" className="skip-link">Passer au contenu</a>
        <div className="bg-base-900 text-text">
          {children}
        </div>
      </body>
    </html>
  );
}
