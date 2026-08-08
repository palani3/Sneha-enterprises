'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getYearsExp } from '../../lib/founding';

gsap.registerPlugin(ScrollTrigger);

/* ─── Product Data ─────────────────────────────────────────── */
const products = [
  {
    id: 'vrf',
    num: '01',
    badge: 'Enterprise',
    image: '/img/products/VRF/VRF.webp',
    accent: '#4f46e5',
    title: 'VRF Air Conditioner',
    tagline: 'Multi-Zone · High Efficiency',
    features: [
      'Up to 64 Indoor Units',
      'Simultaneous Heat & Cool',
      'BMS / Modbus Integration',
      'Variable Refrigerant Flow',
    ],
  },
  {
    id: 'package',
    num: '02',
    badge: 'Central System',
    image: '/img/products/Package_Ductable%20AC/0.webp',
    accent: '#047857',
    title: 'Package & Ductable AC',
    tagline: 'Concealed Ducting · Uniform Air',
    features: [
      'Concealed Duct Installation',
      'Uniform Airflow Distribution',
      '2 TR to 20 TR Range',
      'Inverter Ducted Technology',
    ],
  },

  {
    id: 'split',
    num: '03',
    badge: 'Most Popular',
    image: '/img/products/SplitAir/split.webp',
    accent: '#0284c7',
    title: 'Split Air Conditioner',
    tagline: 'Elegant Design · Smart Comfort',
    features: [
      'Smart Inverter Compressor',
      'Wi-Fi Smart Control',
      'Self-Cleaning Function',
      'BEE Energy Efficient',
    ],
  },
  {
    id: 'cassette',
    num: '04',
    badge: 'Commercial',
    image: '/img/products/Cassette/CassetteAirConditioner.webp',
    accent: '#7c3aed',
    title: 'Cassette Air Conditioner',
    tagline: 'Ceiling-Concealed · 360° Cooling',
    features: [
      '360° 4-Way Airflow',
      'Inverter Technology',
      'Ultra Slim Ceiling Design',
      'Wi-Fi Smart Control',
    ],
  },
  {
    id: 'chiller',
    num: '05',
    badge: 'Industrial',
    image: '/img/products/Chiller/Chiller1.webp',
    accent: '#0891b2',
    title: 'Chiller Air Conditioner',
    tagline: 'Latest Technology · Superior Reliability',
    features: [
      'High IPLV Efficiency',
      'Ultra Low Sound Levels',
      'BMS Integration Ready',
      'Eco-Friendly Refrigerant',
    ],
  },
  {
    id: 'screw',
    num: '06',
    badge: 'Heavy Duty',
    image: '/img/products/Screw-Turbo%20Chillers/Screw.webp',
    accent: '#be123c',
    title: 'Screw / Turbo Chillers',
    tagline: 'Magnetic Bearings · Zero Friction',
    features: [
      'Magnetic Bearing Compressor',
      '25+ Year Service Life',
      'Zero Oil Lubrication',
      'IoT Remote Monitoring',
    ],
  }

];

/* ─── Product Card ─────────────────────────────────────────── */
function ProductCard({ product }: Readonly<{ product: typeof products[0] }>) {
  return (
    <div className="product-card group">
      <div className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

        {/* Image */}
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* Number */}
          <span className="absolute top-4 left-4 text-xs font-bold tracking-widest text-white/50">
            {product.num}
          </span>

          {/* Badge */}
          <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm text-gray-700 dark:text-gray-200">
            {product.badge}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          {/* Accent bar */}
          <div
            className="h-0.5 w-8 rounded-full mb-4 group-hover:w-14 transition-all duration-300"
            style={{ background: product.accent }}
          />

          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 leading-snug">
            {product.title}
          </h3>
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-4 tracking-wide">
            {product.tagline}
          </p>

          {/* Features */}
          <ul className="space-y-2 mb-5 flex-1">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5">
                <span
                  className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ background: product.accent }}
                />
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{f}</span>
              </li>
            ))}
          </ul>

          {/* Divider + CTA */}
          <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
            <Link
              href={`/products/${product.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors group/link"
              style={{ color: product.accent }}
            >
              View Details
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─────────────────────────────────────────── */
export default function ProductsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.products-heading', {
        y: 30, opacity: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      });
      gsap.from('.product-card', {
        y: 40, opacity: 0, stagger: 0.08, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const yearsExp = getYearsExp();

  return (
    <section
      ref={sectionRef}
      className="bg-gray-50 dark:bg-gray-950 transition-colors duration-300"
    >
      {/* ── Section Header ─────────────────────────────────── */}
      <div className="products-heading max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-sky-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400">
                Our Products
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight tracking-tight">
              Premium Cooling{' '}
              <span className="block text-sky-600 dark:text-sky-400">Solutions</span>
            </h2>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed">
              Complete range of Blue Star AC systems — from compact residential splits to industrial-scale chilled water plants.
            </p>
          </div>

          {/* Stats + CTA */}
          <div className="flex flex-col gap-5 md:items-end">
            <div className="flex gap-8">
              <div className="text-center md:text-right">
                <p className="text-2xl font-black text-gray-900 dark:text-white">{yearsExp}+</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-2xl font-black text-gray-900 dark:text-white">06</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">Product Lines</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-2xl font-black text-gray-900 dark:text-white">500+</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-wider">Installations</p>
              </div>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 hover:bg-sky-500 px-5 py-2.5 text-sm font-bold text-white transition-colors"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px bg-gradient-to-r from-sky-200 via-gray-200 to-transparent dark:from-sky-900 dark:via-gray-800" />
      </div>

      {/* ── Products Grid ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
