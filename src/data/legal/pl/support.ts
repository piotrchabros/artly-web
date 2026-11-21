import type { LegalDoc } from '../types';
import { OPERATOR, mailto, supportMailto } from '../operator';

const address = `${OPERATOR.street}, ${OPERATOR.postalCode} ${OPERATOR.city}, ${OPERATOR.countryPl}`;

export default {
  title: 'Pomoc i kontakt – ARTLY',
  description: `Pomoc techniczna aplikacji ARTLY: kontakt, konto, wizualizacja na ścianie, zamówienia, zwroty i wypłaty dla artystów. Aplikację ARTLY udostępnia ${OPERATOR.name}.`,
  intro: [
    {
      type: 'p',
      text: `Na tej stronie znajdziesz odpowiedzi na najczęstsze pytania dotyczące aplikacji mobilnej <strong>ARTLY</strong> i dowiesz się, jak skontaktować się z nami, gdy potrzebujesz pomocy. Aplikację ARTLY udostępnia <strong>${OPERATOR.name}</strong>, ${address} (NIP ${OPERATOR.nip}).`,
    },
  ],
  sections: [
    {
      id: 'contact',
      title: 'Kontakt z pomocą techniczną',
      blocks: [
        {
          type: 'p',
          text: `Masz problem z aplikacją, zamówieniem lub kontem? Napisz do nas na adres ${supportMailto()}. Chętnie pomożemy.`,
        },
        {
          type: 'note',
          text: 'Odpowiadamy <strong>w ciągu 2 dni roboczych</strong> (od poniedziałku do piątku, z wyłączeniem świąt ustawowo wolnych od pracy w Polsce). Możesz pisać do nas po polsku lub po angielsku.',
        },
      ],
    },
    {
      id: 'what-to-include',
      title: 'Co napisać w wiadomości',
      blocks: [
        {
          type: 'p',
          text: 'Im więcej szczegółów podasz, tym szybciej rozwiążemy problem. Jeśli to możliwe, dołącz do wiadomości:',
        },
        {
          type: 'ul',
          items: [
            'model urządzenia i wersję systemu (np. iPhone 15, iOS 18.1),',
            'wersję aplikacji ARTLY,',
            'adres e-mail przypisany do konta,',
            'numer zamówienia, jeśli sprawa dotyczy zamówienia,',
            'zrzuty ekranu lub nagranie ekranu pokazujące problem,',
            'opis kroków, które prowadzą do problemu.',
          ],
        },
      ],
    },
    {
      id: 'account',
      title: 'Konto i logowanie',
      blocks: [
        {
          type: 'p',
          text: 'Jeśli nie możesz się zalogować, upewnij się, że logujesz się tym samym adresem e-mail co przy zakładaniu konta. Sprawdź też połączenie z internetem i czy masz zainstalowaną najnowszą wersję aplikacji.',
        },
        {
          type: 'p',
          text: `Chcesz zmienić adres e-mail przypisany do konta albo problem z logowaniem nie znika? Napisz na adres ${supportMailto('Konto i logowanie')}.`,
        },
        {
          type: 'note',
          text: 'Pisz do nas z adresu e-mail przypisanego do konta. Pozwoli nam to potwierdzić, że jesteś jego właścicielem. Jeśli piszesz z innego adresu, możemy poprosić o dodatkowe potwierdzenie tożsamości.',
        },
      ],
    },
    {
      id: 'visualisation',
      title: 'Wizualizacja na ścianie',
      blocks: [
        {
          type: 'p',
          text: 'Wizualizacja pozwala zobaczyć, jak wybrane dzieło będzie wyglądać na Twojej ścianie. Wystarczy zrobić zdjęcie ściany lub pomieszczenia, a aplikacja pokaże na nim wybrane dzieło.',
        },
        { type: 'p', text: 'Aby uzyskać najlepszy efekt:' },
        {
          type: 'ul',
          items: [
            'rób zdjęcie przy dobrym, równomiernym oświetleniu, najlepiej dziennym,',
            'stań na wprost ściany i trzymaj telefon prosto, bez przechylania,',
            'zadbaj, aby ściana była dobrze widoczna i nie była zasłonięta meblami.',
          ],
        },
        {
          type: 'p',
          text: 'Pamiętaj, że wizualizacja ma charakter poglądowy. Rzeczywiste kolory i proporcje dzieła mogą się nieco różnić, np. z powodu oświetlenia lub ustawień ekranu.',
        },
        {
          type: 'p',
          text: 'Przesłane zdjęcia możesz w każdej chwili usunąć w aplikacji. Wykorzystujemy je wyłącznie do przygotowania wizualizacji. Więcej przeczytasz w sekcji <a href="/privacy/#photos">Zdjęcia Twoich wnętrz</a> polityki prywatności.',
        },
      ],
    },
    {
      id: 'orders',
      title: 'Zamówienia, płatności i dostawa',
      blocks: [
        {
          type: 'p',
          text: 'ARTLY łączy kupujących z artystami. Sprzedawcą dzieła jest artysta, który je wystawił, i to on realizuje zamówienie. Szczegóły zamówienia oraz kontakt z artystą znajdziesz w aplikacji. Zasady składania zamówień opisuje <a href="/terms/#orders">Regulamin</a>.',
        },
        {
          type: 'p',
          text: 'Płatności obsługuje <strong>Stripe</strong>. Dane karty podajesz bezpośrednio w formularzu Stripe, a my nie przechowujemy pełnych danych kart płatniczych. Więcej o płatnościach przeczytasz w <a href="/terms/#payments">Regulaminie</a>.',
        },
        {
          type: 'p',
          text: 'Dostawę organizuje artysta. Sposób, koszt i przewidywany termin dostawy widzisz w aplikacji przed złożeniem zamówienia. Jeśli przesyłka dotrze uszkodzona, w miarę możliwości sporządź z przewoźnikiem protokół szkody. Szczegóły znajdziesz w <a href="/terms/#delivery">Regulaminie</a>.',
        },
        {
          type: 'p',
          text: `Problem z płatnością lub zamówieniem? Napisz na adres ${supportMailto('Zamówienie')} i podaj numer zamówienia.`,
        },
      ],
    },
    {
      id: 'returns',
      title: 'Zwroty, odstąpienie i reklamacje',
      blocks: [
        {
          type: 'p',
          text: 'Jeśli jesteś konsumentem i kupiłeś dzieło od artysty, który jest przedsiębiorcą, możesz odstąpić od umowy w ciągu <strong>14 dni</strong> od otrzymania dzieła, bez podawania przyczyny. Szczegóły opisuje <a href="/terms/#withdrawal">Regulamin</a>.',
        },
        {
          type: 'note',
          text: '<strong>Wyjątek – dzieła na zamówienie.</strong> Prawo odstąpienia od umowy nie przysługuje w przypadku dzieł wykonanych według Twojej specyfikacji.',
        },
        {
          type: 'p',
          text: `Jeśli dzieło jest niezgodne z umową, złóż reklamację artyście za pośrednictwem aplikacji. Gdy nie możesz skontaktować się z artystą, napisz na adres ${supportMailto('Reklamacja zamówienia')}, a przekażemy reklamację artyście. Więcej informacji znajdziesz w części <a href="/terms/#complaints">Reklamacje</a> Regulaminu.`,
        },
      ],
    },
    {
      id: 'artists',
      title: 'Dla artystów',
      blocks: [
        {
          type: 'p',
          text: 'W ARTLY możesz wystawiać swoje dzieła, podając m.in. tytuł, opis, wymiary, technikę, cenę i sposób dostawy. Zasady wystawiania dzieł opisuje <a href="/terms/#artists">Regulamin</a>.',
        },
        {
          type: 'p',
          text: 'Aby otrzymywać wypłaty, załóż w aplikacji konto w <strong>Stripe Connect</strong> i przejdź weryfikację tożsamości przeprowadzaną przez Stripe. Bez pozytywnej weryfikacji wypłaty nie są możliwe.',
        },
        {
          type: 'p',
          text: 'Terminy wypłat wynikają z harmonogramu Stripe i informacji podanych w aplikacji. Wypłata z danego zamówienia może zostać wstrzymana do czasu rozpatrzenia reklamacji lub odstąpienia od umowy. Szczegóły znajdziesz w części <a href="/terms/#payouts">Wypłaty dla Artystów</a> Regulaminu.',
        },
        {
          type: 'p',
          text: `Masz pytanie o wystawianie dzieł lub wypłaty? Napisz na adres ${supportMailto('Dla artystów')}.`,
        },
      ],
    },
    {
      id: 'privacy',
      title: 'Prywatność',
      blocks: [
        {
          type: 'p',
          text: 'Jakie dane zbieramy, w jakim celu i jakie prawa Ci przysługują, wyjaśnia <a href="/privacy/">Polityka prywatności</a>.',
        },
        {
          type: 'p',
          text: `W sprawach dotyczących danych osobowych, np. dostępu do danych, ich sprostowania lub usunięcia, napisz na adres ${mailto()}.`,
        },
      ],
    },
    {
      id: 'deletion',
      title: 'Usuwanie konta',
      blocks: [
        {
          type: 'p',
          text: 'Konto usuniesz bezpośrednio w aplikacji: <strong>Profil → Ustawienia → Usuń konto</strong>. Usunięcia konta nie można cofnąć.',
        },
        {
          type: 'p',
          text: 'Jak usunąć konto bez dostępu do aplikacji i jakie dane usuwamy, opisujemy na stronie <a href="/deletion/">Usuwanie konta</a>.',
        },
      ],
    },
    {
      id: 'developer',
      title: 'O wydawcy aplikacji',
      blocks: [
        {
          type: 'p',
          text: `Wydawcą aplikacji ARTLY jest <strong>${OPERATOR.name}</strong>.<br>${address}<br>NIP ${OPERATOR.nip}<br><a href="${OPERATOR.site}">${OPERATOR.site.replace('https://', '')}</a>`,
        },
      ],
    },
  ],
} satisfies LegalDoc;
