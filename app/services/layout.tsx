import type { Metadata } from 'next';
import { PAGE_SEO, SITE, breadcrumbJsonLd, SERVICES_JSON_LD, FAQ_JSON_LD } from '../lib/seo.config';

const p = PAGE_SEO.services;

export const metadata: Metadata = {
  title: p.title,
  description: p.description,
  keywords: [...p.keywords],
  alternates: { canonical: p.canonical },
  openGraph: {
    title: `${p.title} | ${SITE.name}`,
    description: p.description,
    url: p.canonical,
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Home', url: SITE.url },
  { name: 'Services', url: `${SITE.url}/services` },
]);

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
      {children}
    </>
  );
}
