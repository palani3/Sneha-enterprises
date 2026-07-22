'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Replace `logo` with actual image path (e.g. '/clients/tcs.png')
 * When logo is null, the component shows the `initials` badge instead.
 * Add or remove entries freely — the marquee recalculates automatically.
 */
export interface Client {
  name: string;
  initials: string;
  logo: string | null;   // e.g. '/clients/tcs.png'  — set null to use initials badge
  color: string;         // tailwind bg color for badge
}

const clients: Client[] = [
  { name: 'Google', initials: 'GGL', logo: '/img/clients/google.webp', color: 'bg-blue-500' },
  { name: 'Bosch', initials: 'BSH', logo: '/img/clients/Bosch1.webp', color: 'bg-gray-700' },
  { name: 'Flipkart', initials: 'FLK', logo: '/img/clients/flipkart.webp', color: 'bg-yellow-600' },
  { name: 'Deloitte', initials: 'DEL', logo: '/img/clients/Deloitte.webp', color: 'bg-green-700' },
  { name: 'Biocon', initials: 'BIO', logo: '/img/clients/Biocon.webp', color: 'bg-teal-700' },
  { name: 'Brigade Group', initials: 'BRG', logo: '/img/clients/brigade-group.webp', color: 'bg-sky-700' },
  { name: 'Prestige', initials: 'PRE', logo: '/img/clients/prestige.webp', color: 'bg-cyan-700' },
  { name: 'PwC', initials: 'PWC', logo: '/img/clients/pwc.webp', color: 'bg-orange-700' },
  { name: 'Myntra', initials: 'MYN', logo: '/img/clients/Myntra.webp', color: 'bg-pink-600' },
  { name: 'CRED', initials: 'CRD', logo: '/img/clients/cred.webp', color: 'bg-slate-800' },
  { name: 'HDFC', initials: 'HDF', logo: '/img/clients/hdfc.webp', color: 'bg-blue-700' },
  { name: 'AMD', initials: 'AMD', logo: '/img/clients/amd.webp', color: 'bg-red-700' },
  { name: 'Exxon Mobil', initials: 'EXM', logo: '/img/clients/Exxon Mobil.webp', color: 'bg-red-800' },
  { name: 'TVS', initials: 'TVS', logo: '/img/clients/TVS.webp', color: 'bg-blue-900' },
  { name: 'AirAsia', initials: 'AIR', logo: '/img/clients/airasia.webp', color: 'bg-red-600' },
  { name: 'Fossil', initials: 'FOS', logo: '/img/clients/fossil.webp', color: 'bg-amber-700' },
  { name: 'Mercedes-Benz', initials: 'MBZ', logo: '/img/clients/benz.webp', color: 'bg-slate-700' },
  { name: 'DXC Technology', initials: 'DXC', logo: '/img/clients/dxcpng.webp', color: 'bg-purple-700' },
  { name: 'Applied Materials', initials: 'APM', logo: '/img/clients/Applied Materials.webp', color: 'bg-blue-600' },
  { name: 'Autoliv', initials: 'AUT', logo: '/img/clients/Autoliv.webp', color: 'bg-indigo-700' },
  { name: 'ThoughtWorks', initials: 'TW', logo: '/img/clients/Thought Works.webp', color: 'bg-violet-700' },
  { name: 'AV Hospital', initials: 'AVH', logo: '/img/clients/AV Hospita.webp', color: 'bg-emerald-700' },
  { name: 'Baptist Hospital', initials: 'BAP', logo: '/img/clients/Baptist Hospitals.webp', color: 'bg-blue-800' },
  { name: 'Sparsh Hospital', initials: 'SPR', logo: '/img/clients/Sparsh Hospitals.webp', color: 'bg-teal-800' },
  { name: 'Nelivigi Hospital', initials: 'NLV', logo: '/img/clients/Nelivigi Hospitals.webp', color: 'bg-green-800' },
  { name: 'Vijay Hospital', initials: 'VJH', logo: '/img/clients/vijay-hospital.webp', color: 'bg-red-700' },
  { name: 'IIMB', initials: 'IIM', logo: '/img/clients/IIMB.webp', color: 'bg-blue-900' },
  { name: 'Presidency University', initials: 'PRU', logo: '/img/clients/Presidency University.webp', color: 'bg-indigo-800' },
  { name: 'Vogue Fashion Institute', initials: 'VFI', logo: '/img/clients/Vogue Institute of Fashion.webp', color: 'bg-pink-700' },
  { name: 'Prestige Forum Mall', initials: 'PFM', logo: '/img/clients/Prestige Forum Mall.webp', color: 'bg-cyan-800' },
  { name: 'Eagleton Golf', initials: 'EGL', logo: '/img/clients/Eagleton Golf.webp', color: 'bg-green-700' },
  { name: 'Danske IT', initials: 'DAN', logo: '/img/clients/Danske IT.webp', color: 'bg-blue-800' },
  { name: 'Blume Global', initials: 'BLM', logo: '/img/clients/blumeglobal.webp', color: 'bg-sky-800' },
  { name: 'Centum Rakon', initials: 'CRK', logo: '/img/clients/Centum Rakon.webp', color: 'bg-violet-800' },
  { name: 'Cross Domain', initials: 'CRD', logo: '/img/clients/Cross Domain.webp', color: 'bg-orange-800' },
  { name: 'HFCL', initials: 'HFC', logo: '/img/clients/hfcl.webp', color: 'bg-blue-700' },
  { name: 'Incubex', initials: 'INQ', logo: '/img/clients/Incubex.webp', color: 'bg-amber-800' },
  { name: 'IndiQube', initials: 'IDQ', logo: '/img/clients/Indiqube.webp', color: 'bg-rose-700' },
  { name: 'Ocean Pearl', initials: 'OCP', logo: '/img/clients/Ocean Pear.webp', color: 'bg-blue-600' },
  { name: 'Renewsys', initials: 'RNW', logo: '/img/clients/Renewsys.webp', color: 'bg-green-600' },
  { name: 'Axiom Research', initials: 'AXR', logo: '/img/clients/Axiom Research Laboratory.webp', color: 'bg-slate-700' },
  { name: 'Vestian Global', initials: 'VST', logo: '/img/clients/vestian.webp',          color: 'bg-indigo-600' },
  { name: 'Tablespace',    initials: 'TBS', logo: '/img/clients/tablespace.webp',         color: 'bg-purple-600' },
  { name: 'Whitefield Inn',initials: 'WHI', logo: '/img/clients/Whitefield Inn.webp',     color: 'bg-emerald-800' },
  { name: 'Bidadi Industries', initials: 'BID', logo: '/img/clients/bidadi-industries-association.webp', color: 'bg-gray-800' },
  { name: 'Bagmane',       initials: 'BAG', logo: '/img/clients/bagmane-logo.webp',       color: 'bg-sky-800' },
  { name: 'Cherry Hills',  initials: 'CHR', logo: '/img/clients/Cherry_hills.webp',       color: 'bg-rose-700' },
  { name: 'DWP Interics',  initials: 'DWP', logo: '/img/clients/dwp_interics_private_limited_logo.webp', color: 'bg-slate-700' },
  { name: 'JLL',           initials: 'JLL', logo: '/img/clients/JLL.webp',                color: 'bg-red-700' },
  { name: 'Radhika Somanna',initials: 'RAD', logo: '/img/clients/Radhika Somanna.webp',  color: 'bg-purple-700' },
  { name: 'Raj Consultancy Services',           initials: 'RAJ', logo: '/img/clients/raj_consultancy_services_cover.webp',                color: 'bg-amber-700' },
];

