import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["picsum.photos"], // 👈 add this line
  },
  
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
