'use client';

import { useEffect, RefObject } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { slides } from './heroSlides';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  active: number;
  prevActive: number | null;
  heroRef: RefObject<HTMLElement | null>;
  bgWrapRef: RefObject<HTMLDivElement | null>;
}

export default function HeroSlider({ active, prevActive, heroRef, bgWrapRef }: Props) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgWrapRef.current, {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, [heroRef, bgWrapRef]);

  return (
    <div ref={bgWrapRef} className="absolute left-0 right-0 top-[-10%] h-[120%]">
      {/* Slide images — only the first, current and previous slides are
          mounted, so slides 2-4 download lazily as the carousel advances
          instead of all on first paint. */}
      {slides.map((slide, i) => {
        const mounted = i === 0 || i === active || i === prevActive;
        return (
          <div
            key={slide.bg}
            className="absolute inset-0"
            style={{
              opacity:    i === active ? 1 : 0,
              transition: 'opacity 1.2s ease',
              zIndex:     i === active ? 2 : i === prevActive ? 1 : 0,
            }}
          >
            {mounted && (
              <Image
                src={slide.bg}
                alt={slide.label}
                fill
                priority={i === 0}
                loading={i === 0 ? undefined : 'lazy'}
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            )}
          </div>
        );
      })}

      {/* Single consistent dark scrim — enough for text contrast, not colour-tinted */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.65) 100%)',
          zIndex: 3,
        }}
      />
    </div>
  );
}
