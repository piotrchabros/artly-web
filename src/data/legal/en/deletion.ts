import type { LegalDoc } from '../types';
import { OPERATOR, mailto } from '../operator';

export default {
  title: 'Deleting your ARTLY account and data',
  description: `How to delete your account in the ARTLY app and the data linked to it. ARTLY is provided by ${OPERATOR.name}.`,
  lastUpdated: OPERATOR.lastUpdated,
  intro: [
    {
      type: 'p',
      text: `This page explains how to delete your account in the <strong>ARTLY</strong> mobile app and the data linked to it. ARTLY is provided by <strong>${OPERATOR.name}</strong>, ${OPERATOR.street}, ${OPERATOR.postalCode} ${OPERATOR.city}, ${OPERATOR.countryEn} (Tax ID / NIP ${OPERATOR.nip}).`,
    },
  ],
  sections: [
    {
      id: 'in-app',
      title: 'Delete your account in the app',
      blocks: [
        {
          type: 'p',
          text: 'The fastest way to delete your account is directly in the ARTLY app. You must be signed in to the account you want to delete.',
        },
        {
          type: 'steps',
          badge: 'Recommended',
          items: [
            'Open the ARTLY app and sign in.',
            'Go to the <strong>Profile</strong> tab.',
            'Select <strong>Settings</strong>.',
            'Tap <strong>Delete account</strong>.',
            'Confirm the deletion.',
          ],
        },
        {
          type: 'note',
          text: 'Account deletion cannot be undone. If you have open orders or pending payouts, complete them before you delete your account.',
        },
      ],
    },
    {
      id: 'email',
      title: 'Delete your account by email',
      blocks: [
        {
          type: 'p',
          text: `If you cannot use the app, send an email to ${mailto('Usunięcie konta')} with the subject <strong>"Usunięcie konta"</strong> (Polish for "Account deletion"). The link above fills in the subject for you.`,
        },
        {
          type: 'p',
          text: 'Send the email from the address linked to your account. This lets us confirm that the request comes from the account owner. If you write from a different address, we may ask you to confirm your identity.',
        },
      ],
    },
    {
      id: 'deleted',
      title: 'What data we delete',
      blocks: [
        { type: 'p', text: 'When you delete your account, we delete:' },
        {
          type: 'ul',
          items: [
            'your user profile,',
            'your email address and name,',
            'wall and room photos you uploaded for visualisation,',
            'your favourites and preferences,',
            'listings and works published by artists,',
            'analytics identifiers linked to your account.',
          ],
        },
      ],
    },
    {
      id: 'timeline',
      title: 'When your data is deleted',
      blocks: [
        {
          type: 'p',
          text: 'We delete your account and data within <strong>30 days</strong> of receiving your request. When we finish, we send a confirmation to the email address linked to your account.',
        },
        {
          type: 'p',
          text: 'We remove the data from backups within the same period.',
        },
      ],
    },
    {
      id: 'retained',
      title: 'What data we keep longer',
      blocks: [
        {
          type: 'p',
          text: 'The law requires us to keep some data for longer:',
        },
        {
          type: 'table',
          head: ['Data', 'Retention period', 'Reason'],
          rows: [
            [
              'Transaction and accounting records',
              '5 years',
              'Required by Polish tax and accounting law',
            ],
            [
              'Payment and payout data processed by Stripe',
              'As set by Stripe',
              'Stripe keeps this data as an independent controller. Details: <a href="https://stripe.com/privacy">stripe.com/privacy</a>',
            ],
          ],
        },
      ],
    },
    {
      id: 'partial',
      title: 'Delete only some of your data',
      blocks: [
        {
          type: 'p',
          text: `You do not have to delete your whole account. You can delete only your uploaded photos directly in the app, or ask us to delete them by email at ${mailto()}.`,
        },
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      blocks: [
        {
          type: 'p',
          text: `For questions about deleting your account or data, email ${mailto()}.<br>${OPERATOR.name}, ${OPERATOR.street}, ${OPERATOR.postalCode} ${OPERATOR.city}, ${OPERATOR.countryEn}.`,
        },
      ],
    },
  ],
} satisfies LegalDoc;
