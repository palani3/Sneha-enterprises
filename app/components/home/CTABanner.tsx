'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax bg
      gsap.to(bgRef.current, {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Content entrance
      gsap.from(contentRef.current?.children ?? [], {
        y: 50, opacity: 0, stagger: 0.13, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-28 px-6">
      {/* Parallax bg */}
      <div
        ref={bgRef}
        className="absolute left-0 right-0 top-[-15%] h-[130%] bg-cover bg-center"
        style={{ backgroundImage: "url('/img/mainphoto/package.png')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/94 via-blue-950/88 to-slate-900/94" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,165,233,0.12),transparent_60%)]" />

      {/* Accent lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 text-center text-white"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-700/60 bg-sky-900/40 px-5 py-2 text-sm font-semibold text-sky-400">
          <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />{' '}
          Available 24/7 for Emergency Service
        </span>

        <h2 className="text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
          Ready for Perfect{' '}
          <span className="block bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent">
            Comfort?
          </span>
        </h2>

        <p className="max-w-xl text-lg leading-relaxed text-white/65">
          Call us today for a free site survey and get the right air conditioning solution designed specifically for your space and budget.
        </p>

        {/* Contact cards */}
        <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
          {[
            // { icon: '📞', title: 'Call Us Now',  sub: '+91 98802 83130', href: 'tel:+919880283130',                          bg: 'bg-sky-500/20 border-sky-500/40' },
            { icon: '💬', title: 'WhatsApp', sub: 'Quick Response', href: 'https://wa.me/919880283130', bg: 'bg-green-500/20 border-green-500/40' },
            { icon: '📧', title: 'Email Us', sub: 'Sales@sneha-enterprises.com', href: 'mailto:Sales@sneha-enterprises.com', bg: 'bg-white/10 border-white/20' },
          ].map((a) => (
            <a
              key={a.title}
              href={a.href}
              className={`block rounded-2xl border p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 ${a.bg}`}
            >
              <div className="mb-2 text-3xl">{a.icon}</div>
              <div className="font-bold text-white">{a.title}</div>
              <div className="mt-0.5 text-sm text-white/60">{a.sub}</div>
            </a>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 rounded-full bg-sky-500 px-10 py-5 text-lg font-black text-white shadow-[0_0_32px_rgba(14,165,233,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-[0_0_50px_rgba(14,165,233,0.7)]"
        >
          Get Free Quote
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/40">
          {['✓ Free Site Survey', '✓ No Hidden Charges', '✓ 1-Year Warranty', '✓ 24/7 Support'].map((t) => (
            <span key={t} className="text-sm font-semibold">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
