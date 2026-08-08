import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { PAGE_SEO, SITE, breadcrumbJsonLd } from './lib/seo.config';
import HeroSection from './components/home/HeroSection';

// Below-the-fold sections: code-split into their own chunks so their
// (GSAP-heavy) client JS isn't part of the initial load. Still server-
// rendered into the static HTML, so SEO/LCP are unaffected.
const ServicesOverview = dynamic(() => import('./components/home/ServicesOverview'));
const ProductsShowcase = dynamic(() => import('./components/home/ProductsShowcase'));
const OurClients = dynamic(() => import('./components/home/OurClients'));

const p = PAGE_SEO.home;

export const metadata: Metadata = {
  title: p.title,
  description: p.description,
  alternates: { canonical: p.canonical },
  openGraph: { title: p.title, description: p.description, url: p.canonical },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Home', url: SITE.url },
]);

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <HeroSection />
      <ServicesOverview />
      <ProductsShowcase />
      <OurClients />
    </>
  );
}
