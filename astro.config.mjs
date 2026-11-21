// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const locales = ['pl', 'en', 'de', 'fr', 'es', 'it', 'nl'];

// Old Polish slugs for the legal pages, kept as redirects to the new paths.
const legacyLegal = { regulamin: 'terms', 'polityka-prywatnosci': 'privacy' };
const redirects = Object.fromEntries(
  ['', ...locales.filter((l) => l !== 'pl').map((l) => `/${l}`)].flatMap((prefix) =>
    Object.entries(legacyLegal).map(([from, to]) => [`${prefix}/${from}`, `${prefix}/${to}/`]),
  ),
);

export default defineConfig({
  site: 'https://artly.com.pl',
  output: 'static',
  trailingSlash: 'ignore',
  redirects,
  integrations: [sitemap({
    filter: (page) => !page.includes('/404') && !/\/(regulamin|polityka-prywatnosci)\/?$/.test(page),
    i18n: { defaultLocale: 'pl', locales: { pl: 'pl-PL', en: 'en', de: 'de', fr: 'fr', es: 'es', it: 'it', nl: 'nl' } },
  })],
  i18n: { locales, defaultLocale: 'pl', routing: { prefixDefaultLocale: false } },
});
