import { defineConfig } from "vite";
import path from "path";
import { createVuePlugin } from "vite-plugin-vue2";
import copy from "rollup-plugin-copy";

//处理lib需要打包editor

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  base: "./",
  build: {
    emptyOutDir: false,
    chunkSizeWarningLimit: 1024 * 5,
    rollupOptions: {
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  define: {
    "process.env": process.env,
  },
  server: {
    port: 8080,
  },
});
