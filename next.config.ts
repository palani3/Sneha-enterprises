import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    qualities: [75, 90],
    unoptimized: true,
  },

  // Tree-shake icon imports down to only the icons actually used.
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  turbopack: {},
};

export default nextConfig;