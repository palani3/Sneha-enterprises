'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Award, Users, Wind, HardHat } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

import { getYearsExp } from '../../lib/founding';

const stats = [
  { icon: Award,    value: `${getYearsExp()}+`, label: 'Years Experience', color: '#38bdf8' },
  { icon: Users,    value: '5,000+', label: 'Happy Clients',    color: '#34d399' },
  { icon: Wind,     value: '10,000+',label: 'ACs Serviced',     color: '#a78bfa' },
  { icon: HardHat,  value: '50+',    label: 'Expert Engineers', color: '#fb923c' },
];

export default function ParallaxBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        y: '20%', ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
      });
      gsap.from(contentRef.current?.children ?? [], {
        y: 50, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[480px] overflow-hidden">
      {/* Parallax bg */}
      <div
        ref={bgRef}
        className="absolute left-0 right-0 top-[-15%] h-[130%] bg-cover bg-center"
        style={{ backgroundImage: "url('/img/mainphoto/chiller1.png')" }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/85 to-slate-900/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,165,233,0.12),transparent_65%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-6 text-center">

        {/* Heading */}
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
            Trusted HVAC Partner Since 1996
          </p>
          <h2 className="text-3xl font-black text-white md:text-5xl">
            Powering Comfort Across{' '}
            <span className="text-sky-400">Bengaluru</span>
          </h2>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-14">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ background: `${s.color}20`, border: `1px solid ${s.color}40` }}
                >
                  <Icon className="h-5 w-5" style={{ color: s.color }} strokeWidth={1.8} />
                </div>
                <span className="text-3xl font-black text-white md:text-4xl">{s.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/45">{s.label}</span>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-xl hover:shadow-sky-500/40"
        >
          Get a Free Site Survey
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 7l5 5-5 5" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
