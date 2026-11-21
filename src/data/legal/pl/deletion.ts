import type { LegalDoc } from '../types';
import { OPERATOR, mailto } from '../operator';

export default {
  title: 'Usuwanie konta i danych w aplikacji ARTLY',
  description: `Jak usunąć konto w aplikacji ARTLY i powiązane z nim dane. Aplikację ARTLY udostępnia ${OPERATOR.name}.`,
  lastUpdated: OPERATOR.lastUpdated,
  intro: [
    {
      type: 'p',
      text: `Ta strona wyjaśnia, jak usunąć konto w aplikacji mobilnej <strong>ARTLY</strong> oraz dane z nim powiązane. Aplikację ARTLY udostępnia <strong>${OPERATOR.name}</strong>, ${OPERATOR.street}, ${OPERATOR.postalCode} ${OPERATOR.city}, ${OPERATOR.countryPl} (NIP ${OPERATOR.nip}).`,
    },
  ],
  sections: [
    {
      id: 'in-app',
      title: 'Usunięcie konta w aplikacji',
      blocks: [
        {
          type: 'p',
          text: 'Najszybciej usuniesz konto bezpośrednio w aplikacji ARTLY. Musisz być zalogowany na konto, które chcesz usunąć.',
        },
        {
          type: 'steps',
          badge: 'Zalecana ścieżka',
          items: [
            'Otwórz aplikację ARTLY i zaloguj się.',
            'Przejdź do zakładki <strong>Profil</strong>.',
            'Wybierz <strong>Ustawienia</strong>.',
            'Stuknij <strong>Usuń konto</strong>.',
            'Potwierdź usunięcie konta.',
          ],
        },
        {
          type: 'note',
          text: 'Usunięcia konta nie można cofnąć. Jeśli masz otwarte zamówienia lub oczekujące wypłaty, zakończ je przed usunięciem konta.',
        },
      ],
    },
    {
      id: 'email',
      title: 'Usunięcie konta przez e-mail',
      blocks: [
        {
          type: 'p',
          text: `Jeśli nie masz dostępu do aplikacji, wyślij wiadomość na adres ${mailto('Usunięcie konta')} z tematem <strong>„Usunięcie konta”</strong>.`,
        },
        {
          type: 'p',
          text: 'Wyślij wiadomość z adresu e-mail przypisanego do konta. Pozwoli nam to potwierdzić, że prośba pochodzi od właściciela konta. Jeśli piszesz z innego adresu, możemy poprosić o dodatkowe potwierdzenie tożsamości.',
        },
      ],
    },
    {
      id: 'deleted',
      title: 'Jakie dane usuwamy',
      blocks: [
        { type: 'p', text: 'Po usunięciu konta usuwamy:' },
        {
          type: 'ul',
          items: [
            'profil użytkownika,',
            'adres e-mail i imię oraz nazwisko,',
            'zdjęcia ścian i pomieszczeń przesłane do wizualizacji,',
            'ulubione i preferencje,',
            'oferty i prace wystawione przez artystę,',
            'identyfikatory analityczne powiązane z kontem.',
          ],
        },
      ],
    },
    {
      id: 'timeline',
      title: 'Kiedy dane zostaną usunięte',
      blocks: [
        {
          type: 'p',
          text: 'Usuwamy konto i dane w ciągu <strong>30 dni</strong> od otrzymania prośby. Po zakończeniu wyślemy potwierdzenie na adres e-mail przypisany do konta.',
        },
        {
          type: 'p',
          text: 'W tym samym terminie usuwamy dane z kopii zapasowych.',
        },
      ],
    },
    {
      id: 'retained',
      title: 'Jakie dane przechowujemy dłużej',
      blocks: [
        {
          type: 'p',
          text: 'Niektóre dane musimy przechowywać dłużej, ponieważ wymagają tego przepisy prawa:',
        },
        {
          type: 'table',
          head: ['Dane', 'Okres przechowywania', 'Powód'],
          rows: [
            [
              'Dane transakcji i dokumenty księgowe',
              '5 lat',
              'Obowiązek wynikający z polskich przepisów podatkowych i o rachunkowości',
            ],
            [
              'Dane płatności i wypłat przetwarzane przez Stripe',
              'Zgodnie z polityką Stripe',
              'Stripe przechowuje te dane jako niezależny administrator. Szczegóły: <a href="https://stripe.com/privacy">stripe.com/privacy</a>',
            ],
          ],
        },
      ],
    },
    {
      id: 'partial',
      title: 'Usunięcie części danych',
      blocks: [
        {
          type: 'p',
          text: `Nie musisz usuwać całego konta. Możesz usunąć tylko przesłane zdjęcia bezpośrednio w aplikacji albo poprosić o to e-mailem na adres ${mailto()}.`,
        },
      ],
    },
    {
      id: 'contact',
      title: 'Kontakt',
      blocks: [
        {
          type: 'p',
          text: `W sprawie usunięcia konta lub danych napisz na adres ${mailto()}.<br>${OPERATOR.name}, ${OPERATOR.street}, ${OPERATOR.postalCode} ${OPERATOR.city}, ${OPERATOR.countryPl}.`,
        },
      ],
    },
  ],
} satisfies LegalDoc;
