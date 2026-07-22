'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import {
  Building2, HeartPulse, Hotel, GraduationCap,
  Factory, HardHat, ArrowRight, ChevronDown,
} from 'lucide-react';

import { getYearsExp } from '../lib/founding';

gsap.registerPlugin(ScrollTrigger);

/* ─── Types ──────────────────────────────────────────────── */
type Sector = 'Corporate' | 'Hospital' | 'Hotel' | 'Institution' | 'Industry' | 'Builder';

interface Client {
  name: string;
  initials: string;
  logo: string;
  color: string;
  sector: Sector;
}

/* ─── Client data ────────────────────────────────────────── */
const clients: Client[] = [
  { name: 'Google',              initials: 'GGL', logo: '/img/clients/google.webp',                         color: '#4285f4', sector: 'Corporate'   },
  { name: 'Bosch',               initials: 'BSH', logo: '/img/clients/Bosch1.webp',                          color: '#374151', sector: 'Corporate'   },
  { name: 'Flipkart',            initials: 'FLK', logo: '/img/clients/flipkart.webp',                        color: '#d97706', sector: 'Corporate'   },
  { name: 'Deloitte',            initials: 'DEL', logo: '/img/clients/Deloitte.webp',                        color: '#15803d', sector: 'Corporate'   },
  { name: 'PwC',                 initials: 'PWC', logo: '/img/clients/pwc.webp',                             color: '#c2410c', sector: 'Corporate'   },
  { name: 'Myntra',              initials: 'MYN', logo: '/img/clients/Myntra.webp',                          color: '#db2777', sector: 'Corporate'   },
  { name: 'CRED',                initials: 'CRD', logo: '/img/clients/cred.webp',                            color: '#1e293b', sector: 'Corporate'   },
  { name: 'HDFC',                initials: 'HDF', logo: '/img/clients/hdfc.webp',                            color: '#1d4ed8', sector: 'Corporate'   },
  { name: 'AMD',                 initials: 'AMD', logo: '/img/clients/amd.webp',                             color: '#b91c1c', sector: 'Corporate'   },
  { name: 'Exxon Mobil',         initials: 'EXM', logo: '/img/clients/Exxon Mobil.webp',                    color: '#991b1b', sector: 'Corporate'   },
  { name: 'TVS',                 initials: 'TVS', logo: '/img/clients/TVS.webp',                             color: '#1e3a8a', sector: 'Corporate'   },
  { name: 'AirAsia',             initials: 'AIR', logo: '/img/clients/airasia.webp',                        color: '#dc2626', sector: 'Corporate'   },
  { name: 'Fossil',              initials: 'FOS', logo: '/img/clients/fossil.webp',                         color: '#92400e', sector: 'Corporate'   },
  { name: 'Mercedes-Benz',       initials: 'MBZ', logo: '/img/clients/benz.webp',                           color: '#334155', sector: 'Corporate'   },
  { name: 'DXC Technology',      initials: 'DXC', logo: '/img/clients/dxcpng.webp',                         color: '#6d28d9', sector: 'Corporate'   },
  { name: 'Applied Materials',   initials: 'APM', logo: '/img/clients/Applied Materials.webp',              color: '#1d4ed8', sector: 'Corporate'   },
  { name: 'Autoliv',             initials: 'AUT', logo: '/img/clients/Autoliv.webp',                        color: '#3730a3', sector: 'Corporate'   },
  { name: 'ThoughtWorks',        initials: 'TW',  logo: '/img/clients/Thought Works.webp',                  color: '#5b21b6', sector: 'Corporate'   },
  { name: 'Brigade Group',       initials: 'BRG', logo: '/img/clients/brigade-group.webp',                  color: '#0369a1', sector: 'Builder'    },
  { name: 'Prestige',            initials: 'PRE', logo: '/img/clients/prestige.webp',                       color: '#0e7490', sector: 'Builder'    },
  { name: 'IndiQube',            initials: 'IDQ', logo: '/img/clients/Indiqube.webp',                       color: '#be123c', sector: 'Builder'    },
  { name: 'Vestian Global',      initials: 'VST', logo: '/img/clients/vestian.webp',                      color: '#4338ca', sector: 'Builder'    },
  { name: 'Tablespace',          initials: 'TBS', logo: '/img/clients/tablespace.webp',                     color: '#7c3aed', sector: 'Builder'    },
  { name: 'Blume Global',        initials: 'BLM', logo: '/img/clients/blumeglobal.webp',                    color: '#0c4a6e', sector: 'Corporate'   },
  { name: 'Cross Domain',        initials: 'CRD', logo: '/img/clients/Cross Domain.webp',                   color: '#9a3412', sector: 'Corporate'   },
  { name: 'Danske IT',           initials: 'DAN', logo: '/img/clients/Danske IT.webp',                      color: '#1e40af', sector: 'Corporate'   },
  { name: 'AV Hospital',         initials: 'AVH', logo: '/img/clients/AV Hospita.webp',                     color: '#065f46', sector: 'Hospital'    },
  { name: 'Baptist Hospital',    initials: 'BAP', logo: '/img/clients/Baptist Hospitals.webp',              color: '#1e3a8a', sector: 'Hospital'    },
  { name: 'Sparsh Hospital',     initials: 'SPR', logo: '/img/clients/Sparsh Hospitals.webp',               color: '#134e4a', sector: 'Hospital'    },
  { name: 'Nelivigi Hospital',   initials: 'NLV', logo: '/img/clients/Nelivigi Hospitals.webp',             color: '#166534', sector: 'Hospital'    },
  { name: 'Vijay Hospital',      initials: 'VJH', logo: '/img/clients/vijay-hospital.webp',                 color: '#991b1b', sector: 'Hospital'    },
  { name: 'Biocon',              initials: 'BIO', logo: '/img/clients/Biocon.webp',                         color: '#0f766e', sector: 'Hospital'    },
  { name: 'Prestige Forum Mall', initials: 'PFM', logo: '/img/clients/Prestige Forum Mall.webp',            color: '#164e63', sector: 'Hotel'       },
  { name: 'Eagleton Golf',       initials: 'EGL', logo: '/img/clients/Eagleton Golf.webp',                  color: '#14532d', sector: 'Hotel'       },
  { name: 'Ocean Pearl',         initials: 'OCP', logo: '/img/clients/Ocean Pear.webp',                     color: '#1e3a8a', sector: 'Hotel'       },
  { name: 'Whitefield Inn',      initials: 'WHI', logo: '/img/clients/Whitefield Inn.webp',                 color: '#065f46', sector: 'Hotel'       },
  { name: 'IIMB',                initials: 'IIM', logo: '/img/clients/IIMB.webp',                           color: '#1e3a8a', sector: 'Institution' },
  { name: 'Presidency University',initials: 'PRU', logo: '/img/clients/Presidency University.webp',         color: '#312e81', sector: 'Institution' },
  { name: 'Vogue Fashion Inst.', initials: 'VFI', logo: '/img/clients/Vogue Institute of Fashion.webp',    color: '#9d174d', sector: 'Institution' },
  { name: 'Axiom Research',      initials: 'AXR', logo: '/img/clients/Axiom Research Laboratory.webp',     color: '#334155', sector: 'Institution' },
  { name: 'Bidadi Industries',   initials: 'BID', logo: '/img/clients/bidadi-industries-association.webp', color: '#1f2937', sector: 'Industry'    },
  { name: 'Centum Rakon',        initials: 'CRK', logo: '/img/clients/Centum Rakon.webp',                  color: '#4c1d95', sector: 'Industry'    },
  { name: 'Renewsys',            initials: 'RNW', logo: '/img/clients/Renewsys.webp',                      color: '#14532d', sector: 'Industry'    },
  { name: 'Incubex',             initials: 'INQ', logo: '/img/clients/Incubex.webp',                       color: '#78350f', sector: 'Industry'    },
  { name: 'HFCL',                initials: 'HFC', logo: '/img/clients/hfcl.webp',                          color: '#1d4ed8', sector: 'Industry'    },
  { name: 'Bagmane',             initials: 'BAG', logo: '/img/clients/bagmane-logo.webp',                  color: '#0369a1', sector: 'Builder'     },
  { name: 'Cherry Hills',        initials: 'CHR', logo: '/img/clients/Cherry_hills.webp',                  color: '#be123c', sector: 'Builder'       },
  { name: 'DWP Interics',        initials: 'DWP', logo: '/img/clients/dwp_interics_private_limited_logo.webp', color: '#334155', sector: 'Builder' },
  { name: 'JLL',                 initials: 'JLL', logo: '/img/clients/JLL.webp',                           color: '#dc2626', sector: 'Corporate'  },
  { name: 'Radhika Somanna',     initials: 'RAD', logo: '/img/clients/Radhika Somanna.webp',               color: '#7c3aed', sector: 'Builder'   },
  { name: 'Raj Consultancy Services', initials: 'RAJ', logo: '/img/clients/raj_consultancy_services_cover.webp',                           color: '#92400e', sector: 'Corporate'  },
];

