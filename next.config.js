/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    basePath: '/Portfolio',
  reactStrictMode: true,
  images: {
      unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    domains: ['images.ctfassets.net', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
