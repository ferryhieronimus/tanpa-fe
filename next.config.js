/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        {
          hostname: 'tanpa.sgp1.digitaloceanspaces.com'
        }
      ],
  },
};

module.exports = nextConfig;
