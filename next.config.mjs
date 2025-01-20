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
      {
        protocol: "https",
        hostname: "linkedin.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "web.whatsapp.com",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "messenger.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
