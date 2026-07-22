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
  /* ── Google folder (41 real project photos) ── */
  { id: 1,  src: '/img/gallry/google/1.jpeg',  label: 'Project Site',            cat: 'Projects', span: 'wide' },
  { id: 2,  src: '/img/gallry/google/2.jpeg',  label: 'HVAC Installation',       cat: 'Projects'              },
  { id: 3,  src: '/img/gallry/google/3.jpeg',  label: 'System Setup',            cat: 'Projects'              },
  { id: 4,  src: '/img/gallry/google/4.jpeg',  label: 'Commercial Project',      cat: 'Projects', span: 'tall' },
  { id: 5,  src: '/img/gallry/google/5.jpeg',  label: 'Unit Installation',       cat: 'Projects'              },
  { id: 6,  src: '/img/gallry/google/6.jpeg',  label: 'Outdoor Units',           cat: 'Projects'              },
  { id: 7,  src: '/img/gallry/google/7.jpeg',  label: 'Commissioning',           cat: 'Projects', span: 'wide' },
  { id: 8,  src: '/img/gallry/google/8.jpeg',  label: 'Site Work',               cat: 'Projects'              },
  { id: 9,  src: '/img/gallry/google/9.jpeg',  label: 'HVAC System',             cat: 'Projects'              },
  { id: 10, src: '/img/gallry/google/10.jpeg', label: 'Project Execution',       cat: 'Projects', span: 'tall' },
  { id: 11, src: '/img/gallry/google/11.jpeg', label: 'Installation Work',       cat: 'Projects'              },
  { id: 12, src: '/img/gallry/google/12.jpeg', label: 'Equipment Setup',         cat: 'Projects'              },
  { id: 13, src: '/img/gallry/google/13.jpeg', label: 'Commercial Setup',        cat: 'Projects', span: 'wide' },
  { id: 14, src: '/img/gallry/google/14.jpeg', label: 'HVAC Fit-out',            cat: 'Projects'              },
  { id: 15, src: '/img/gallry/google/15.jpeg', label: 'System Commissioning',    cat: 'Projects'              },
  { id: 16, src: '/img/gallry/google/16.jpeg', label: 'Duct Installation',       cat: 'Projects'              },
  { id: 17, src: '/img/gallry/google/17.jpeg', label: 'Refrigerant Lines',       cat: 'Projects', span: 'tall' },
  { id: 18, src: '/img/gallry/google/18.jpeg', label: 'Panel Setup',             cat: 'Projects'              },
  { id: 19, src: '/img/gallry/google/19.jpeg', label: 'Outdoor Array',           cat: 'Projects'              },
  { id: 20, src: '/img/gallry/google/20.jpeg', label: 'Site Completion',         cat: 'Projects', span: 'wide' },
  { id: 21, src: '/img/gallry/google/21.jpeg', label: 'VRF',            cat: 'Projects'              },
  { id: 22, src: '/img/gallry/google/22.jpeg', label: 'Installation Detail',     cat: 'Projects'              },
  { id: 23, src: '/img/gallry/google/23.jpeg', label: 'AHU',      cat: 'Installations'              },
  { id: 24, src: '/img/gallry/google/24.jpeg', label: 'Kitchen Scrubber',      cat: 'Installations', span: 'tall' },
  { id: 25, src: '/img/gallry/google/25.jpeg', label: 'AHU',        cat: 'Installations'              },
  { id: 26, src: '/img/gallry/google/26.jpeg', label: 'AC Unit Array',           cat: 'Projects'              },
  { id: 27, src: '/img/gallry/google/27.jpeg', label: 'Training and hand over',    cat: 'Installations', span: 'wide' },
  { id: 28, src: '/img/gallry/google/28.jpeg', label: 'Ventilation Work',        cat: 'Projects'              },
  { id: 29, src: '/img/gallry/google/29.jpeg', label: 'Packaged Unit',           cat: 'Projects'              },
  { id: 30, src: '/img/gallry/google/30.jpeg', label: 'Training and hand over',          cat: 'Installations'              },
  { id: 31, src: '/img/gallry/google/31.jpeg', label: 'HVAC Commissioning',      cat: 'Projects', span: 'tall' },
  { id: 32, src: '/img/gallry/google/32.jpeg', label: 'Training and hand over',         cat: 'Installations'              },
  { id: 33, src: '/img/gallry/google/33.jpeg', label: 'Training and hand over',          cat: 'Installations'              },
  { id: 34, src: '/img/gallry/google/34.jpeg', label: 'Installation Complete',   cat: 'Projects', span: 'wide' },
  { id: 35, src: '/img/gallry/google/35.jpeg', label: 'Kitchen Exhaust unit',          cat: 'Projects'              },
  { id: 36, src: '/img/gallry/google/36.jpeg', label: 'Commercial Build',        cat: 'Projects'              },
  { id: 37, src: '/img/gallry/google/37.jpeg', label: 'HVAC Detail',             cat: 'Projects'              },
  { id: 38, src: '/img/gallry/google/38.jpeg', label: 'Air balancing',        cat: 'Installations', span: 'tall' },
  { id: 39, src: '/img/gallry/google/39.jpeg', label: 'Training and hand over',             cat: 'Installations'              },
  { id: 40, src: '/img/gallry/google/40.jpeg', label: 'Training and hand over',         cat: 'Installations'              },
  { id: 41, src: '/img/gallry/google/41.jpeg', label: 'Project Delivery',        cat: 'Projects', span: 'wide' },

  /* ── VRF Systems ── */
  { id: 42, src: '/img/gallry/vrf1.jpg',       label: 'VRF', cat: 'VRF Systems', span: 'wide' },
  { id: 43, src: '/img/gallry/vrf2.jpg',       label: 'VRF',       cat: 'VRF Systems'               },
  { id: 44, src: '/img/gallry/vrf3.jpg',       label: 'VRF',       cat: 'VRF Systems'               },
  { id: 45, src: '/img/gallry/vrfinfinity.png', label: 'VRF Infinity Series',    cat: 'VRF Systems', span: 'tall' },

  /* ── Installations (photo/d — 3 verified files) ── */
  { id: 46, src: '/img/gallry/photo/d/IMG_20210918_124636.jpg', label: 'Site Installation',   cat: 'Installations', span: 'wide' },
  { id: 47, src: '/img/gallry/photo/d/IMG_20210918_124903.jpg', label: 'Duct work ',      cat: 'Projects'               },
  { id: 48, src: '/img/gallry/photo/d/IMG_20210918_125702.jpg', label: 'Duct work',  cat: 'Installations'               },

  /* ── Commercial (photo/f — 8 verified files) ── */
  { id: 49, src: '/img/gallry/photo/f/IMG_20210918_131309.jpg', label: 'Commercial Fit-out',  cat: 'Commercial', span: 'wide' },
  { id: 50, src: '/img/gallry/photo/f/IMG_20210918_131512.jpg', label: ' Duct work',        cat: 'Installations'              },
  { id: 51, src: '/img/gallry/photo/f/IMG_20210918_131525.jpg', label: ' Duct work',  cat: 'Installations'              },
  { id: 52, src: '/img/gallry/photo/f/IMG_20210918_132121.jpg', label: 'Ceiling Installation',cat: 'Commercial', span: 'tall' },
  { id: 53, src: '/img/gallry/photo/f/IMG_20210918_141340.jpg', label: ' Duct work',        cat: 'Installations', span: 'wide' },
  { id: 54, src: '/img/gallry/photo/f/IMG_20210918_141756.jpg', label: ' Duct work',        cat: 'Installations'              },
  { id: 55, src: '/img/gallry/photo/f/IMG_20210918_141805.jpg', label: 'Final Commissioning', cat: 'Commercial'              },
  { id: 56, src: '/img/gallry/photo/f/IMG_20210918_143215.jpg', label: 'Four Way Cassette',  cat: 'Installations'              },

  /* ── Root gallery images ── */
  { id: 57, src: '/img/gallry/1.png',  label: 'Commercial HVAC Setup',   cat: 'Commercial', span: 'wide' },
  { id: 58, src: '/img/gallry/2.png',  label: 'Office Air Conditioning', cat: 'Commercial'              },
  { id: 59, src: '/img/gallry/3.png',  label: 'Chilled Water System',    cat: 'Commercial', span: 'tall' },
  { id: 60, src: '/img/gallry/6.png',  label: 'Ducted AC Installation',  cat: 'Installations'            },
  { id: 61, src: '/img/gallry/7.jpg',  label: 'Cassette AC Fitment',     cat: 'Installations', span: 'wide' },
  { id: 62, src: '/img/gallry/7.png',  label: 'Split AC Wall Mount',     cat: 'Installations'            },

  /* ── New Project Photos ── */
  { id: 63,  src: '/img/gallry/newpic/10.webp', label: 'Project Site',             cat: 'Projects',      span: 'wide' },
  { id: 64,  src: '/img/gallry/newpic/11.webp', label: 'HVAC Installation',        cat: 'Projects'                    },
  { id: 65,  src: '/img/gallry/newpic/12.webp', label: 'System Setup',             cat: 'Projects'                    },
  { id: 66,  src: '/img/gallry/newpic/13.webp', label: 'Commercial Project',       cat: 'Commercial',    span: 'tall' },
  { id: 67,  src: '/img/gallry/newpic/14.webp', label: 'Unit Installation',        cat: 'Installations'               },
  { id: 68,  src: '/img/gallry/newpic/15.webp', label: 'Outdoor Units',            cat: 'Projects'                    },
  { id: 69,  src: '/img/gallry/newpic/16.webp', label: 'Commissioning Work',       cat: 'Projects',      span: 'wide' },
  { id: 70,  src: '/img/gallry/newpic/17.webp', label: 'Site Work',                cat: 'Installations'               },
  { id: 71,  src: '/img/gallry/newpic/18.webp', label: 'HVAC System',              cat: 'Projects'                    },
  { id: 72,  src: '/img/gallry/newpic/19.webp', label: 'Ducting',        cat: 'Projects',    span: 'tall' },
  { id: 73,  src: '/img/gallry/newpic/20.webp', label: 'Installation Work',        cat: 'Installations',  span: 'wide' },
  { id: 74,  src: '/img/gallry/newpic/21.jpeg', label: 'Fire Dampers',          cat: 'Installations'                    },
  { id: 75,  src: '/img/gallry/newpic/22.jpeg', label: 'Commercial Setup',         cat: 'Commercial'                  },
  { id: 76,  src: '/img/gallry/newpic/23.jpeg', label: 'HVAC Fit-out',             cat: 'Commercial',    span: 'wide' },
  { id: 77,  src: '/img/gallry/newpic/24.jpeg', label: 'System Commissioning',     cat: 'Projects'                    },
  { id: 78,  src: '/img/gallry/newpic/25.jpeg', label: 'Fire Damper',        cat: 'Installations'               },
  { id: 79,  src: '/img/gallry/newpic/26.jpeg', label: 'Fire  Damper',        cat: 'Installations',      span: 'tall' },
  { id: 80,  src: '/img/gallry/newpic/27.jpeg', label: 'AHU',              cat: 'Installations'                  },
  { id: 81,  src: '/img/gallry/newpic/28.jpeg', label: 'Outdoor Array',            cat: 'Projects'                    },
  { id: 82,  src: '/img/gallry/newpic/29.jpeg', label: 'Site Completion',          cat: 'Installations',  span: 'wide' },
  { id: 83,  src: '/img/gallry/newpic/30.jpeg', label: 'HVAC Project',             cat: 'Projects'                    },
  { id: 84,  src: '/img/gallry/newpic/31.jpeg', label: 'Installation Detail',      cat: 'Installations'               },
  { id: 85,  src: '/img/gallry/newpic/32.jpeg', label: 'System Integration',       cat: 'Commercial',    span: 'tall' },
  { id: 86,  src: '/img/gallry/newpic/33.jpeg', label: 'Commercial Cooling',       cat: 'Commercial'                  },
  { id: 87,  src: '/img/gallry/newpic/34.jpeg', label: 'Project Handover',         cat: 'Projects',      span: 'wide' },
  { id: 88,  src: '/img/gallry/newpic/35.jpeg', label: 'AC Unit Array',            cat: 'Projects'                    },
  { id: 89,  src: '/img/gallry/newpic/36.jpeg', label: 'Chiller Installation',     cat: 'Projects'                    },
  { id: 90,  src: '/img/gallry/newpic/37.jpeg', label: 'Ventilation Work',         cat: 'Installations'               },
  { id: 91,  src: '/img/gallry/newpic/38.jpeg', label: 'VRF',            cat: 'Commercial',    span: 'wide' },
  { id: 92,  src: '/img/gallry/newpic/39.jpeg', label: 'VRF Outdoor Setup',        cat: 'VRF Systems',   span: 'tall' },
  { id: 93,  src: '/img/gallry/newpic/40.jpeg', label: 'VRF System Detail',        cat: 'VRF Systems'                 },
  { id: 94,  src: '/img/gallry/newpic/41.jpeg', label: 'VRF Installation',         cat: 'VRF Systems'                 },
  { id: 95,  src: '/img/gallry/newpic/42.jpeg', label: 'Site Execution',           cat: 'Projects',      span: 'wide' },
  { id: 96,  src: '/img/gallry/newpic/43.jpeg', label: 'HVAC Commissioning',       cat: 'Projects'                    },
  { id: 97,  src: '/img/gallry/newpic/44.jpeg', label: 'Ductwork Detail',          cat: 'Installations'               },
  { id: 98,  src: '/img/gallry/newpic/45.jpeg', label: 'Round diffuser',           cat: 'Installations',    span: 'tall' },
  { id: 99,  src: '/img/gallry/newpic/46.jpeg', label: 'Installation Complete',    cat: 'Installations'               },
  { id: 100, src: '/img/gallry/newpic/47.jpeg', label: 'System Testing',           cat: 'Projects',      span: 'wide' },
  { id: 101, src: '/img/gallry/newpic/48.jpeg', label: 'Commercial Build',         cat: 'Commercial'                  },
  { id: 102, src: '/img/gallry/newpic/49.jpeg', label: 'HVAC Detail',              cat: 'Projects'                    },
  { id: 103, src: '/img/gallry/newpic/50.jpeg', label: 'Round diffuser',         cat: 'Installations',  span: 'wide' },
  { id: 104, src: '/img/gallry/newpic/51.jpeg', label: 'Final Setup',              cat: 'Projects'                    },
  { id: 105, src: '/img/gallry/newpic/52.jpeg', label: 'System Handover',          cat: 'Commercial',    span: 'tall' },
  { id: 106, src: '/img/gallry/newpic/53.jpeg', label: 'Project Delivery',         cat: 'Projects'                    },
  { id: 107, src: '/img/gallry/newpic/54.jpeg', label: 'Completed Installation',   cat: 'Projects',      span: 'wide' },
];

