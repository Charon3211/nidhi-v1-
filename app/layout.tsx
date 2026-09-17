import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { CursorGlow } from '@/components/cursor-glow';
import { SiteHeader } from '@/components/site-header';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Nidhi — Product, Brand, Experience',
    template: '%s | Nidhi',
  },
  description: 'A portfolio of product, brand, and digital experiences designed with intent.',
  keywords: ['product design', 'brand identity', 'digital experience', 'portfolio'],

  openGraph: {
    title: 'Nidhi — Product, Brand, Experience',
    description: 'A portfolio of product, brand, and digital experiences designed with intent.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0b0b0d',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <SiteHeader />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
