import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nextjs-homework',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
