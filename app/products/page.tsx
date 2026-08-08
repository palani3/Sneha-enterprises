'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Download, SlidersHorizontal, Star } from 'lucide-react';
import { PRODUCTS, type ProductData } from '../lib/productsData';
import { getYearsExp } from '../lib/founding';

/* ─── Category filters ──────────────────────────────────────────── */
const CATEGORIES = [
  { label: 'All Products', value: 'all' },
  { label: 'Residential', value: 'residential', ids: ['split'] },
  { label: 'Commercial', value: 'commercial', ids: ['cassette', 'package'] },
  { label: 'Industrial', value: 'industrial', ids: ['chiller', 'screw', 'vrf'] },
];

/* ─── Product Card ──────────────────────────────────────────────── */
function ProductCard({ product }: Readonly<{ product: ProductData }>) {
  return (
    <div className="group flex flex-col rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/8 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-none hover:-translate-y-1.5 transition-all duration-300">

      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain object-center transition-transform duration-700 group-hover:scale-105 p-2"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: `inset 0 0 80px ${product.glowColor}` }}
        />

        {/* Badge */}
        <div className="absolute top-3 right-3">
          <span
            className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md border"
            style={{
              background: `${product.accentColor}20`,
              borderColor: `${product.accentColor}50`,
              color: product.accentColor,
            }}
          >
            {product.badge}
          </span>
        </div>

        {/* Number */}
        <div
          className="absolute bottom-3 right-4 text-5xl font-black leading-none select-none opacity-25"
          style={{ color: product.accentColor }}
        >
          {product.num}
        </div>

        {/* Title overlay on image */}
        <div className="absolute bottom-3 left-4 right-16">
          <p
            className="text-[10px] font-bold tracking-wide mb-0.5"
            style={{ color: product.accentColor }}
          >
            {product.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">

        {/* Title */}
        <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 leading-tight">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
          {product.description}
        </p>

        {/* Quick specs (first 3 rows) */}
        <div className="rounded-xl border border-gray-100 dark:border-white/6 overflow-hidden mb-5">
          {product.specRows.slice(0, 3).map((row, i) => (
            <div
              key={row.label}
              className={`flex items-center justify-between px-3 py-2 text-[11px] border-b border-gray-50 dark:border-white/5 last:border-b-0 ${i % 2 === 0 ? 'bg-gray-50/50 dark:bg-white/[0.02]' : 'bg-white dark:bg-transparent'
                }`}
            >
              <span className="font-semibold text-gray-500 dark:text-gray-400">{row.label}</span>
              <span className="font-bold text-gray-800 dark:text-gray-200 text-right ml-2">{row.value}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-black text-white transition-all hover:opacity-90"
            style={{ background: `linear-gradient(135deg, ${product.accentColor}, ${product.accentDark})` }}
          >
            View Details <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 text-xs font-bold hover:bg-gray-50 dark:hover:bg-white/8 transition-all"
          >
            Quote
          </Link>
        </div>

      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════════ */
export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => {
      const cat = CATEGORIES.find((c) => c.value === activeFilter);
      return cat?.ids?.includes(p.id);
    });

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">

      {/* ── Hero Banner ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 py-20">
        {/* Ambient blobs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/50 backdrop-blur-md mb-6 tracking-wider">
            <Image src="/img/icon/Blue_Star_logo.png" alt="Blue Star" width={32} height={32} className="h-8 w-8 object-contain" />
            Blue Star Authorized Dealer · Bangalore
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1] mb-4 tracking-tight">
            Our{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-400">
              Products
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-base text-white/40 leading-relaxed mb-10">
            Complete range of Blue Star air conditioning systems — from compact residential splits to industrial-scale chilled water plants.
          </p>

          {/* Stats */}
          <div className="inline-grid grid-cols-3 sm:grid-cols-5 gap-px rounded-2xl overflow-hidden border border-white/8 bg-white/5 backdrop-blur-md mb-8">
            {[
              { val: `${getYearsExp()}+`, lbl: 'Years' },
              { val: '10,000+', lbl: 'Tons Installed' },
              { val: '45+', lbl: 'Engineers' },
              { val: '100+', lbl: 'Clients' },
              { val: '6', lbl: 'Product Lines' },
            ].map((s) => (
              <div key={s.lbl} className="px-6 py-3 bg-white/[0.04] text-center">
                <p className="text-lg font-black text-white">{s.val}</p>
                <p className="text-[9px] font-semibold text-white/35 uppercase tracking-wider">{s.lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter Bar ───────────────────────────────────────────── */}
      <div className="sticky top-0 z-40 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">

          {/* Category pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <SlidersHorizontal className="w-4 h-4 flex-shrink-0 text-gray-400" />
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-bold transition-all ${activeFilter === cat.value
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30'
                  : 'bg-gray-100 dark:bg-white/[0.06] text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Count */}
          <span className="flex-shrink-0 text-xs font-semibold text-gray-400">
            {filtered.length} product{filtered.length === 1 ? '' : 's'}
          </span>
        </div>
      </div>

      {/* ── Product Grid ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-sm">No products found for this category.</p>
          </div>
        )}
      </div>

      {/* ── Why Choose Us Banner ─────────────────────────────────── */}
      <section className="bg-white dark:bg-gray-900/50 border-y border-gray-100 dark:border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-widest text-sky-500 mb-2">Why Sneha Enterprises</p>
          <h2 className="text-center text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-10">
            Bangalore&apos;s Most Trusted Blue Star Dealer
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Star, title: 'Genuine Products', desc: 'Authorised Blue Star dealer — 100% authentic products with full warranty.' },
              { icon: Phone, title: 'Expert Installation', desc: `AMC-certified engineers with ${getYearsExp()}+ years of hands-on installation experience.` },
              { icon: ArrowRight, title: 'End-to-End Service', desc: 'Site survey → design → supply → install → commissioning — all under one roof.' },
              { icon: Download, title: 'AMC Contracts', desc: 'Annual maintenance contracts to keep your systems running at peak efficiency.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-500/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="text-sm font-black text-gray-900 dark:text-white mb-1">{title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-950 py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(14,165,233,0.12),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            Need help choosing the{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-400">
              right system?
            </span>
          </h2>
          <p className="text-sm text-white/40 mb-8 leading-relaxed">
            Our engineers will assess your space, calculate the exact cooling load, and recommend the most energy-efficient solution — free of charge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 hover:bg-sky-400 px-8 py-4 text-sm font-black text-white transition-all hover:-translate-y-0.5"
              style={{ boxShadow: '0 8px 32px rgba(14,165,233,0.4)' }}
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
      </section>

    </main>
  );
}
