/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true, // Optional but helps with static routing
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
  