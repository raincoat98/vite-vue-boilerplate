import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
import usePHP from "vite-plugin-php";

export default defineConfig({
  plugins: [
    vue(),
    tsconfigPaths(),
    usePHP({
      entry: ["index.php"],
    }),
  ],
  base: "/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
