/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/examsphere02",
  assetPrefix: "/examsphere02/",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
