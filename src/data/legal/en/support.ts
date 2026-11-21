import type { LegalDoc } from '../types';
import { OPERATOR, mailto, supportMailto } from '../operator';

const address = `${OPERATOR.street}, ${OPERATOR.postalCode} ${OPERATOR.city}, ${OPERATOR.countryEn}`;

export default {
  title: 'ARTLY Support',
  description: `Get help with the ARTLY app: your account, wall-photo visualisation, orders, payments, delivery, returns and artist payouts. ARTLY is provided by ${OPERATOR.name}.`,
  intro: [
    {
      type: 'p',
      text: `This page helps you get support for the <strong>ARTLY</strong> mobile app, where you can discover artworks, see them on photos of your own walls and buy them directly from artists. ARTLY is developed and provided by <strong>${OPERATOR.name}</strong>, ${address} (Tax ID / NIP ${OPERATOR.nip}).`,
    },
  ],
  sections: [
    {
      id: 'contact',
      title: 'Contact support',
      blocks: [
        {
          type: 'p',
          text: `If you have a question or a problem with the app, email us at ${supportMailto()}. We are happy to help with anything from signing in to tracking an order.`,
        },
        {
          type: 'note',
          text: '<strong>Response time:</strong> we reply <strong>within 2 business days</strong> (Monday to Friday, excluding Polish public holidays). We answer in Polish and English.',
        },
      ],
    },
    {
      id: 'what-to-include',
      title: 'What to include',
      blocks: [
        { type: 'p', text: 'To help us solve your problem quickly, please include as much of the following as you can:' },
        {
          type: 'ul',
          items: [
            'your device model and operating system version (for example iPhone 15, iOS 18.1);',
            'the ARTLY app version (you can find it in the app settings or in the App Store);',
            'the email address linked to your ARTLY account;',
            'the order number, if your question is about an order;',
            'screenshots or a screen recording showing the problem;',
            'the steps that lead to the problem, so we can reproduce it.',
          ],
        },
      ],
    },
    {
      id: 'account',
      title: 'Account and sign-in',
      blocks: [
        {
          type: 'p',
          text: 'If you cannot sign in, first check that you are using the same sign-in method and email address you used when you created your account, and that your device is connected to the internet. Updating the app to the latest version often helps too.',
        },
        {
          type: 'p',
          text: `If you still cannot sign in, or you want to change the email address linked to your account, write to ${supportMailto('Account')}. Please write from the email address linked to your account, so we can confirm that the request comes from the account owner.`,
        },
      ],
    },
    {
      id: 'visualisation',
      title: 'Wall-photo visualisation',
      blocks: [
        {
          type: 'p',
          text: 'ARTLY lets you take or choose a photo of your wall or room and see how an artwork would look there before you buy it. For the best results:',
        },
        {
          type: 'ul',
          items: [
            'take the photo in good, even light, ideally daylight;',
            'hold your phone straight, facing the wall head-on, rather than at an angle;',
            'include the whole wall area where you want to hang the artwork.',
          ],
        },
        {
          type: 'p',
          text: 'Visualisations are illustrative: colours and scale may look slightly different from the real artwork, depending on the photo, lighting and your screen.',
        },
        {
          type: 'p',
          text: 'Your wall and room photos are used only for visualisation. You can delete them in the app at any time. Read more in the <a href="/en/privacy/#photos">Privacy Policy</a>.',
        },
      ],
    },
    {
      id: 'orders',
      title: 'Orders, payments and delivery',
      blocks: [
        {
          type: 'p',
          text: 'When you buy an artwork on ARTLY, <strong>the seller is the artist</strong>, unless the offer clearly states otherwise. The artist prepares and ships your order. You can check the status of your orders in the app.',
        },
        {
          type: 'p',
          text: 'Payments are processed securely by Stripe. Your card details are entered directly with Stripe, and we do not store your full card data.',
        },
        {
          type: 'p',
          text: `Delivery methods, costs and lead times are shown in the offer and at checkout. For custom works, the lead time is agreed between you and the artist. If your order is late or you have a question about it, contact the artist in the app or write to ${supportMailto('Order')} with your order number.`,
        },
        {
          type: 'p',
          text: 'Full details are in the Terms of Service: <a href="/en/terms/#orders">Orders</a>, <a href="/en/terms/#payments">Payments</a> and <a href="/en/terms/#delivery">Delivery</a>.',
        },
      ],
    },
    {
      id: 'returns',
      title: 'Returns, withdrawal and complaints',
      blocks: [
        {
          type: 'p',
          text: 'If you are a consumer buying from an artist who sells as a business, you can withdraw from the purchase <strong>within 14 days</strong> of receiving the artwork, without giving a reason.',
        },
        {
          type: 'note',
          text: '<strong>Custom works:</strong> artworks made to your specification or clearly personalised for you cannot be returned under the 14-day right of withdrawal. Your rights if the artwork does not match the contract still apply.',
        },
        {
          type: 'p',
          text: `If an artwork arrives damaged or is not as described, contact the artist first through the app. If you cannot resolve it with the artist, write to ${supportMailto('Complaint')} and we will help.`,
        },
        {
          type: 'p',
          text: 'Full details are in the Terms of Service: <a href="/en/terms/#withdrawal">Right of withdrawal</a> and <a href="/en/terms/#complaints">Complaints</a>.',
        },
      ],
    },
    {
      id: 'artists',
      title: 'For artists',
      blocks: [
        {
          type: 'p',
          text: 'You can list your artworks for sale directly in the ARTLY app, with photos, a description, dimensions, technique, price and lead time.',
        },
        {
          type: 'p',
          text: 'To receive payouts, you need to set up a Stripe Connect account in the app and complete the identity verification required by Stripe. Payout timing depends on Stripe and on the status of the order. The commission for each sale is shown in the app.',
        },
        {
          type: 'p',
          text: `For help with listing artworks, verification or payouts, write to ${supportMailto('Artist')}. Full details are in the Terms of Service: <a href="/en/terms/#artists">Artists</a> and <a href="/en/terms/#payouts">Payouts and commission</a>.`,
        },
      ],
    },
    {
      id: 'privacy',
      title: 'Privacy',
      blocks: [
        {
          type: 'p',
          text: `Our <a href="/en/privacy/">Privacy Policy</a> explains what data we collect and how we use it. For data requests, such as access to or correction of your personal data, email ${mailto()}.`,
        },
      ],
    },
    {
      id: 'deletion',
      title: 'Account deletion',
      blocks: [
        {
          type: 'p',
          text: 'You can delete your account at any time directly in the app: go to <strong>Profile → Settings → Delete account</strong> and confirm.',
        },
        {
          type: 'p',
          text: 'To learn what data we delete and how to request deletion by email, see <a href="/en/deletion/">Deleting your ARTLY account and data</a>.',
        },
      ],
    },
    {
      id: 'developer',
      title: 'About the developer',
      blocks: [
        {
          type: 'p',
          text: `${OPERATOR.name}<br>${OPERATOR.street}<br>${OPERATOR.postalCode} ${OPERATOR.city}, ${OPERATOR.countryEn}<br>NIP ${OPERATOR.nip}<br><a href="${OPERATOR.site}">${OPERATOR.site}</a>`,
        },
      ],
    },
  ],
} satisfies LegalDoc;
