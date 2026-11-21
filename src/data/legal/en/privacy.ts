import type { LegalDoc } from '../types';
import { OPERATOR, mailto } from '../operator';

const address = `${OPERATOR.street}, ${OPERATOR.postalCode} ${OPERATOR.city}, ${OPERATOR.countryEn}`;

export default {
  title: 'Privacy Policy',
  description:
    'How ARTLY collects, uses and protects the personal data of buyers and artists, and how you can exercise your rights under the GDPR.',
  lastUpdated: OPERATOR.lastUpdated,
  intro: [
    {
      type: 'p',
      text: `This Privacy Policy explains how personal data is processed in connection with ARTLY, an app that matches works of art to your interiors and connects buyers with artists, and the website <a href="${OPERATOR.site}">${OPERATOR.site}</a> (together, the <strong>Service</strong>). It is provided in accordance with Regulation (EU) 2016/679 (the <strong>GDPR</strong>) and applicable Polish law.`,
    },
  ],
  sections: [
    {
      id: 'controller',
      title: '1. Data controller',
      blocks: [
        {
          type: 'p',
          text: `The controller of your personal data is <strong>${OPERATOR.name}</strong>, ${address}, NIP (tax ID) ${OPERATOR.nip} (<strong>we</strong>, <strong>us</strong>).`,
        },
        {
          type: 'p',
          text: `For any matter concerning your personal data, including exercising your rights, contact us at ${mailto('Privacy')}.`,
        },
      ],
    },
    {
      id: 'data',
      title: '2. Data we process',
      blocks: [
        {
          type: 'p',
          text: 'Depending on how you use ARTLY, as a buyer, an artist or both, we process the following categories of personal data:',
        },
        {
          type: 'ul',
          items: [
            '<strong>Account data</strong>: your email address, your name and the information needed to sign you in (for example, the identifier of the sign-in method you use).',
            '<strong>Wall and room photos</strong>: photos of your walls or rooms that you upload so that ARTLY can visualise how a work of art would look in your interior.',
            '<strong>Order and payment data</strong>: details of the works you order, order history, delivery details you provide, transaction amounts and payment status. Card and other payment instrument details are entered directly with Stripe and are not stored by us.',
            '<strong>Artist payout data</strong>: if you sell works on ARTLY, the information required to pay you out and to verify your identity, collected and processed by Stripe through Stripe Connect.',
            '<strong>Analytics and device data</strong>: information about how you use the app and website, such as screens viewed, interactions, device type, operating system, app version and approximate technical identifiers.',
          ],
        },
        {
          type: 'p',
          text: 'Providing account data is necessary to create an account and use the Service. Other data is provided voluntarily, but without it some features (such as visualisation, purchases or payouts) will not be available.',
        },
      ],
    },
    {
      id: 'purposes',
      title: '3. Purposes and legal bases',
      blocks: [
        {
          type: 'p',
          text: 'We process personal data only for specified purposes and on the legal bases set out in Article 6(1) GDPR:',
        },
        {
          type: 'table',
          head: ['Purpose', 'Data', 'Legal basis'],
          rows: [
            [
              'Creating and maintaining your account, signing you in',
              'Account data',
              'Art. 6(1)(b) GDPR: performance of a contract',
            ],
            [
              'Visualising works of art in your interior',
              'Wall and room photos',
              'Art. 6(1)(b) GDPR: performance of a contract',
            ],
            [
              'Processing orders, payments and deliveries between buyers and artists',
              'Account data, order and payment data',
              'Art. 6(1)(b) GDPR: performance of a contract',
            ],
            [
              'Paying out artists',
              'Account data, artist payout data',
              'Art. 6(1)(b) GDPR: performance of a contract',
            ],
            [
              'Keeping accounting and tax records',
              'Order and payment data',
              'Art. 6(1)(c) GDPR: compliance with a legal obligation',
            ],
            [
              'Ensuring the security of the Service and preventing fraud and abuse',
              'Account data, analytics and device data',
              'Art. 6(1)(f) GDPR: our legitimate interest',
            ],
            [
              'Product analytics to understand and improve the Service',
              'Analytics and device data',
              'Art. 6(1)(f) GDPR: our legitimate interest, or Art. 6(1)(a) GDPR: your consent where required by law',
            ],
            [
              'Establishing, exercising or defending legal claims',
              'Data relevant to the claim',
              'Art. 6(1)(f) GDPR: our legitimate interest',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Where processing is based on your consent, you may withdraw it at any time. Withdrawal does not affect the lawfulness of processing carried out before it.',
        },
      ],
    },
    {
      id: 'photos',
      title: '4. Wall and room photos',
      blocks: [
        {
          type: 'p',
          text: 'Photos of your walls and rooms are used <strong>only</strong> to show you how works of art would look in your interior. We do not sell your photos, we do not share them with artists or other users, and we do not use them for advertising.',
        },
        {
          type: 'p',
          text: `You can delete your photos at any time in the app. All your photos are also deleted when you delete your account. You can also ask us to delete them by writing to ${mailto('Photo deletion')}.`,
        },
        {
          type: 'note',
          text: 'Please avoid uploading photos that show people, documents or other sensitive information. If such content appears in a photo, it is processed only as part of the image used for visualisation.',
        },
      ],
    },
    {
      id: 'payments',
      title: '5. Payments and artist payouts',
      blocks: [
        {
          type: 'p',
          text: 'Payments in ARTLY are handled by <strong>Stripe</strong>. When you pay for an order, your payment details are entered directly with Stripe, which processes them in accordance with its own security standards. We receive only the information needed to confirm and account for the transaction, such as the amount, status and a limited description of the payment method.',
        },
        {
          type: 'p',
          text: 'Payouts to artists are made through <strong>Stripe Connect</strong>. To receive payouts, artists provide identity, contact and bank account information to Stripe. Identity verification (KYC) and related anti-money-laundering checks are carried out by Stripe, which acts as an independent controller of that data. You can read how Stripe processes personal data at <a href="https://stripe.com/privacy">https://stripe.com/privacy</a>.',
        },
      ],
    },
    {
      id: 'analytics',
      title: '6. Analytics, cookies and similar technologies',
      blocks: [
        {
          type: 'p',
          text: 'We use <strong>PostHog</strong> for product analytics. It helps us understand how the app and website are used, for example which features are popular and where users encounter problems, so that we can improve ARTLY.',
        },
        {
          type: 'p',
          text: 'For this purpose, the app and website may use cookies, local storage and similar technologies (such as device or session identifiers). Where the law requires your consent to store or access information on your device, we rely on that consent.',
        },
        {
          type: 'p',
          text: `You can opt out of analytics at any time: you can block or delete cookies in your browser settings, limit tracking in your device settings, or object to analytics processing by writing to ${mailto('Analytics opt-out')}. Opting out does not affect your ability to use the Service.`,
        },
      ],
    },
    {
      id: 'processors',
      title: '7. Recipients and processors',
      blocks: [
        {
          type: 'p',
          text: 'We share personal data only to the extent necessary to provide the Service. Our service providers process data on our behalf under data processing agreements, or, where stated, as independent controllers:',
        },
        {
          type: 'table',
          head: ['Recipient', 'Role', 'Purpose'],
          rows: [
            [
              'Stripe',
              'Processor for payments; independent controller for identity verification and its own legal obligations',
              'Payment processing, artist payouts (Stripe Connect), identity verification (KYC)',
            ],
            ['PostHog', 'Processor', 'Product analytics'],
            ['Cloudflare', 'Processor', 'Website hosting, content delivery and security'],
            ['App infrastructure providers', 'Processors', 'Hosting, storage and operation of the app and its data'],
          ],
        },
        {
          type: 'p',
          text: 'When you buy a work, we share with the artist the information needed to fulfil your order, such as your name and delivery details. We may also disclose data to public authorities where required by law.',
        },
      ],
    },
    {
      id: 'transfers',
      title: '8. Transfers outside the EEA',
      blocks: [
        {
          type: 'p',
          text: 'Some of our service providers, or their sub-processors, may process personal data outside the European Economic Area, in particular in the United States. In such cases we ensure an adequate level of protection, in particular by relying on:',
        },
        {
          type: 'ul',
          items: [
            'an adequacy decision of the European Commission, including the EU-U.S. Data Privacy Framework for recipients certified under it; or',
            'standard contractual clauses approved by the European Commission, together with additional safeguards where necessary.',
          ],
        },
        {
          type: 'p',
          text: `You can request information about the safeguards applied, or a copy of them, by writing to ${mailto('Data transfers')}.`,
        },
      ],
    },
    {
      id: 'retention',
      title: '9. Retention',
      blocks: [
        {
          type: 'p',
          text: 'We keep personal data only for as long as necessary for the purposes for which it was collected:',
        },
        {
          type: 'ul',
          items: [
            '<strong>Account data</strong>: until you delete your account.',
            '<strong>Wall and room photos</strong>: until you delete them, or until you delete your account, whichever comes first.',
            '<strong>Transaction and accounting records</strong>: for 5 years from the end of the calendar year in which the tax payment deadline expired, as required by Polish tax law.',
            '<strong>Analytics data</strong>: for as long as needed for analytics purposes, or until you successfully object.',
            '<strong>Data needed for legal claims</strong>: until the applicable limitation periods expire.',
          ],
        },
        {
          type: 'p',
          text: 'Data held by Stripe as an independent controller is retained by Stripe in accordance with its own policies.',
        },
      ],
    },
    {
      id: 'rights',
      title: '10. Your rights',
      blocks: [
        {
          type: 'p',
          text: 'Under the GDPR you have the right to:',
        },
        {
          type: 'ul',
          items: [
            '<strong>access</strong> your personal data and receive a copy of it (Art. 15 GDPR);',
            '<strong>rectification</strong> of inaccurate or incomplete data (Art. 16 GDPR);',
            '<strong>erasure</strong> of your data (the "right to be forgotten", Art. 17 GDPR);',
            '<strong>restriction</strong> of processing (Art. 18 GDPR);',
            '<strong>data portability</strong>, i.e. to receive data you provided to us in a structured, commonly used, machine-readable format, or to have it sent to another controller (Art. 20 GDPR);',
            '<strong>object</strong> to processing based on our legitimate interest, including analytics (Art. 21 GDPR);',
            '<strong>withdraw consent</strong> at any time, where processing is based on consent, without affecting the lawfulness of processing before withdrawal.',
          ],
        },
        {
          type: 'p',
          text: `To exercise your rights, write to ${mailto('GDPR request')}, preferably from the email address linked to your account. We will respond without undue delay and in any case within one month, which may be extended in the cases provided for by the GDPR. You can delete your account yourself in the app under <strong>Profile → Settings → Delete account</strong>.`,
        },
      ],
    },
    {
      id: 'complaint',
      title: '11. Right to lodge a complaint',
      blocks: [
        {
          type: 'p',
          text: 'If you believe that we process your personal data in breach of the GDPR, you have the right to lodge a complaint with the supervisory authority. In Poland, this is the President of the Personal Data Protection Office (Prezes Urzędu Ochrony Danych Osobowych, <strong>PUODO</strong>):',
        },
        {
          type: 'p',
          text: 'Urząd Ochrony Danych Osobowych<br>ul. Stawki 2<br>00-193 Warszawa, Poland<br><a href="https://uodo.gov.pl">https://uodo.gov.pl</a>',
        },
        {
          type: 'p',
          text: 'You may also lodge a complaint with the supervisory authority in the EU member state of your habitual residence or place of work.',
        },
      ],
    },
    {
      id: 'children',
      title: '12. Children',
      blocks: [
        {
          type: 'p',
          text: `ARTLY is not directed at children. You must be at least 16 years old to create an account. If you are under the age of majority, you may make purchases or sell works only with the consent of your parent or legal guardian. If you believe that a child has provided us with personal data without the required consent, please contact us at ${mailto('Child data')} and we will delete it.`,
        },
      ],
    },
    {
      id: 'changes',
      title: '13. Changes to this policy',
      blocks: [
        {
          type: 'p',
          text: 'We may update this Privacy Policy, for example when we change the Service or when the law changes. The current version is always available on this page, with the date of the last update shown at the top. We will inform you about material changes in the app or by email before they take effect.',
        },
      ],
    },
    {
      id: 'contact',
      title: '14. Contact',
      blocks: [
        {
          type: 'p',
          text: `If you have any questions about this Privacy Policy or the processing of your personal data, contact us at ${mailto('Privacy')} or by post at: ${OPERATOR.name}, ${address}.`,
        },
      ],
    },
  ],
} satisfies LegalDoc;