const CATS: Category[] = ['All', 'Projects', 'VRF Systems', 'Installations', 'Commercial'];

const PAGE_SIZE = 24;

/* ─── GalleryCard ─────────────────────────────────────────── */
function GalleryCard({ item, index, onClick }: {
  item: GalleryItem;
  index: number;
  onClick: (item: GalleryItem, index: number) => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick(item, index)}
      onKeyDown={(e) => e.key === 'Enter' && onClick(item, index)}
      className={`gallery-card group relative overflow-hidden rounded-xl cursor-pointer bg-slate-100 dark:bg-slate-800
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

      {/* Bottom label — slides up on hover */}
      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
        <p className="text-[9px] font-black uppercase tracking-widest text-white/55 mb-0.5">{item.cat}</p>
        <p className="text-sm font-bold text-white leading-tight">{item.label}</p>
      </div>
    </div>
  );
}

/* ─── Page ─────────────────────────────────────────────────── */
export default function GalleryPage() {
  const heroRef    = useRef<HTMLDivElement>(null);
  const heroBgRef  = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightbox, setLightbox]         = useState<{ filteredList: GalleryItem[]; index: number } | null>(null);

  const filtered  = activeFilter === 'All' ? items : items.filter(i => i.cat === activeFilter);
  const visible   = filtered.slice(0, visibleCount);
  const hasMore   = visibleCount < filtered.length;

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
    setVisibleCount(PAGE_SIZE);
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
  const openLightbox = useCallback((item: GalleryItem, index: number) => {
    setLightbox({ filteredList: filtered, index });
  }, [filtered]);

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
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  prevImage();
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
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : 'border border-slate-200 bg-white text-slate-500 hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-sky-700 dark:hover:text-sky-400'
                }`}
              >
                {cat}
                <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[9px] font-black ${
                  activeFilter === cat ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500'
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
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="rounded-xl border border-slate-200 bg-white px-8 py-3 text-sm font-bold text-slate-600 shadow-sm transition-all duration-200 hover:border-sky-300 hover:text-sky-600 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-sky-700 dark:hover:text-sky-400"
            >
              Load More
              <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-black text-slate-400 dark:bg-slate-800 dark:text-slate-500">
                {filtered.length - visibleCount} remaining
              </span>
            </button>
          </div>
        )}
      </section>

      {/* ── LIGHTBOX ──────────────────────────────────────────── */}
      {lightbox && lbItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20 md:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white/20 md:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Image container */}
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

            {/* Caption bar */}
            <div className="flex items-center justify-between bg-slate-950/90 px-5 py-3 backdrop-blur-sm">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-sky-400">{lbItem.cat}</p>
                <p className="text-sm font-bold text-white">{lbItem.label}</p>
              </div>
              <span className="text-xs text-white/35">
                {lightbox.index + 1} / {lightbox.filteredList.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
