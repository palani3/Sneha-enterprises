'use client';

import { useEffect, useRef, useState } from 'react';
import { Wrench, Megaphone, X } from 'lucide-react';

const FACEBOOK_GROUP_URL = 'https://www.facebook.com/profile.php?id=61585910040946';

const WHATSAPP_DEPARTMENTS = [
  {
    key: 'service',
    label: 'Service',
    description: 'AMC, repairs & installation support',
    phone: '918792263737',
    display: '+91 87922 63737',
    icon: Wrench,
  },
  {
    key: 'marketing',
    label: 'Marketing',
    description: 'New enquiries, quotes & products',
    phone: '919880811211',
    display: '+91 98808 11211',
    icon: Megaphone,
  },
] as const;

function WhatsAppIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.004 0C7.164 0 .01 7.155.007 15.993c0 2.82.735 5.574 2.135 7.98L0 32l8.223-2.157a15.94 15.94 0 0 0 7.774 1.98h.006c8.839 0 15.994-7.156 15.997-15.994A15.9 15.9 0 0 0 27.318 4.7 15.9 15.9 0 0 0 16.004 0zm9.362 22.877c-.4 1.13-2.317 2.16-3.19 2.29-.87.13-1.6.19-2.58-.19-.6-.24-1.36-.5-2.35-.94-4.13-1.78-6.82-5.94-7.03-6.22-.21-.28-1.7-2.26-1.7-4.31 0-2.05 1.07-3.06 1.45-3.48.38-.42.83-.53 1.11-.53.28 0 .55 0 .8.01.26.01.6-.1.94.71.35.83 1.18 2.89 1.28 3.1.1.21.17.46.03.74-.13.28-.21.46-.42.7-.21.24-.44.54-.63.72-.21.2-.43.42-.19.86.24.44 1.09 1.85 2.35 3 1.62 1.46 3 1.92 3.44 2.14.44.21.7.18.96-.1.26-.28 1.1-1.28 1.4-1.72.3-.44.6-.36 1-.21.4.14 2.55 1.2 2.99 1.42.44.21.73.32.84.5.11.19.11 1.06-.29 2.19z" />
    </svg>
  );
}

function FacebookIcon({ className }: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.66 9.185 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.775-1.63 1.57v1.88h2.773l-.443 2.91h-2.33V22c4.778-.755 8.437-4.92 8.437-9.94z" />
    </svg>
  );
}

export default function SocialContactButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();

    const closeOnBackdropClick = (e: MouseEvent) => {
      if (e.target === dialog) setIsOpen(false);
    };
    dialog.addEventListener('click', closeOnBackdropClick);
    return () => dialog.removeEventListener('click', closeOnBackdropClick);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const openWhatsApp = (phone: string, label: string) => {
    const text = encodeURIComponent(`Hi, I'd like to know more about your ${label.toLowerCase()}.`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <>
      <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
        <h3 className="mb-3 text-base font-bold italic text-sky-600 dark:text-sky-400">Chat With Us:</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-700"
          >
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-sm shadow-emerald-500/30 transition-transform duration-200 group-hover:scale-105">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold text-slate-900 dark:text-white">WhatsApp Chat</span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">Service or Marketing</span>
            </span>
          </button>

          <a
            href={FACEBOOK_GROUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700"
          >
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-600/30 transition-transform duration-200 group-hover:scale-105">
              <FacebookIcon className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold text-slate-900 dark:text-white">Facebook Group</span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">Join our community</span>
            </span>
          </a>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="whatsapp-dialog-title"
        onClose={() => setIsOpen(false)}
        className="animate-modal-in m-auto w-full max-w-xs rounded-2xl border-t-4 border-emerald-500 bg-white p-5 shadow-2xl backdrop:bg-slate-950/60 backdrop:backdrop-blur-sm dark:bg-slate-900"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm shadow-emerald-500/30">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <div>
              <h3 id="whatsapp-dialog-title" className="text-base font-black text-slate-900 dark:text-white">
                Chat on WhatsApp
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Choose a department
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-2.5">
          {WHATSAPP_DEPARTMENTS.map(({ key, label, description, phone, display, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => openWhatsApp(phone, label)}
              className="group flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50 dark:border-slate-700 dark:hover:border-emerald-500 dark:hover:bg-emerald-500/10"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white dark:bg-emerald-500/15 dark:text-emerald-400">
                <Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold text-slate-900 dark:text-white">{label}</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">{description}</span>
              </span>
              <span className="flex-shrink-0 text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                {display}
              </span>
            </button>
          ))}
        </div>
      </dialog>
    </>
  );
}
