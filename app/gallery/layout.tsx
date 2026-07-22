import type { Metadata } from 'next';
import { PAGE_SEO, SITE } from '../lib/seo.config';

const p = PAGE_SEO.gallery;

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

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
