import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const apiUrl = process.env.BACKEND_API_URL || 'http://localhost:8000';
    return [
      {
        source: '/api/vyos/:path*',
        destination: `${apiUrl}/vyos/:path*`,
      },
    ];
  },
};

export default nextConfig;
