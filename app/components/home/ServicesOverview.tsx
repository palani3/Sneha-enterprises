'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, CheckCircle2,
  Wrench, Zap, Thermometer, ShieldCheck, BadgeInfo, Headphones,
  SlidersHorizontal,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

import { getYearsExp } from '../../lib/founding';

/* ─── Service Data ─────────────────────────────────────────────── */
const SERVICES = [
  {
    id: 'ac-installation',
    num: '01',
    img: '/img/ourservices/ACInstallation.webp',
    accentColor: '#38bdf8',
    accentDark: '#0ea5e9',
    glowColor: 'rgba(56,189,248,0.35)',
    badge: 'Most Popular',
    category: 'Installation',
    icon: Wrench,
    title: 'AC Installation in Bangalore',
    tagline: 'Split, Cassette, VRF & Ducted AC Installation',
    desc: 'Professional AC installation services in Bangalore — from residential split ACs to commercial VRF systems, cassette units, and chilled water plants. Blue Star authorized installation with certified engineers, full site survey, and load calculation included.',
    highlights: ['Split, Cassette & VRF systems', 'Certified installation engineers', 'Full site survey & load calc', 'Same-day installation available'],
  },
  {
    id: 'service-maintenance',
    num: '02',
    img: '/img/ourservices/ServiceMaintenance.webp',
    accentColor: '#34d399',
    accentDark: '#10b981',
    glowColor: 'rgba(52,211,153,0.35)',
    badge: 'Essential',
    category: 'Maintenance',
    icon: Zap,
    title: 'AC Service & Repair Bangalore',
    tagline: 'Expert AC Servicing, Gas Charging & Repair',
    desc: 'Comprehensive AC service and repair in Bangalore — preventive maintenance, gas charging, compressor repair, PCB repair, and deep cleaning. Our 45+ trained engineers service all brands with genuine Blue Star spare parts.',
    highlights: ['Preventive maintenance schedules', 'Gas charging & compressor repair', 'Genuine Blue Star spare parts', 'Performance audit reports'],
  },
  {
    id: 'hot-cold',
    num: '03',
    img: '/img/ourservices/HotCold.webp',
    accentColor: '#fb923c',
    accentDark: '#f97316',
    glowColor: 'rgba(251,146,60,0.35)',
    badge: 'Year-Round',
    category: 'Climate Control',
    icon: Thermometer,
    title: 'Heating & Cooling Solutions',
    tagline: 'Heat Pump & Dual-Mode HVAC Systems',
    desc: 'Year-round climate control solutions for Bangalore offices and commercial spaces — energy-efficient heat pumps, precision cooling for server rooms, and dual-mode HVAC systems for temperature-sensitive environments.',
    highlights: ['Dual-mode heating & cooling', 'Heat pump technology', 'Server room precision cooling', 'Energy-efficient BEE 5-star rated'],
  },
  {
    id: 'safety-secure',
    num: '04',
    img: '/img/ourservices/Safety.webp',
    accentColor: '#c084fc',
    accentDark: '#a855f7',
    glowColor: 'rgba(192,132,252,0.35)',
    badge: 'Your Safety',
    category: 'Safety',
    icon: ShieldCheck,
    title: 'Safety & Secure Service',
    tagline: 'Background-Verified & Safety-Compliant Engineers',
    desc: 'All Sneha Enterprises engineers are background-verified, fully vaccinated, equipped with safety gear, and sanitize the work area post-service. Every technician carries a verified company ID for your peace of mind.',
    highlights: ['Fully vaccinated team', 'Complete safety gear & PPE', 'Post-service sanitization', 'Background-verified engineers'],
  },
  {
    id: 'sales-marketing',
    num: '05',
    img: '/img/ourservices/Sales.webp',
    accentColor: '#22d3ee',
    accentDark: '#06b6d4',
    glowColor: 'rgba(34,211,238,0.35)',
    badge: 'Expert Advice',
    category: 'Consultation',
    icon: BadgeInfo,
    title: 'Free AC Consultation Bangalore',
    tagline: 'Free Site Survey & AC Load Calculation',
    desc: 'Get expert AC consultation with free site survey and load calculation in Bangalore. Our team recommends the right Blue Star AC system for your space, budget, and energy requirements — no-obligation quotes with flexible payment options.',
    highlights: ['Free site survey & consultation', 'Load calculation & sizing', 'Budget-optimized AC solutions', 'Flexible EMI payment options'],
  },
  {
    id: 'customer-care',
    num: '06',
    img: '/img/ourservices/customer care.webp',
    accentColor: '#fb7185',
    accentDark: '#f43f5e',
    glowColor: 'rgba(251,113,133,0.35)',
    badge: 'Always On',
    category: 'Support',
    icon: Headphones,
    title: '24/7 AC Support Bangalore',
    tagline: 'Round-the-Clock Emergency AC Repair',
    desc: '24/7 emergency AC support across Bangalore — dedicated engineers attend every breakdown call with priority response. Real-time service tracking, same-day resolution for AMC clients, and guaranteed response within 2 hours.',
    highlights: ['24/7 emergency breakdown support', 'Guaranteed 2-hour response', 'Real-time complaint tracking', 'Priority service for AMC clients'],
  },
];

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Installation', value: 'Installation' },
  { label: 'Maintenance', value: 'Maintenance' },
  { label: 'Support', value: 'Support' },
];

