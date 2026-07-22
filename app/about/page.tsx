'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Wind, Snowflake, Droplets, Fan,
  HardHat, CheckCircle2, ArrowRight,
  Trophy, Medal, Shield, Phone, Download,
  Building2, HeartPulse, Hotel, GraduationCap, Factory,
} from 'lucide-react';

import { getYearsExp } from '../lib/founding';

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ───────────────────────────────────────────────── */
const capabilities = [
  { icon: Wind,         label: 'VRF System',                  desc: 'Variable Refrigerant Flow for energy-efficient large-scale cooling' },
  { icon: Snowflake,    label: 'Ducted Split & Packaged ACs', desc: 'Tailored for mid-scale offices, retail and commercial spaces'       },
  { icon: Droplets,     label: 'Chilled Water System',        desc: 'High-capacity central cooling for large complexes'                   },
  { icon: Fan,          label: 'Ventilation System',          desc: 'Fresh-air management for healthy indoor environments'                },
  { icon: HardHat,      label: 'Installation & Commissioning',desc: 'End-to-end project delivery by certified engineers'                 },
  { icon: CheckCircle2, label: 'Annual Maintenance',          desc: '24/7 support & preventive maintenance programs'                     },
];

const awards = [
  { year: '2006', title: 'No. 1 Dealer in Karnataka',        org: 'Blue Star Ltd',       detail: 'Ranked the top Blue Star dealer across all of Karnataka.',                              rank: 1, color: '#f59e0b', image: '' },
  { year: '2007', title: 'No. 2 Dealer in Karnataka',        org: 'Blue Star Ltd',       detail: 'Ranked No. 2 for 2007 & 2008 across Karnataka.',                                       rank: 2, color: '#94a3b8', image: '' },
  { year: '2009', title: 'No. 1 Dealer in Karnataka',        org: 'Blue Star Ltd',       detail: 'Reclaimed the top position — No. 1 dealer in Karnataka.',                              rank: 1, color: '#f59e0b', image: '' },
  { year: '2012', title: 'Best Services Award',              org: 'Aditya Birla Group',  detail: 'Recognised for exceptional HVAC service delivery.',                                     rank: 0, color: '#10b981', image: '' },
  { year: '2014', title: 'Best Services Award',              org: 'Cross Domain & NIIT', detail: 'Awarded for outstanding service at two major IT firms.',                                 rank: 0, color: '#8b5cf6', image: '' },
  { year: '2015', title: 'Best Execution Award',             org: 'Monsanto Project',    detail: 'Recognised for on-time, precision HVAC execution.',                                      rank: 0, color: '#f97316', image: '' },
  { year: '2020', title: 'Best Execution Award',             org: 'Applied Materials',   detail: 'Awarded for best-in-class project execution.',                                          rank: 0, color: '#0ea5e9', image: '' },
  { year: '2020', title: 'Star League Award',                org: 'Blue Star Ltd',       detail: 'Star League recognition for Commercial Air Conditioners — Bengaluru, Karnataka.',       rank: 0, color: '#6366f1', image: '/img/timeline/IMG_20260418_133555.jpg.jpeg' },
  { year: '2023', title: 'Star League Award',                org: 'Blue Star Ltd',       detail: 'Star League recognition for Commercial Air Conditioning Division — Bengaluru, Karnataka.', rank: 0, color: '#6366f1', image: '/img/timeline/IMG_20260418_133103.jpg.jpeg' },
  { year: '2025', title: 'Excellence in Customer Retention', org: 'Blue Star Ltd',       detail: 'Channel Partner Award — Bengaluru region, for outstanding customer retention in FY 2024-25.', rank: 0, color: '#f59e0b', image: '/img/timeline/IMG_20260418_133543.jpg.jpeg' },
];

const teamRows = [
  { role: 'Project Engineers',      count: '20', color: '#6366f1' },
  { role: 'Planning Engineers',     count: '5',  color: '#8b5cf6' },
  { role: 'Service Team',           count: '45', color: '#10b981' },
  { role: 'Sales Engineers',        count: '2',  color: '#f59e0b' },
  { role: 'EHS officers', count: '6',  color: '#0ea5e9' },

];

