'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Our Service', href: '/services' },
  { label: 'Our Clients', href: '/clients' },
  { label: 'About Us', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [dark, setDark]         = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible]   = useState(true);
  const lastScrollY              = useRef(0);

  /* ── Dark mode ─────────────────────────────────────────────── */
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  /* ── Scrolled state + hide/show on direction ─────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      // Always show at very top of page
      if (current <= 0) {
        setVisible(true);
      } else if (current > lastScrollY.current) {
        // Any downward scroll — hide immediately
        setVisible(false);
        setMenuOpen(false);
      } else if (current < lastScrollY.current - 4) {
        // Scroll up by 4px — show
        setVisible(true);
      }
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkColor = 'text-gray-700 dark:text-gray-200 hover:text-sky-600 dark:hover:text-sky-400';
  const iconColor = 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600';

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Image
              src="/img/company_logo/Logo.png"
              alt="Sneha Enterprises"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <div className="flex items-center self-center h-20 border-l border-gray-200 dark:border-gray-700 pl-3">
              <Image
                src="/img/icon/Blue_Star_logo.png"
                alt="Blue Star Authorized Dealer"
                width={140}
                height={140}
                className="h-24 w-24 object-contain"
                style={{ filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))' }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${linkColor}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className={`ml-2 p-2 rounded-full transition-colors ${iconColor}`}
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-700 dark:text-gray-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile: toggle + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className={`p-2 rounded-full transition-colors ${iconColor}`}
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-700 dark:text-gray-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className={`p-2 rounded-md transition-colors ${linkColor}`}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-3 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-sky-50 dark:hover:bg-gray-800 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
