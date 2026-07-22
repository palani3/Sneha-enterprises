import type { Metadata } from 'next';
import Footer from './components/Footer';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import './globals.css';
import { SITE, SITE_DESCRIPTION, SITE_KEYWORDS, JSON_LD } from './lib/seo.config';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,

  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE_DESCRIPTION,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: `${SITE.name} — HVAC & AC Solutions Bangalore` }],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE_DESCRIPTION,
    images: [SITE.ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },

  alternates: { canonical: SITE.url },

  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