// Split into two rows for the two marquee tracks
const row1 = clients.slice(0, 22);
const row2 = clients.slice(22);

interface ClientCardProps { client: Client }
function ClientCard({ client }: Readonly<ClientCardProps>) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md dark:bg-white/[0.05] dark:hover:bg-white/[0.10] dark:border-white/[0.08] dark:hover:border-white/20 rounded-2xl px-5 py-3.5 mx-2 transition-all duration-300 group cursor-default min-w-[190px]">
      {client.logo ? (
        <Image
          src={client.logo}
          alt={client.name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-xl object-contain brightness-90 transition-all group-hover:brightness-100"
        />
      ) : (
        <div className={`h-10 w-10 ${client.color} flex-shrink-0 rounded-xl flex items-center justify-center text-xs font-black text-white`}>
          {client.initials}
        </div>
      )}
      <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 dark:text-gray-400 dark:group-hover:text-white transition-colors whitespace-nowrap">
        {client.name}
      </span>
    </div>
  );
}

interface MarqueeRowProps {
  items: Client[];
  direction: 'left' | 'right';
  speed?: number;
}
function MarqueeRow({ items, direction, speed = 40 }: Readonly<MarqueeRowProps>) {
  const rowRef      = useRef<HTMLDivElement>(null);
  const tweenRef    = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    // Duplicate children for seamless loop
    const original = Array.from(el.children) as HTMLElement[];
    original.forEach((child) => {
      el.appendChild(child.cloneNode(true));
    });

    const totalW = el.scrollWidth / 2;
    const xFrom  = direction === 'left' ? 0 : -totalW;
    const xTo    = direction === 'left' ? -totalW : 0;
    const dur    = totalW / speed;

    gsap.set(el, { x: xFrom });
    tweenRef.current = gsap.to(el, {
      x: xTo,
      duration: dur,
      ease: 'none',
      repeat: -1,
    });

    // Pause on hover
    const parent = el.parentElement;
    const pause  = () => tweenRef.current?.pause();
    const play   = () => tweenRef.current?.play();
    parent?.addEventListener('mouseenter', pause);
    parent?.addEventListener('mouseleave', play);

    return () => {
      tweenRef.current?.kill();
      parent?.removeEventListener('mouseenter', pause);
      parent?.removeEventListener('mouseleave', play);
    };
  }, [direction, speed]);

  return (
    <div className="overflow-hidden w-full">
      <div ref={rowRef} className="flex w-max">
        {items.map((c) => <ClientCard key={c.name} client={c} />)}
      </div>
    </div>
  );
}

