import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    // Only needed when images are served from a CDN (see src/config/assets.ts).
    remotePatterns: process.env.NEXT_PUBLIC_ASSETS_URL?.startsWith("http")
      ? [new URL(process.env.NEXT_PUBLIC_ASSETS_URL)]
      : [],
  },
};

export default nextConfig;
