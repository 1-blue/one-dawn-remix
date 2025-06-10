import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: {
    resolve: true,
    // Prisma 생성 파일의 타입 문제를 우회
    compilerOptions: {
      skipLibCheck: true,
      moduleResolution: "bundler",
    },
  },
  clean: true,
  external: [
    "@prisma/client",
    "@prisma/adapter-neon",
    "@neondatabase/serverless",
    "ws",
  ],
  noExternal: [],
  splitting: false,
  sourcemap: true,
  minify: false,
  target: "node18",
  outDir: "dist",
});
