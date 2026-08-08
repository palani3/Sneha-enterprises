'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, CheckCircle2,
  Zap, Shield, Star, ChevronRight, X, ChevronLeft,
} from 'lucide-react';
import { PRODUCTS } from '../../lib/productsData';
import { getYearsExp } from '../../lib/founding';

gsap.registerPlugin(ScrollTrigger);

/* ─── Lightbox ──────────────────────────────────────────────────── */
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: Readonly<{
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}>) {
  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          key={index}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[80vh] mx-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={images[index]}
              alt={`Image ${index + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          <p className="text-center text-white/40 text-xs mt-3 font-medium">
            {index + 1} / {images.length}
          </p>
        </motion.div>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {index > 0 && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        {index < images.length - 1 && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Product Image Gallery ─────────────────────────────────────── */
function ProductGallery({
  images,
  accentColor,
  glowColor,
}: Readonly<{
  images: string[];
  accentColor: string;
  glowColor: string;
}>) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightbox(i), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevImage = useCallback(() =>
    setLightbox((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const nextImage = useCallback(() =>
    setLightbox((i) => (i !== null && i < images.length - 1 ? i + 1 : i)), [images.length]);

  return (
    <>
      <div className="relative">
        <div
          className="absolute -inset-6 rounded-3xl blur-3xl opacity-20 pointer-events-none"
          style={{ background: glowColor }}
        />
        <button
          type="button"
          className="relative rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-[4/3] cursor-zoom-in group w-full"
          onClick={() => openLightbox(active)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              <Image
                src={images[active]}
                alt={`Product image ${active + 1}`}
                fill
                className="object-contain p-3"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-black/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
              Click to expand
            </span>
          </div>
        </button>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-2">
        {images.map((src, i) => (
          <button
            type="button"
            key={src}
            onClick={() => setActive(i)}
            className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${active === i ? 'scale-105 shadow-lg' : 'border-transparent opacity-60 hover:opacity-90'
              }`}
            style={active === i ? { borderColor: accentColor } : {}}
          >
            <Image src={src} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="80px" />
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { icon: Shield, label: 'Genuine Blue Star' },
          { icon: Zap, label: 'Expert Install' },
          { icon: Star, label: `${getYearsExp()}+ Yrs Service` },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-xl border border-gray-100 dark:border-white/8 bg-gray-50 dark:bg-white/[0.03] px-3 py-2.5"
          >
            <Icon className="w-4 h-4 flex-shrink-0 text-gray-400 dark:text-gray-500" />
            <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 leading-tight">{label}</span>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <Lightbox
          images={images}
          index={lightbox}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}

