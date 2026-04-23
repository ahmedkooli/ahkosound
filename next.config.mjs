/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.spotifycdn.com" },
      { protocol: "https", hostname: "i.scdn.co" },
      { protocol: "https", hostname: "i1.sndcdn.com" },
    ],
  },
};

export default nextConfig;
