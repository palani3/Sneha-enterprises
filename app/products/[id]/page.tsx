import type { Metadata } from 'next';
import { PRODUCTS } from '../../lib/productsData';
import { SITE } from '../../lib/seo.config';
import ProductDetailClient from './ProductDetailClient';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return {};

  const title = `${product.title} — Blue Star ${product.category}`;
  const description = product.description.slice(0, 155) + '…';

  return {
    title,
    description,
    keywords: [product.title, product.category, 'Blue Star', 'Bangalore', `${product.category} price Bangalore`, `${product.title} installation Bangalore`],
    alternates: { canonical: `${SITE.url}/products/${id}` },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url: `${SITE.url}/products/${id}`,
      images: [{ url: product.image, alt: product.title }],
    },
  };
}

export default async function ProductDetailPage({ params }: Readonly<{ params: Promise<{ id: string }> }>) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  const jsonLd = product ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Blue Star ${product.title}`,
    description: product.description,
    image: `${SITE.url}${product.image}`,
    brand: { '@type': 'Brand', name: 'Blue Star' },
    category: product.category,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: SITE.name, url: SITE.url },
      areaServed: { '@type': 'City', name: 'Bangalore' },
    },
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ProductDetailClient id={id} />
    </>
  );
}
