/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
      },
    ],
  },
  eslint {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
