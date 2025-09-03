import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"], // 👈 add this line
  },
};

export default nextConfig;
