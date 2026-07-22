'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, Phone, Check,
  Clock, Shield, BadgeCheck, Award, ThumbsUp,
  Headphones, Zap, Snowflake, Wrench, FileText, Sparkles, Wind,
  UserCheck, Plug, Gauge, Play, Layers, Package, ClipboardCheck,
  ShieldCheck, CalendarCheck, Filter, Droplets, Search, FlaskConical,
  Activity, Leaf, LayoutGrid, Fan,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─── Service data ─── */
const services = [
  {
    id: 'ac-sales',
    title: 'AC Sales',
    tagline: 'Buy Blue Star ACs at Best Prices',
    Icon: Snowflake,
    image: '/img/ourservices/AC_sale_photo.webp',
    badge: 'Best Seller',
    badgeColor: 'bg-amber-400 text-amber-900',
    rating: 4.9,
    reviews: '1.2k',
    desc: 'Complete Blue Star range — split, cassette, window, tower and VRF systems. Expert guidance to find the right model for your space and budget.',
    features: ['Full Blue Star product catalogue', 'Capacity guidance (0.75T–5T)', 'Inverter & BEE rated options','Energy-saving features'],
    ctaLink: '/products',
    ctaLabel: 'Explore Models',
    accent: 'sky',
  },
  {
    id: 'ac-installation',
    title: 'AC Installation',
    tagline: 'Certified Installation Experts',
    Icon: Wrench,
    image: '/img/ourservices/AC_instal_photo.webp',
    badge: 'Most Trusted',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    rating: 4.8,
    reviews: '890',
    desc: 'Blue Star certified technicians handle indoor/outdoor mounting, copper piping, electrical connections, gas charging and full trial run.',
    features: ['Certified technicians', 'Proper copper pipe routing', 'Safe electrical wiring', 'Gas pressure testing', 'Trial run & demo'],
    ctaLink: '/contact',
    ctaLabel: 'Book Installation',
    accent: 'cyan',
  },
  {
    id: 'ac-repair',
    title: 'AC Repair',
    tagline: 'Fast & Reliable Repair Service',
    Icon: Zap,
    image: '/img/ourservices/AC_repair_photo.webp',
    badge: 'Same Day',
    badgeColor: 'bg-orange-100 text-orange-800',
    rating: 4.7,
    reviews: '2.1k',
    desc: 'All Blue Star model support — compressor, PCB, gas leaks, fan motor, remote faults. Genuine parts with transparent diagnosis report.',
    features: ['All Blue Star models supported', 'Genuine spare parts', 'Same-day service', 'Transparent diagnosis report', 'Parts warranty included', 'All major brand service is carried out'],
    ctaLink: '/contact',
    ctaLabel: 'Book Repair',
    accent: 'orange',
  },
  {
    id: 'amc',
    title: 'Annual Maintenance Contract',
    tagline: 'Year-Round Peace of Mind',
    Icon: FileText,
    image: '/img/ourservices/AC_anual_photo.webp',
    badge: 'Best Value',
    badgeColor: 'bg-blue-100 text-blue-800',
    rating: 4.9,
    reviews: '650',
    desc: 'Scheduled servicing twice yearly, priority breakdown support, parts discounts and a dedicated service manager for complete peace of mind.',
    features: ['2 services per year', 'Priority breakdown response', 'Annual performance report', 'Dedicated service manager'],
    ctaLink: '/contact',
    ctaLabel: 'Get AMC Plan',
    accent: 'emerald',
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    tagline: 'Restore Cooling Efficiency',
    Icon: Sparkles,
    image: '/img/ourservices/AC_deep_clean_photo.webp',
    badge: 'Recommended',
    badgeColor: 'bg-violet-100 text-violet-800',
    rating: 4.8,
    reviews: '1.5k',
    desc: 'Chemical wash of filters, evaporator coil, blower, drain pan and condenser. Improves air quality and reduces electricity consumption by up to 15%.',
    features: ['Filter cleaning and replacement','Evaporator coil wash', 'Blower deep clean', 'Drain pipe flush', 'Anti-bacterial treatment', 'Condenser cleaning'],
    ctaLink: '/contact',
    ctaLabel: 'Book Cleaning',
    accent: 'violet',
  },
  {
    id: 'gas-refilling',
    title: 'Gas Refilling',
    tagline: 'Accurate Refrigerant Charging',
    Icon: Wind,
    image: '/img/ourservices/AC_gas_photo.webp',
    badge: 'Specialized',
    badgeColor: 'bg-teal-100 text-teal-800',
    rating: 4.7,
    reviews: '980',
    desc: 'Accurate R-32, R-410A and R-22 refrigerant charging with full leak detection. Calibrated tools for precise pressure and performance verification.',
    features: ['Leak detection test', 'R-32 / R-410A / R-22', 'Pressure testing', 'Performance verification', 'Eco-friendly procedures', '3-month gas warranty'],
    ctaLink: '/contact',
    ctaLabel: 'Book Gas Fill',
    accent: 'teal',
  },
];

