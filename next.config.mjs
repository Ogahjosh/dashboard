import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverExternalPackages: ["bcrypt"],
  },
};

export default nextConfig;
