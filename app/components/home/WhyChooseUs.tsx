'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  { icon: '🏆', title: 'Blue Star Authorized', desc: 'Official dealer with full manufacturer backing and genuine spare parts.' },
  { icon: '⚡', title: 'Same-Day Service', desc: 'Most repair and service requests completed the same day you call.' },
  { icon: '👨‍🔧', title: 'Expert Technicians', desc: 'Factory-trained, certified technicians with 10+ years of field experience.' },
  { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges. Get a clear quote before any work begins.' },
  { icon: '🛡️', title: '1-Year Warranty', desc: 'Service warranty on all repairs and new installations for peace of mind.' },
  { icon: '📞', title: '24/7 Support', desc: 'Round-the-clock customer support for emergencies and urgent queries.' },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);
  const imageRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left text block slides in from left
      gsap.from(leftRef.current, {
        x: -80, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });

      // Right cards stagger in
      gsap.from(rightRef.current?.children ?? [], {
        x: 60, opacity: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
      });

      // Floating image animation
      gsap.to(imageRef.current, {
        y: -15, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div ref={leftRef}>
            {/* Section heading — custom bold treatment */}
            <div className="flex flex-col gap-4 mb-10">
              <span className="inline-flex items-center gap-2 w-fit rounded-full bg-blue-100 dark:bg-blue-900/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                Why Sneha Enterprises
              </span>

              <h2 className="text-4xl md:text-5xl font-black leading-tight text-gray-900 dark:text-white">
                The Trusted Choice
                <span className="block text-blue-600 dark:text-blue-400">for Blue Star AC</span>
              </h2>

              {/* Accent bar */}
              <div className="flex items-center gap-3">
                <div className="h-1 w-12 rounded-full bg-blue-600" />
                <div className="h-1 w-4 rounded-full bg-blue-300" />
              </div>

              <p className="max-w-md text-base md:text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                We&apos;ve been serving our community with honest, expert air conditioning solutions for over{' '}
                <span className="font-semibold text-gray-700 dark:text-gray-200">15 years</span>.
              </p>
            </div>

            {/* Visual badge */}
            <div ref={imageRef} className="relative mt-6 w-full max-w-sm">
              <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-5xl mb-4">❄️</div>
                <div className="text-4xl font-black mb-1">15+</div>
                <div className="text-blue-200 text-sm font-medium">Years of Trusted Service</div>
                <div className="mt-6 flex items-center gap-3 bg-white/15 rounded-xl p-3">
                  <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center font-black text-sm">BS</div>
                  <div>
                    <div className="text-xs font-bold">BLUE STAR AUTHORIZED</div>
                    <div className="text-blue-300 text-xs">Sales & Service Dealer</div>
                  </div>
                </div>
                {/* Stars */}
                <div className="mt-4 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                  <span className="text-blue-200 text-xs ml-1">5.0 · 500+ Reviews</span>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold rounded-full px-3 py-1.5 shadow-lg">
                ✓ Same Day
              </div>
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white text-xs font-bold rounded-full px-3 py-1.5 shadow-lg">
                🔥 Most Popular
              </div>
            </div>
          </div>

          {/* Right — grid of reasons */}
          <div ref={rightRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-5 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {r.icon}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">{r.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
