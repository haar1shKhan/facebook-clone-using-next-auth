/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "1000logos.net",
      "platform-lookaside.fbsbx.com",
      "t2.gstatic.com",
      "en.wikipedia.org",
      "image.cnbcfm.com",
      "t3.gstatic.com",
      "scontent.ffjr1-3.fna.fbcdn.net",
      'firebasestorage.googleapis.com'
    ],
  },
};

module.exports = nextConfig
