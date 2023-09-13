/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.mensjournal.com", "**"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