/* ─── Sector metadata ────────────────────────────────────── */
const SECTORS = [
  {
    key: 'Corporate'   as Sector,
    label: 'Corporate & Tech',
    sublabel: 'Leading companies trust us for world-class HVAC in their campuses & offices',
    icon: Building2,
    color: '#0ea5e9',
  },
  {
    key: 'Hospital'    as Sector,
    label: 'Healthcare',
    sublabel: 'Precision climate control where every degree matters for patient care',
    icon: HeartPulse,
    color: '#10b981',
  },
  {
    key: 'Hotel'       as Sector,
    label: 'Hospitality',
    sublabel: 'Seamless comfort experiences engineered to impress every guest',
    icon: Hotel,
    color: '#f59e0b',
  },
  {
    key: 'Institution' as Sector,
    label: 'Education',
    sublabel: 'Optimal learning environments built for focus, year-round',
    icon: GraduationCap,
    color: '#8b5cf6',
  },
  {
    key: 'Industry'    as Sector,
    label: 'Industrial',
    sublabel: 'Heavy-duty cooling systems built for demanding operations',
    icon: Factory,
    color: '#f97316',
  },
  {
    key: 'Builder'     as Sector,
    label: 'Builders & Developers',
    sublabel: 'Trusted by leading real-estate developers and workspace providers across Bangalore',
    icon: HardHat,
    color: '#f59e0b',
  },
] as const;

