import {withSentryConfig} from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }
    ],
  },
};

export default withSentryConfig(nextConfig, {

org: "thevindu-nimeth-dehigaspitiya",
project: "javascript-nextjs",

silent: !process.env.CI,

widenClientFileUpload: true,

disableLogger: true,

automaticVercelMonitors: true,
});