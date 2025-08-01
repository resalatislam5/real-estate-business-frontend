import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "real-estate-business-backend-production.up.railway.app",
      },
    ],
  },
};

export default nextConfig;
