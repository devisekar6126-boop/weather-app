
import { defineConfig, transformWithOxc } from "vite";
import react from "@vitejs/plugin-react";

const jsxInJs = () => ({
  name: "jsx-in-js",
  enforce: "pre",

  async transform(code, id) {
    if (!id.split("?")[0].endsWith(".js") ||
        !id.includes("/src/")) {
      return null;
    }

    return await transformWithOxc(code, id, {
      lang: "jsx",
    });
  },
});

export default defineConfig({
  plugins: [
    jsxInJs(),
    react(),
  ],
});
