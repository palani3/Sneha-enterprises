import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Link,
} from '@react-pdf/renderer';
import { PRODUCTS } from '../../lib/productsData';
import { CLIENT_LIST } from '../../lib/clientList';

/* ── Types ─────────────────────────────────────────────────────── */
export interface BrochureImageData {
  logo: string;
  hero: string;
  products: Record<string, string>;
  clients: Record<string, string>;
}

/* ── Color System ──────────────────────────────────────────────── */
const C = {
  primary:    '#0ea5e9',
  primaryDk:  '#0369a1',
  dark:       '#0f172a',
  slate:      '#334155',
  gray:       '#64748b',
  lightGray:  '#94a3b8',
  white:      '#ffffff',
  bg:         '#f8fafc',
  bgBlue:     '#f0f9ff',
  border:     '#e2e8f0',
  green:      '#10b981',
  amber:      '#f59e0b',
  violet:     '#8b5cf6',
  rose:       '#fb7185',
  cyan:       '#22d3ee',
};

/* ── Styles ────────────────────────────────────────────────────── */
const s = StyleSheet.create({
  /* Pages */
  page: { fontFamily: 'Helvetica', fontSize: 9, color: C.dark, backgroundColor: C.white, paddingBottom: 50 },
  coverPage: { fontFamily: 'Helvetica', backgroundColor: C.white, justifyContent: 'space-between' },

  /* ─── Cover ─── */
  coverTop: { height: 8, backgroundColor: C.primary },
  coverBody: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 50 },
  coverLogo: { width: 72, height: 72, marginBottom: 20, objectFit: 'contain' },
  coverName: { fontSize: 32, fontWeight: 'bold', color: C.dark, letterSpacing: 1, marginBottom: 6 },
  coverTag: { fontSize: 12, color: C.gray, marginBottom: 24 },
  coverLine: { width: 80, height: 3, backgroundColor: C.primary, borderRadius: 2, marginBottom: 24 },
  coverLabel: { fontSize: 18, fontWeight: 'bold', color: C.primary, letterSpacing: 4, marginBottom: 36 },
  coverStats: { flexDirection: 'row', gap: 14, marginBottom: 36 },
  coverStat: { alignItems: 'center', padding: 14, width: 110, backgroundColor: C.bgBlue, borderRadius: 8, borderWidth: 1, borderColor: '#bae6fd' },
  coverStatVal: { fontSize: 20, fontWeight: 'bold', color: C.primary, marginBottom: 2 },
  coverStatLbl: { fontSize: 7, color: C.gray, textTransform: 'uppercase', textAlign: 'center' },
  coverFooter: { padding: 20, alignItems: 'center', borderTopWidth: 1, borderTopColor: C.border },
  coverContact: { fontSize: 9, color: C.gray },

  /* ─── Page Header ─── */
  hdr: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 32, paddingVertical: 10, backgroundColor: C.bgBlue, borderBottomWidth: 1, borderBottomColor: C.border },
  hdrLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  hdrLogo: { width: 22, height: 22, objectFit: 'contain' },
  hdrTitle: { fontSize: 10, fontWeight: 'bold', color: C.dark },
  hdrRight: { fontSize: 7, color: C.gray, textTransform: 'uppercase', letterSpacing: 1 },

  /* ─── Section Title ─── */
  secTitle: { fontSize: 18, fontWeight: 'bold', color: C.dark, paddingHorizontal: 32, paddingTop: 22, marginBottom: 3 },
  secLine: { width: 44, height: 2.5, backgroundColor: C.primary, marginLeft: 32, borderRadius: 2, marginBottom: 5 },
  secSub: { fontSize: 9, color: C.gray, paddingHorizontal: 32, marginBottom: 14 },

  /* ─── About Blocks ─── */
  aboutRow: { flexDirection: 'row', paddingHorizontal: 32, gap: 10, marginBottom: 12 },
  aboutCard: { flex: 1, padding: 14, borderRadius: 8, backgroundColor: C.bg, borderLeftWidth: 3 },
  aboutLbl: { fontSize: 8, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 4, letterSpacing: 0.5 },
  aboutTxt: { fontSize: 8, color: C.gray, lineHeight: 1.6 },

  /* ─── KPI Row ─── */
  kpiRow: { flexDirection: 'row', paddingHorizontal: 32, gap: 8, marginBottom: 16 },
  kpiCard: { flex: 1, alignItems: 'center', padding: 10, borderRadius: 6, backgroundColor: C.bgBlue, borderWidth: 1, borderColor: '#bae6fd' },
  kpiVal: { fontSize: 14, fontWeight: 'bold', color: C.primary, marginBottom: 1 },
  kpiLbl: { fontSize: 6.5, color: C.gray, textTransform: 'uppercase', textAlign: 'center' },

  /* ─── Capability Grid ─── */
  capGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 32, gap: 8, marginBottom: 16 },
  capCard: { width: '31%', padding: 10, borderRadius: 6, backgroundColor: C.bg, borderWidth: 1, borderColor: C.border },
  capNum: { fontSize: 9, fontWeight: 'bold', color: C.primary, marginBottom: 2 },
  capLbl: { fontSize: 8, fontWeight: 'bold', color: C.dark, marginBottom: 2 },
  capDesc: { fontSize: 7, color: C.gray, lineHeight: 1.4 },

  /* ─── Product Card ─── */
  prodWrap: { marginHorizontal: 32, marginBottom: 16, borderRadius: 8, borderWidth: 1, borderColor: C.border, overflow: 'hidden' },
  prodImgWrap: { height: 130, backgroundColor: C.bg, alignItems: 'center', justifyContent: 'center', padding: 8 },
  prodImg: { maxHeight: 110, maxWidth: '70%', objectFit: 'contain' },
  prodHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 8, backgroundColor: C.bgBlue },
  prodNum: { fontSize: 20, fontWeight: 'bold', opacity: 0.2 },
  prodBadge: { fontSize: 7, fontWeight: 'bold', color: C.white, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, textTransform: 'uppercase', letterSpacing: 0.5 },
  prodTitle: { fontSize: 13, fontWeight: 'bold', color: C.dark, paddingHorizontal: 14, paddingTop: 8, marginBottom: 4 },
  prodTag: { fontSize: 8, color: C.primary, paddingHorizontal: 14, marginBottom: 6, fontWeight: 'bold' },
  prodDesc: { fontSize: 8, color: C.gray, paddingHorizontal: 14, lineHeight: 1.5, marginBottom: 10 },

  /* Spec Table */
  specWrap: { marginHorizontal: 14, marginBottom: 10, borderRadius: 6, borderWidth: 1, borderColor: C.border, overflow: 'hidden' },
  specRow: { flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: C.border },
  specRowAlt: { flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: C.border, backgroundColor: C.bg },
  specLbl: { width: '44%', paddingVertical: 5, paddingHorizontal: 8, fontSize: 7.5, fontWeight: 'bold', color: C.gray },
  specVal: { width: '56%', paddingVertical: 5, paddingHorizontal: 8, fontSize: 7.5, color: C.dark },

  /* Features Grid */
  featGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 14, paddingBottom: 14, gap: 6 },
  featCard: { width: '48%', padding: 8, backgroundColor: C.bg, borderRadius: 4, borderWidth: 0.5, borderColor: C.border },
  featLbl: { fontSize: 7.5, fontWeight: 'bold', color: C.dark, marginBottom: 2 },
  featDesc: { fontSize: 6.5, color: C.gray, lineHeight: 1.4 },

  /* ─── Service Card ─── */
  svcCard: { marginHorizontal: 32, marginBottom: 12, padding: 14, borderRadius: 8, borderWidth: 1, borderColor: C.border, backgroundColor: C.bg },
  svcHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  svcTitle: { fontSize: 11, fontWeight: 'bold', color: C.dark },
  svcBadge: { fontSize: 6.5, fontWeight: 'bold', color: C.white, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 8, textTransform: 'uppercase' },
  svcDesc: { fontSize: 8, color: C.gray, lineHeight: 1.5, marginBottom: 8 },
  svcChips: { flexDirection: 'row', flexWrap: 'wrap', gap: 4 },
  svcChip: { fontSize: 7, color: C.primaryDk, backgroundColor: C.bgBlue, paddingHorizontal: 6, paddingVertical: 3, borderRadius: 4, borderWidth: 0.5, borderColor: '#bae6fd' },

  /* ─── CTA / Contact ─── */
  cta: { marginHorizontal: 32, marginTop: 12, padding: 24, borderRadius: 10, backgroundColor: C.dark, alignItems: 'center' },
  ctaTitle: { fontSize: 16, fontWeight: 'bold', color: C.white, marginBottom: 6 },
  ctaSub: { fontSize: 9, color: C.lightGray, marginBottom: 14, textAlign: 'center' },
  ctaRow: { flexDirection: 'row', gap: 24, marginBottom: 10 },
  ctaItem: { fontSize: 9, fontWeight: 'bold', color: C.primary },
  ctaUrl: { fontSize: 8, color: '#7dd3fc' },

  /* ─── Sectors ─── */
  sectorRow: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 32, gap: 6, marginBottom: 16 },
  sectorChip: { fontSize: 7.5, fontWeight: 'bold', color: C.slate, backgroundColor: C.bg, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 14, borderWidth: 1, borderColor: C.border },

  /* ─── Hero Image ─── */
  heroImgWrap: { height: 160, marginHorizontal: 32, marginTop: 10, marginBottom: 10, borderRadius: 10, overflow: 'hidden', backgroundColor: C.bg },
  heroImg: { width: '100%', height: '100%', objectFit: 'cover' },

  /* ─── Clients Grid ─── */
  clientGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 32, gap: 8, marginBottom: 16 },
  clientCard: { width: '22%', height: 50, padding: 6, alignItems: 'center', justifyContent: 'center', borderRadius: 6, borderWidth: 1, borderColor: C.border, backgroundColor: C.white },
  clientImg: { maxWidth: '90%', maxHeight: 36, objectFit: 'contain' },
  clientName: { fontSize: 5.5, color: C.gray, textAlign: 'center', marginTop: 2 },

  /* ─── Contact Section ─── */
  contactGrid: { flexDirection: 'row', gap: 12, marginHorizontal: 32, marginBottom: 14 },
  contactCard: { flex: 1, padding: 12, borderRadius: 8, borderWidth: 1, borderColor: C.border, backgroundColor: C.bg },
  contactCardTitle: { fontSize: 9, fontWeight: 'bold', color: C.primary, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 },
  contactItem: { fontSize: 8, color: C.slate, marginBottom: 3, lineHeight: 1.5 },
  contactItemBold: { fontSize: 8, fontWeight: 'bold', color: C.dark, marginBottom: 3 },

  /* ─── Footer ─── */
  ftr: { position: 'absolute', bottom: 16, left: 32, right: 32, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 0.5, borderTopColor: C.border, paddingTop: 6 },
  ftrL: { fontSize: 7, color: C.lightGray },
  ftrR: { fontSize: 7, color: C.primary, fontWeight: 'bold' },
});

