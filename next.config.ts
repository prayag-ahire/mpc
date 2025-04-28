import type { NextConfig } from "next";

module.exports = {
  images: {
    domains: ['fakestoreapi.com'], 
  },
}
const nextConfig: NextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds: true, 
  }
};


export default nextConfig;
