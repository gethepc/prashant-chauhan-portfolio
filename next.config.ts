import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/prashant-chauhan-portfolio" : "",
  assetPrefix: isProd ? "/prashant-chauhan-portfolio/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
