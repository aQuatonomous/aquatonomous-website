import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://aquatonomous.vercel.app",
  integrations: [tailwind(), mdx(), sitemap(), react(), sitemap(), pagefind(), 
    icon({
      // Enable additional icon collections here
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json'),
      },
    }),],
});
