const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Portfolio' : undefined,
  assetPrefix: isProd ? '/Portfolio/' : undefined,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    domains: ['images.ctfassets.net', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;