/* ── Services data ─────────────────────────────────────────────── */
const SERVICES = [
  { title: 'AC Installation', badge: 'MOST POPULAR', color: '#38bdf8', desc: 'We supply and install all types of air conditioning systems — split, cassette, VRF, chilled water. Certified engineers ensure flawless installation with full handover documentation.', chips: ['All System Types', 'Site Survey → Install', '45+ Engineers', 'Full Documentation'] },
  { title: 'Service & Maintenance', badge: 'ESSENTIAL', color: '#34d399', desc: 'Repair and maintenance at regular intervals. 45-strong team covers all brands with genuine spare parts and preventive maintenance schedules.', chips: ['All Brands', 'Genuine OEM Parts', '4-Hr Response (AMC)', 'Performance Reports'] },
  { title: 'Hot & Cold Solutions', badge: 'YEAR-ROUND', color: '#fb923c', desc: 'Heat-pump and dual-mode systems deliver year-round climate comfort with energy-efficient operation and climate-adaptive technology.', chips: ['Heating + Cooling', '4.5 COP Heating', '60% Lower Cost', 'Smart Control'] },
  { title: 'Safety & Secure', badge: 'YOUR SAFETY', color: '#c084fc', desc: 'All engineers are vaccinated, equipped with PPE, and sanitize the work area. Background-checked with photo ID verification.', chips: ['Vaccinated Team', 'Full PPE', 'ID Verified', 'Area Sanitized'] },
  { title: 'Sales & Consultation', badge: 'EXPERT ADVICE', color: '#22d3ee', desc: 'Free site visit, cooling load calculation, product sizing and budget-optimised solution design — no pressure.', chips: ['Free Site Visit', 'ASHRAE Sizing', 'Dedicated Manager'] },
  { title: '24/7 Customer Care', badge: 'ALWAYS ON', color: '#fb7185', desc: 'Dedicated service team for every complaint. Round-the-clock emergency support with real-time tracking.', chips: ['24/7/365', '2-Hr Emergency', 'Full History'] },
];

