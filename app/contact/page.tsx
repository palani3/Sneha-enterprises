'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Mail, Phone } from 'lucide-react';
import SocialContactButtons from '@/app/components/SocialContactButtons';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-heading > *', {
        y: 40, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out',
      });

      gsap.from(infoRef.current, {
        x: -50, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Heading */}
      <section className="bg-white px-6 pb-2 pt-16 dark:bg-slate-950">
        <div className="contact-heading mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-black uppercase tracking-wide text-slate-900 dark:text-white md:text-5xl">
            Contact Us
          </h1>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-sky-500" />
        </div>
      </section>

      {/* Contact info + Map */}
      <section ref={sectionRef} className="bg-white px-6 py-16 dark:bg-slate-950">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">

          {/* Left — Info card */}
          <div ref={infoRef} className="rounded-2xl border-t-4 border-sky-400 bg-slate-50 p-8 shadow-[0_8px_30px_rgba(15,23,42,0.08)] dark:border-sky-500 dark:bg-slate-900">

            {/* Location */}
            <div className="mb-8 flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-sky-400" />
              <div>
                <h3 className="text-base font-bold italic text-sky-600 dark:text-sky-400">Location:</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  No.733, 13th Cross Rd, 7th Block,<br />
                  Jayanagar, Bengaluru, Karnataka<br />
                  560082
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="mb-8 flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-sky-400" />
              <div>
                <h3 className="text-base font-bold italic text-sky-600 dark:text-sky-400">Email:</h3>
                <a href="mailto:Sales@sneha-enterprises.com" className="mt-1 block text-sm text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400">
                  Sales@ sneha-enterprises.com
                </a>
                <a href="mailto:Marketing@sneha-enterprises.com" className="block text-sm text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400">
                  Marketing@ sneha-enterprises.com
                </a>
              </div>
            </div>

            {/* Call */}
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-sky-400" />
              <div>
                <h3 className="text-base font-bold italic text-sky-600 dark:text-sky-400">Call:</h3>
                <a href="tel:+918792263737" className="mt-1 block text-sm text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400">+91 8792263737</a>
                <a href="tel:+919880811211" className="block text-sm text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400">+91 9880811211</a>
                <a href="tel:08026760026" className="block text-sm text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400">080-26760026/28</a>
              </div>
            </div>

            <SocialContactButtons />
          </div>

          {/* Right — Google Map */}
          <div className="overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.75059662669!2d77.57215731413476!3d12.923744819424972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15854c0c3a19%3A0xfbd7a2c8a240baf0!2sSneha%20Enterprises!5e0!3m2!1sen!2sin!4v1629205962111!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sneha Enterprises Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
