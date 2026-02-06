import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Growth Foundry subdirectory proxy
      {
        source: "/growth",
        destination: "https://growth.maestro.onl",
      },
      {
        source: "/growth/:path*",
        destination: "https://growth.maestro.onl/:path*",
      },
      // PrintPic subdirectory proxy
      {
        source: "/printpic",
        destination: "https://printpic.maestro.onl",
      },
      {
        source: "/printpic/:path*",
        destination: "https://printpic.maestro.onl/:path*",
      },
      // Rehearse subdirectory proxy
      {
        source: "/rehearse",
        destination: "https://rehearse.maestro.onl",
      },
      {
        source: "/rehearse/:path*",
        destination: "https://rehearse.maestro.onl/:path*",
      },
      // RA subdirectory proxy
      {
        source: "/ra",
        destination: "https://ra.maestro.onl",
      },
      {
        source: "/ra/:path*",
        destination: "https://ra.maestro.onl/:path*",
      },
      // Layout subdirectory proxy
      {
        source: "/layout",
        destination: "https://layout.maestro.onl",
      },
      {
        source: "/layout/:path*",
        destination: "https://layout.maestro.onl/:path*",
      },
      // Kairos subdirectory proxy
      {
        source: "/kairos",
        destination: "https://kairos.maestro.onl",
      },
      {
        source: "/kairos/:path*",
        destination: "https://kairos.maestro.onl/:path*",
      },
    ];
  },
};

export default nextConfig;
