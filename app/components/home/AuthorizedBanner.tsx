'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Cloud, Snowflake, Flame, ShieldCheck, ShoppingCart, Headphones } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const serviceCards = [
  {
    icon: Cloud,
    title: 'AC Installation',
    desc: 'We supply and install all types of air conditioning systems.',
    gradient: 'from-blue-600 to-blue-400',
    shadow: 'shadow-blue-500/25',
  },
  {
    icon: Snowflake,
    title: 'Service & Maintenance',
    desc: 'We repair and maintain the machines at regular intervals to ensure proper and smooth functioning.',
    gradient: 'from-emerald-600 to-emerald-400',
    shadow: 'shadow-emerald-500/25',
  },
  {
    icon: Flame,
    title: 'Hot And Cold',
    desc: 'We provide both hot and cold air conditioning solutions.',
    gradient: 'from-rose-600 to-rose-400',
    shadow: 'shadow-rose-500/25',
  },
  {
    icon: ShieldCheck,
    title: 'Safety & Secure',
    desc: 'All our service engineers are fully vaccinated, equipped with safety gear and sanitize after every service.',
    gradient: 'from-teal-600 to-teal-400',
    shadow: 'shadow-teal-500/25',
  },
  {
    icon: ShoppingCart,
    title: 'Sales & Marketing',
    desc: 'Our experienced team will assist you to find the right air conditioning solution.',
    gradient: 'from-amber-600 to-amber-400',
    shadow: 'shadow-amber-500/25',
  },
  {
    icon: Headphones,
    title: '24/7 Customer Care',
    desc: 'We allocate service engineers to attend complaints and resolve the issue at the earliest.',
    gradient: 'from-violet-600 to-violet-400',
    shadow: 'shadow-violet-500/25',
  },
];

export default function AuthorizedBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-heading > *', {
        y: 40, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 82%' },
      });

      const cards = gsap.utils.toArray<HTMLElement>('.svc-home-card');
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 80, opacity: 0, rotation: 3, duration: 0.9, ease: 'power3.out',
          delay: i * 0.08,
          scrollTrigger: { trigger: card, start: 'top 90%' },
        });
      });

      cards.forEach((card) => {
        const icon = card.querySelector('.svc-icon');
        const enterFn = () => {
          gsap.to(icon, { y: -6, rotation: 8, duration: 0.4, ease: 'power2.out' });
          gsap.to(card,  { y: -8, duration: 0.35, ease: 'power2.out' });
        };
        const leaveFn = () => {
          gsap.to(icon, { y: 0, rotation: 0, duration: 0.4, ease: 'power2.out' });
          gsap.to(card,  { y: 0, duration: 0.35, ease: 'power2.out' });
        };
        card.addEventListener('mouseenter', enterFn);
        card.addEventListener('mouseleave', leaveFn);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white px-6 py-24 dark:bg-slate-950" style={{ scrollMarginTop: '64px' }}>
      {/* Subtle background pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      {/* Heading */}
      <div className="svc-heading relative mx-auto mb-16 max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2.5">
          <Image src="/img/icon/Blue_Star_logo.png" alt="Blue Star Authorized Dealer" width={56} height={56} className="h-14 w-14 object-contain" />
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
            Blue Star Authorized Dealer
          </span>
        </div>
        <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">Our Services</h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-sky-500" />
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          Complete HVAC solutions backed by Blue Star — from installation to 24/7 support.
        </p>
      </div>

      {/* Cards grid */}
      <div className="relative mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className={`svc-home-card group relative cursor-default overflow-hidden rounded-2xl bg-white p-7 shadow-lg ${card.shadow} transition-shadow duration-300 hover:shadow-xl dark:bg-slate-800`}
            >
              {/* Gradient accent bar */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.gradient}`} />

              {/* Icon */}
              <div className={`svc-icon mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-md ${card.shadow}`}>
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>

              <h3 className="mb-2 text-lg font-extrabold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
