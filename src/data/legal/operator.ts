/** Single source of operator facts for the legal documents. Never retype these in content files. */
export const OPERATOR = {
  name: 'Bespokesoft Piotr Chabros',
  street: 'ul. Pastewna 27b',
  postalCode: '02-954',
  city: 'Warszawa',
  countryPl: 'Polska',
  countryEn: 'Poland',
  nip: '7010510120',
  email: 'privacy@artly.com.pl',
  site: 'https://artly.com.pl',
  lastUpdated: '2026-11-21',
} as const;

/** Mail link as inline HTML, optionally with a prefilled subject. */
export const mailto = (subject?: string) =>
  `<a href="mailto:${OPERATOR.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}">${OPERATOR.email}</a>`;