/* Color maps — full strings so Tailwind v4 picks them up */
const colorMap: Record<string, { iconBg: string; chip: string; btn: string }> = {
  sky:     { iconBg: 'bg-sky-500',     chip: 'bg-sky-50 text-sky-700 border-sky-200',     btn: 'bg-sky-500 hover:bg-sky-400 shadow-sky-200' },
  cyan:    { iconBg: 'bg-cyan-500',    chip: 'bg-cyan-50 text-cyan-700 border-cyan-200',    btn: 'bg-cyan-500 hover:bg-cyan-400 shadow-cyan-200' },
  orange:  { iconBg: 'bg-orange-500',  chip: 'bg-orange-50 text-orange-700 border-orange-200',  btn: 'bg-orange-500 hover:bg-orange-400 shadow-orange-200' },
  emerald: { iconBg: 'bg-emerald-500', chip: 'bg-emerald-50 text-emerald-700 border-emerald-200', btn: 'bg-emerald-500 hover:bg-emerald-400 shadow-emerald-200' },
  violet:  { iconBg: 'bg-violet-500',  chip: 'bg-violet-50 text-violet-700 border-violet-200',  btn: 'bg-violet-500 hover:bg-violet-400 shadow-violet-200' },
  teal:    { iconBg: 'bg-teal-500',    chip: 'bg-teal-50 text-teal-700 border-teal-200',    btn: 'bg-teal-500 hover:bg-teal-400 shadow-teal-200' },
};

const steps = [
  { n: '01', Icon: Phone, title: 'Book Online or Call', desc: 'Fill the form or call us. We confirm your slot within 30 minutes.' },
  { n: '02', Icon: Clock, title: 'Technician Dispatched', desc: 'A certified Blue Star technician heads to your location.' },
  { n: '03', Icon: Zap, title: 'Service Completed', desc: 'Work done professionally with genuine parts and full transparency.' },
  { n: '04', Icon: Shield, title: 'Satisfaction Guaranteed', desc: 'Every service is backed by a warranty. Your satisfaction is our promise.' },
];

const trust = [
  { Icon: BadgeCheck, title: 'Blue Star Authorized', desc: 'Official dealer & certified service partner.' },
  { Icon: Shield, title: 'Genuine Parts Only', desc: 'Only OEM Blue Star spare parts — always.' },
  { Icon: Clock, title: 'Same-Day Service', desc: 'Most bookings fulfilled the same day.' },
  { Icon: Award, title: '10+ Years Experience', desc: 'A decade of expert AC service in Chennai.' },
  { Icon: ThumbsUp, title: '5,000+ Customers', desc: 'Trusted by thousands of homes and businesses.' },
  { Icon: Headphones, title: '24 / 7 Support', desc: 'Our team is available round the clock.' },
];

