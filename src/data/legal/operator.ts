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
  supportEmail: 'support@artly.com.pl',
  site: 'https://artly.com.pl',
  lastUpdated: '2026-11-21',
} as const;

/** Mail link as inline HTML, optionally with a prefilled subject. */
const mailLink = (email: string, subject?: string) =>
  `<a href="mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}">${email}</a>`;

/** Privacy contact mail link. */
export const mailto = (subject?: string) => mailLink(OPERATOR.email, subject);

/** Support contact mail link. */
export const supportMailto = (subject?: string) => mailLink(OPERATOR.supportEmail, subject);
