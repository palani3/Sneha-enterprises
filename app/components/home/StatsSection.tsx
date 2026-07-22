'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CalendarCheck, SmilePlus, Wind, HardHat } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 28,    suffix: '+', label: 'Years in Business',  icon: CalendarCheck, color: '#0ea5e9' },
  { value: 5000,  suffix: '+', label: 'Happy Customers',    icon: SmilePlus,     color: '#10b981' },
  { value: 10000, suffix: '+', label: 'ACs Serviced',       icon: Wind,          color: '#6366f1' },
  { value: 50,    suffix: '+', label: 'Expert Technicians', icon: HardHat,       color: '#f59e0b' },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const numRefs    = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>('.stat-card');
    if (!cards) return;

    /* Set visible immediately — no hidden state */
    gsap.set(cards, { opacity: 1, y: 0 });

    const ctx = gsap.context(() => {
      /* Cards slide up on scroll */
      gsap.fromTo(
        cards,
        { opacity: 0, y: 48 },
        {
          opacity: 1, y: 0,
          stagger: 0.13,
          duration: 0.75,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            once: true,
          },
        },
      );

      /* Number counters */
      stats.forEach((s, i) => {
        const el = numRefs.current[i];
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: s.value,
          duration: 2,
          ease: 'power2.out',
          delay: i * 0.13,
          immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', once: true },
          onUpdate() { el.textContent = Math.round(obj.val).toLocaleString(); },
          onComplete() { el.textContent = s.value.toLocaleString(); },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl">

        {/* Label */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            By the numbers
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="stat-card group relative flex flex-col items-center text-center rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
              >
                {/* Icon */}
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                >
                  <Icon className="h-6 w-6" style={{ color: s.color }} strokeWidth={1.8} />
                </div>

                {/* Counter */}
                <div className="mb-1 flex items-end gap-0.5">
                  <span
                    ref={(el) => { numRefs.current[i] = el; }}
                    className="text-4xl font-black text-slate-900 dark:text-white tabular-nums"
                  >
                    0
                  </span>
                  <span className="mb-0.5 text-2xl font-black" style={{ color: s.color }}>
                    {s.suffix}
                  </span>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {s.label}
                </span>

                {/* Bottom accent */}
                <div
                  className="absolute inset-x-0 bottom-0 h-0.5 rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: s.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
