import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    // Thêm loader cho tệp PDF
    config.module.rules.push({
      test: /\.pdf$/,
      use: 'file-loader',
    });
    return config;
  },

};

export default nextConfig;
