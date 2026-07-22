export const INTERVAL = 4500;

export const slides = [
  { bg: '/img/Herosection/1.webp', overlay: 'from-slate-950/80 via-blue-950/65 to-slate-900/70',    label: 'AC Installation'      },
  { bg: '/img/Herosection/2.webp', overlay: 'from-slate-950/80 via-cyan-950/65 to-slate-900/70',    label: 'Service & Maintenance' },
  { bg: '/img/Herosection/3.webp', overlay: 'from-slate-950/80 via-indigo-950/60 to-slate-900/70',  label: 'Commercial Solutions' },
  { bg: '/img/Herosection/4.webp', overlay: 'from-slate-950/80 via-teal-950/60 to-slate-900/70',    label: 'Chiller Systems'      },
];

export type Slide = typeof slides[0];
