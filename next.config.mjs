/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    cpus: 1,
  },
  async rewrites() {
    return [
      {
        source: "/manufacturing-area",
        destination: "/photos",
      },
      {
        source: "/manufacturing",
        destination: "/photos",
      },
    ];
  },
};

export default nextConfig;
