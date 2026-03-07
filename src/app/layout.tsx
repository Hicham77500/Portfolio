import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Sans } from 'next/font/google';
import '@/styles/design-tokens.css';
import './globals.css';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const body = IBM_Plex_Sans({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'Hicham Guendouz • Fullstack Data/IA Engineer',
  description: 'Portfolio minimaliste et crédible pour un développeur fullstack orienté data & IA.',
  openGraph: {
    title: 'Hicham Guendouz • Fullstack Data/IA Engineer',
    description: 'Expériences premium, craft et IA pragmatique.',
    url: 'https://example.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@hicham_dev',
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
