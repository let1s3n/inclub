const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false
  },
  env: {
    NEXT_API_KEY: process.env.NEXT_API_KEY,
    NEXT_API_URL: process.env.NEXT_API_URL,
  }
}



module.exports = nextConfig;