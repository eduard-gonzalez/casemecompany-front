/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/es",
        permanent: true,
      },
    ];
  },
  env: {
    // API_PROD_URL: "http://127.0.0.1:8000/api/",
    API_PROD_URL: "https://casemecompany-backend.macroevo.me/api/",
    PAYMENT_RETURN_URL: "http://localhost:3000",
    PAYMENT_CANCEL_URL: "http://localhost:3000/",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "laravel.pixelstrap.net",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "casemeapi.test",
      },
      {
        protocol: "https",
        hostname: "casemecompany-backend.macroevo.me",
      },
    ],
  },
};

module.exports = nextConfig;
