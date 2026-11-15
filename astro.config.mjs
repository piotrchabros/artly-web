// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://artly.piotrchabros.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap({
    filter: (page) => !page.includes('/404'),
    i18n: { defaultLocale: 'pl', locales: { pl: 'pl-PL', en: 'en', de: 'de', fr: 'fr', es: 'es', it: 'it', nl: 'nl' } },
  })],
  i18n: { locales: ['pl', 'en', 'de', 'fr', 'es', 'it', 'nl'], defaultLocale: 'pl', routing: { prefixDefaultLocale: false } },
});