/* Pick an icon that matches each feature's wording (falls back to a check). */
function featureIcon(text: string) {
  const t = text.toLowerCase();
  if (t.includes('certified') || t.includes('technician')) return UserCheck;
  if (t.includes('copper')) return Wrench;
  if (t.includes('electric') || t.includes('wiring')) return Plug;
  if (t.includes('gas') && t.includes('warranty')) return ShieldCheck;
  if (t.includes('pressure') || t.includes('gas charging') || t.includes('gas')) return Gauge;
  if (t.includes('trial') || t.includes('demo')) return Play;
  if (t.includes('model')) return Layers;
  if (t.includes('spare')) return Package;
  if (t.includes('warranty')) return ShieldCheck;
  if (t.includes('same-day') || t.includes('same day')) return Clock;
  if (t.includes('diagnosis') || t.includes('report')) return ClipboardCheck;
  if (t.includes('brand')) return Wrench;
  if (t.includes('per year') || t.includes('services per')) return CalendarCheck;
  if (t.includes('priority') || t.includes('breakdown')) return Zap;
  if (t.includes('manager')) return Headphones;
  if (t.includes('filter')) return Filter;
  if (t.includes('coil') || t.includes('evaporator')) return Snowflake;
  if (t.includes('blower')) return Fan;
  if (t.includes('drain')) return Droplets;
  if (t.includes('bacterial') || t.includes('anti-')) return Sparkles;
  if (t.includes('condenser')) return Wind;
  if (t.includes('leak')) return Search;
  if (t.includes('r-32') || t.includes('r-410') || t.includes('r-22') || t.includes('refrigerant')) return FlaskConical;
  if (t.includes('performance') || t.includes('verification')) return Activity;
  if (t.includes('eco') || t.includes('energy') || t.includes('saving')) return Leaf;
  if (t.includes('catalogue') || t.includes('product') || t.includes('range')) return LayoutGrid;
  if (t.includes('capacity')) return Gauge;
  if (t.includes('inverter') || t.includes('bee') || t.includes('rated')) return BadgeCheck;
  return Check;
}

