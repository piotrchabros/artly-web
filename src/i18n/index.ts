import pl from './pl.json';
import en from './en.json';
import de from './de.json';
import fr from './fr.json';
import es from './es.json';
import it from './it.json';
import nl from './nl.json';

export type Dict = typeof pl;

export const LOCALES = ['pl', 'en', 'de', 'fr', 'es', 'it', 'nl'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'pl';

export const LOCALE_META: Record<Locale, { label: string; short: string; hreflang: string; ogLocale: string; hello: string }> = {
  pl: { label: 'Polski',     short: 'PL', hreflang: 'pl-PL', ogLocale: 'pl_PL', hello: 'Witaj' },
  en: { label: 'English',    short: 'EN', hreflang: 'en',    ogLocale: 'en_GB', hello: 'Hello' },
  de: { label: 'Deutsch',    short: 'DE', hreflang: 'de',    ogLocale: 'de_DE', hello: 'Hallo' },
  fr: { label: 'Français',   short: 'FR', hreflang: 'fr',    ogLocale: 'fr_FR', hello: 'Bonjour' },
  es: { label: 'Español',    short: 'ES', hreflang: 'es',    ogLocale: 'es_ES', hello: 'Hola' },
  it: { label: 'Italiano',   short: 'IT', hreflang: 'it',    ogLocale: 'it_IT', hello: 'Ciao' },
  nl: { label: 'Nederlands', short: 'NL', hreflang: 'nl',    ogLocale: 'nl_NL', hello: 'Welkom' },
};

// A type error here means a translation is missing keys.
export const dicts: Record<Locale, Dict> = { pl, en, de, fr, es, it, nl };

export function isLocale(x: unknown): x is Locale {
  return typeof x === 'string' && (LOCALES as readonly string[]).includes(x);
}

export function getDict(locale: Locale): Dict {
  return dicts[locale] ?? dicts[DEFAULT_LOCALE];
}

function lookup(dict: unknown, key: string): unknown {
  let cur: unknown = dict;
  for (const seg of key.split('.')) {
    if (cur == null || typeof cur !== 'object') return undefined;
    cur = (cur as Record<string, unknown>)[seg];
  }
  return cur;
}

function interpolate(str: string, vars?: Record<string, string | number>): string {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (m, name: string) => (name in vars ? String(vars[name]) : m));
}

/** Dot-path lookup ("faq.items.0.q"); falls back to pl, then to the key itself. */
export function t(locale: Locale, key: string, vars?: Record<string, string | number>): string {
  let value = lookup(getDict(locale), key);
  if (typeof value !== 'string' && typeof value !== 'number') {
    value = lookup(dicts[DEFAULT_LOCALE], key);
    if (typeof value !== 'string' && typeof value !== 'number') {
      if (import.meta.env.DEV) console.warn(`[i18n] missing key "${key}" (${locale})`);
      return key;
    }
  }
  return interpolate(String(value), vars);
}

export function useT(locale: Locale): (key: string, vars?: Record<string, string | number>) => string {
  return (key, vars) => t(locale, key, vars);
}

export type PageKey = 'home' | 'regulamin' | 'polityka-prywatnosci' | 'kontakt' | '404';

export function pagePath(page: PageKey): string {
  return page === 'home' ? '' : page;
}

/** ('pl','') -> '/'; ('en','') -> '/en/'; ('de','kontakt','x') -> '/de/kontakt/#x' */
export function localePath(locale: Locale, path = '', hash = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  const url = `${prefix}/${clean ? `${clean}/` : ''}`;
  const h = hash.replace(/^#/, '');
  return h ? `${url}#${h}` : url;
}

export function alternates(path: string): { locale: Locale; hreflang: string; href: string }[] {
  return LOCALES.map((locale) => ({ locale, hreflang: LOCALE_META[locale].hreflang, href: localePath(locale, path) }));
}

/** The 7 greetings rotated so the current locale comes first. */
export function greetings(locale: Locale): string[] {
  const i = LOCALES.indexOf(locale);
  const ordered = [...LOCALES.slice(i), ...LOCALES.slice(0, i)];
  return ordered.map((l) => LOCALE_META[l].hello);
}
