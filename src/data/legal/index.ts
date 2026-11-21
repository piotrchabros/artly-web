import type { Locale } from '../../i18n';
import type { LegalDoc, LegalDocKey, LegalLang } from './types';
import plPrivacy from './pl/privacy';
import plTerms from './pl/terms';
import plDeletion from './pl/deletion';
import enPrivacy from './en/privacy';
import enTerms from './en/terms';
import enDeletion from './en/deletion';

export const LEGAL_DOCS = ['privacy', 'terms', 'deletion'] as const;

const docs: Record<LegalLang, Record<LegalDocKey, LegalDoc>> = {
  pl: { privacy: plPrivacy, terms: plTerms, deletion: plDeletion },
  en: { privacy: enPrivacy, terms: enTerms, deletion: enDeletion },
};

/** Legal texts exist in pl and en only; every other locale gets the English version flagged as a fallback. */
export function getLegalDoc(locale: Locale, key: LegalDocKey): { doc: LegalDoc; lang: LegalLang; fallback: boolean } {
  const lang: LegalLang = locale === 'pl' ? 'pl' : 'en';
  return { doc: docs[lang][key], lang, fallback: locale !== 'pl' && locale !== 'en' };
}
