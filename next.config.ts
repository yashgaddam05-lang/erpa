import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Next.js 16 requires explicit qualities allowlist (default is [75]).
    // Adding 80 to support the q=80 param used in images.ts URLs.
    qualities: [75, 80, 90, 100],
  },
};

export default nextConfig;