/* ─── Client Page ───────────────────────────────────────────────── */
export default function ProductDetailClient({ id }: Readonly<{ id: string }>) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  const others = PRODUCTS.filter((p) => p.id !== id).slice(0, 3);

  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroGlowRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const gallerySectionRef = useRef<HTMLDivElement>(null);
  const infoSectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const featureCardsRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const storyBgRef = useRef<HTMLDivElement>(null);
  const storyContentRef = useRef<HTMLDivElement>(null);
  const othersRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const ctaBgRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.getAll().forEach((t) => t.kill());

      const ctx = gsap.context(() => {
        if (heroBgRef.current) {
          gsap.to(heroBgRef.current, {
            y: '30%', ease: 'none',
            scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
          });
        }
        if (heroGlowRef.current) {
          gsap.to(heroGlowRef.current, {
            y: '50%', scale: 1.3, ease: 'none',
            scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
          });
        }
        if (heroContentRef.current) {
          gsap.to(heroContentRef.current, {
            y: '-20%', opacity: 0, ease: 'none',
            scrollTrigger: { trigger: heroRef.current, start: 'center center', end: 'bottom top', scrub: true },
          });
          gsap.fromTo(
            heroContentRef.current.children,
            { y: 60, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, stagger: 0.15, duration: 1, ease: 'power3.out' },
          );
        }
        if (gallerySectionRef.current) {
          gsap.fromTo(gallerySectionRef.current,
            { x: -80, autoAlpha: 0 },
            {
              x: 0, autoAlpha: 1, duration: 1, ease: 'power3.out',
              scrollTrigger: { trigger: galleryRef.current, start: 'top 85%', toggleActions: 'play none none none' }
            },
          );
        }
        if (infoSectionRef.current) {
          gsap.fromTo(infoSectionRef.current,
            { x: 80, autoAlpha: 0 },
            {
              x: 0, autoAlpha: 1, duration: 1, ease: 'power3.out',
              scrollTrigger: { trigger: galleryRef.current, start: 'top 85%', toggleActions: 'play none none none' }
            },
          );
        }
        const featureCards = featureCardsRef.current?.children;
        if (featureCards && featureCards.length > 0) {
          gsap.fromTo(featureCards,
            { y: 80, autoAlpha: 0, rotateX: 12 },
            {
              y: 0, autoAlpha: 1, rotateX: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: featuresRef.current, start: 'top 80%', toggleActions: 'play none none none' }
            },
          );
        }
        if (storyBgRef.current) {
          gsap.to(storyBgRef.current, {
            y: '25%', ease: 'none',
            scrollTrigger: { trigger: storyRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
          });
        }
        if (storyContentRef.current) {
          gsap.fromTo(
            storyContentRef.current.children,
            { y: 40, autoAlpha: 0 },
            {
              y: 0, autoAlpha: 1, stagger: 0.12, duration: 0.9, ease: 'power3.out',
              scrollTrigger: { trigger: storyRef.current, start: 'top 75%', toggleActions: 'play none none none' }
            },
          );
        }
        const otherCards = othersRef.current?.querySelectorAll('[data-other-card]');
        if (otherCards && otherCards.length > 0) {
          gsap.fromTo(otherCards,
            { y: 50, autoAlpha: 0 },
            {
              y: 0, autoAlpha: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: othersRef.current, start: 'top 85%', toggleActions: 'play none none none' }
            },
          );
        }
        if (ctaBgRef.current) {
          gsap.to(ctaBgRef.current, {
            y: '15%', ease: 'none',
            scrollTrigger: { trigger: ctaRef.current, start: 'top bottom', end: 'bottom top', scrub: true },
          });
        }
        ScrollTrigger.refresh();
      }, mainRef);

      return () => ctx.revert();
    });

    return () => {
      cancelAnimationFrame(raf);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [product]);

  return (
    <main ref={mainRef} className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 overflow-x-hidden">

      {/* ── Parallax Hero Banner ────────────────────────────────── */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div ref={heroBgRef} className="absolute inset-0 -top-[15%] h-[130%]">
          <Image src={product.image} alt={product.title} fill className="object-cover" sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/70" />
        <div
          ref={heroGlowRef}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${product.accentColor}, transparent 70%)` }}
        />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${product.accentColor}60, transparent)` }} />

        <div ref={heroContentRef} className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-1.5 text-xs text-white/40 mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-white/70 transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70 font-medium">{product.title}</span>
          </div>
          <span
            className="text-[10px] font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full backdrop-blur-md border mb-5"
            style={{ background: `${product.accentColor}20`, borderColor: `${product.accentColor}40`, color: product.accentColor }}
          >
            {product.category}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1] mb-4 tracking-tight">
            {product.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${product.accentColor}, ${product.accentDark})` }}>
              {product.title.split(' ').slice(-1)}
            </span>
          </h1>
          <p className="text-sm md:text-base font-bold tracking-wide mb-6" style={{ color: product.accentColor }}>
            {product.tagline}
          </p>
          <p className="max-w-xl text-sm text-white/40 leading-relaxed mb-8">
            {product.description.slice(0, 150)}…
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-sm font-black text-white transition-all hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg, ${product.accentColor}, ${product.accentDark})`, boxShadow: `0 8px 32px ${product.accentColor}40` }}
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            {/* <a
              href="tel:+919880283130"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.06] px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/12"
            >
              <Phone className="w-4 h-4" /> +91 98802 83130
            </a> */}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-[9px] font-bold uppercase tracking-widest text-white/30">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-white/50"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </section>

      {/* ── Gallery & Specs ──────────────────────────────────────── */}
      <section ref={galleryRef} className="max-w-7xl mx-auto px-6 py-16 lg:py-24" style={{ perspective: '1200px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div ref={gallerySectionRef}>
            <ProductGallery images={product.galleryImages} accentColor={product.accentColor} glowColor={product.glowColor} />
          </div>
          <div ref={infoSectionRef} className="flex flex-col">
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 mb-8">{product.description}</p>
            <div className="rounded-2xl border border-gray-100 dark:border-white/8 overflow-hidden mb-8">
              <div className="px-4 py-2.5 text-[10px] font-black uppercase tracking-widest" style={{ background: `${product.accentColor}12`, color: product.accentColor }}>
                Specifications
              </div>
              {product.specRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center gap-4 px-4 py-2.5 border-b border-gray-50 dark:border-white/5 last:border-b-0 ${i % 2 === 0 ? 'bg-white dark:bg-transparent' : 'bg-gray-50/60 dark:bg-white/[0.02]'
                    }`}
                >
                  <span className="w-44 flex-shrink-0 text-[11px] font-bold text-gray-500 dark:text-gray-400">{row.label}</span>
                  <span className="text-[11px] text-gray-800 dark:text-gray-200 font-medium">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Shield, label: 'Genuine Blue Star' },
                { icon: Zap, label: 'Expert Install' },
                { icon: Star, label: `${getYearsExp()}+ Yrs Service` },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-xl border border-gray-100 dark:border-white/8 bg-gray-50 dark:bg-white/[0.03] px-3 py-2.5">
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: product.accentColor }} />
                  <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Storytelling Parallax Banner ────────────────────────── */}
      <section ref={storyRef} className="relative h-[400px] overflow-hidden">
        <div ref={storyBgRef} className="absolute inset-0 -top-[15%] h-[130%]">
          <Image src={product.galleryImages[1] || product.image} alt={`${product.title} detail`} fill className="object-cover" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-950/90" />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 50%, ${product.accentColor}18, transparent 65%)` }} />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${product.accentColor}40, transparent)` }} />
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${product.accentColor}40, transparent)` }} />
        <div ref={storyContentRef} className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-3" style={{ color: product.accentColor }}>
            Engineered for Excellence
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 max-w-2xl leading-tight">
            Built with precision for{' '}
            <span style={{ color: product.accentColor }}>{product.category}</span>{' '}
            applications
          </h2>
          <p className="text-sm text-white/40 max-w-xl leading-relaxed">
            {product.description.slice(0, 200)}…
          </p>
        </div>
      </section>

      {/* ── Key Features ────────────────────────────────────────── */}
      <section ref={featuresRef} className="py-20 bg-gray-50 dark:bg-gray-900/40 border-y border-gray-100 dark:border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-3"
                style={{ background: `${product.accentColor}15`, color: product.accentColor }}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Why choose this product
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight">Key Features</h2>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-500 max-w-xs leading-relaxed">
              Every detail engineered for reliability, efficiency, and comfort.
            </p>
          </div>
          <div ref={featureCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ perspective: '1000px' }}>
            {product.features.map((feat, i) => (
              <div key={feat.label} className="group relative rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/8 overflow-hidden hover:shadow-xl dark:hover:shadow-none hover:-translate-y-1 transition-all duration-300">
                {product.galleryImages[i + 1] && (
                  <div className="relative h-36 overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={product.galleryImages[i + 1]}
                      alt={feat.label}
                      fill
                      className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${product.accentDark}cc, transparent 60%)` }} />
                  </div>
                )}
                {!product.galleryImages[i + 1] && (
                  <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${product.accentColor}, ${product.accentDark})` }} />
                )}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black tabular-nums px-2.5 py-1 rounded-lg" style={{ background: `${product.accentColor}15`, color: product.accentColor }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <CheckCircle2 className="w-5 h-5 opacity-30 group-hover:opacity-100 transition-opacity duration-300" style={{ color: product.accentColor }} />
                  </div>
                  <h3 className="text-base font-black text-gray-900 dark:text-white leading-snug mb-2">{feat.label}</h3>
                  <div className="h-px w-8 rounded-full mb-3" style={{ background: product.accentColor }} />
                  <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">{feat.desc}</p>
                </div>
                <span
                  className="pointer-events-none select-none absolute -bottom-3 -right-2 text-[72px] font-black leading-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity"
                  style={{ color: product.accentColor }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Products ──────────────────────────────────────── */}
      <section ref={othersRef} className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white">Other Products</h2>
          <Link href="/products" className="text-xs font-bold text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors inline-flex items-center gap-1">
            View all <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {others.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              data-other-card
              className="group relative rounded-2xl overflow-hidden bg-gray-900 aspect-video hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl"
            >
              <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `inset 0 0 60px ${p.glowColor}` }} />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="text-[9px] font-black uppercase tracking-widest mb-1 block" style={{ color: p.accentColor }}>{p.badge}</span>
                <p className="text-sm font-black text-white leading-tight">{p.title}</p>
              </div>
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0" style={{ background: p.accentColor }}>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ──────────────────────────────────────────── */}
      <section ref={ctaRef} className="relative overflow-hidden py-16 text-center">
        <div ref={ctaBgRef} className="absolute inset-0 -top-[10%] h-[120%]" style={{ background: `linear-gradient(135deg, ${product.accentColor}15, transparent, ${product.accentColor}10)` }} />
        <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${product.accentColor}50, transparent)` }} />
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3">
            Ready to install the {product.title}?
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            Our engineers will assess your space, calculate the exact cooling load, and handle installation end-to-end.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-sm font-black text-white transition-all hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg, ${product.accentColor}, ${product.accentDark})`, boxShadow: `0 8px 32px ${product.accentColor}50` }}
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            {/* <a
              href="tel:+919880283130"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 dark:border-white/10 px-8 py-4 text-sm font-bold text-gray-700 dark:text-gray-200 bg-white dark:bg-white/[0.04] hover:bg-gray-50 dark:hover:bg-white/8 transition-all"
            >
              <Phone className="w-4 h-4" /> +91 98802 83130
            </a> */}
          </div>
        </div>
      </section>

    </main>
  );
}
