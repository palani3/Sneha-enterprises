'use client';

import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown } from 'lucide-react';
import { slides, INTERVAL } from './heroSlides';
import { getYearsExp } from '../../../lib/founding';

// Loaded only on the client, after hydration — keeps lucide + the PDF
// trigger path out of the critical hero render.
const DownloadBrochureButton = dynamic(() => import('../../pdf/DownloadBrochureButton'), {
  ssr: false,
  loading: () => null,
});

interface Props {
  active: number;
  badgeRef: RefObject<HTMLDivElement | null>;
  onDotClick: (i: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

const stats = [
  { value: `${getYearsExp()}+`, label: 'Years Experience' },
  { value: '5000+', label: 'Happy Clients'    },
  { value: '50+',   label: 'Engineers'        },
  { value: '24/7',  label: 'Support'          },
];

export default function HeroContent({ active, badgeRef, onDotClick, onPrev, onNext }: Readonly<Props>) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.h-badge',   { y: 24, opacity: 0, duration: 0.6 })
        .from('.h-title',   { y: 32, opacity: 0, duration: 0.75 }, '-=0.3')
        .from('.h-eyebrow', { y: 16, opacity: 0, duration: 0.5 }, '-=0.4')
        .from('.h-ctas',    { y: 24, opacity: 0, duration: 0.6 }, '-=0.35')
        .from('.h-stats',   { y: 16, opacity: 0, duration: 0.5 }, '-=0.35')
        .from('.h-dots',    { y: 12, opacity: 0, duration: 0.4 }, '-=0.25');

      gsap.to(badgeRef.current, { y: -10, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to('.h-arrow',       { y: 8,  duration: 1.1, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    });
    return () => ctx.revert();
  }, [badgeRef]);

  return (
    <>
      {/* ── Main content ─────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pb-28 pt-10 text-center">

        {/* Main heading */}
        <h1 className="h-title mt-2 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Expert HVAC &<br />
          <span className="text-sky-400">AC Solutions</span>
        </h1>

        {/* Slide sub-label */}
        <p
          key={`label-${active}`}
          className="h-eyebrow mt-4 text-sm font-medium uppercase tracking-[0.22em] text-white/50"
          style={{ animation: 'fadeUp 0.5s ease forwards' }}
        >
          {slides[active].label}
        </p>

        {/* CTA buttons */}
        <div className="h-ctas mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-xl bg-sky-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400 hover:shadow-xl hover:shadow-sky-500/40"
          >
            <Phone className="h-4 w-4" />
            Get Free Quote
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 rounded-xl border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
          >
            Our Services
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 7l5 5-5 5" />
            </svg>
          </Link>
          <DownloadBrochureButton
            variant="outline"
            label="Download Brochure"
            className="border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 px-8 py-3.5 text-sm rounded-xl"
          />
        </div>

        {/* Stats strip */}
        <div className="h-stats mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-white/10 bg-black/25 px-8 py-4 backdrop-blur-sm">
          {stats.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center">
              {i > 0 && <div className="hidden sm:block absolute h-5 w-px bg-white/15" style={{ marginLeft: '-1rem' }} />}
              <span className="text-xl font-black text-white">{s.value}</span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-white/45">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Slide dot indicators */}
        <div className="h-dots mt-8 flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.bg}
              onClick={() => onDotClick(i)}
              aria-label={slide.label}
              className="relative"
            >
              <div
                className="rounded-full transition-all duration-500"
                style={{
                  height: 3,
                  width:  i === active ? 24 : 6,
                  background: i === active ? '#38bdf8' : 'rgba(255,255,255,0.3)',
                }}
              />
              {i === active && (
                <div
                  key={`prog-${active}`}
                  className="absolute top-0 left-0 h-[3px] w-full origin-left rounded-full bg-sky-400"
                  style={{ animation: `slideProgress ${INTERVAL}ms linear forwards` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Floating Blue Star badge ─────────────────────────── */}
      <div
        ref={badgeRef}
        className="absolute bottom-24 right-8 z-20 hidden rounded-xl border border-white/15 bg-black/30 p-3 shadow-xl backdrop-blur-md md:block"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-white p-2">
            <Image src="/img/icon/Blue_Star_logo.png" alt="Blue Star Authorized" width={48} height={48} className="h-12 w-12 object-contain" priority />
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-sky-300">Authorized Dealer</p>
            <p className="text-sm font-black text-white">Blue Star India</p>
          </div>
        </div>
      </div>

      {/* ── Prev / Next arrows ───────────────────────────────── */}
      <div className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 md:block">
        <button onClick={onPrev} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white/70 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:text-white">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 md:block">
        <button onClick={onNext} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white/70 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:text-white">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-white/30">
        <span className="text-[8px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-arrow h-4 w-4" />
      </div>

      {/* ── Keyframes ─────────────────────────────────────────── */}
      <style>{`
        @keyframes slideProgress { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}
