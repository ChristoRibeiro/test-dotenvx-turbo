import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
  serverExternalPackages: ["pino", "pino-pretty", "@dotenvx/dotenvx"],
}

export default nextConfig
