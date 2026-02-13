// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://robinbony.github.io",
  base: "/lacamwsh",
  vite: {
    plugins: [tailwindcss()],
  },
});