/* ── Capabilities ──────────────────────────────────────────────── */
const CAPABILITIES = [
  { label: 'VRF System', desc: 'Variable Refrigerant Flow for energy-efficient large-scale cooling' },
  { label: 'Ducted & Packaged ACs', desc: 'Tailored for mid-scale offices, retail and commercial spaces' },
  { label: 'Chilled Water System', desc: 'High-capacity central cooling for large complexes' },
  { label: 'Ventilation System', desc: 'Fresh-air management for healthy indoor environments' },
  { label: 'Installation', desc: 'End-to-end project delivery by certified engineers' },
  { label: 'Annual Maintenance', desc: '24/7 support & preventive maintenance programs' },
];

const SECTORS = ['Corporates', 'Hospitals', 'Hotels', 'Institutions', 'Industries', 'Data Centres'];

/* ══════════════════════════════════════════════════════════════════
   BROCHURE PDF DOCUMENT
   ══════════════════════════════════════════════════════════════════ */
const BrochurePDF = ({ images }: { images: BrochureImageData }) => {
  const years = new Date().getFullYear() - 1996;

  return (
    <Document title="Sneha Enterprises - Company Brochure" author="Sneha Enterprises" subject="HVAC & AC Solutions Bangalore">

      {/* ══════════════ PAGE 1: COVER ══════════════ */}
      <Page size="A4" style={s.coverPage}>
        <View style={s.coverTop} />
        <View style={s.coverBody}>
          {images.logo && <Image src={images.logo} style={s.coverLogo} />}
          <Text style={s.coverName}>SNEHA ENTERPRISES</Text>
          <Text style={s.coverTag}>Blue Star Authorized Dealer · Bangalore · Est. 1996</Text>
          <View style={s.coverLine} />
          <Text style={s.coverLabel}>COMPANY BROCHURE</Text>

          {/* Hero image */}
          {images.hero && (
            <View style={s.heroImgWrap}>
              <Image src={images.hero} style={s.heroImg} />
            </View>
          )}

          <View style={s.coverStats}>
            {[
              { v: `${years}+`, l: 'Years Experience' },
              { v: '10,000+', l: 'Tons Installed' },
              { v: '45+', l: 'Engineers' },
              { v: '100+', l: 'Clients Served' },
            ].map((k) => (
              <View key={k.l} style={s.coverStat}>
                <Text style={s.coverStatVal}>{k.v}</Text>
                <Text style={s.coverStatLbl}>{k.l}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={s.coverFooter}>
          <Text style={s.coverContact}>+91 8792263737 · +91 9880811211 · 080-26760026/28</Text>
          <Text style={{ ...s.coverContact, marginTop: 3 }}>Sales@sneha-enterprises.com · Marketing@sneha-enterprises.com</Text>
          <Text style={{ ...s.coverContact, marginTop: 3 }}>No.733, 13th Cross Rd, 7th Block, Jayanagar, Bengaluru 560082</Text>
        </View>
      </Page>

      {/* ══════════════ PAGE 2: ABOUT + CAPABILITIES ══════════════ */}
      <Page size="A4" style={s.page}>
        <View style={s.hdr}>
          <View style={s.hdrLeft}>
            {images.logo && <Image src={images.logo} style={s.hdrLogo} />}
            <Text style={s.hdrTitle}>Sneha Enterprises</Text>
          </View>
          <Text style={s.hdrRight}>About Us</Text>
        </View>

        <Text style={s.secTitle}>About Us</Text>
        <View style={s.secLine} />
        <Text style={s.secSub}>Bangalore&apos;s trusted HVAC experts since 1996 · Blue Star Authorized Dealer</Text>

        {/* About Cards */}
        <View style={s.aboutRow}>
          <View style={{ ...s.aboutCard, borderLeftColor: C.primary }}>
            <Text style={{ ...s.aboutLbl, color: C.primary }}>Who We Are</Text>
            <Text style={s.aboutTxt}>
              Founded in 1996, Sneha Enterprises is Bangalore&apos;s leading HVAC contractor specializing in commercial and industrial air conditioning. As Blue Star&apos;s authorized dealer with {years}+ years of expertise, we deliver end-to-end solutions from design to commissioning.
            </Text>
          </View>
          <View style={{ ...s.aboutCard, borderLeftColor: C.green }}>
            <Text style={{ ...s.aboutLbl, color: C.green }}>Our Mission</Text>
            <Text style={s.aboutTxt}>
              Maximum client satisfaction through high-quality engineering, service and design. We operate as a single point of contact — from site survey to final commissioning and ongoing maintenance.
            </Text>
          </View>
        </View>

        <View style={s.aboutRow}>
          <View style={{ ...s.aboutCard, borderLeftColor: C.violet }}>
            <Text style={{ ...s.aboutLbl, color: C.violet }}>Expertise</Text>
            <Text style={s.aboutTxt}>
              Our team of 45+ certified engineers handles everything from residential splits to 2,000 TR industrial chillers. Over 10,000+ tons of installed capacity across Karnataka — hospitals, corporates, hotels, data centres and factories.
            </Text>
          </View>
          <View style={{ ...s.aboutCard, borderLeftColor: C.amber }}>
            <Text style={{ ...s.aboutLbl, color: C.amber }}>Why Choose Us</Text>
            <Text style={s.aboutTxt}>
              Blue Star authorized dealer with genuine products. 24/7 customer support. Fastest response time in Bangalore. AMC contracts for worry-free operation. Trusted by 100+ enterprise clients.
            </Text>
          </View>
        </View>

        {/* KPIs */}
        <View style={s.kpiRow}>
          {[
            { v: `${years}+`, l: 'Years' },
            { v: '10,000+', l: 'Tons Installed' },
            { v: '45+', l: 'Engineers' },
            { v: '100+', l: 'Clients' },
            { v: '24/7', l: 'Support' },
            { v: '6', l: 'Product Lines' },
          ].map((k) => (
            <View key={k.l} style={s.kpiCard}>
              <Text style={s.kpiVal}>{k.v}</Text>
              <Text style={s.kpiLbl}>{k.l}</Text>
            </View>
          ))}
        </View>

        {/* Capabilities */}
        <Text style={{ ...s.secTitle, fontSize: 13, paddingTop: 8 }}>Our Capabilities</Text>
        <View style={s.secLine} />

        <View style={s.capGrid}>
          {CAPABILITIES.map((c, i) => (
            <View key={c.label} style={s.capCard}>
              <Text style={s.capNum}>{String(i + 1).padStart(2, '0')}</Text>
              <Text style={s.capLbl}>{c.label}</Text>
              <Text style={s.capDesc}>{c.desc}</Text>
            </View>
          ))}
        </View>

        {/* Sectors */}
        <Text style={{ ...s.secTitle, fontSize: 11, paddingTop: 4 }}>Sectors We Serve</Text>
        <View style={{ ...s.secLine, width: 36, marginBottom: 8 }} />
        <View style={s.sectorRow}>
          {SECTORS.map((sec) => (
            <Text key={sec} style={s.sectorChip}>{sec}</Text>
          ))}
        </View>

        <View style={s.ftr} fixed>
          <Text style={s.ftrL}>SNEHA ENTERPRISES · Blue Star Authorized Dealer · Bangalore</Text>
          <Text style={s.ftrR} render={({ pageNumber }) => `${pageNumber}`} />
        </View>
      </Page>

      {/* ══════════════ PRODUCT PAGES ══════════════ */}
      {PRODUCTS.map((product, idx) => (
        <Page key={product.id} size="A4" style={s.page} wrap>
          <View style={s.hdr}>
            <View style={s.hdrLeft}>
              {images.logo && <Image src={images.logo} style={s.hdrLogo} />}
              <Text style={s.hdrTitle}>Sneha Enterprises</Text>
            </View>
            <Text style={s.hdrRight}>Product Catalogue</Text>
          </View>

          {idx === 0 && (
            <>
              <Text style={s.secTitle}>Our Products</Text>
              <View style={s.secLine} />
              <Text style={s.secSub}>Complete BlueStar air conditioning range — residential splits to industrial chillers</Text>
            </>
          )}

          <View style={s.prodWrap}>
            {/* Product Image */}
            {images.products[product.id] && (
              <View style={s.prodImgWrap}>
                <Image src={images.products[product.id]} style={s.prodImg} />
              </View>
            )}

            {/* Header */}
            <View style={s.prodHead}>
              <Text style={{ ...s.prodNum, color: product.accentColor }}>{product.num}</Text>
              <Text style={{ ...s.prodBadge, backgroundColor: product.accentColor }}>{product.badge}</Text>
            </View>

            {/* Title + Tagline */}
            <Text style={s.prodTitle}>{product.title}</Text>
            <Text style={s.prodTag}>{product.tagline}</Text>
            <Text style={s.prodDesc}>{product.description}</Text>

            {/* Specifications */}
            <View style={s.specWrap}>
              {product.specRows.map((row, i) => (
                <View key={row.label} style={i % 2 === 0 ? s.specRow : s.specRowAlt}>
                  <Text style={s.specLbl}>{row.label}</Text>
                  <Text style={s.specVal}>{row.value}</Text>
                </View>
              ))}
            </View>

            {/* Features */}
            <View style={s.featGrid}>
              {product.features.map((f) => (
                <View key={f.label} style={s.featCard}>
                  <Text style={s.featLbl}>{f.label}</Text>
                  <Text style={s.featDesc}>{f.desc}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={s.ftr} fixed>
            <Text style={s.ftrL}>SNEHA ENTERPRISES · +91 8792263737</Text>
            <Text style={s.ftrR} render={({ pageNumber }) => `${pageNumber}`} />
          </View>
        </Page>
      ))}

      {/* ══════════════ SERVICES PAGE 1 ══════════════ */}
      <Page size="A4" style={s.page}>
        <View style={s.hdr}>
          <View style={s.hdrLeft}>
            {images.logo && <Image src={images.logo} style={s.hdrLogo} />}
            <Text style={s.hdrTitle}>Sneha Enterprises</Text>
          </View>
          <Text style={s.hdrRight}>Services</Text>
        </View>

        <Text style={s.secTitle}>Our Services</Text>
        <View style={s.secLine} />
        <Text style={s.secSub}>Full-spectrum HVAC support — installation, maintenance, consultation and 24/7 care</Text>

        {SERVICES.slice(0, 3).map((svc) => (
          <View key={svc.title} style={s.svcCard}>
            <View style={s.svcHead}>
              <Text style={s.svcTitle}>{svc.title}</Text>
              <Text style={{ ...s.svcBadge, backgroundColor: svc.color }}>{svc.badge}</Text>
            </View>
            <Text style={s.svcDesc}>{svc.desc}</Text>
            <View style={s.svcChips}>
              {svc.chips.map((c) => (
                <Text key={c} style={s.svcChip}>{c}</Text>
              ))}
            </View>
          </View>
        ))}

        <View style={s.ftr} fixed>
          <Text style={s.ftrL}>SNEHA ENTERPRISES · +91 8792263737</Text>
          <Text style={s.ftrR} render={({ pageNumber }) => `${pageNumber}`} />
        </View>
      </Page>

      {/* ══════════════ SERVICES PAGE 2 + CTA ══════════════ */}
      <Page size="A4" style={s.page}>
        <View style={s.hdr}>
          <View style={s.hdrLeft}>
            {images.logo && <Image src={images.logo} style={s.hdrLogo} />}
            <Text style={s.hdrTitle}>Sneha Enterprises</Text>
          </View>
          <Text style={s.hdrRight}>Services</Text>
        </View>

        {SERVICES.slice(3).map((svc) => (
          <View key={svc.title} style={s.svcCard}>
            <View style={s.svcHead}>
              <Text style={s.svcTitle}>{svc.title}</Text>
              <Text style={{ ...s.svcBadge, backgroundColor: svc.color }}>{svc.badge}</Text>
            </View>
            <Text style={s.svcDesc}>{svc.desc}</Text>
            <View style={s.svcChips}>
              {svc.chips.map((c) => (
                <Text key={c} style={s.svcChip}>{c}</Text>
              ))}
            </View>
          </View>
        ))}

        {/* CTA Section */}
        <View style={s.cta}>
          <Text style={s.ctaTitle}>Get a Free Consultation</Text>
          <Text style={s.ctaSub}>
            Our engineers will assess your space, calculate the exact cooling load, and recommend the most energy-efficient solution — free of charge.
          </Text>
          <View style={s.ctaRow}>
            <Text style={s.ctaItem}>+91 8792263737</Text>
            <Text style={s.ctaItem}>+91 9880811211</Text>
            <Text style={s.ctaItem}>080-26760026/28</Text>
          </View>
          <View style={{ ...s.ctaRow, marginBottom: 6 }}>
            <Text style={s.ctaItem}>Sales@sneha-enterprises.com</Text>
            <Text style={s.ctaItem}>Marketing@sneha-enterprises.com</Text>
          </View>
          <Text style={{ fontSize: 8, color: C.lightGray, marginBottom: 8, textAlign: 'center' }}>
            No.733, 13th Cross Rd, 7th Block, Jayanagar, Bengaluru 560082
          </Text>
          <Link src="https://www.sneha-enterprises.com/contact">
            <Text style={s.ctaUrl}>www.sneha-enterprises.com/contact</Text>
          </Link>
        </View>

        <View style={s.ftr} fixed>
          <Text style={s.ftrL}>SNEHA ENTERPRISES · Blue Star Authorized Dealer · Bangalore</Text>
          <Text style={s.ftrR} render={({ pageNumber }) => `${pageNumber}`} />
        </View>
      </Page>

      {/* ══════════════ CLIENTS PAGE ══════════════ */}
      <Page size="A4" style={s.page}>
        <View style={s.hdr}>
          <View style={s.hdrLeft}>
            {images.logo && <Image src={images.logo} style={s.hdrLogo} />}
            <Text style={s.hdrTitle}>Sneha Enterprises</Text>
          </View>
          <Text style={s.hdrRight}>Our Clients</Text>
        </View>

        <Text style={s.secTitle}>Our Trusted Clients</Text>
        <View style={s.secLine} />
        <Text style={s.secSub}>Serving 100+ leading organizations across Bangalore and Karnataka</Text>

        <View style={s.clientGrid}>
          {CLIENT_LIST.map((name) => (
            <View key={name} style={s.clientCard}>
              {images.clients[name] ? (
                <Image src={images.clients[name]} style={s.clientImg} />
              ) : (
                <Text style={{ fontSize: 6, color: C.gray, textAlign: 'center' }}>{name.replace(/-/g, ' ')}</Text>
              )}
            </View>
          ))}
        </View>

        <View style={s.ftr} fixed>
          <Text style={s.ftrL}>SNEHA ENTERPRISES · Blue Star Authorized Dealer · Bangalore</Text>
          <Text style={s.ftrR} render={({ pageNumber }) => `${pageNumber}`} />
        </View>
      </Page>

      {/* ══════════════ CONTACT PAGE ══════════════ */}
      <Page size="A4" style={s.page}>
        <View style={s.hdr}>
          <View style={s.hdrLeft}>
            {images.logo && <Image src={images.logo} style={s.hdrLogo} />}
            <Text style={s.hdrTitle}>Sneha Enterprises</Text>
          </View>
          <Text style={s.hdrRight}>Contact Us</Text>
        </View>

        <Text style={s.secTitle}>Contact Us</Text>
        <View style={s.secLine} />
        <Text style={s.secSub}>Get in touch for enquiries, service requests, or a free consultation</Text>

        <View style={s.contactGrid}>
          <View style={s.contactCard}>
            <Text style={s.contactCardTitle}>Call Us</Text>
            <Text style={s.contactItemBold}>+91 8792263737</Text>
            <Text style={s.contactItemBold}>+91 9880811211</Text>
            <Text style={s.contactItemBold}>080-26760026/28</Text>
          </View>
          <View style={s.contactCard}>
            <Text style={s.contactCardTitle}>Email Us</Text>
            <Text style={s.contactItemBold}>Sales@sneha-enterprises.com</Text>
            <Text style={s.contactItemBold}>Marketing@sneha-enterprises.com</Text>
          </View>
        </View>

        <View style={{ ...s.contactGrid, marginTop: 0 }}>
          <View style={s.contactCard}>
            <Text style={s.contactCardTitle}>Visit Us</Text>
            <Text style={s.contactItemBold}>Sneha Enterprises</Text>
            <Text style={s.contactItem}>No.733, 13th Cross Rd,</Text>
            <Text style={s.contactItem}>7th Block, Jayanagar,</Text>
            <Text style={s.contactItem}>Bengaluru, Karnataka 560082</Text>
          </View>
          <View style={s.contactCard}>
            <Text style={s.contactCardTitle}>Business Hours</Text>
            <Text style={s.contactItem}>Monday – Saturday</Text>
            <Text style={s.contactItemBold}>9:00 AM – 6:30 PM</Text>
            <Text style={{ ...s.contactItem, marginTop: 6 }}>24/7 Emergency Service</Text>
            <Text style={s.contactItemBold}>Available for AMC clients</Text>
          </View>
        </View>

        <View style={{ ...s.cta, marginTop: 20 }}>
          <Text style={s.ctaTitle}>Ready to Get Started?</Text>
          <Text style={s.ctaSub}>
            Call us today for a free site survey and customized HVAC solution proposal.
          </Text>
          <View style={s.ctaRow}>
            <Text style={s.ctaItem}>+91 8792263737</Text>
            <Text style={s.ctaItem}>Sales@sneha-enterprises.com</Text>
          </View>
          <Link src="https://www.sneha-enterprises.com">
            <Text style={s.ctaUrl}>www.sneha-enterprises.com</Text>
          </Link>
        </View>

        <View style={s.ftr} fixed>
          <Text style={s.ftrL}>SNEHA ENTERPRISES · Blue Star Authorized Dealer · Bangalore</Text>
          <Text style={s.ftrR} render={({ pageNumber }) => `${pageNumber}`} />
        </View>
      </Page>

    </Document>
  );
};

export default BrochurePDF;
