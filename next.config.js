const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false
  },
  env: {
    NEXT_API_KEY: process.env.NEXT_API_KEY
  }
}



module.exports = nextConfig;