export default function OurClients() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headRef.current?.children ?? [], {
        y: 40, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 dark:bg-gray-950 overflow-hidden">

      {/* Header */}
      <div ref={headRef} className="max-w-6xl mx-auto px-6 text-center mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-100 dark:text-blue-400 dark:bg-blue-400/10 border border-sky-200 dark:border-blue-400/20 px-3 py-1 rounded-full">
          Trusted By
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mt-4 mb-3">
          Our Clients
        </h2>
        <p className="text-slate-500 dark:text-gray-400 text-sm max-w-xl mx-auto">
          We have successfully executed HVAC projects for 100+ prestigious clients across
          Corporates, Hospitals, Hotels, Institutions and Industries.
        </p>
      </div>

      {/* Marquee rows — edge fade overlay */}
      <div className="relative">
        {/* Left & right fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-slate-50 to-transparent dark:from-gray-950" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-slate-50 to-transparent dark:from-gray-950" />

        <div className="flex flex-col gap-4">
          {/* Row 1 — scrolls left */}
          <MarqueeRow items={row1} direction="left" speed={45} />
          {/* Row 2 — scrolls right */}
          <MarqueeRow items={row2} direction="right" speed={38} />
        </div>
      </div>

      {/* Bottom note */}
      <div className="max-w-6xl mx-auto px-6 text-center mt-12">
        <p className="text-xs text-slate-400 dark:text-gray-600">
          Hover to pause · {clients.length}+ clients shown · Images updated as provided
        </p>
      </div>
    </section>
  );
}
