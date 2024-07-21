import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true, exclude: ["**/*.test.tsx"] }),
  ],
  build: {
    outDir: "./dist/lib",
    emptyOutDir: true,
    lib: {
      entry: "./src/index.ts",
      name: "your-package-name",
      fileName: (format) => `${format}.js`,
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: {
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "react/jsx-runtime": "react/jsx-runtime",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
});
