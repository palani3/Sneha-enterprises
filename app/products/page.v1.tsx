'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─── Product Data ──────────────────────────────────────────── */
const products = [
  {
    id: 'cassette',
    num: '01',
    category: 'Cassette AC',
    badge: 'Commercial',
    bg: '/img/mainphoto/commerical.png',
    accentColor: '#a78bfa',
    accentDark: '#7c3aed',
    title: 'Cassette Air Conditioner',
    tagline: 'Ceiling-Concealed · 360° Cooling',
    desc: 'Ultra slim, ceiling-integrated design with inverter technology and anti-corrosive blue fin protection. Delivers instant cooling with 360° surround airflow — every corner, perfectly tempered.',
    specs: [
      { icon: '⚡', label: 'Inverter Technology', detail: 'Variable speed compressor' },
      { icon: '🛡️', label: 'Blue Fin Protection', detail: 'Anti-corrosive coating' },
      { icon: '🌀', label: '360° Airflow', detail: 'Surround cooling' },
      { icon: '❄️', label: 'Instant Cooling', detail: 'Rapid cool-down' },
      { icon: '📐', label: 'Ultra Slim Design', detail: 'Ceiling integrated' },
      { icon: '🔋', label: '40% Energy Savings', detail: 'High efficiency' },
    ],
  },
  {
    id: 'split',
    num: '02',
    category: 'Split AC',
    badge: 'Most Popular',
    bg: '/img/mainphoto/split.png',
    accentColor: '#38bdf8',
    accentDark: '#0284c7',
    title: 'Split Air Conditioner',
    tagline: 'Elegant Design · Smart Comfort',
    desc: 'Sleek, attractive design crafted for homes and offices. Smart inverter compressor, self-cleaning function, and Wi-Fi control deliver perfect comfort with minimal energy consumption.',
    specs: [
      { icon: '✨', label: 'Elegant Design', detail: 'Premium aesthetics' },
      { icon: '⚡', label: 'Smart Inverter', detail: 'Adaptive compressor' },
      { icon: '📱', label: 'Wi-Fi Control', detail: 'Smart home ready' },
      { icon: '🌿', label: 'Self-Cleaning', detail: 'Auto maintenance' },
      { icon: '💤', label: 'Sleep Mode', detail: 'Silent operation' },
      { icon: '🔄', label: 'Auto Restart', detail: 'Power-cut recovery' },
    ],
  },
  {
    id: 'chiller',
    num: '03',
    category: 'Chiller AC',
    badge: 'Industrial',
    bg: '/img/mainphoto/chiller1.png',
    accentColor: '#22d3ee',
    accentDark: '#0891b2',
    title: 'Chiller Air Conditioner',
    tagline: 'Latest Technology · Superior Reliability',
    desc: 'Built for large-scale industrial buildings, featuring the latest compressor and chiller design. Exceptionally quiet, energy efficient, and engineered for decades of uninterrupted heavy-duty operation.',
    specs: [
      { icon: '🔬', label: 'Latest Technology', detail: 'Advanced engineering' },
      { icon: '🔇', label: 'Low Sound Levels', detail: 'Quiet operation' },
      { icon: '💡', label: 'Energy Efficient', detail: 'Optimized COP' },
      { icon: '🏆', label: 'Superior Reliability', detail: 'Industrial grade' },
      { icon: '🔧', label: 'Advanced Compressor', detail: 'Latest design' },
      { icon: '📊', label: 'High IPLV Ratings', detail: 'Peak performance' },
    ],
  },
  {
    id: 'vrf',
    num: '04',
    category: 'VRF System',
    badge: 'Enterprise',
    bg: '/img/mainphoto/vrf.png',
    accentColor: '#818cf8',
    accentDark: '#6366f1',
    title: 'VRF Air Conditioner',
    tagline: 'Multi-Zone · High Efficiency',
    desc: 'Variable Refrigerant Flow technology for medium and large-scale commercial applications. Connect up to 64 indoor units with independent zone control, simultaneous heating and cooling, and BMS integration.',
    specs: [
      { icon: '🏢', label: 'Large-Scale', detail: 'Up to 64 units' },
      { icon: '⚡', label: 'High Efficiency', detail: 'Variable refrigerant' },
      { icon: '🎛️', label: 'Multi-Zone', detail: 'Independent control' },
      { icon: '♾️', label: 'Long Life', detail: 'Built to last' },
      { icon: '🔗', label: 'BMS Compatible', detail: 'Smart building' },
      { icon: '🔥', label: 'Heat Recovery', detail: 'Simultaneous H/C' },
    ],
  },
  {
    id: 'screw',
    num: '05',
    category: 'Screw / Turbo Chiller',
    badge: 'Heavy Duty',
    bg: '/img/mainphoto/chiller2.png',
    accentColor: '#fb7185',
    accentDark: '#e11d48',
    title: 'Screw / Turbo Chillers',
    tagline: 'Magnetic Bearings · Zero Friction',
    desc: 'The pinnacle of chiller engineering. Magnetic bearing compressors eliminate oil lubrication entirely — near-zero friction, exceptional durability, and dramatically lower maintenance costs over the life of the plant.',
    specs: [
      { icon: '🧲', label: 'Magnetic Bearings', detail: 'Frictionless design' },
      { icon: '🔬', label: 'Latest Technology', detail: 'Cutting-edge R&D' },
      { icon: '⏳', label: '25+ Year Life', detail: 'Extreme durability' },
      { icon: '💰', label: 'Low Maintenance', detail: 'Reduced costs' },
      { icon: '🛢️', label: 'Oil-Free', detail: 'Zero lubrication' },
      { icon: '📡', label: 'Remote Monitoring', detail: 'IoT ready' },
    ],
  },
  {
    id: 'package',
    num: '06',
    category: 'Package & Ductable AC',
    badge: 'Central System',
    bg: '/img/mainphoto/package.png',
    accentColor: '#34d399',
    accentDark: '#059669',
    title: 'Package & Ductable AC',
    tagline: 'Concealed Ducting · Uniform Air',
    desc: 'Central air distribution for large open-plan spaces — malls, corporate offices, and industrial facilities. Concealed installation for clean aesthetics, with high static pressure models and fresh air intake options.',
    specs: [
      { icon: '🏗️', label: 'Concealed Install', detail: 'Hidden in ceiling' },
      { icon: '💨', label: 'Uniform Airflow', detail: 'Even distribution' },
      { icon: '🌬️', label: 'Fresh Air Intake', detail: 'Ventilation option' },
      { icon: '📏', label: '2T to 20T Range', detail: 'All capacities' },
      { icon: '🎛️', label: 'Zone Control', detail: 'Central management' },
      { icon: '🔇', label: 'High Static', detail: 'Long duct runs' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PRODUCT SECTION — Full-viewport parallax with pinned reveal
   ═══════════════════════════════════════════════════════════════ */
function ProductSection({
  product,
  index,
  onEnter,
}: Readonly<{
  product: typeof products[0];
  index: number;
  onEnter: (i: number) => void;
}>) {
  const sectionRef  = useRef<HTMLElement>(null);
  const bgRef       = useRef<HTMLDivElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);
  const specsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      /* ── Deep parallax on background ────────────────────── */
      gsap.fromTo(bgRef.current,
        { y: '-15%', scale: 1.15 },
        {
          y: '15%', scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );

      /* ── Content slides in from left/right ──────────────── */
      const isEven = index % 2 === 0;
      const xFrom = isEven ? -120 : 120;

      gsap.from(contentRef.current?.querySelectorAll('.reveal') ?? [], {
        x: xFrom,
        opacity: 0,
        stagger: 0.08,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      });

      /* ── Specs: stagger scale-up from bottom ────────────── */
      gsap.from(specsRef.current?.children ?? [], {
        y: 40,
        opacity: 0,
        scale: 0.85,
        stagger: 0.06,
        duration: 0.6,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: specsRef.current,
          start: 'top 85%',
        },
      });

      /* ── Track section for nav ──────────────────────────── */
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        onEnter:     () => onEnter(index),
        onEnterBack: () => onEnter(index),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [index, onEnter]);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      id={`product-${product.id}`}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Parallax background image ─────────────────────── */}
      <div ref={bgRef} className="absolute inset-[-15%] z-0">
        <Image
          src={product.bg}
          alt={product.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority={index < 2}
        />
      </div>

      {/* ── Gradient overlays ─────────────────────────────── */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />
      <div className={`absolute inset-0 z-[1] ${
        isEven
          ? 'bg-gradient-to-r from-black/80 via-black/40 to-transparent'
          : 'bg-gradient-to-l from-black/80 via-black/40 to-transparent'
      }`} />
      {/* Top/bottom edge lines */}
      <div className="absolute inset-x-0 top-0 h-px z-[2] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px z-[2] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Content ───────────────────────────────────────── */}
      <div
        ref={contentRef}
        className={`relative z-10 w-full px-6 py-20 md:px-16 lg:px-24 flex ${
          isEven ? 'justify-start' : 'justify-end'
        }`}
      >
        <div className={`max-w-2xl ${isEven ? '' : 'text-right'}`}>
          {/* Number + line */}
          <div
            className="reveal flex items-center gap-4 mb-5"
            style={{ justifyContent: isEven ? 'flex-start' : 'flex-end' }}
          >
            <span
              className="text-6xl md:text-7xl font-black opacity-20"
              style={{ color: product.accentColor, order: isEven ? 0 : 1 }}
            >
              {product.num}
            </span>
            <div className="flex flex-col gap-1" style={{ alignItems: isEven ? 'flex-start' : 'flex-end' }}>
              <div className="h-px w-16" style={{ background: product.accentColor }} />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
                {product.category}
              </span>
            </div>
          </div>

          {/* Badge */}
          <div className="reveal mb-5">
            <span
              className="inline-block rounded-full px-5 py-2 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md"
              style={{
                background: `linear-gradient(135deg, ${product.accentColor}25, ${product.accentColor}10)`,
                border: `1px solid ${product.accentColor}40`,
              }}
            >
              {product.badge}
            </span>
          </div>

          {/* Title */}
          <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-3">
            {product.title}
          </h2>

          {/* Tagline */}
          <p className="reveal text-base md:text-lg font-semibold mb-6" style={{ color: product.accentColor }}>
            {product.tagline}
          </p>

          {/* Accent bar */}
          <div
            className="reveal flex items-center gap-3 mb-6"
            style={{ justifyContent: isEven ? 'flex-start' : 'flex-end' }}
          >
            <div className="h-1 w-20 rounded-full" style={{ background: product.accentColor }} />
            <div className="h-1 w-6 rounded-full opacity-30" style={{ background: product.accentColor }} />
          </div>

          {/* Description */}
          <p className="reveal text-white/65 text-sm md:text-base leading-relaxed md:leading-loose mb-8 max-w-xl">
            {product.desc}
          </p>

          {/* ── Spec grid ─────────────────────────────────── */}
          <div
            ref={specsRef}
            className={`grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 ${isEven ? '' : 'justify-items-end'}`}
          >
            {product.specs.map((sp) => (
              <div
                key={sp.label}
                className="group/spec relative rounded-2xl px-4 py-3.5 backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5 cursor-default"
                style={{
                  background: `linear-gradient(145deg, ${product.accentColor}12, transparent)`,
                  border: `1px solid ${product.accentColor}20`,
                }}
              >
                <span className="text-lg block mb-1">{sp.icon}</span>
                <span className="text-[11px] font-bold text-white block leading-tight">{sp.label}</span>
                <span className="text-[10px] text-white/40 block mt-0.5">{sp.detail}</span>
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover/spec:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 30px ${product.accentColor}15, 0 0 20px ${product.accentColor}10` }}
                />
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className={`reveal flex flex-wrap gap-3 ${isEven ? '' : 'justify-end'}`}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ background: product.accentColor, color: '#0f172a' }}
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              Book Site Survey
            </Link>
          </div>
        </div>
      </div>

      {/* ── Large watermark number ────────────────────────── */}
      <div
        className={`absolute bottom-6 ${isEven ? 'right-8' : 'left-8'} z-[2] select-none text-[10rem] md:text-[16rem] font-black leading-none opacity-[0.03]`}
        style={{ color: product.accentColor }}
      >
        {product.num}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   VERTICAL DOT NAVIGATION — fixed right rail
   ═══════════════════════════════════════════════════════════════ */
function DotNav({
  items,
  active,
}: Readonly<{
  items: typeof products;
  active: number;
}>) {
  return (
    <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-5 lg:flex">
      {items.map((p, i) => (
        <button
          key={p.id}
          onClick={() => document.getElementById(`product-${p.id}`)?.scrollIntoView({ behavior: 'smooth' })}
          title={p.category}
          className="group flex items-center gap-3"
        >
          {/* Tooltip label */}
          <span
            className="max-w-0 overflow-hidden whitespace-nowrap rounded-full px-0 py-1 text-[11px] font-bold text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:max-w-48 group-hover:px-3.5 group-hover:opacity-100"
            style={{ background: `${p.accentColor}35`, border: `1px solid ${p.accentColor}40` }}
          >
            {p.category}
          </span>
          {/* Dot */}
          <div
            className="rounded-full transition-all duration-300"
            style={{
              width:  i === active ? 12 : 6,
              height: i === active ? 12 : 6,
              background: i === active ? p.accentColor : 'rgba(255,255,255,0.25)',
              boxShadow: i === active ? `0 0 14px ${p.accentColor}` : 'none',
            }}
          />
        </button>
      ))}
      {/* Progress line */}
      <div className="absolute right-[5px] top-0 bottom-0 w-px bg-white/10 -z-10" />
      <div
        className="absolute right-[5px] top-0 w-px transition-all duration-500 -z-10"
        style={{
          height: `${((active + 1) / items.length) * 100}%`,
          background: `linear-gradient(to bottom, ${items[0].accentColor}, ${items[active].accentColor})`,
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PROGRESS BAR — thin bar at the very top
   ═══════════════════════════════════════════════════════════════ */
function ProgressBar({ active, total, color }: Readonly<{ active: number; total: number; color: string }>) {
  const pct = ((active + 1) / total) * 100;
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-black/30 backdrop-blur-sm">
      <div
        className="h-full transition-all duration-700 ease-out"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */
export default function ProductsPage() {
  const [activeSection, setActiveSection] = useState(0);
  const heroRef  = useRef<HTMLElement>(null);
  const heroBg   = useRef<HTMLDivElement>(null);
  const heroText = useRef<HTMLDivElement>(null);

  const onSectionEnter = useCallback((i: number) => setActiveSection(i), []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Hero parallax bg */
      gsap.to(heroBg.current, {
        y: '35%', scale: 1.05,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      /* Hero text entrance */
      gsap.from(heroText.current?.querySelectorAll('.hero-el') ?? [], {
        y: 70, opacity: 0, stagger: 0.1, duration: 1.1, ease: 'power4.out',
      });

      /* Hero text fades out on scroll */
      gsap.to(heroText.current, {
        y: -60, opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── Progress bar ──────────────────────────────────── */}
      <ProgressBar
        active={activeSection}
        total={products.length}
        color={products[activeSection].accentColor}
      />

      {/* ── Dot nav ───────────────────────────────────────── */}
      <DotNav items={products} active={activeSection} />

      {/* ═══ HERO ═════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax bg */}
        <div ref={heroBg} className="absolute inset-[-10%]">
          <Image
            src="/img/mainphoto/commericalnew.png"
            alt="Sneha Enterprises Products"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Content */}
        <div ref={heroText} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="hero-el inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-5 py-2.5 text-sm text-white/60 backdrop-blur-md mb-8">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
            Blue Star Authorized Dealer · Bangalore
          </div>

          <h1 className="hero-el text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Products
            </span>
          </h1>

          <p className="hero-el max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed mb-10">
            Scroll to explore our complete range — from compact residential splits to industrial-scale chilled water plants.
          </p>

          {/* Quick-jump pills */}
          <div className="hero-el flex flex-wrap justify-center gap-2 mb-12">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => document.getElementById(`product-${p.id}`)?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/55 backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/15 hover:text-white"
              >
                {p.category}
              </button>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="hero-el flex flex-col items-center gap-2 text-white/25">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══ PRODUCT SECTIONS ═════════════════════════════════ */}
      {products.map((product, i) => (
        <ProductSection
          key={product.id}
          product={product}
          index={i}
          onEnter={onSectionEnter}
        />
      ))}

      {/* ═══ BOTTOM CTA ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gray-950 px-6 py-32 text-center">
        {/* Gradient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,165,233,0.12),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-700/50 bg-sky-900/25 px-5 py-2 text-sm font-semibold text-sky-400 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
            Free site survey available
          </span>

          <h2 className="mb-5 text-4xl md:text-5xl font-black text-white">
            Need help choosing the{' '}
            <span className="bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent">
              right system?
            </span>
          </h2>

          <p className="mb-10 text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Our engineers will assess your space, calculate the exact cooling load, and recommend the most energy-efficient solution — at no cost.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-8 py-4 text-base font-bold text-white shadow-[0_0_32px_rgba(14,165,233,0.4)] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-[0_0_48px_rgba(14,165,233,0.6)]"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            {/* <a
              href="tel:+919880283130"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
            >
              <Phone className="w-4 h-4" />
              +91 98802 83130
            </a> */}
          </div>
        </div>
      </section>
    </>
  );
}
