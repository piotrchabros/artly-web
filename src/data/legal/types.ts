export type LegalDocKey = 'privacy' | 'terms' | 'deletion';
export type LegalLang = 'pl' | 'en';

/** Inline strings are trusted authored HTML: only <a href>, <strong>, <em>, <br> allowed. Rendered with set:html. */
export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'ul' | 'ol'; items: string[] }
  | { type: 'steps'; items: string[]; badge?: string }
  | { type: 'note'; text: string }
  | { type: 'table'; head: string[]; rows: string[][] };

export interface LegalSubsection { title: string; blocks: LegalBlock[] }
export interface LegalSection { id: string; title: string; blocks: LegalBlock[]; subsections?: LegalSubsection[] }
export interface LegalDoc { title: string; description: string; lastUpdated: string; intro?: LegalBlock[]; sections: LegalSection[] }