/* ─── ClientCard ─────────────────────────────────────────── */
function ClientCard({ client }: { readonly client: Client }) {
  const cardRef    = useRef<HTMLDivElement>(null);
  const popupRef   = useRef<HTMLDivElement>(null);
  const tweenRef   = useRef<gsap.core.Tween | null>(null);

  const showPopup = () => {
    if (!popupRef.current) return;
    tweenRef.current?.kill();
    gsap.set(popupRef.current, { display: 'flex' });
    tweenRef.current = gsap.fromTo(
      popupRef.current,
      { opacity: 0, y: 12, scale: 0.88 },
      { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: 'power3.out' },
    );
  };

  const hidePopup = () => {
    if (!popupRef.current) return;
    tweenRef.current?.kill();
    tweenRef.current = gsap.to(popupRef.current, {
      opacity: 0, y: 8, scale: 0.92, duration: 0.18, ease: 'power2.in',
      onComplete: () => {
        if (popupRef.current) popupRef.current.style.display = 'none';
      },
    });
  };

  return (
    <div
      ref={cardRef}
      className="client-card group relative flex flex-col items-center gap-3 overflow-visible rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700/60 dark:bg-slate-800 cursor-default"
      onMouseEnter={showPopup}
      onMouseLeave={hidePopup}
    >
      {/* Brand-colour top bar */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: client.color }}
      />
      {/* Brand-colour bg wash */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{ background: `${client.color}0d` }}
      />

      {/* ── Floating image popup ──────────────────────────────── */}
      <div
        ref={popupRef}
        className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-50 hidden -translate-x-1/2 flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-2xl dark:border-slate-700 dark:bg-slate-800"
        style={{ width: 160, boxShadow: `0 20px 60px -8px ${client.color}40, 0 8px 24px rgba(0,0,0,0.15)` }}
      >
        {/* Arrow */}
        <div
          className="absolute -bottom-[7px] left-1/2 h-3.5 w-3.5 -translate-x-1/2 rotate-45 rounded-sm border-b border-r border-slate-100 bg-white dark:border-slate-700 dark:bg-slate-800"
        />
        {/* Colour ring behind logo */}
        <div
          className="relative flex h-20 w-20 items-center justify-center rounded-2xl"
          style={{ background: `${client.color}15`, border: `1.5px solid ${client.color}30` }}
        >
          <Image
            src={client.logo}
            alt={client.name}
            width={64}
            height={64}
            className="h-16 w-16 object-contain drop-shadow-sm"
          />
        </div>
        {/* Name */}
        <p className="text-center text-xs font-bold leading-tight text-slate-800 dark:text-white">
          {client.name}
        </p>
        {/* Sector pill */}
        <span
          className="rounded-full px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white"
          style={{ background: client.color }}
        >
          {client.sector}
        </span>
      </div>

      {/* Logo box */}
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-xl bg-slate-50 p-2 dark:bg-slate-700">
        <Image
          src={client.logo}
          alt={client.name}
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
        />
      </div>
      {/* Name */}
      <p className="relative z-10 text-center text-sm font-bold leading-tight text-slate-700 dark:text-slate-200">
        {client.name}
      </p>
    </div>
  );
}

