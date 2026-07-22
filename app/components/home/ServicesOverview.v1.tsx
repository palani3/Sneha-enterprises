'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: '01',
    img: '/img/maincontent/1.png',
    overlay: 'from-sky-950/70 via-blue-950/60 to-slate-950/90',
    accent: '#38bdf8',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="h-full w-full">
        <rect x="6" y="14" width="44" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M10 32v10M46 32v10M18 42h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 23h8M34 23h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="28" cy="23" r="2.5" fill="currentColor" />
        <path d="M20 8h16M28 8v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'AC Installation',
    tagline: 'All Types of Air Conditioning Systems',
    desc: 'We supply and install all types of air conditioning systems — from split and cassette ACs to large-scale VRF and chilled water systems. Our certified engineers ensure flawless installation with minimal disruption.',
    highlights: ['Split, Cassette & VRF systems', 'Certified installation engineers', 'Full site survey & load calc', 'Handover documentation'],
    tag: 'Most Popular',
  },
  {
    num: '02',
    img: '/img/maincontent/2.png',
    overlay: 'from-emerald-950/70 via-teal-950/60 to-slate-950/90',
    accent: '#34d399',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="h-full w-full">
        <circle cx="28" cy="28" r="18" stroke="currentColor" strokeWidth="2" />
        <path d="M28 16v6M28 34v6M16 28h6M34 28h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="28" cy="28" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M20 20l3 3M33 33l3 3M20 36l3-3M33 23l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Service & Maintenance',
    tagline: 'Regular Intervals for Smooth Functioning',
    desc: 'We repair and maintain your AC systems at regular intervals to ensure proper and smooth functioning year-round. Our 45-strong team of technicians covers all brands.',
    highlights: ['Preventive maintenance schedules', 'All brands serviced', 'Genuine spare parts', 'Performance audit reports'],
    tag: 'Essential',
  },
  {
    num: '03',
    img: '/img/maincontent/3.png',
    overlay: 'from-orange-950/70 via-red-950/60 to-slate-950/90',
    accent: '#fb923c',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="h-full w-full">
        <path d="M14 20c0-5 5-10 14-10s14 5 14 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 36c0 5 8 10 18 10s18-5 18-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M28 10v36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M18 26c-3-1.5-5-4-5-7M38 26c3-1.5 5-4 5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="28" cy="28" r="5" fill="currentColor" opacity="0.3" />
        <circle cx="28" cy="28" r="2.5" fill="currentColor" />
      </svg>
    ),
    title: 'Hot & Cold',
    tagline: 'Both Heating & Cooling Solutions',
    desc: 'We provide both hot and cold air conditioning solutions. Whether you need powerful summer cooling or comfortable winter heating, our systems deliver year-round comfort.',
    highlights: ['Dual-mode heating & cooling', 'Heat pump technology', 'Energy-efficient operation', 'Climate-adaptive systems'],
    tag: 'Year-Round',
  },
  {
    num: '04',
    img: '/img/maincontent/Untitled-1.png',
    overlay: 'from-violet-950/70 via-purple-950/60 to-slate-950/90',
    accent: '#c084fc',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="h-full w-full">
        <path d="M28 8l4 8h10l-8 6 3 9-9-6-9 6 3-9-8-6h10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 36c-4 2-6 5-6 8h36c0-3-2-6-6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 44h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Safety & Secure',
    tagline: 'Vaccinated, Geared & Sanitized Engineers',
    desc: 'All our service engineers are fully vaccinated, equipped with proper safety gear, and ensure the area of contact is sanitized after every installation and service.',
    highlights: ['Fully vaccinated team', 'Complete safety gear', 'Post-service sanitization', 'Background-checked engineers'],
    tag: 'Your Safety',
  },
  {
    num: '05',
    img: '/img/maincontent/Untitled-1-Recovered.jpg',
    overlay: 'from-cyan-950/70 via-blue-950/60 to-slate-950/90',
    accent: '#22d3ee',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="h-full w-full">
        <rect x="8" y="16" width="40" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M16 28h8M32 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="28" cy="28" r="3" fill="currentColor" />
        <path d="M20 40l-4 8M36 40l4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 48h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Sales & Marketing',
    tagline: 'Right Solution for Every Client',
    desc: 'Our well-experienced team will assist you to find the right air conditioning solution tailored to your space, budget, and requirements — honest guidance, no pressure.',
    highlights: ['Expert product consultation', 'Load calculation & sizing', 'Budget-optimized solutions', 'Flexible payment options'],
    tag: 'Expert Advice',
  },
  {
    num: '06',
    img: '/img/mainphoto/commericalnew.png',
    overlay: 'from-rose-950/70 via-pink-950/60 to-slate-950/90',
    accent: '#fb7185',
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="h-full w-full">
        <circle cx="28" cy="22" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M22 22h12M28 16v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 44c0-8 8-14 18-14s18 6 18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 36l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52 36l-4 4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: '24/7 Customer Care',
    tagline: 'Always Here When You Need Us',
    desc: 'We allocate a dedicated team of service engineers to attend to every complaint registered and resolve the issue at the earliest. Round-the-clock support for all emergencies.',
    highlights: ['24/7 emergency hotline', 'Dedicated service team', 'Fast response time', 'Complaint tracking system'],
    tag: 'Always On',
  },
];

