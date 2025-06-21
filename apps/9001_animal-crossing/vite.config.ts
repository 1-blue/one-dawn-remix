import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    port: 9001,
    open: true,
    strictPort: true,
  },
  resolve: {
    alias: {
      "#": resolve(__dirname, "./app"),
    },
  },
  ssr: {
    noExternal: ["@one-dawn/ui"],
    external: [
      "@prisma/client",
      "@prisma/adapter-neon",
      "@neondatabase/serverless",
      "ws",
    ],
  },
});
