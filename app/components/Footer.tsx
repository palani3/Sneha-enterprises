'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Our Clients', href: '/clients' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  'VRF System',
  'Ducted Split & Packaged ACs',
  'Chilled Water System',
  'Ventilation System',
  'Installation & Commissioning',
  'Annual Maintenance Contract',
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current?.querySelectorAll('.footer-col') ?? [], {
        y: 40, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 90%' },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="footer-col lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/img/company_logo/Logo.png"
                alt="Sneha Enterprises"
                width={180}
                height={60}
                className="h-auto w-44 object-contain"
              />
            </div>

            <p className="mb-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Your trusted partner for Blue Star air conditioning — sales, installation, service & AMC since 1996.
            </p>

            <div className="inline-flex items-center gap-2.5 rounded-2xl border border-sky-200 bg-sky-50 px-3 py-2.5 dark:border-sky-800/60 dark:bg-sky-950/60 backdrop-blur-sm">
              <Image
                src="/img/icon/Blue_Star_logo.png"
                alt="Blue Star Authorized Dealer"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
              />
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-slate-900 dark:text-white">Blue Star</p>
                <p className="text-[10px] font-semibold text-sky-600 dark:text-sky-300">Authorized Dealer</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    <svg className="h-3 w-3 text-sky-500 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services" className="group flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
                    <span className="inline-block text-sky-500 transition-transform group-hover:translate-x-1">›</span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Location</p>
                  <p className="text-sm leading-snug text-slate-700 dark:text-slate-300">
                    No.733, 13th Cross Rd, 7th Block,<br />
                    Jayanagar, Bengaluru, Karnataka 560082
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Call</p>
                  <a href="tel:+918792263737" className="block text-sm text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">+91 8792263737</a>
                  <a href="tel:+919880811211" className="block text-sm text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">+91 9880811211</a>
                  <a href="tel:08026760026" className="block text-sm text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">080-26760026/28</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Email</p>
                  <a href="mailto:Sales@sneha-enterprises.com" className="block text-sm text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Sales@sneha-enterprises.com</a>
                  <a href="mailto:Marketing@sneha-enterprises.com" className="block text-sm text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Marketing@sneha-enterprises.com</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Hours</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Mon–Sat: 9AM–7PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} Sneha Enterprises. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Authorized Sales & Service Dealer · <span className="font-semibold text-sky-600 dark:text-sky-400">Blue Star Limited</span>
          </p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Service'].map((l) => (
              <Link key={l} href="#" className="text-xs text-slate-400 transition-colors hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300">{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