/* ─── Service card — image on the left, features with icons on the right ─── */
function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const c = colorMap[s.accent];
  return (
    <div
      id={s.id}
      className="group flex scroll-mt-24 flex-col overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200/80 transition-all duration-300 hover:shadow-2xl hover:ring-slate-300 md:flex-row dark:bg-slate-900 dark:ring-slate-700/60"
    >
      {/* Image — left. Locked to the photo's true 4:3 so the whole shot always shows. */}
      <div className="relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden bg-slate-100 md:w-1/2 dark:bg-slate-800">
        <Image
          src={s.image}
          alt={`Blue Star ${s.title} service`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index < 2}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className={`absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold shadow-sm ring-1 ring-black/5 ${s.badgeColor}`}>
          {s.badge}
        </span>
      </div>

      {/* Content — right, vertically centered next to the image */}
      <div className="flex flex-1 flex-col justify-center p-7 md:p-8">
        {/* Icon + title */}
        <div className="flex items-center gap-3.5">
          <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl ${c.iconBg} shadow-md`}>
            <s.Icon className="h-6 w-6 text-white" strokeWidth={1.6} />
          </div>
          <div>
            <h3 className="text-xl font-black leading-tight text-slate-900 dark:text-white">{s.title}</h3>
            <p className="text-sm font-medium text-sky-500">{s.tagline}</p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{s.desc}</p>

        {/* Features with content-matched icons */}
        <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
          {s.features.map((f) => {
            const FIcon = featureIcon(f);
            return (
              <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg ${c.iconBg} shadow-sm`}>
                  <FIcon className="h-4 w-4 text-white" strokeWidth={2} />
                </span>
                {f}
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="mt-auto flex items-center gap-3 pt-7">
          <a
            href={s.ctaLink}
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg ${c.btn}`}
          >
            {s.ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            href="/contact"
            aria-label={`Call about ${s.title}`}
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition-all hover:border-sky-300 hover:text-sky-500 dark:border-slate-700 dark:hover:border-sky-700"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function ServicesPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.h-in', { y: 45, opacity: 0, stagger: 0.1, duration: 0.9, ease: 'power3.out' });
      gsap.from('.trust-num', {
        y: 20, opacity: 0, stagger: 0.09, duration: 0.65,
        scrollTrigger: { trigger: '.trust-nums', start: 'top 90%', once: true },
      });
      gsap.from('.svc-card', {
        y: 55, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.svc-grid', start: 'top 85%', once: true },
      });
      gsap.from('.step-item', {
        y: 35, opacity: 0, stagger: 0.12, duration: 0.7,
        scrollTrigger: { trigger: '.steps-grid', start: 'top 87%', once: true },
      });
      gsap.fromTo('.trust-item',
        { y: 28, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.07, duration: 0.6,
          scrollTrigger: { trigger: '.trust-grid', start: 'top 90%', once: true },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="bg-white dark:bg-slate-950">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 px-6 pb-24 pt-28">
        {/* Subtle dot pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(#fff 1px,transparent 0)', backgroundSize: '32px 32px' }}
        />
        {/* Blue glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="h-in inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
            Blue Star Authorized Dealer · Bangalore
          </span>

          <h1 className="h-in mt-6 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
            All Your AC Needs,<br />
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              One Trusted Team
            </span>
          </h1>

          <p className="h-in mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
            Sales · Installation · Repair · Maintenance · Deep Cleaning · Gas Refilling —
            complete Blue Star AC solutions by certified experts.
          </p>

          <div className="h-in mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-9 py-3.5 text-sm font-bold text-white shadow-xl shadow-sky-500/20 transition-all hover:scale-105 hover:bg-sky-400"
            >
              <Phone className="h-4 w-4" />
              Book a Service
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-9 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              View Products
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Trust numbers strip */}
        <div className="trust-nums relative mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { n: '10+', l: 'Years Experience' },
            { n: '5k+', l: 'Happy Customers' },
            { n: '24/7', l: 'Support' },
            { n: '100%', l: 'Certified Techs' },
          ].map(({ n, l }) => (
            <div key={l} className="trust-num rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur">
              <p className="text-2xl font-black text-white">{n}</p>
              <p className="mt-0.5 text-xs text-slate-400">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICE GRID ─────────────────────────────────────────────────── */}
      <section className="bg-slate-50 px-4 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">

          {/* ── Section header: split left / right ── */}
          <div className="mb-14 flex flex-col gap-8 border-b border-slate-200 pb-10 sm:flex-row sm:items-end sm:justify-between dark:border-slate-800">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-1.5 rounded-full bg-sky-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-sky-500">
                  6 Services Available
                </span>
              </div>
              <h2 className="mt-3 text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-5xl">
                Our<br />Services
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                Every service delivered by Blue Star certified technicians using genuine parts — backed by warranty.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-500 transition-all hover:gap-3"
              >
                Book a service <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="svc-grid mx-auto flex max-w-5xl flex-col gap-8">
            {services.map((s, i) => (
              <div key={s.id} className="svc-card">
                <ServiceCard s={s} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="bg-white px-4 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-500">Simple Process</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white md:text-4xl">
              How It Works
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              From booking to completion in 4 easy steps
            </p>
          </div>

          <div className="steps-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.n} className="step-item relative flex flex-col items-center text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+40px)] top-8 hidden h-px w-[calc(100%-80px)] border-t-2 border-dashed border-slate-200 dark:border-slate-700 lg:block" />
                )}
                {/* Icon */}
                <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 ring-1 ring-sky-100 dark:bg-sky-950/40 dark:ring-sky-900">
                  <step.Icon className="h-7 w-7 text-sky-500" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-[10px] font-black text-white shadow">
                    {step.n}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="bg-white px-4 py-24 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-600 dark:border-sky-800 dark:bg-sky-950/40 dark:text-sky-400">
              Our Promise
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white md:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              The reasons 5,000+ customers trust us for their AC needs
            </p>
          </div>

          <div className="trust-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trust.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="trust-item group relative overflow-hidden rounded-2xl bg-slate-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800"
              >
                {/* Watermark number */}
                <span className="pointer-events-none absolute right-4 top-3 select-none text-7xl font-black leading-none text-slate-100 dark:text-slate-700">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {/* Top accent bar */}
                <div className="mb-5 h-1 w-10 rounded-full bg-sky-500" />
                {/* Icon */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500 shadow-md shadow-sky-200 transition-transform duration-300 group-hover:scale-110 dark:shadow-sky-900/40">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="bg-slate-950 px-6 py-24 text-center">
        <div className="relative mx-auto max-w-xl">
          <div
            className="pointer-events-none absolute inset-0 -m-12 opacity-[0.06]"
            style={{ backgroundImage: 'radial-gradient(#fff 1px,transparent 0)', backgroundSize: '28px 28px' }}
          />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/15 blur-3xl" />
          <p className="relative text-xs font-bold uppercase tracking-widest text-sky-400">Get In Touch</p>
          <h2 className="relative mt-3 text-3xl font-black text-white md:text-4xl">
            Ready to Book a Service?
          </h2>
          <p className="relative mt-3 text-slate-400">
            Expert technicians at your doorstep — fast response, genuine parts and guaranteed satisfaction.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-9 py-3.5 text-sm font-bold text-white shadow-xl shadow-sky-500/20 transition-all hover:scale-105 hover:bg-sky-400"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-9 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Book Online
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
