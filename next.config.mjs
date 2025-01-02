/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "facebook.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "x.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "linkedin.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
