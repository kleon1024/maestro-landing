import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Growth Foundry subdirectory proxy
      // With basePath="/growth", all assets are under /growth/_next/...
      {
        source: "/growth",
        destination: "https://growth.maestro.onl/growth",
      },
      {
        source: "/growth/:path*",
        destination: "https://growth.maestro.onl/growth/:path*",
      },

      // PrintPic subdirectory proxy
      {
        source: "/printpic",
        destination: "https://printpic.maestro.onl/printpic",
      },
      {
        source: "/printpic/:path*",
        destination: "https://printpic.maestro.onl/printpic/:path*",
      },

      // Rehearse subdirectory proxy
      {
        source: "/rehearse",
        destination: "https://rehearse.maestro.onl/rehearse",
      },
      {
        source: "/rehearse/:path*",
        destination: "https://rehearse.maestro.onl/rehearse/:path*",
      },

      // RA subdirectory proxy
      {
        source: "/ra",
        destination: "https://ra.maestro.onl/ra",
      },
      {
        source: "/ra/:path*",
        destination: "https://ra.maestro.onl/ra/:path*",
      },

      // Layout subdirectory proxy
      {
        source: "/layout",
        destination: "https://layout.maestro.onl/layout",
      },
      {
        source: "/layout/:path*",
        destination: "https://layout.maestro.onl/layout/:path*",
      },

      // Kairos subdirectory proxy
      {
        source: "/kairos",
        destination: "https://kairos.maestro.onl/kairos",
      },
      {
        source: "/kairos/:path*",
        destination: "https://kairos.maestro.onl/kairos/:path*",
      },
    ];
  },
};

export default nextConfig;