/* ── Individual card with its own parallax bg ─────────────── */
function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !imgRef.current) return;

    const ctx = gsap.context(() => {
      /* Parallax: image moves slower than the card on scroll */
      gsap.to(imgRef.current, {
        y: '18%',
        ease: 'none',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      /* Card reveal on scroll */
      gsap.from(cardRef.current, {
        y: 70,
        opacity: 0,
        scale: 0.96,
        duration: 0.75,
        ease: 'power3.out',
        delay: (index % 3) * 0.1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 88%',
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-3xl shadow-xl"
      style={{ minHeight: 440 }}
    >
      {/* ── Parallax background image ─────────────────────── */}
      <div
        ref={imgRef}
        className="absolute left-0 right-0 top-[-12%] h-[124%] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.06]"
        style={{ backgroundImage: `url('${s.img}')` }}
      />

      {/* ── Gradient overlay ─────────────────────────────── */}
      <div className={`absolute inset-0 bg-gradient-to-b ${s.overlay}`} />

      {/* Top-left accent line */}
      <div
        className="absolute left-0 top-0 h-1 w-0 transition-all duration-700 group-hover:w-full"
        style={{ background: `linear-gradient(to right, ${s.accent}, transparent)` }}
      />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10 flex h-full flex-col justify-between p-7" style={{ minHeight: 440 }}>

        {/* Top row: badge + number */}
        <div className="flex items-start justify-between">
          <span
            className="rounded-full px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur-sm"
            style={{ background: `${s.accent}30`, border: `1px solid ${s.accent}50` }}
          >
            {s.tag}
          </span>
          <span className="text-[11px] font-black tracking-[0.22em] text-white/30">{s.num} / 06</span>
        </div>

        {/* Icon */}
        <div
          className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl p-3 text-white shadow-lg backdrop-blur-sm"
          style={{ background: `${s.accent}25`, border: `1px solid ${s.accent}40` }}
        >
          {s.icon}
        </div>

        {/* Title + tagline */}
        <div className="mt-5">
          <h3 className="text-2xl font-black leading-tight text-white">{s.title}</h3>
          <p className="mt-1 text-sm font-semibold" style={{ color: s.accent }}>{s.tagline}</p>
        </div>

        {/* Desc — visible always, subtly styled */}
        <p className="mt-3 text-sm leading-relaxed text-white/65">{s.desc}</p>

        {/* Highlights */}
        <ul className="mt-5 space-y-2">
          {s.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2.5 text-xs text-white/80">
              <span
                className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full"
                style={{ background: `${s.accent}40`, border: `1px solid ${s.accent}60` }}
              >
                <svg className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────── */
export default function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current?.children ?? [], {
        y: 40, opacity: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white px-6 py-28 dark:bg-slate-950">
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      {/* Dark mode dot grid (separate layer) */}
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.025] dark:block"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      {/* Radial glow top */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,165,233,0.06),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,165,233,0.1),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ── Heading ───────────────────────────────────────── */}
        <div ref={headingRef} className="mb-16 text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700 dark:border-sky-700/60 dark:bg-sky-900/30 dark:text-sky-400">
            <Image src="/img/icon/Blue_Star_logo.png" alt="Blue Star" width={36} height={36} className="h-9 w-9 object-contain" />
            Blue Star Trusted Partner
          </span>
          <h2 className="mt-4 text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            Our Services
            <span className="block text-sky-600 dark:text-sky-400">Built Around You</span>
          </h2>
          {/* <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400 md:text-lg">
            From installation to round-the-clock support, every service is designed to keep you comfortable all year long.
          </p> */}
        </div>

        {/* ── Cards grid ────────────────────────────────────── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.num} s={s} index={i} />
          ))}
        </div>

        {/* ── CTA ───────────────────────────────────────────── */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600 hover:shadow-lg dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-400"
          >
            View All Services
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 7l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
