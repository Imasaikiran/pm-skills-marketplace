/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['pmskills.io'],
  },
};

module.exports = nextConfig;
