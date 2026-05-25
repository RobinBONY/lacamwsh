// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // GitHub Pages : dépôt projet → site servi sous /lacamwsh/
  // (vs un dépôt user-site `<user>.github.io` qui serait à la racine)
  site: "https://robinbony.github.io",
  base: "/lacamwsh",
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "pt"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
    fallback: {
      en: "fr",
      pt: "fr",
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: {
          fr: "fr-FR",
          en: "en-GB",
          pt: "pt-PT",
        },
      },
    }),
  ],
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
