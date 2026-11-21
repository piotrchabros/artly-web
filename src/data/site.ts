import { localePath, type Locale } from '../i18n';

/** App Store numeric id. Empty until the iOS app is published; iOS then falls back to /aplikacja/. */
export const APP_STORE_ID = '';
export const PLAY_PACKAGE = 'pl.artly.app';
export const APP_STORE_URL = APP_STORE_ID ? `https://apps.apple.com/app/id${APP_STORE_ID}` : null;
export const PLAY_URL = `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}`;

/**
 * Browsing, saving, the cart and the account live in the mobile app for now.
 * Every shop link goes through here, so pointing them at real web pages later is one edit.
 */
export function shopHref(locale: Locale, _target: 'discover' | 'artists' | 'artwork' | 'saved' | 'cart' | 'account' | 'search' | 'room' | 'join'): string {
  return localePath(locale, 'aplikacja');
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
