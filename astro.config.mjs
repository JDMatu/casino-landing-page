import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  devToolbar: {
    enabled: false
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
    fallbackLocale: 'en',
  },
});