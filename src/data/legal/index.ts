import type { Locale } from '../../i18n';
import type { LegalDoc, LegalDocKey, LegalLang } from './types';
import plPrivacy from './pl/privacy';
import plTerms from './pl/terms';
import plDeletion from './pl/deletion';
import plSupport from './pl/support';
import enPrivacy from './en/privacy';
import enTerms from './en/terms';
import enDeletion from './en/deletion';
import enSupport from './en/support';

export const LEGAL_DOCS = ['privacy', 'terms', 'deletion', 'support'] as const;

const docs: Record<LegalLang, Record<LegalDocKey, LegalDoc>> = {
  pl: { privacy: plPrivacy, terms: plTerms, deletion: plDeletion, support: plSupport },
  en: { privacy: enPrivacy, terms: enTerms, deletion: enDeletion, support: enSupport },
};

/** Legal texts exist in pl and en only; every other locale gets the English version flagged as a fallback. */
export function getLegalDoc(locale: Locale, key: LegalDocKey): { doc: LegalDoc; lang: LegalLang; fallback: boolean } {
  const lang: LegalLang = locale === 'pl' ? 'pl' : 'en';
  return { doc: docs[lang][key], lang, fallback: locale !== 'pl' && locale !== 'en' };
}
