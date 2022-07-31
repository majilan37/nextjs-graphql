/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } };
    return config;
  },
  images: {
    domains: ["ohspets.shelterbuddy.com", "bit.ly"],
  },
};

module.exports = nextConfig;
