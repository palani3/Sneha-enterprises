/* ─────────────────────────────────────────────────────────────────
   SEO Configuration — edit this file to update all SEO site-wide
   ───────────────────────────────────────────────────────────────── */

export const SITE = {
  name:        'Sneha Enterprises',
  url:         'https://www.sneha-enterprises.com',
  tagline:     'HVAC & AC Solutions in Bangalore Since 1996',
  founded:     '1996',
  phone:       '+91 98802 83130',
  phoneRaw:    '+91-98802-83130',
  // whatsapp:    '+919880283130',
  email:       'Sales@sneha-enterprises.com',
  city:        'Bangalore',
  state:       'Karnataka',
  country:     'IN',
  locale:      'en_IN',
  ogImage:     '/img/og-image.png',
  logo:        '/img/company_logo/Logo.png',
  favicon:     '/img/company_logo/Logo.png',
} as const;

export const SITE_DESCRIPTION =
  `${SITE.name} — Bangalore's trusted HVAC & Air Conditioning experts since 1996. ` +
  'Blue Star authorized dealer offering AC installation, service, AMC, VRF systems, ' +
  'chillers, ducted AC for commercial & industrial buildings.';

export const SITE_KEYWORDS = [
  'AC installation Bangalore',
  'air conditioning service Bangalore',
  'HVAC solutions Bangalore',
  'Blue Star authorized dealer Bangalore',
  'VRF system Bangalore',
  'chiller AC Bangalore',
  'ducted AC Bangalore',
  'commercial AC installation',
  'industrial HVAC Bangalore',
  'AC AMC Bangalore',
  'split AC installation',
  'cassette AC Bangalore',
  'AC repair Bangalore',
  'HVAC contractor Bangalore',
  'Sneha Enterprises',
  'air conditioning company Bangalore',
];

/* ── Per-page SEO config ──────────────────────────────────────── */
export const PAGE_SEO = {
  home: {
    title:       `${SITE.tagline}`,
    description: `${SITE.name} — Bangalore's #1 HVAC & Air Conditioning experts since 1996. Blue Star authorized dealer offering AC installation, service, AMC, VRF systems, chillers, cassette & ducted AC for commercial, industrial & residential buildings.`,
    canonical:   SITE.url,
  },
  about: {
    title:       'About Us',
    description: `${SITE.name} was established in 1996 in Bangalore. Expert HVAC & Air Conditioning contractor for commercial buildings and industries. Blue Star authorized dealer with 28+ years of experience, 50+ engineers, and 10,000+ tons of installed capacity.`,
    canonical:   `${SITE.url}/about`,
    keywords:    ['about Sneha Enterprises', 'HVAC company Bangalore', 'AC contractor Bangalore since 1996', 'Blue Star authorized dealer', 'commercial HVAC Bangalore'],
  },
  services: {
    title:       'Our Services',
    description: 'Comprehensive HVAC & AC services in Bangalore — AC installation, service & maintenance, VRF systems, chilled water plants, ventilation, AMC contracts, and 24/7 customer support. Blue Star authorized service center.',
    canonical:   `${SITE.url}/services`,
    keywords:    ['AC installation Bangalore', 'AC service Bangalore', 'AC repair Bangalore', 'AC AMC Bangalore', 'VRF installation Bangalore', 'chiller installation Bangalore', '24/7 AC support Bangalore'],
  },
  products: {
    title:       'AC Products',
    description: 'Explore our full range of Blue Star air conditioning products — Cassette AC, Split AC, Chiller AC, VRF Systems, Screw & Turbo Chillers, Package & Ductable AC. Best prices, expert installation, full after-sales service in Bangalore.',
    canonical:   `${SITE.url}/products`,
    keywords:    ['Blue Star AC Bangalore', 'cassette AC Bangalore', 'split AC Bangalore', 'chiller AC Bangalore', 'VRF system Bangalore', 'package AC Bangalore', 'ductable AC Bangalore'],
  },
  contact: {
    title:       'Contact Us',
    description: `Contact ${SITE.name} for AC installation, service, AMC, and HVAC solutions in Bangalore. Call ${SITE.phone} or email ${SITE.email}. 24/7 customer support available.`,
    canonical:   `${SITE.url}/contact`,
    keywords:    ['contact Sneha Enterprises', 'AC service contact Bangalore', 'free AC quote Bangalore', 'Blue Star dealer contact Bangalore'],
  },
  gallery: {
    title:       'Gallery',
    description: 'View our project gallery — AC installations, commercial HVAC systems, chiller plants, VRF systems completed by Sneha Enterprises across Bangalore. Corporates, hospitals, hotels, institutions and industries.',
    canonical:   `${SITE.url}/gallery`,
    keywords:    ['AC installation gallery Bangalore', 'HVAC project gallery', 'commercial AC installation photos', 'Sneha Enterprises projects'],
  },
} as const;

/* ── JSON-LD LocalBusiness schema ────────────────────────────── */
export const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE.url}/#business`,
      name: SITE.name,
      legalName: SITE.name,
      description:
        `${SITE.name} was established in 1996. This Bangalore based company is an expert in Heating Ventilation and Air Conditioning solutions for all types of commercial buildings and industries. Blue Star authorized sales & service dealer.`,
      url: SITE.url,
      logo: { '@type': 'ImageObject', url: `${SITE.url}${SITE.logo}`, width: 300, height: 100 },
      image: `${SITE.url}${SITE.ogImage}`,
      foundingDate: SITE.founded,
      telephone: SITE.phoneRaw,
      email: SITE.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.city,
        addressRegion: SITE.state,
        addressCountry: SITE.country,
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: SITE.phoneRaw,
          contactType: 'customer service',
          availableLanguage: ['English', 'Kannada', 'Hindi'],
          hoursAvailable: { '@type': 'OpeningHoursSpecification', opens: '00:00', closes: '23:59' },
        },
        { '@type': 'ContactPoint', email: SITE.email, contactType: 'sales' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'HVAC Products & Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Installation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Service & Maintenance' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VRF System Installation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chilled Water System' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ducted & Package AC Installation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Annual Maintenance Contract (AMC)' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ventilation System Installation' } },
        ],
      },
      numberOfEmployees: { '@type': 'QuantitativeValue', value: 65 },
      areaServed: { '@type': 'City', name: SITE.city },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { '@id': `${SITE.url}/#business` },
    },
  ],
};
