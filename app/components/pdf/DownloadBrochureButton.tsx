'use client';

import React, { useState, useCallback } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { PRODUCTS } from '../../lib/productsData';
import type { BrochureImageData } from './BrochurePDF';
import { CLIENT_LIST } from '../../lib/clientList';

interface DownloadBrochureButtonProps {
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  label?: string;
}

/** Load an image URL and return a PNG data URL (handles WebP conversion) */
async function loadImageAsDataURL(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return reject(new Error('Canvas context unavailable'));
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    img.src = url;
  });
}

export default function DownloadBrochureButton({
  className = '',
  variant = 'primary',
  label = 'Download Brochure',
}: Readonly<DownloadBrochureButtonProps>) {
  const [loading, setLoading] = useState(false);

  const handleDownload = useCallback(async () => {
    setLoading(true);
    try {
      // Pre-load all images as PNG data URLs
      const imageData: BrochureImageData = { logo: '', hero: '', products: {}, clients: {} };

      // Load logo (already PNG)
      try {
        imageData.logo = await loadImageAsDataURL('/img/company_logo/Logo.png');
      } catch { /* logo optional */ }

      // Load hero image
      try {
        imageData.hero = await loadImageAsDataURL('/img/Herosection/1.webp');
      } catch { /* hero optional */ }

      // Load product images (WebP → PNG via canvas)
      await Promise.all(
        PRODUCTS.map(async (product) => {
          try {
            imageData.products[product.id] = await loadImageAsDataURL(product.image);
          } catch { /* skip failed images */ }
        })
      );

      // Load client logos (WebP → PNG via canvas)
      await Promise.all(
        CLIENT_LIST.map(async (name) => {
          try {
            imageData.clients[name] = await loadImageAsDataURL(`/img/clients/${name}.webp`);
          } catch { /* skip failed client images */ }
        })
      );

      // Dynamic import to avoid SSR bundling of @react-pdf/renderer
      const { pdf } = await import('@react-pdf/renderer');
      const { default: BrochurePDF } = await import('./BrochurePDF');
      const blob = await pdf(<BrochurePDF images={imageData} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Sneha-Enterprises-Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 cursor-pointer';

  const variantStyles = {
    primary: 'bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 text-sm shadow-lg shadow-sky-500/30 hover:-translate-y-0.5',
    outline: 'border border-white/25 bg-white/10 text-white px-6 py-3 text-sm backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/20',
    ghost: 'text-sky-500 hover:text-sky-400 px-3 py-2 text-xs hover:bg-sky-50 dark:hover:bg-sky-500/10',
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Download className="w-4 h-4" />
      )}
      {loading ? 'Generating PDF...' : label}
    </button>
  );
}
