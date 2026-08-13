'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ChevronLeft, ChevronRight, ZoomIn, Images } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─── Types ──────────────────────────────────────────────── */
type Category = 'All' | 'Projects' | 'VRF Systems' | 'Installations' | 'Commercial';

interface GalleryItem {
  id: number;
  src: string;
  label: string;
  cat: Exclude<Category, 'All'>;
  span?: 'wide' | 'tall';
}

/* ─── Data — verified existing files only ─────────────────── */
const items: GalleryItem[] = [
  /* ── Google folder ── */
  { id: 19, src: '/img/gallry/google/19.jpeg', label: 'Outdoor Array', cat: 'Projects' },
  { id: 20, src: '/img/gallry/google/20.jpeg', label: 'Site Completion', cat: 'Projects', span: 'wide' },
  { id: 21, src: '/img/gallry/google/21.jpeg', label: 'VRF', cat: 'Projects' },
  { id: 22, src: '/img/gallry/google/22.jpeg', label: 'Installation Detail', cat: 'Projects' },
  { id: 23, src: '/img/gallry/google/23.jpeg', label: 'AHU', cat: 'Installations' },
  { id: 24, src: '/img/gallry/google/24.jpeg', label: 'Kitchen Scrubber', cat: 'Installations', span: 'tall' },
  { id: 25, src: '/img/gallry/google/25.jpeg', label: 'AHU', cat: 'Installations' },
  { id: 26, src: '/img/gallry/google/26.jpeg', label: 'AC Unit Array', cat: 'Projects' },
  { id: 27, src: '/img/gallry/google/27.jpeg', label: 'Training and hand over', cat: 'Installations', span: 'wide' },
  { id: 29, src: '/img/gallry/google/29.jpeg', label: 'Packaged Unit', cat: 'Projects' },
  { id: 30, src: '/img/gallry/google/30.jpeg', label: 'Training and hand over', cat: 'Installations' },
  { id: 32, src: '/img/gallry/google/32.jpeg', label: 'Training and hand over', cat: 'Installations' },
  { id: 33, src: '/img/gallry/google/33.jpeg', label: 'Training and hand over', cat: 'Installations' },
  { id: 34, src: '/img/gallry/google/34.jpeg', label: 'Installation Complete', cat: 'Projects', span: 'wide' },
  { id: 35, src: '/img/gallry/google/35.jpeg', label: 'Kitchen Exhaust unit', cat: 'Projects' },
  { id: 37, src: '/img/gallry/google/37.jpeg', label: 'HVAC Detail', cat: 'Projects' },
  { id: 38, src: '/img/gallry/google/38.jpeg', label: 'Air balancing', cat: 'Installations', span: 'tall' },
  { id: 39, src: '/img/gallry/google/39.jpeg', label: 'Training and hand over', cat: 'Installations' },
  { id: 40, src: '/img/gallry/google/40.jpeg', label: 'Training and hand over', cat: 'Installations' },

  /* ── VRF Systems ── */
  { id: 42, src: '/img/gallry/vrf1.jpg', label: 'VRF', cat: 'VRF Systems', span: 'wide' },
  { id: 43, src: '/img/gallry/vrf2.jpg', label: 'VRF', cat: 'VRF Systems' },
  { id: 44, src: '/img/gallry/vrf3.jpg', label: 'VRF', cat: 'VRF Systems' },
  { id: 45, src: '/img/gallry/vrfinfinity.png', label: 'VRF Infinity Series', cat: 'VRF Systems', span: 'tall' },

  /* ── Installations (photo/d) ── */
  { id: 47, src: '/img/gallry/photo/d/IMG_20210918_124903.jpg', label: 'Duct work', cat: 'Projects' },
  { id: 48, src: '/img/gallry/photo/d/IMG_20210918_125702.jpg', label: 'Duct work', cat: 'Installations' },

  /* ── Commercial (photo/f) ── */
  { id: 50, src: '/img/gallry/photo/f/IMG_20210918_131512.jpg', label: 'Duct work', cat: 'Installations' },
  { id: 51, src: '/img/gallry/photo/f/IMG_20210918_131525.jpg', label: 'Duct work', cat: 'Installations' },
  { id: 52, src: '/img/gallry/photo/f/IMG_20210918_132121.jpg', label: 'Ceiling Installation', cat: 'Commercial', span: 'tall' },
  { id: 53, src: '/img/gallry/photo/f/IMG_20210918_141340.jpg', label: 'Duct work', cat: 'Installations', span: 'wide' },
  { id: 55, src: '/img/gallry/photo/f/IMG_20210918_141805.jpg', label: 'Final Commissioning', cat: 'Commercial' },
  { id: 56, src: '/img/gallry/photo/f/IMG_20210918_143215.jpg', label: 'Four Way Cassette', cat: 'Installations' },

  /* ── Root gallery images ── */
  { id: 57, src: '/img/gallry/1.png', label: 'Commercial HVAC Setup', cat: 'Commercial', span: 'wide' },
  { id: 58, src: '/img/gallry/2.png', label: 'Office Air Conditioning', cat: 'Commercial' },
  { id: 60, src: '/img/gallry/6.png', label: 'Ducted AC Installation', cat: 'Installations' },
  { id: 61, src: '/img/gallry/7.jpg', label: 'Cassette AC Fitment', cat: 'Installations', span: 'wide' },
  { id: 62, src: '/img/gallry/7.png', label: 'Split AC Wall Mount', cat: 'Installations' },

  /* ── New Project Photos ── */
  { id: 68, src: '/img/gallry/newpic/15.webp', label: 'Outdoor Units', cat: 'Projects' },
  { id: 72, src: '/img/gallry/newpic/19.webp', label: 'Ducting', cat: 'Projects', span: 'tall' },
  { id: 84, src: '/img/gallry/newpic/31.jpeg', label: 'Installation Detail', cat: 'Installations' },
  { id: 86, src: '/img/gallry/newpic/33.jpeg', label: 'Commercial Cooling', cat: 'Commercial' },
  { id: 87, src: '/img/gallry/newpic/34.jpeg', label: 'Project Handover', cat: 'Projects', span: 'wide' },
  { id: 102, src: '/img/gallry/newpic/49.jpeg', label: 'HVAC Detail', cat: 'Projects' },
  { id: 103, src: '/img/gallry/newpic/50.jpeg', label: 'Round diffuser', cat: 'Installations', span: 'wide' },
  { id: 104, src: '/img/gallry/newpic/51.jpeg', label: 'Final Setup', cat: 'Projects' },

  /* ── New additions ── */
  { id: 106, src: '/img/gallry/new3.png', label: 'Cassette AC with Ducting', cat: 'Installations', span: 'wide' },
  { id: 107, src: '/img/gallry/Picture1.jpg', label: 'Ducting', cat: 'Installations' },
  { id: 108, src: '/img/gallry/Picture2.jpg', label: 'Commercial Ducting', cat: 'Commercial', span: 'wide' },
  { id: 109, src: '/img/gallry/Picture3.jpg', label: 'Ducting ', cat: 'Installations' },
  { id: 110, src: '/img/gallry/Picture4.jpg', label: 'Ducting ', cat: 'Installations', span: 'tall' },
  { id: 111, src: '/img/gallry/Picture5.jpg', label: 'Diffuser', cat: 'Commercial' },
  { id: 112, src: '/img/gallry/Picture6.jpg', label: 'Commercial Diffuser', cat: 'Commercial', span: 'wide' },
  { id: 113, src: '/img/gallry/Picture7.jpg', label: 'Open Floor Ducting', cat: 'Commercial' },
  { id: 114, src: '/img/gallry/Picture8.jpg', label: 'Diffuser', cat: 'Installations' },
  { id: 115, src: '/img/gallry/Picture9.jpg', label: 'Ducting', cat: 'Installations', span: 'wide' },
  { id: 116, src: '/img/gallry/Picture10.jpg', label: 'Cassette AC Ceiling', cat: 'Installations', span: 'tall' },
  { id: 117, src: '/img/gallry/Picture11.jpg', label: 'Cassette AC Ceiling', cat: 'Installations' },
  { id: 118, src: '/img/gallry/Picture12.jpg', label: 'Condenser', cat: 'Projects', span: 'wide' },
  { id: 119, src: '/img/gallry/Picture13.jpg', label: 'VRF OutdoorUnit', cat: 'Projects' },
  { id: 120, src: '/img/gallry/Picture14.jpg', label: 'VRF OutdoorUnit', cat: 'Projects' },
  { id: 121, src: '/img/gallry/Picture15.jpg', label: 'VRF OutdoorUnit', cat: 'VRF Systems', span: 'wide' },
  { id: 122, src: '/img/gallry/Picture16.jpg', label: 'VRF OutdoorUnit', cat: 'VRF Systems', span: 'tall' },
  { id: 123, src: '/img/gallry/Picture17.jpg', label: 'VRF Units Rooftop', cat: 'VRF Systems' },
  { id: 124, src: '/img/gallry/Picture18.jpg', label: 'VRF OutdoorUnit', cat: 'VRF Systems', span: 'wide' },
  { id: 125, src: '/img/gallry/Picture20.jpg', label: 'Ducting', cat: 'Commercial', span: 'wide' },
  { id: 126, src: '/img/gallry/Picture21.jpg', label: 'Ducting', cat: 'Commercial' },
  { id: 127, src: '/img/gallry/Picture22.jpg', label: 'Rooftop AHU Installation', cat: 'Projects', span: 'tall' },
];

