import type { Locale } from '../i18n';

/** App Store numeric id (keep in sync with worker/index.js). */
export const APP_STORE_ID = '6837015467';
export const PLAY_PACKAGE = 'pl.artly.app';
export const APP_STORE_URL = APP_STORE_ID ? `https://apps.apple.com/app/id${APP_STORE_ID}` : null;
export const PLAY_URL = `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}`;

/**
 * Web shop (the Expo web app). Set per build: prod https://app.artly.com.pl (default),
 * staging https://staging-app.artly.com.pl (see "deploy:staging" in package.json).
 */
export const SHOP_URL = (import.meta.env.PUBLIC_SHOP_URL || 'https://app.artly.com.pl').replace(/\/+$/, '');

export type ShopTarget = 'discover' | 'artists' | 'artwork' | 'saved' | 'cart' | 'account' | 'search' | 'room' | 'join';

/** Routes of the shop app (artly/apps/mobile/app, expo-router). */
const SHOP_ROUTES: Record<ShopTarget, string> = {
  discover: '/discover',
  artists: '/discover',             // no artist directory in the shop yet
  artwork: '/discover',             // home cards are placeholders; real cards should link /artwork/<handle>
  saved: '/favourites',
  cart: '/checkout',
  account: '/profile',
  search: '/search',
  room: '/interiors',
  join: '/artist-onboarding/register',
};

export function shopHref(_locale: Locale, target: ShopTarget): string {
  return SHOP_URL + SHOP_ROUTES[target];
}

export const INSPIRACJE_PATH = '/inspiracje/';

/** "Bez tytułu" -> "bez-tytulu" (lowercase, ASCII, hyphens). */
export function slugify(s: string): string {
  return s
    .replace(/[łŁ]/g, 'l')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Test id in the style of spec/*.json: "<tag>.<slug of text, max 32 chars>". */
export function tid(tag: string, text: string): string {
  return `${tag}.${slugify(text).slice(0, 32)}`;
}