/* ─── SectorSection ──────────────────────────────────────── */
interface SectorSectionProps {
  sector: typeof SECTORS[number];
  sectorClients: Client[];
  index: number;
}
function SectorSection({ sector, sectorClients, index }: Readonly<SectorSectionProps>) {
  const sectionRef = useRef<HTMLElement>(null);
  const numRef     = useRef<HTMLSpanElement>(null);
  const Icon       = sector.icon;

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Decorative number parallax */
      gsap.to(numRef.current, {
        y: -100, ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      /* Header reveal */
      gsap.fromTo(
        '.sector-header-' + sector.key + ' > *',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.75, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', once: true } },
      );

      /* Cards stagger */
      const cards = sectionRef.current?.querySelectorAll('.client-card') ?? [];
      gsap.set(cards, { opacity: 1, y: 0, scale: 1 });
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0, scale: 0.94 },
        { y: 0, opacity: 1, scale: 1,
          stagger: { each: 0.04, from: 'start' },
          duration: 0.55, ease: 'power3.out', immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true } },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [sector.key]);

  /* Alternate section bg */
  const isEven = index % 2 === 0;

  return (
    <section
      ref={sectionRef}
      id={sector.key.toLowerCase()}
      className="relative py-20"
      style={{ background: isEven ? '' : '' }}
    >
      {/* Subtle bg tint layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isEven
            ? `linear-gradient(135deg, ${sector.color}07 0%, transparent 60%)`
            : `linear-gradient(225deg, ${sector.color}07 0%, transparent 60%)`,
        }}
      />
      {/* Alternating bg base */}
      <div className={`absolute inset-0 ${isEven ? 'bg-white dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-900'}`} style={{ zIndex: -1 }} />

      {/* Large decorative number — parallaxed */}
      <span
        ref={numRef}
        aria-hidden
        className="pointer-events-none select-none absolute right-4 top-6 text-[160px] font-black leading-none md:text-[220px]"
        style={{ color: sector.color, opacity: 0.05 }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className={`sector-header-${sector.key} mb-12 flex items-start gap-5`}>
          {/* Icon box */}
          <div
            className="mt-1 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl shadow-md"
            style={{
              background: `${sector.color}18`,
              border: `1.5px solid ${sector.color}40`,
            }}
          >
            <Icon className="h-7 w-7" style={{ color: sector.color }} strokeWidth={1.5} />
          </div>

          <div>
            {/* Count badge */}
            <span
              className="mb-1 inline-block rounded-full px-3 py-0.5 text-[10px] font-black uppercase tracking-widest"
              style={{ background: `${sector.color}18`, color: sector.color }}
            >
              {String(sectorClients.length).padStart(2, '0')} Clients
            </span>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white md:text-4xl leading-tight">
              {sector.label}
            </h2>
            <p className="mt-1.5 max-w-md text-sm text-slate-500 dark:text-slate-400">
              {sector.sublabel}
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {sectorClients.map((client) => (
            <ClientCard key={client.name} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function ClientsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef   = useRef<HTMLDivElement>(null);

  /* Hero parallax + entrance */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Bg image parallax */
      gsap.to(bgRef.current, {
        y: '28%', ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      /* Content entrance */
      gsap.fromTo(
        '.hero-content > *',
        { y: 45, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.13, duration: 0.9, ease: 'power3.out', delay: 0.15, immediateRender: false },
      );

      /* Stats entrance */
      gsap.fromTo(
        '.hero-stat',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.09, duration: 0.7, ease: 'power3.out', delay: 0.7, immediateRender: false },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white dark:bg-slate-950">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        className="relative flex min-h-[90svh] flex-col items-center justify-center overflow-hidden"
      >
        {/* Parallax background */}
        <div
          ref={bgRef}
          className="absolute inset-x-0 top-[-15%] h-[130%]"
          style={{
            backgroundImage: "url('/img/Our-Clients-hero.webp')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/85" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />

        {/* Hero content */}
        {/* <div className="hero-content relative z-10 px-6 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400" />
            Trusted By Industry Leaders
          </span>
          <h1 className="mt-2 text-5xl font-black leading-none text-white md:text-6xl lg:text-7xl">
            Our{' '}
            <span className="text-sky-400">Clients</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/60">
            100+ prestigious organisations across Bengaluru trust Sneha Enterprises
            for precision HVAC — from Fortune 500 campuses to leading hospitals.
          </p>
        </div> */}

        {/* Glass stat cards */}
        {/* <div className="relative z-10 mt-12 flex flex-wrap justify-center gap-3 px-6">
          {[
            { value: '100+', label: 'Clients Served' },
            { value: '6',    label: 'Industry Sectors' },
            { value: `${getYearsExp()}+`, label: 'Years of Trust' },
            { value: '24/7', label: 'Support Available' },
          ].map((s) => (
            <div
              key={s.label}
              className="hero-stat flex flex-col items-center rounded-2xl border border-white/10 bg-white/10 px-7 py-4 backdrop-blur-md"
            >
              <span className="text-3xl font-black text-white">{s.value}</span>
              <span className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-white/50">
                {s.label}
              </span>
            </div>
          ))}
        </div> */}

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/35" />
        </div>
      </div>

      {/* ── SECTOR ANCHOR NAV ────────────────────────────────── */}
      <div className="border-b border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTORS.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.key}
                href={`#${s.key.toLowerCase()}`}
                className="group flex flex-shrink-0 items-center gap-1.5 rounded-full border border-transparent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 transition-all duration-200 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <Icon
                  className="h-3.5 w-3.5 flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ color: s.color }}
                  strokeWidth={2}
                />
                {s.label}
                <span
                  className="ml-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-black text-white"
                  style={{ background: s.color }}
                >
                  {clients.filter((c) => c.sector === s.key).length}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* ── SECTOR SECTIONS ──────────────────────────────────── */}
      {SECTORS.map((sector, i) => (
        <SectorSection
          key={sector.key}
          sector={sector}
          sectorClients={clients.filter((c) => c.sector === sector.key)}
          index={i}
        />
      ))}

      {/* ── DIVIDER LINE ─────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-800" />
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-24 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-sky-950/20 dark:via-slate-950 dark:to-slate-950" />

        {/* Decorative rings */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/40 dark:border-sky-800/20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/60 dark:border-sky-800/30"
          aria-hidden
        />

        <div className="relative z-10 px-6">
          <p className="mb-3 text-xs font-black uppercase tracking-widest text-sky-500">
            Join Our Growing List
          </p>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
            Become Our Next Client
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Expert HVAC solutions tailored for your business. Contact us for a free site
            survey and no-obligation consultation.
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-9 py-4 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-sky-400/40"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
