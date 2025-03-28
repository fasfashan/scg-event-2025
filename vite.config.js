import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "dist",
    // Jika menggunakan React Router dengan mode history
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
});
