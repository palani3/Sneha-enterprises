import type { Metadata } from 'next';
import { SITE, breadcrumbJsonLd } from '../lib/seo.config';

export const metadata: Metadata = {
  title: 'Our Clients',
  description:
    'Sneha Enterprises serves 100+ prestigious clients across Bengaluru — Google, Bosch, Flipkart, Deloitte, Microsoft, HDFC, Baptist Hospital and many more. Trusted HVAC partner for corporates, hospitals, hotels and industries.',
  keywords: ['HVAC clients Bangalore', 'AC installation clients', 'Blue Star dealer clients', 'Sneha Enterprises clients', 'corporate AC Bangalore'],
  alternates: { canonical: `${SITE.url}/clients` },
  openGraph: {
    title: `Our Clients | ${SITE.name}`,
    description: '100+ prestigious clients trust Sneha Enterprises for HVAC solutions across Bengaluru.',
    url: `${SITE.url}/clients`,
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: 'Home', url: SITE.url },
  { name: 'Our Clients', url: `${SITE.url}/clients` },
]);

export default function ClientsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {children}
    </>
  );
}
