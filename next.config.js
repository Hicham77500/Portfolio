/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['images.ctfassets.net', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
