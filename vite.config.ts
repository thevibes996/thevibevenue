import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    loader: "tsx"
  },
  root: "./",
  envPrefix: "REACT_APP_", // default
  server: {
    open: true,
    port: 4545
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src")
    }
  },
  build: {
    outDir: "./dist",
    rollupOptions: {
      external: ["immer"]
    }
  },
  plugins: [
    react(),
    tsconfigPaths(),
    svgrPlugin({
      svgrOptions: {
        icon: true
        // ...svgr options (https://react-svgr.com/docs/options/)
      }
    })
  ]
});
