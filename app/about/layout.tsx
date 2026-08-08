import type { Metadata } from 'next';
import { PAGE_SEO, SITE, breadcrumbJsonLd } from '../lib/seo.config';

const p = PAGE_SEO.about;

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
  { name: 'About Us', url: `${SITE.url}/about` },
]);

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
