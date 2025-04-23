import type { NextConfig } from "next";

import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

const nextConfig: NextConfig = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            // eslint-disable-next-line
            config.plugins = [...config.plugins, new PrismaPlugin()];
        }
        // eslint-disable-next-line
        return config;
    },
};

export default nextConfig;
