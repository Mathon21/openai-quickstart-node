/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'zh',
  },
  images: {
    domains: ['tgqrcode.s3.ap-northeast-1.amazonaws.com', 'hui.cdn.iceball.org'],
    disableStaticImages: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // distDir: "build",
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    }); // 针对 SVG 的处理规则

    return config;
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
