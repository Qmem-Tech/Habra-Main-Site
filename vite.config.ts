import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      name: "spa-fallback",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const url = req.url?.split("?")[0] ?? "";
          if (
            url !== "/" &&
            !url.includes(".") &&
            !url.startsWith("/@") &&
            !url.startsWith("/node_modules")
          ) {
            req.url = "/index.html";
          }
          next();
        });
      },
    },
    react(),
    tailwindcss(),
  ],
});
