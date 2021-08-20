const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const nextConfig = {
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  images: {
    domains: [""],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
