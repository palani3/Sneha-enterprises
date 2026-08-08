'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../ui/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Home Owner',
    location: 'Chennai',
    avatar: 'RK',
    rating: 5,
    text: 'Excellent service! The technician arrived on time, installed the Blue Star 1.5 ton split AC perfectly, and explained all the features. Very professional team.',
    date: 'March 2025',
  },
  {
    name: 'Priya Venkatesh',
    role: 'Business Owner',
    location: 'Coimbatore',
    avatar: 'PV',
    rating: 5,
    text: 'Sneha Enterprises set up 8 cassette ACs for our office. The AMC plan they offered is excellent value. Highly recommend for commercial installations.',
    date: 'February 2025',
  },
  {
    name: 'Suresh Babu',
    role: 'Home Owner',
    location: 'Madurai',
    avatar: 'SB',
    rating: 5,
    text: 'Our old AC stopped cooling. Called Sneha Enterprises and they came same day, diagnosed a gas leak, refilled and it works like new. Fast and honest pricing!',
    date: 'January 2025',
  },
  {
    name: 'Kavitha Rajan',
    role: 'Flat Owner',
    location: 'Salem',
    avatar: 'KR',
    rating: 5,
    text: 'Bought two Blue Star split ACs from them. Great prices, genuine products, and the installation team was neat and tidy. Will definitely recommend to friends.',
    date: 'December 2024',
  },
  {
    name: 'Mohammed Farooq',
    role: 'Hotel Manager',
    location: 'Trichy',
    avatar: 'MF',
    rating: 5,
    text: "Managing 20 AC units in our hotel is stress-free with Sneha's annual AMC plan. Prompt response, expert technicians — they're our go-to service partner.",
    date: 'November 2024',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });

      gsap.from(trackRef.current?.children ?? [], {
        y: 50, opacity: 0, stagger: 0.1, duration: 0.75, ease: 'power3.out',
        scrollTrigger: { trigger: trackRef.current, start: 'top 82%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const avatarColors = ['bg-blue-600', 'bg-purple-600', 'bg-green-600', 'bg-orange-600', 'bg-teal-600'];

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef}>
          <SectionHeading
            label="Customer Reviews"
            title="What Our Customers Say"
            subtitle="Real experiences from real customers across Tamil Nadu."
          />
        </div>

        {/* Featured testimonial */}
        <div className="relative bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-8 md:p-12 mb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className={`w-20 h-20 rounded-2xl ${avatarColors[active]} flex items-center justify-center text-white text-2xl font-black shadow-xl`}>
                {testimonials[active].avatar}
              </div>
            </div>
            <div>
              <div className="flex text-yellow-400 text-xl mb-3">
                {'★'.repeat(testimonials[active].rating)}
              </div>
              <p className="text-white text-lg md:text-xl leading-relaxed mb-6 italic">
                "{testimonials[active].text}"
              </p>
              <div>
                <div className="text-white font-bold">{testimonials[active].name}</div>
                <div className="text-blue-300 text-sm">{testimonials[active].role} · {testimonials[active].location} · {testimonials[active].date}</div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="relative z-10 flex gap-2 mt-6">
            {testimonials.map((t, i) => (
              <button
                type="button"
                key={t.name}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail row */}
        <div ref={trackRef} className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {testimonials.map((t, i) => (
            <button
              type="button"
              key={t.name}
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 ${i === active
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/50 shadow-md'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-300'
                }`}
            >
              <div className={`w-8 h-8 rounded-lg ${avatarColors[i]} flex items-center justify-center text-white text-xs font-bold mb-2`}>
                {t.avatar}
              </div>
              <div className="text-xs font-bold text-gray-900 dark:text-white truncate">{t.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{t.location}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
