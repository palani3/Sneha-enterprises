'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { slides, INTERVAL } from './hero/heroSlides';
import HeroSlider from './hero/HeroSlider';
import HeroContent from './hero/HeroContent';

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [prevActive, setPrevActive] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const bgWrapRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback((direction = 1) => {
    setActive((prev) => {
      setPrevActive(prev);
      return (prev + direction + slides.length) % slides.length;
    });
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => advance(1), INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [advance]);

  const goTo = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setPrevActive(active);
    setActive(i);
    timerRef.current = setInterval(() => advance(1), INTERVAL);
  };

  return (
    <section ref={heroRef} className="relative flex flex-col overflow-hidden" style={{ minHeight: '100svh' }}>
      {/* Background textures */}
      <div className="pointer-events-none absolute inset-0 z-[5] opacity-[0.035]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '72px 72px' }} />
      <div className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(ellipse_at_75%_0%,rgba(56,189,248,0.14),transparent_50%)]" />

      {/* Background slides + parallax */}
      <HeroSlider
        active={active}
        prevActive={prevActive}
        heroRef={heroRef}
        bgWrapRef={bgWrapRef}
      />

      {/* Content: badge, CTAs, stats, dots, arrows */}
      <HeroContent
        active={active}
        badgeRef={badgeRef}
        onDotClick={goTo}
        onPrev={() => goTo((active - 1 + slides.length) % slides.length)}
        onNext={() => goTo((active + 1) % slides.length)}
      />
    </section>
  );
}
