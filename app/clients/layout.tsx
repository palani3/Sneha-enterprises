import type { Metadata } from 'next';
import { SITE } from '../lib/seo.config';

export const metadata: Metadata = {
  title: 'Our Clients',
  description:
    'Sneha Enterprises serves 100+ prestigious clients across Bengaluru — Bosch, Flipkart, Deloitte, HDFC, IIMB, Baptist Hospital and many more. Trusted HVAC partner for corporates, hospitals, hotels, institutions and industries.',
  keywords: ['HVAC clients Bangalore', 'AC installation clients', 'Blue Star dealer clients', 'Sneha Enterprises clients'],
  alternates: { canonical: `${SITE.url}/clients` },
  openGraph: {
    title: `Our Clients | ${SITE.name}`,
    description: '100+ prestigious clients trust Sneha Enterprises for HVAC solutions across Bengaluru.',
    url: `${SITE.url}/clients`,
  },
};

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
