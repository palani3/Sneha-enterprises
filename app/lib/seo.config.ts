/* ─────────────────────────────────────────────────────────────────
   SEO Configuration — edit this file to update all SEO site-wide
   ───────────────────────────────────────────────────────────────── */

export const SITE = {
  name: 'Sneha Enterprises',
  url: 'https://www.sneha-enterprises.com',
  tagline: 'HVAC & AC Solutions in Bangalore Since 1996',
  founded: '1996',
  phone: '+91 98802 83130',
  phoneRaw: '+91-98802-83130',
  email: 'Sales@sneha-enterprises.com',
  city: 'Bangalore',
  state: 'Karnataka',
  country: 'IN',
  locale: 'en_IN',
  ogImage: '/img/og-image.png',
  logo: '/img/company_logo/Logo.png',
  favicon: '/img/company_logo/Logo.png',
  geo: {
    latitude: '12.9716',
    longitude: '77.5946',
    placeName: 'Bangalore, Karnataka, India',
    region: 'IN-KA',
  },
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
    title: `${SITE.tagline}`,
    description: `${SITE.name} — Bangalore's #1 HVAC & Air Conditioning experts since 1996. Blue Star authorized dealer offering AC installation, service, AMC, VRF systems, chillers, cassette & ducted AC for commercial, industrial & residential buildings.`,
    canonical: SITE.url,
  },
  about: {
    title: 'About Us',
    description: `${SITE.name} was established in 1996 in Bangalore. Expert HVAC & Air Conditioning contractor for commercial buildings and industries. Blue Star authorized dealer with 28+ years of experience, 50+ engineers, and 10,000+ tons of installed capacity.`,
    canonical: `${SITE.url}/about`,
    keywords: ['about Sneha Enterprises', 'HVAC company Bangalore', 'AC contractor Bangalore since 1996', 'Blue Star authorized dealer', 'commercial HVAC Bangalore'],
  },
  services: {
    title: 'Our Services',
    description: 'Comprehensive HVAC & AC services in Bangalore — AC installation, service & maintenance, VRF systems, chilled water plants, ventilation, AMC contracts, and 24/7 customer support. Blue Star authorized service center.',
    canonical: `${SITE.url}/services`,
    keywords: ['AC installation Bangalore', 'AC service Bangalore', 'AC repair Bangalore', 'AC AMC Bangalore', 'VRF installation Bangalore', 'chiller installation Bangalore', '24/7 AC support Bangalore'],
  },
  products: {
    title: 'AC Products',
    description: 'Explore our full range of Blue Star air conditioning products — Cassette AC, Split AC, Chiller AC, VRF Systems, Screw & Turbo Chillers, Package & Ductable AC. Best prices, expert installation, full after-sales service in Bangalore.',
    canonical: `${SITE.url}/products`,
    keywords: ['Blue Star AC Bangalore', 'cassette AC Bangalore', 'split AC Bangalore', 'chiller AC Bangalore', 'VRF system Bangalore', 'package AC Bangalore', 'ductable AC Bangalore'],
  },
  contact: {
    title: 'Contact Us',
    description: `Contact ${SITE.name} for AC installation, service, AMC, and HVAC solutions in Bangalore. Call ${SITE.phone} or email ${SITE.email}. 24/7 customer support available.`,
    canonical: `${SITE.url}/contact`,
    keywords: ['contact Sneha Enterprises', 'AC service contact Bangalore', 'free AC quote Bangalore', 'Blue Star dealer contact Bangalore'],
  },
  gallery: {
    title: 'Gallery',
    description: 'View our project gallery — AC installations, commercial HVAC systems, chiller plants, VRF systems completed by Sneha Enterprises across Bangalore. Corporates, hospitals, hotels, institutions and industries.',
    canonical: `${SITE.url}/gallery`,
    keywords: ['AC installation gallery Bangalore', 'HVAC project gallery', 'commercial AC installation photos', 'Sneha Enterprises projects'],
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

/* ── Breadcrumb JSON-LD helper ───────────────────────────────── */
export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/* ── Services JSON-LD ────────────────────────────────────────── */
export const SERVICES_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'HVAC Installation and Maintenance',
  provider: {
    '@type': 'LocalBusiness',
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phoneRaw,
  },
  areaServed: { '@type': 'City', name: SITE.city },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Installation', description: 'Professional installation of all types of air conditioning systems including Split AC, Cassette AC, VRF, and Ducted AC for residential, commercial and industrial spaces.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Service & Repair', description: 'Expert AC servicing, gas charging, compressor repair, PCB repair, and full system overhaul for all brands.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Annual Maintenance Contract (AMC)', description: 'Comprehensive AMC plans covering preventive maintenance, emergency breakdown support, and spare parts for commercial HVAC systems.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VRF System Design & Installation', description: 'Complete Variable Refrigerant Flow system design, installation, and commissioning for large buildings.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chiller Plant Installation', description: 'Water-cooled and air-cooled chiller system installation for large-scale commercial and industrial facilities.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ducting & Ventilation', description: 'GI and pre-insulated duct fabrication, installation of fresh air handling units and exhaust ventilation systems.' } },
    ],
  },
};

/* ── FAQ JSON-LD for Services page ───────────────────────────── */
export const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What brands of AC does Sneha Enterprises install?',
      acceptedAnswer: { '@type': 'Answer', text: 'We are authorized dealers and installers for Blue Star air conditioning systems. We service all major brands including Daikin, Carrier, Mitsubishi, Hitachi, and Voltas.' },
    },
    {
      '@type': 'Question',
      name: 'Do you provide AC AMC services in Bangalore?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer comprehensive Annual Maintenance Contracts (AMC) for all types of AC systems including Split, Cassette, VRF, Ducted, and Chiller units across Bangalore.' },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of AC installation in Bangalore?',
      acceptedAnswer: { '@type': 'Answer', text: 'AC installation costs vary depending on the type and tonnage. Contact us at +91 98802 83130 for a free site survey and no-obligation quotation.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer 24/7 AC repair services?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, Sneha Enterprises provides round-the-clock emergency AC repair and breakdown support across Bangalore for all our AMC clients.' },
    },
    {
      '@type': 'Question',
      name: 'What areas in Bangalore do you serve?',
      acceptedAnswer: { '@type': 'Answer', text: 'We serve all areas of Bangalore and surrounding cities including Whitefield, Electronic City, Koramangala, Indiranagar, HSR Layout, Marathahalli, JP Nagar, Yelahanka, and more.' },
    },
  ],
};