/* ─── Service Card ─────────────────────────────────────────────── */
function ServiceCard({ s, index }: Readonly<{ s: typeof SERVICES[0]; index: number }>) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = s.icon;

  useEffect(() => {
    if (!cardRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 50, opacity: 0, duration: 0.65, ease: 'power3.out',
        delay: (index % 3) * 0.08,
        scrollTrigger: { trigger: cardRef.current, start: 'top 90%' },
      });
    }, cardRef);
    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group flex flex-col rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/8 overflow-hidden shadow-sm hover:shadow-2xl dark:hover:shadow-none hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={s.img}
          alt={s.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: `inset 0 0 80px ${s.glowColor}` }}
        />

        {/* Accent top bar */}
        <div
          className="absolute top-0 inset-x-0 h-1"
          style={{ background: `linear-gradient(90deg, ${s.accentColor}, ${s.accentDark})` }}
        />

        {/* Badge */}
        <div className="absolute top-4 right-4">
          <span
            className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md border"
            style={{
              background: `${s.accentColor}22`,
              borderColor: `${s.accentColor}55`,
              color: s.accentColor,
            }}
          >
            {s.badge}
          </span>
        </div>

        {/* Number watermark */}
        <div
          className="absolute bottom-3 right-4 text-5xl font-black leading-none select-none opacity-20"
          style={{ color: s.accentColor }}
        >
          {s.num}
        </div>

        {/* Tagline overlay */}
        <div className="absolute bottom-3 left-4 right-14">
          <p className="text-[10px] font-bold tracking-wide" style={{ color: s.accentColor }}>
            {s.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">

        {/* Icon + category */}
        <div className="flex items-center gap-2.5 mb-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${s.accentColor}15` }}
          >
            <Icon className="w-4 h-4" style={{ color: s.accentColor }} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: s.accentColor }}>
            {s.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 leading-tight">
          {s.title}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
          {s.desc}
        </p>

        {/* Highlights mini-table */}
        <div className="rounded-xl border border-gray-100 dark:border-white/6 overflow-hidden mb-5">
          {s.highlights.slice(0, 3).map((h, i) => (
            <div
              key={h}
              className={`flex items-center gap-2.5 px-3 py-2 text-[11px] border-b border-gray-50 dark:border-white/5 last:border-b-0 ${i % 2 === 0 ? 'bg-gray-50/50 dark:bg-white/[0.02]' : 'bg-white dark:bg-transparent'
                }`}
            >
              <CheckCircle2 className="w-3 h-3 flex-shrink-0" style={{ color: s.accentColor }} />
              <span className="text-gray-600 dark:text-gray-400 font-medium">{h}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-2">
          <Link
            href="/services"
            aria-label={`Learn more about ${s.title}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-black text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: `linear-gradient(135deg, ${s.accentColor}, ${s.accentDark})` }}
          >
            Learn More <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 text-xs font-bold hover:bg-gray-50 dark:hover:bg-white/8 transition-all"
          >
            Quote
          </Link>
        </div>

      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION
   ═══════════════════════════════════════════════════════════════ */
export default function ServicesOverview() {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const yearsExp = getYearsExp();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.children ?? [], {
        y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const filtered = activeFilter === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeFilter);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">

      {/* ── Hero Banner ──────────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-950 py-20 border-b border-gray-100 dark:border-white/5">
        {/* Ambient blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />
        {/* Grid overlay — black in light, white in dark */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute inset-0 opacity-0 dark:opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div ref={headingRef} className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 dark:border-white/10 bg-sky-50 dark:bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-sky-600 dark:text-white/50 backdrop-blur-md mb-6 tracking-wider">
            <Image src="/img/icon/Blue_Star_logo.png" alt="Blue Star" width={36} height={36} className="h-9 w-9 object-contain" />
            Blue Star Trusted Partner · Bangalore
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-[1] mb-4 tracking-tight">
            HVAC{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-cyan-500 dark:from-sky-400 dark:to-cyan-400">
              Services
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-base text-gray-500 dark:text-white/40 leading-relaxed mb-10">
            Professional AC installation, repair, AMC, and 24/7 emergency support in Bangalore. Blue Star authorized service centre with {yearsExp}+ years of expertise.
          </p>

          {/* Stats */}
          <div className="inline-grid grid-cols-3 sm:grid-cols-5 gap-px rounded-2xl overflow-hidden border border-gray-200 dark:border-white/8 bg-gray-100 dark:bg-white/5 backdrop-blur-md mb-8">
            {[
              { val: `${yearsExp}+`, lbl: 'Years' },
              { val: '45+', lbl: 'Engineers' },
              { val: '100+', lbl: 'Clients' },
              { val: '24/7', lbl: 'Support' },
              { val: '6', lbl: 'Services' },
            ].map((s) => (
              <div key={s.lbl} className="px-6 py-3 bg-white dark:bg-white/[0.04] text-center">
                <p className="text-lg font-black text-gray-900 dark:text-white">{s.val}</p>
                <p className="text-[9px] font-semibold text-gray-400 dark:text-white/35 uppercase tracking-wider">{s.lbl}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Filter Bar ───────────────────────────────────────── */}
      <div className="bg-white dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <SlidersHorizontal className="w-4 h-4 flex-shrink-0 text-gray-400" />
            {FILTERS.map((f) => (
              <button
                type="button"
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-bold transition-all ${activeFilter === f.value
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                  : 'bg-gray-100 dark:bg-white/[0.06] text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <span className="flex-shrink-0 text-xs font-semibold text-gray-400">
            {filtered.length} service{filtered.length === 1 ? '' : 's'}
          </span>
        </div>
      </div>

      {/* ── Services Grid ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s, i) => (
            <ServiceCard key={s.id} s={s} index={i} />
          ))}
        </div>
      </div>

      {/* ── Why Choose Us Strip ──────────────────────────────── */}
      <div className="bg-gray-50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-sky-500 mb-2">Why Sneha Enterprises</p>
          <h3 className="text-center text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-8">
            Bangalore&apos;s #1 Blue Star Authorized Dealer Since 1996
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'Blue Star Authorized', desc: '100% genuine Blue Star products with manufacturer warranty and after-sales support in Bangalore.' },
              { icon: Wrench, title: 'Expert Engineers', desc: `${yearsExp}+ years experience. 45+ certified HVAC engineers for installation, service & AMC across Bangalore.` },
              { icon: ArrowRight, title: 'End-to-End HVAC', desc: 'Site survey → load calculation → design → supply → installation → commissioning — all under one roof.' },
              { icon: Headphones, title: 'AMC & 24/7 Support', desc: 'Annual maintenance contracts with priority breakdown response. Emergency AC repair available 24/7.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-sky-500" />
                </div>
                <h4 className="text-sm font-black text-gray-900 dark:text-white mb-1">{title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-sky-50 via-white to-slate-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-950 py-16 text-center relative overflow-hidden border-t border-gray-100 dark:border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,165,233,0.08),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,165,233,0.12),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 dark:via-sky-500/40 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3 leading-tight">
            Get a Free AC Quote in{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-cyan-500 dark:from-sky-400 dark:to-cyan-400">
              Bangalore
            </span>
          </h3>
          <p className="text-sm text-gray-500 dark:text-white/40 mb-8 leading-relaxed">
            Our HVAC engineers will visit your site, assess cooling requirements, and recommend the most energy-efficient Blue Star AC solution — completely free of charge, no obligations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 hover:bg-sky-400 px-8 py-4 text-sm font-black text-white transition-all hover:-translate-y-0.5"
              style={{ boxShadow: '0 8px 32px rgba(14,165,233,0.3)' }}
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
            {/* <a
              href="tel:+919880283130"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 dark:border-white/12 bg-white dark:bg-white/[0.06] px-8 py-4 text-sm font-bold text-gray-700 dark:text-white transition-all hover:bg-gray-50 dark:hover:bg-white/12 hover:border-gray-300"
            >
              <Phone className="w-4 h-4" /> +91 98802 83130
            </a> */}
          </div>
        </div>
      </div>

    </section>
  );
}
