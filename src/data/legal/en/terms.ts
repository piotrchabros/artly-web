import type { LegalDoc } from '../types';
import { OPERATOR, mailto } from '../operator';

const address = `${OPERATOR.street}, ${OPERATOR.postalCode} ${OPERATOR.city}, ${OPERATOR.countryEn}`;

export default {
  title: 'Terms of Service',
  description:
    'The rules for using ARTLY: accounts, buying and selling artworks, payments through Stripe, withdrawal, complaints and the rights of both buyers and artists.',
  lastUpdated: OPERATOR.lastUpdated,
  intro: [
    {
      type: 'p',
      text: `These Terms of Service (the “Terms”) set out the rules for using the ARTLY platform, available at <a href="${OPERATOR.site}">${OPERATOR.site}</a> and in the ARTLY mobile app. Please read them before creating an account or placing an order. By using ARTLY you accept these Terms.`,
    },
    {
      type: 'note',
      text: '<strong>In short:</strong> ARTLY connects buyers with artists. Unless stated otherwise, the artist is the seller of an artwork, and the sales contract is concluded between the buyer and the artist. Payments and payouts are handled by Stripe. If you are a consumer, your statutory rights under EU and Polish law are always preserved.',
    },
  ],
  sections: [
    {
      id: 'definitions',
      title: 'Definitions',
      blocks: [
        {
          type: 'ul',
          items: [
            `<strong>Operator</strong> – ${OPERATOR.name}, ${address}, NIP (tax ID) ${OPERATOR.nip}, the provider of the Platform.`,
            '<strong>Platform</strong> or <strong>ARTLY</strong> – the website and the mobile app through which Users can browse, visualise, buy and sell artworks.',
            '<strong>User</strong> – any person using the Platform, with or without an account.',
            '<strong>Buyer</strong> – a User who buys or intends to buy an Artwork through the Platform.',
            '<strong>Artist</strong> – a User who offers Artworks for sale through the Platform.',
            '<strong>Artwork</strong> – a work offered on the Platform, either ready-made or made to order.',
            '<strong>Custom Work</strong> – an Artwork made to the Buyer’s specification or clearly personalised for the Buyer.',
            '<strong>Consumer</strong> – a natural person who concludes a contract not directly related to their business or professional activity.',
            '<strong>Order</strong> – a Buyer’s declaration of intent to buy an Artwork, made through the Platform.',
            '<strong>Stripe</strong> – the payment service provider used by the Platform for payments (Stripe) and Artist payouts (Stripe Connect).',
          ],
        },
      ],
    },
    {
      id: 'operator',
      title: 'Operator and the role of ARTLY',
      blocks: [
        {
          type: 'p',
          text: `The Platform is operated by <strong>${OPERATOR.name}</strong>, ${address}, NIP ${OPERATOR.nip}. You can contact the Operator at ${mailto()}.`,
        },
        {
          type: 'p',
          text: 'ARTLY is an intermediary platform. It enables Artists to present and sell their Artworks and enables Buyers to find, visualise and buy them. <strong>Unless an offer clearly states otherwise, the seller of an Artwork is the Artist</strong>, and the sales contract is concluded directly between the Buyer and the Artist. The Operator is not a party to that contract.',
        },
        {
          type: 'p',
          text: 'The Operator provides electronic services to Users (the account, browsing, visualising Artworks on photos of your walls, placing Orders and communication) in accordance with the Polish Act of 18 July 2002 on the provision of electronic services (<em>ustawa o świadczeniu usług drogą elektroniczną</em>). These Terms are also the terms and conditions referred to in that Act.',
        },
        {
          type: 'p',
          text: 'Before you place an Order, the Platform shows you who the seller is. Where an Artist sells as a business, the Artist is responsible for providing any information and documents required by law.',
        },
      ],
    },
    {
      id: 'requirements',
      title: 'Technical requirements and prohibited content',
      blocks: [
        { type: 'p', text: 'To use the Platform you need:' },
        {
          type: 'ul',
          items: [
            'a device with internet access;',
            'a current version of a web browser, or a supported version of the ARTLY mobile app;',
            'an active email address (to create an account);',
            'a camera or photo library access, if you want to visualise Artworks on photos of your walls or rooms.',
          ],
        },
        { type: 'p', text: 'When using the Platform you must not post or send content that:' },
        {
          type: 'ul',
          items: [
            'infringes the copyright, trademarks, image rights or other rights of third parties;',
            'is unlawful, offensive, discriminatory, violent or pornographic;',
            'is misleading, including false information about the authorship, origin or condition of an Artwork;',
            'contains malware or is intended to disrupt the operation of the Platform;',
            'is unsolicited commercial information (spam).',
          ],
        },
        {
          type: 'p',
          text: `The Operator may remove such content and, in serious cases, block the account involved. You can report unlawful content at ${mailto('Content report')}.`,
        },
      ],
    },
    {
      id: 'account',
      title: 'Account',
      blocks: [
        {
          type: 'p',
          text: 'Some features, such as placing Orders, saving favourites or selling Artworks, require an account. Creating an account is voluntary. The contract for running an account is concluded when the account is created, for an indefinite period.',
        },
        {
          type: 'p',
          text: 'You must be at least 16 years old to create an account. Buying or selling Artworks requires full legal capacity or the consent of a parent or guardian.',
        },
        {
          type: 'ul',
          items: [
            'Provide true and up-to-date information and keep it current.',
            'Keep your sign-in credentials confidential. You are responsible for activity on your account.',
            'Each person may have only one account, and accounts may not be transferred to others.',
            `Tell us at ${mailto('Account security')} if you suspect unauthorised access to your account.`,
          ],
        },
      ],
    },
    {
      id: 'buyers',
      title: 'Buyers',
      blocks: [
        {
          type: 'p',
          text: 'As a Buyer you can browse Artworks, visualise them on photos of your walls or rooms, contact Artists and place Orders.',
        },
        {
          type: 'p',
          text: 'Visualisations are illustrative. The colours, scale and appearance of an Artwork in a visualisation may differ from the real Artwork, depending on the photo, lighting and your screen. The binding description of an Artwork is the one given in the offer.',
        },
        {
          type: 'p',
          text: 'Before placing an Order, check the Artwork description, price, delivery cost and lead time, and the seller’s details shown in the app.',
        },
      ],
    },
    {
      id: 'artists',
      title: 'Artists',
      blocks: [
        {
          type: 'p',
          text: 'As an Artist you can list Artworks for sale, accept Orders for ready-made Artworks and Custom Works, and receive payouts. Before you can receive payouts, you must complete onboarding with Stripe Connect.',
        },
        { type: 'p', text: 'When listing an Artwork, you confirm that:' },
        {
          type: 'ul',
          items: [
            'you are the author of the Artwork, or you are otherwise entitled to sell it;',
            'the Artwork and its photos do not infringe the rights of third parties;',
            'the description, dimensions, technique, condition, price and lead time are true and complete;',
            'you will fulfil Orders accepted through the Platform on the terms stated in the offer.',
          ],
        },
        {
          type: 'p',
          text: 'As the seller, the Artist is responsible to the Buyer for performing the sales contract, including delivery, statutory withdrawal rights and liability for non-conformity of the Artwork with the contract. An Artist who sells as a business is also responsible for complying with consumer law and for issuing any required tax documents.',
        },
        {
          type: 'p',
          text: 'The Operator may refuse to publish, or may remove, an offer that breaches these Terms or the law.',
        },
      ],
    },
    {
      id: 'orders',
      title: 'Orders',
      blocks: [
        {
          type: 'p',
          text: 'The Platform supports two kinds of Orders:',
        },
        {
          type: 'ul',
          items: [
            '<strong>Ready-made Artworks</strong> – an existing Artwork shown in the offer. The sales contract is concluded when the Order is placed and paid, and confirmed in the app.',
            '<strong>Custom Works</strong> – an Artwork made to the Buyer’s specification (for example size, colours or subject). The Buyer and the Artist agree on the details, price and lead time through the Platform. The contract is concluded when the Buyer accepts the agreed terms and pays.',
          ],
        },
        {
          type: 'p',
          text: 'Prices are shown in the app and include the taxes due, if any. Delivery costs are shown separately before the Order is placed. After placing an Order you receive a confirmation by email or in the app.',
        },
        {
          type: 'note',
          text: '<strong>Note:</strong> Custom Works are made to the Buyer’s specification, so the statutory 14-day right of withdrawal does not apply to them. See the <em>Right of withdrawal</em> section.',
        },
      ],
    },
    {
      id: 'payments',
      title: 'Payments',
      blocks: [
        {
          type: 'p',
          text: 'Payments for Orders are processed by Stripe. The available payment methods are shown at checkout. Card and other payment details are entered directly with Stripe and are not stored by the Operator.',
        },
        {
          type: 'p',
          text: 'Stripe’s own terms apply to payment processing. An Order is accepted for fulfilment once the payment has been confirmed.',
        },
        {
          type: 'p',
          text: 'Refunds (for example after a withdrawal or an accepted complaint) are made through Stripe using the same payment method, unless the Buyer expressly agrees to another method that does not involve any costs for them.',
        },
      ],
    },
    {
      id: 'payouts',
      title: 'Payouts and commission',
      blocks: [
        {
          type: 'p',
          text: 'Artists receive payouts through Stripe Connect. To receive payouts, an Artist must create or connect a Stripe account and complete the identity verification (KYC) required by Stripe. Stripe’s terms, including the Stripe Connected Account Agreement, apply.',
        },
        {
          type: 'p',
          text: 'For each sale made through the Platform, the Operator charges the Artist the <strong>commission shown in the app</strong>. The commission is deducted from the amount paid by the Buyer, and the rest is paid out to the Artist through Stripe Connect.',
        },
        {
          type: 'p',
          text: 'Payout timing depends on Stripe and on the status of the Order. A payout may be withheld or reversed if the Order is withdrawn, a complaint is accepted, a chargeback occurs or a breach of these Terms is suspected.',
        },
      ],
    },
    {
      id: 'delivery',
      title: 'Delivery',
      blocks: [
        {
          type: 'p',
          text: 'Artworks are shipped by the Artist. The available delivery methods, delivery costs and lead times are shown in the offer and at checkout. For Custom Works, the lead time is agreed between the Buyer and the Artist.',
        },
        {
          type: 'p',
          text: 'The Artist must pack the Artwork in a way that protects it during transport. For Consumers, the risk of loss of or damage to the Artwork passes to the Buyer when it is handed over to the Buyer.',
        },
        {
          type: 'p',
          text: 'We recommend checking the parcel on delivery and, if it is damaged, recording this with the courier. This does not limit your statutory rights.',
        },
      ],
    },
    {
      id: 'withdrawal',
      title: 'Right of withdrawal',
      blocks: [
        {
          type: 'p',
          text: 'If you are a Consumer, you may withdraw from a sales contract concluded at a distance <strong>within 14 days</strong>, without giving any reason. The period starts on the day you (or a third party you named, other than the carrier) take possession of the Artwork.',
        },
        {
          type: 'p',
          text: `To withdraw, send a clear statement to the seller through the Platform or to the Operator at ${mailto('Withdrawal from contract')}. It is enough to send the statement before the period ends.`,
        },
        {
          type: 'ul',
          items: [
            'Return the Artwork within 14 days of withdrawing. The direct cost of returning it is borne by you, unless the seller agreed to bear it.',
            'You will receive a refund of the payment, including the cost of standard delivery, within 14 days of withdrawing. The refund may be held until the Artwork has been received back or you have provided proof of sending it, whichever comes first.',
            'You are liable for any reduction in the value of the Artwork resulting from handling it beyond what is necessary to establish its nature, characteristics and functioning.',
          ],
        },
        {
          type: 'note',
          text: '<strong>Exception for Custom Works:</strong> under art. 38 of the Polish Consumer Rights Act of 30 May 2014 (<em>ustawa o prawach konsumenta</em>), the right of withdrawal does not apply to items made to the consumer’s specification or clearly personalised. Custom Works ordered through the Platform therefore cannot be returned under the right of withdrawal. Your rights in case of non-conformity with the contract still apply.',
        },
        {
          type: 'p',
          text: 'The rules in this section also apply to a natural person concluding a contract directly related to their business, where the contract shows that it is not of a professional nature for that person, as provided by Polish law.',
        },
      ],
    },
    {
      id: 'complaints',
      title: 'Complaints',
      blocks: [
        {
          type: 'p',
          text: 'The seller is liable to Consumers for the conformity of the Artwork with the contract under the Polish Consumer Rights Act. If an Artwork is not in conformity with the contract, you may request its repair or replacement and, in cases provided by law, a price reduction or withdrawal from the contract.',
        },
        {
          type: 'p',
          text: `You can submit a complaint about an Artwork or about the Platform’s services through the app or by email at ${mailto('Complaint')}. Complaints about an Artwork are forwarded to the Artist as the seller.`,
        },
        { type: 'p', text: 'To help us handle your complaint, please include:' },
        {
          type: 'ul',
          items: [
            'your name and the email address linked to your account;',
            'the Order number or a description of the service concerned;',
            'a description of the problem, with photos where relevant;',
            'what you request (for example repair, replacement, price reduction or refund).',
          ],
        },
        {
          type: 'p',
          text: 'A reply to a complaint is given <strong>within 14 days</strong> of receiving it, by email or in the app.',
        },
        {
          type: 'p',
          text: 'Consumers may also use out-of-court complaint and redress procedures, for example through the regional consumer ombudsman or the Trade Inspection (<em>Inspekcja Handlowa</em>).',
        },
      ],
    },
    {
      id: 'ip',
      title: 'Intellectual property',
      blocks: [
        {
          type: 'p',
          text: 'Artists keep all copyright in their Artworks and in the photos and descriptions they publish. By listing an Artwork, the Artist grants the Operator a free, non-exclusive licence, for as long as the offer is on the Platform, to reproduce and display those materials on the Platform and in materials promoting the Platform and the Artist’s offer.',
        },
        {
          type: 'p',
          text: 'Buying an Artwork transfers ownership of the physical item. It does not transfer the copyright, unless the Buyer and the Artist agree otherwise in writing.',
        },
        {
          type: 'p',
          text: 'Photos of walls and rooms that you upload remain yours. You grant the Operator permission to process them only to provide the visualisation feature. They are not sold or published. You can delete them in the app at any time.',
        },
        {
          type: 'p',
          text: 'The Platform itself, including its design, software, name and logo, is protected by law. You may not copy or use it beyond normal use of the Platform without the Operator’s consent.',
        },
      ],
    },
    {
      id: 'liability',
      title: 'Liability',
      blocks: [
        {
          type: 'p',
          text: 'The Operator is responsible for providing the Platform’s electronic services in accordance with these Terms. As an intermediary, the Operator is not a party to sales contracts between Buyers and Artists and is not liable for their performance, for the truth of Artists’ offers, or for the Artworks themselves, except where the law provides otherwise.',
        },
        {
          type: 'p',
          text: 'The Operator does its best to keep the Platform available, but there may be breaks for maintenance, updates or failures beyond the Operator’s control.',
        },
        {
          type: 'p',
          text: 'Nothing in these Terms excludes or limits the Operator’s liability where it cannot be excluded or limited by law, including liability towards Consumers.',
        },
      ],
    },
    {
      id: 'termination',
      title: 'Termination and account deletion',
      blocks: [
        {
          type: 'p',
          text: 'You may terminate the contract for running an account at any time, free of charge, by deleting your account. See <a href="/en/deletion/">Account deletion</a> for how to do it in the app or by email.',
        },
        {
          type: 'p',
          text: 'Orders placed before the account was deleted are still performed and settled under these Terms. Some data must be kept after deletion to comply with the law, as described on the account deletion page.',
        },
        {
          type: 'p',
          text: 'The Operator may terminate the contract for running an account with 14 days’ notice for important reasons, in particular a breach of these Terms. In case of a serious or repeated breach, the Operator may block the account immediately. You will be informed of the reason, and you can appeal by email.',
        },
      ],
    },
    {
      id: 'law',
      title: 'Governing law and disputes',
      blocks: [
        {
          type: 'p',
          text: 'These Terms and contracts concluded through the Platform are governed by Polish law. If you are a Consumer habitually resident in another EU country, this choice of law does not deprive you of the protection given to you by the mandatory provisions of the law of that country.',
        },
        {
          type: 'p',
          text: 'Disputes with Consumers are resolved by the courts having jurisdiction under general rules. Disputes with Users who are not Consumers are resolved by the court having jurisdiction over the Operator’s registered address.',
        },
      ],
    },
    {
      id: 'changes',
      title: 'Changes to these Terms',
      blocks: [
        {
          type: 'p',
          text: 'The Operator may change these Terms for important reasons, such as changes in the law, changes to the Platform’s features or changes in payment providers. Users with an account will be informed by email or in the app at least 14 days before the changes take effect. If you do not accept the changes, you may delete your account before they take effect.',
        },
        {
          type: 'p',
          text: 'Orders placed before a change are governed by the Terms in force on the date of the Order.',
        },
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      blocks: [
        {
          type: 'p',
          text: `${OPERATOR.name}<br>${OPERATOR.street}<br>${OPERATOR.postalCode} ${OPERATOR.city}, ${OPERATOR.countryEn}<br>NIP ${OPERATOR.nip}<br>Email: ${mailto()}`,
        },
      ],
    },
  ],
} satisfies LegalDoc;
