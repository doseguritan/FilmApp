import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
        port: '',
        search: ''
      }
    ],
    domains: ['image.tmdb.org'],
  },
};

export default nextConfig;
