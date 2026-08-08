import type { MetadataRoute } from 'next';
import { PRODUCTS } from './lib/productsData';

export const dynamic = 'force-static';

const BASE_URL = 'https://www.sneha-enterprises.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const productPages = PRODUCTS.map((p) => ({
    url: `${BASE_URL}/products/${p.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...productPages,
    {
      url: `${BASE_URL}/clients`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