const CATS: Category[] = ['All', 'Projects', 'VRF Systems', 'Installations', 'Commercial'];

const PAGE_SIZE = 24;

/* ─── GalleryCard ─────────────────────────────────────────── */
function GalleryCard({ item, index, onClick }: Readonly<{
  item: GalleryItem;
  index: number;
  onClick: (item: GalleryItem, index: number) => void;
}>) {
  return (
    <button
      type="button"
      onClick={() => onClick(item, index)}
      className={`gallery-card group relative overflow-hidden rounded-xl cursor-pointer bg-slate-100 dark:bg-slate-800 text-left
        ${item.span === 'wide' ? 'col-span-2' : ''}
        ${item.span === 'tall' ? 'row-span-2' : ''}
      `}
    >
      <Image
        src={item.src}
        alt={item.label}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105"
      />

      {/* Always-on bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

      {/* Hover dark overlay */}
      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />

      {/* Zoom pill — fades in on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex items-center gap-1.5 rounded-full border border-white/30 bg-black/30 px-3.5 py-1.5 backdrop-blur-sm">
          <ZoomIn className="h-3.5 w-3.5 text-white" strokeWidth={2} />
          <span className="text-[11px] font-bold text-white">View</span>
        </div>
      </div>
    </button>
  );
}

/* ─── Page ─────────────────────────────────────────────────── */
export default function GalleryPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<{ filteredList: GalleryItem[]; index: number } | null>(null);

  const handleFilterChange = (cat: Category) => {
    setActiveFilter(cat);
    setVisibleCount(PAGE_SIZE);
  };

  const filtered = activeFilter === 'All' ? items : items.filter(i => i.cat === activeFilter);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  /* ── Hero parallax ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(heroBgRef.current, {
        y: '28%', ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.fromTo('.hero-enter > *',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.13, duration: 0.9, ease: 'power3.out', delay: 0.15, immediateRender: false });
    });
    return () => ctx.revert();
  }, []);

  /* ── Re-animate on filter change ── */
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>('.gallery-card');
    if (!cards?.length) return;
    gsap.set(cards, { opacity: 1, y: 0 });
    gsap.fromTo(cards,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, stagger: 0.03, duration: 0.45, ease: 'power3.out', immediateRender: false });
  }, [activeFilter]);

  /* ── Animate newly loaded cards ── */
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>('.gallery-card');
    if (!cards?.length) return;
    const newCards = Array.from(cards).slice(visibleCount - PAGE_SIZE);
    if (!newCards.length) return;
    gsap.fromTo(newCards,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, stagger: 0.03, duration: 0.45, ease: 'power3.out', immediateRender: false });
  }, [visibleCount]);

  /* ── Lightbox helpers ── */
  const openLightbox = (item: GalleryItem, index: number) => {
    setLightbox({ filteredList: filtered, index });
  };

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevImage = useCallback(() => {
    setLightbox((lb) => lb ? {
      ...lb,
      index: (lb.index - 1 + lb.filteredList.length) % lb.filteredList.length,
    } : null);
  }, []);

  const nextImage = useCallback(() => {
    setLightbox((lb) => lb ? {
      ...lb,
      index: (lb.index + 1) % lb.filteredList.length,
    } : null);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [closeLightbox, prevImage, nextImage]);

  const lbItem = lightbox ? lightbox.filteredList[lightbox.index] : null;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <div ref={heroRef} className="relative flex h-[65svh] items-center justify-center overflow-hidden">
        <div
          ref={heroBgRef}
          className="absolute inset-x-0 top-[-15%] h-[130%]"
          style={{
            backgroundImage: "url('/img/gallry/google/13.jpeg')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/50 to-slate-950/80" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent dark:from-slate-950" />

        <div className="hero-enter relative z-10 flex flex-col items-center px-6 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-2 backdrop-blur-md">
            <Images className="h-3.5 w-3.5 text-sky-400" strokeWidth={2} />
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">Our Work in Pictures</span>
          </div>
          <h1 className="text-6xl font-black leading-none text-white md:text-7xl lg:text-8xl">
            Our{' '}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/50">
            Real installations, real results — a visual record of HVAC projects delivered
            across Bangalore by Sneha Enterprises.
          </p>
        </div>
      </div>

      {/* ── FILTER BAR ────────────────────────────────────────── */}
      <div className="border-b border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATS.map((cat) => {
            const count = cat === 'All' ? items.length : items.filter(i => i.cat === cat).length;
            return (
              <button
                type="button"
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${activeFilter === cat
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                  : 'border border-slate-200 bg-white text-slate-500 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-sky-700 dark:hover:text-sky-400'
                  }`}
              >
                {cat}
                <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[9px] font-black ${activeFilter === cat ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500'
                  }`}>
                  {count}
                </span>
              </button>
            );
          })}
          <span className="ml-auto flex-shrink-0 text-xs text-slate-400 dark:text-slate-600">
            {visible.length} / {filtered.length}
          </span>
        </div>
      </div>

      {/* ── GRID ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div
          ref={gridRef}
          className="grid auto-rows-[200px] grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 lg:grid-cols-4"
        >
          {visible.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} onClick={openLightbox} />
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="rounded-xl border border-slate-200 bg-white px-8 py-3 text-sm font-bold text-slate-600 shadow-sm transition-all duration-200 hover:border-sky-300 hover:text-sky-600 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-sky-700 dark:hover:text-sky-400"
            >
              Load More
              {' '}<span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-black text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                {filtered.length - visibleCount} remaining
              </span>
            </button>
          </div>
        )}
      </section>

      {/* ── LIGHTBOX ──────────────────────────────────────────── */}
      {lightbox && lbItem && (


        <dialog
          open
          aria-label="Image lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm m-0 p-0 w-full h-full max-w-none max-h-none border-none"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20 md:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20 md:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Image container */}
          { }
          <div
            className="relative mx-16 flex max-h-[88svh] max-w-5xl w-full flex-col overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ paddingTop: '62%' }}>
              <Image
                key={lbItem.id}
                src={lbItem.src}
                alt={lbItem.label}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>

            <div className="flex items-center justify-end bg-slate-950/90 px-5 py-3 backdrop-blur-sm">
              <span className="text-xs text-white/35">
                {lightbox.index + 1} / {lightbox.filteredList.length}
              </span>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