const sectors = [
  { icon: Building2,    label: 'Corporates'  },
  { icon: HeartPulse,   label: 'Hospitals'   },
  { icon: Hotel,        label: 'Hotels'      },
  { icon: GraduationCap,label: 'Institutions'},
  { icon: Factory,      label: 'Industries'  },
  { icon: HardHat,      label: 'Builders'    },
];

/* ─── Page ───────────────────────────────────────────────── */
export default function AboutPage() {
  const awRef  = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const [hoveredAward, setHoveredAward] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Hero */
      gsap.fromTo('.h-enter > *',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.14, duration: 1, ease: 'power3.out', delay: 0.2, immediateRender: false });

      /* KPIs */
      gsap.fromTo('.kpi-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.09, duration: 0.65, ease: 'back.out(1.4)', immediateRender: false,
          scrollTrigger: { trigger: '.kpi-row', start: 'top 84%', once: true } });

      /* Story */
      gsap.fromTo('.story-block',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: '.story-section', start: 'top 80%', once: true } });

      gsap.fromTo('.sector-pill',
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.06, duration: 0.5, ease: 'back.out(1.6)', immediateRender: false,
          scrollTrigger: { trigger: '.sectors-row', start: 'top 85%', once: true } });

      /* Capabilities */
      gsap.fromTo('.cap-card',
        { y: 50, opacity: 0, scale: 0.93 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.07, duration: 0.6, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: '.cap-grid', start: 'top 80%', once: true } });

      /* Team */
      gsap.fromTo('.team-head > *',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.75, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: teamRef.current, start: 'top 76%', once: true } });

      gsap.fromTo('.team-row-item',
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.09, duration: 0.65, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: '.team-rows', start: 'top 80%', once: true } });

      /* Awards header */
      gsap.fromTo('.aw-head > *',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.75, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: awRef.current, start: 'top 80%', once: true } });

      /* Timeline items */
      gsap.fromTo('.tl-item',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.65, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: '.tl-track', start: 'top 78%', once: true } });

    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white dark:bg-slate-950 overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO — gradient + pattern, no image
      ══════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden bg-slate-950">

        {/* Geometric dot grid */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        {/* Diagonal gradient bands */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950/60 via-slate-950 to-indigo-950/50" />

        {/* Glowing orbs */}
        <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-60 w-60 rounded-full bg-indigo-500/10 blur-3xl" />

        {/* Thin horizontal rule */}
        <div className="absolute left-0 right-0" style={{ top: '38%', height: 1, background: 'linear-gradient(to right, transparent, rgba(148,163,184,0.08), transparent)' }} />

        <div className="h-enter relative z-10 flex flex-col items-center px-6 text-center">

          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <Image src="/img/icon/Blue_Star_logo.png" alt="Blue Star" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/55">
              Est. 1996 · Bangalore · Blue Star Authorized
            </span>
          </div>

          <h1 className="text-6xl font-black leading-[0.9] tracking-tight text-white md:text-7xl lg:text-[96px]">
            <span className="block text-white/30 text-4xl font-bold tracking-[0.3em] uppercase mb-3 md:text-5xl">About Us</span>
            Built on<br />
            <span
              className="inline-block text-transparent"
              style={{ WebkitTextStroke: '2px rgba(56,189,248,0.4)' }}
            >
              {getYearsExp()} years
            </span>
            <br />
            of{' '}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              trust.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-lg text-sm leading-relaxed text-white/45 md:text-base">
            Sneha Enterprises — Bangalore&apos;s expert in HVAC solutions for corporates,
            hospitals, hotels, institutions and industries since 1996.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/clients"
              className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/6 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/12"
            >
              Our Clients
            </Link>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />
      </section>

      {/* ══════════════════════════════════════════════════════
          KPI STRIP
      ══════════════════════════════════════════════════════ */}
      <div className="kpi-row bg-white dark:bg-slate-950 px-6 pb-20 pt-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-100 shadow-lg dark:border-slate-800 md:grid-cols-4">
            {[
              { val: `${getYearsExp()}+`, sub: 'Years of Excellence',    accent: '#0ea5e9' },
              { val: '10,000+', sub: 'Tons Installed',          accent: '#10b981' },
              { val: '45+',     sub: 'Engineers & Technicians', accent: '#f59e0b' },
              { val: '100+',    sub: 'Clients Served',           accent: '#8b5cf6' },
            ].map((k, i) => (
              <div
                key={k.sub}
                className={`kpi-card flex flex-col items-center justify-center gap-1.5 bg-white px-6 py-10 text-center dark:bg-slate-900 ${i < 3 ? 'border-r border-slate-100 dark:border-slate-800' : ''}`}
              >
                <span className="text-4xl font-black" style={{ color: k.accent }}>{k.val}</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{k.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          WHO WE ARE — full-width text layout, no image
      ══════════════════════════════════════════════════════ */}
      <section className="story-section py-24 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl">

          {/* Top label + heading */}
          <div className="mb-16 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-3 inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
                Our Story
              </span>
              <h2 className="text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-5xl">
                Who We Are
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              A Bangalore-based HVAC company serving commercial buildings and industries since 1996.
            </p>
          </div>

          {/* 3-column text blocks */}
          <div className="story-block grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-14">
            {[
              {
                label: 'Established 1996',
                text: 'Sneha Enterprises was founded in Bangalore as an expert in Heating, Ventilation and Air Conditioning solutions for all types of commercial buildings and industries.',
                accent: '#0ea5e9',
              },
              {
                label: 'Our Mission',
                text: 'We provide high-quality engineering, service and design support for HVAC. Our goal is maximum client satisfaction, backed by skilled professionals in project management and field support.',
                accent: '#10b981',
              },
              {
                label: 'How We Work',
                text: 'Resourced in-house and managed as a single point of contact for every project. We specialize in HVAC design and execution — retained by clients due to consistently excellent service and installations.',
                accent: '#8b5cf6',
              },
            ].map((b) => (
              <div
                key={b.label}
                className="story-block relative rounded-2xl border border-slate-100 bg-white p-7 dark:border-slate-700/60 dark:bg-slate-800"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl" style={{ background: b.accent }} />
                <span
                  className="mb-4 inline-block rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest"
                  style={{ background: `${b.accent}15`, color: b.accent }}
                >
                  {b.label}
                </span>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{b.text}</p>
              </div>
            ))}
          </div>

          {/* Sectors served row */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Sectors We Serve</p>
            <div className="sectors-row flex flex-wrap gap-3">
              {sectors.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="sector-pill inline-flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-2.5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
                  >
                    <Icon className="h-4 w-4 text-sky-500" strokeWidth={1.8} />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{s.label}</span>
                  </div>
                );
              })}

              {/* Blue Star badge inline */}
              <div className="sector-pill inline-flex items-center gap-2.5 rounded-xl border border-sky-100 bg-sky-50 px-4 py-2.5 dark:border-sky-900/50 dark:bg-sky-950/40">
                <Image src="/img/icon/Blue_Star_logo.png" alt="Blue Star Authorized Dealer" width={40} height={40} className="h-10 w-10 object-contain" />
                <span className="text-xs font-bold text-sky-700 dark:text-sky-400">Blue Star Authorized</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CAPABILITIES — same design (keep)
      ══════════════════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">

          <div className="mb-16 grid md:grid-cols-2 gap-6 items-end">
            <div>
              <span className="mb-3 inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
                What We Do
              </span>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl leading-tight">
                Our<br />Capabilities
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 md:text-right md:max-w-sm md:ml-auto">
              All trained engineers. More than 10,000 tons of installed experience across every segment.
            </p>
          </div>

          <div className="cap-grid grid gap-px bg-slate-100 rounded-3xl overflow-hidden shadow-sm dark:bg-slate-800 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className="cap-card group relative bg-white dark:bg-slate-900 p-8 transition-all duration-300 hover:bg-sky-50 dark:hover:bg-slate-800"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-5 top-5 select-none text-7xl font-black leading-none text-slate-100 dark:text-slate-800 transition-opacity duration-300 group-hover:opacity-40"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative z-10">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-950 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-sky-500" strokeWidth={1.8} />
                    </div>
                    <h3 className="mb-2 text-sm font-black text-slate-900 dark:text-white">{c.label}</h3>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{c.desc}</p>
                  </div>
                  <div className="absolute inset-y-0 left-0 w-0.5 bg-sky-400 scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100" />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TEAM — no background image, clean theme-aware
      ══════════════════════════════════════════════════════ */}
      <section ref={teamRef} className="py-28 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">

        {/* Subtle dot texture — adapts to theme */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        {/* Soft glow orbs */}
        <div className="pointer-events-none absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sky-400/6 blur-3xl dark:bg-sky-500/8" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-indigo-400/6 blur-3xl dark:bg-indigo-500/8" />

        <div className="relative z-10 mx-auto max-w-6xl grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div className="team-head">
            <span className="mb-4 inline-block rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-black uppercase tracking-widest text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-white/45">
              Our People
            </span>
            <h2 className="text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-5xl">
              The Team<br />Behind Every<br />
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">Project</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-slate-500 dark:text-white/45">
              Our in-house team is managed as a single point of contact for every project and
              service — from planning to commissioning to ongoing annual maintenance.
            </p>

            {/* Summary chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { n: '60+', l: 'Total Staff' },
                { n: `${getYearsExp()}+`, l: 'Yrs Experience' },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm dark:border-white/10 dark:bg-white/6"
                >
                  <div className="text-2xl font-black text-slate-900 dark:text-white">{s.n}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-white/40">{s.l}</div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              <Phone className="h-4 w-4" /> Contact Us
            </Link>
          </div>

          {/* Right — breakdown */}
          <div className="team-rows space-y-3">
            {teamRows.map((t) => (
              <div
                key={t.role}
                className="team-row-item group flex items-center justify-between rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm transition-all duration-200 hover:border-slate-200 hover:shadow-md dark:border-white/8 dark:bg-white/5 dark:hover:border-white/15 dark:hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-1 flex-shrink-0 rounded-full" style={{ background: t.color }} />
                  <span className="text-sm font-semibold text-slate-600 transition-colors group-hover:text-slate-900 dark:text-white/70 dark:group-hover:text-white">
                    {t.role}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black" style={{ color: t.color }}>{t.count}</span>
                  <div className="h-1.5 w-1.5 rounded-full" style={{ background: t.color }} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          AWARDS — vertical timeline, theme-aware
      ══════════════════════════════════════════════════════ */}
      <section ref={awRef} className="py-28 px-6 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-4xl">

          {/* Header */}
          <div className="aw-head mb-20 text-center">
            <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/25 bg-yellow-400/10 dark:border-yellow-400/20 dark:bg-yellow-400/8">
              <Trophy className="h-8 w-8 text-yellow-500 dark:text-yellow-400" strokeWidth={1.5} />
            </div>
            <span className="mb-3 inline-block rounded-full border border-yellow-400/25 bg-yellow-50 px-3 py-1 text-xs font-black uppercase tracking-widest text-yellow-600 dark:border-yellow-400/20 dark:bg-yellow-400/8 dark:text-yellow-400">
              Recognition
            </span>
            <h2 className="mt-2 text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
              Awards &{' '}
              <span className="text-yellow-500 dark:text-yellow-400">Achievements</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Nearly three decades of recognition from India&apos;s leading brands and organisations.
            </p>
          </div>

          {/* Vertical timeline */}
          <div className="tl-track relative pl-6 md:pl-0">

            {/* Centre spine — visible on md+ */}
            <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-yellow-400/60 via-slate-200 to-slate-200/0 dark:via-slate-700 md:left-1/2 md:-translate-x-px" />

            <div className="space-y-10">
              {awards.map((a, i) => {
                const isLeft = i % 2 === 0;
                const AwardIcon = a.rank === 1 ? Trophy : a.rank === 2 ? Medal : Shield;
                return (
                  <div
                    key={`${a.year}-${a.title}`}
                    className={`tl-item relative flex gap-8 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Dot — mobile left, desktop centre */}
                    <div className="absolute left-[3px] top-5 z-10 md:left-1/2 md:-translate-x-1/2">
                      <div
                        className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 bg-white dark:bg-slate-950 shadow-sm"
                        style={{ borderColor: a.color }}
                      >
                        <div className="h-2 w-2 rounded-full" style={{ background: a.color }} />
                      </div>
                    </div>

                    {/* Card — full width mobile, half width desktop */}
                    <div className={`w-full md:w-[calc(50%-28px)] ${isLeft ? 'md:pr-0 md:mr-auto' : 'md:pl-0 md:ml-auto'}`}>
                      <div
                        className="group relative overflow-hidden rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-slate-900"
                        style={{ borderColor: `${a.color}25` }}
                        onMouseEnter={() => a.image && setHoveredAward(i)}
                        onMouseLeave={() => setHoveredAward(null)}
                      >
                        {/* Top bar */}
                        <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl" style={{ background: a.color }} />

                        {/* Hover glow */}
                        <div
                          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          style={{ background: `${a.color}07` }}
                        />

                        {/* Hover image popup */}
                        {a.image && hoveredAward === i && (
                          <div className="absolute inset-0 z-20 flex items-center justify-center rounded-2xl bg-black/80 backdrop-blur-sm transition-opacity duration-300">
                            <Image
                              src={a.image}
                              alt={a.title}
                              width={280}
                              height={200}
                              className="h-auto max-h-[90%] w-auto max-w-[90%] rounded-xl object-contain shadow-2xl"
                            />
                          </div>
                        )}

                        <div className="relative z-10">
                          {/* Year + icon row */}
                          <div className="mb-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div
                                className="flex h-8 w-8 items-center justify-center rounded-lg"
                                style={{ background: `${a.color}15` }}
                              >
                                <AwardIcon className="h-4 w-4" style={{ color: a.color }} strokeWidth={1.5} />
                              </div>
                              <span
                                className="rounded-lg px-2.5 py-0.5 text-sm font-black"
                                style={{ background: `${a.color}12`, color: a.color }}
                              >
                                {a.year}
                              </span>
                            </div>
                            {a.rank === 1 && (
                              <span
                                className="rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider"
                                style={{ background: `${a.color}18`, color: a.color }}
                              >
                                #1 Karnataka
                              </span>
                            )}
                          </div>

                          <h3 className="mb-1 text-sm font-black text-slate-900 dark:text-white">{a.title}</h3>
                          <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: a.color }}>{a.org}</p>
                          <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{a.detail}</p>
                        </div>
                      </div>
                    </div>

                    {/* Spacer — opposite half on desktop */}
                    <div className="hidden md:block md:w-[calc(50%-28px)]" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary row */}
          <div className="mt-16 grid grid-cols-4 gap-4">
            {[
              { val: '3×', label: 'No. 1 Blue Star Dealer', color: '#f59e0b' },
              { val: '1×', label: 'No. 2 Blue Star Dealer', color: '#94a3b8' },
              { val: '3×', label: 'Best Service / Execution', color: '#10b981' },
              { val: '2×', label: 'Blue Star Star League', color: '#6366f1' },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1 rounded-2xl border border-slate-100 bg-slate-50 py-5 text-center dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="text-3xl font-black" style={{ color: s.color }}>{s.val}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 text-center bg-slate-50 dark:bg-slate-900">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-100 dark:border-sky-900/20" aria-hidden />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200 dark:border-sky-800/30" aria-hidden />

        <div className="relative z-10 px-6">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-950 border border-sky-100 dark:border-sky-900 shadow-lg">
            <Image src="/img/icon/Blue_Star_logo.png" alt="Blue Star" width={52} height={52} className="h-13 w-13 object-contain" />
          </div>
          <p className="mb-2 text-xs font-black uppercase tracking-widest text-sky-500">Authorized Dealer</p>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
            Blue Star Limited
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Genuine products, manufacturer-trained technicians and warranty-backed service
            on every installation.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-10 py-4 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
          >
            Contact Us Today <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
