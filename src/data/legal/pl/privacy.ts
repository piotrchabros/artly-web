import type { LegalDoc } from '../types';
import { OPERATOR, mailto } from '../operator';

const address = `${OPERATOR.street}, ${OPERATOR.postalCode} ${OPERATOR.city}, ${OPERATOR.countryPl}`;

export default {
  title: 'Polityka prywatności',
  description:
    'Jak ARTLY zbiera, wykorzystuje i chroni Twoje dane osobowe: konto, zdjęcia wnętrz, płatności, wypłaty dla artystów i analityka. Informacje zgodne z RODO.',
  lastUpdated: OPERATOR.lastUpdated,
  intro: [
    {
      type: 'p',
      text: `Niniejsza polityka prywatności wyjaśnia, w jaki sposób przetwarzamy dane osobowe w związku z korzystaniem z aplikacji ARTLY oraz serwisu <a href="${OPERATOR.site}">${OPERATOR.site.replace('https://', '')}</a>. ARTLY dopasowuje dzieła sztuki do wnętrz: kupujący mogą zobaczyć obraz na zdjęciu własnej ściany i go zamówić, a artyści mogą prezentować i sprzedawać swoje prace.`,
    },
    {
      type: 'p',
      text: 'Dokument został przygotowany zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (<strong>RODO</strong>) oraz polskimi przepisami o ochronie danych osobowych.',
    },
  ],
  sections: [
    {
      id: 'controller',
      title: 'Administrator danych',
      blocks: [
        {
          type: 'p',
          text: `Administratorem Twoich danych osobowych jest <strong>${OPERATOR.name}</strong>, ${address}, NIP ${OPERATOR.nip} (dalej: „<strong>ARTLY</strong>”, „<strong>my</strong>”).`,
        },
        {
          type: 'p',
          text: `We wszystkich sprawach dotyczących ochrony danych osobowych możesz skontaktować się z nami pod adresem ${mailto('Ochrona danych osobowych')} lub pisemnie na adres siedziby wskazany powyżej.`,
        },
      ],
    },
    {
      id: 'data',
      title: 'Jakie dane przetwarzamy',
      blocks: [
        {
          type: 'p',
          text: 'Zakres przetwarzanych danych zależy od tego, w jaki sposób korzystasz z ARTLY (jako kupujący, artysta lub osoba odwiedzająca serwis). Możemy przetwarzać następujące kategorie danych:',
        },
        {
          type: 'ul',
          items: [
            '<strong>Dane konta</strong>: adres e-mail, imię i nazwisko lub nazwa wyświetlana, a także dane niezbędne do logowania (np. identyfikator konta u dostawcy logowania, jeśli korzystasz z takiej metody).',
            '<strong>Zdjęcia ścian i pomieszczeń</strong>: fotografie wnętrz, które przesyłasz, aby zobaczyć wizualizację dzieła na swojej ścianie.',
            '<strong>Dane zamówień i płatności</strong>: informacje o zamówionych dziełach, dane do wysyłki i kontaktu, historia transakcji oraz status płatności. Pełnych danych karty płatniczej nie przechowujemy: przetwarza je bezpośrednio operator płatności.',
            '<strong>Dane artystów do wypłat</strong>: dane potrzebne do przekazywania należności za sprzedane prace, w tym dane identyfikacyjne i rachunku bankowego, zbierane i weryfikowane przez operatora płatności.',
            '<strong>Dane analityczne i dane urządzenia</strong>: informacje o sposobie korzystania z aplikacji i serwisu, takie jak odwiedzone ekrany, wykonane akcje, typ urządzenia, system operacyjny, przeglądarka, przybliżona lokalizacja wynikająca z adresu IP oraz identyfikatory techniczne.',
          ],
        },
        {
          type: 'p',
          text: 'Podanie danych jest dobrowolne, jednak bez danych konta nie możesz założyć konta ani składać zamówień, a bez danych do wypłat artysta nie może otrzymywać należności za sprzedane prace.',
        },
      ],
    },
    {
      id: 'purposes',
      title: 'Cele i podstawy prawne przetwarzania',
      blocks: [
        {
          type: 'p',
          text: 'Przetwarzamy dane wyłącznie w określonych celach i na podstawie przepisów RODO:',
        },
        {
          type: 'table',
          head: ['Cel', 'Dane', 'Podstawa prawna'],
          rows: [
            [
              'Założenie i prowadzenie konta, świadczenie usług w aplikacji',
              'Dane konta',
              'Art. 6 ust. 1 lit. b RODO (wykonanie umowy)',
            ],
            [
              'Wizualizacja dzieł na zdjęciach Twoich wnętrz i dopasowywanie propozycji',
              'Zdjęcia ścian i pomieszczeń',
              'Art. 6 ust. 1 lit. b RODO (wykonanie umowy)',
            ],
            [
              'Realizacja zamówień, obsługa płatności, reklamacji i odstąpień od umowy',
              'Dane konta, dane zamówień i płatności',
              'Art. 6 ust. 1 lit. b RODO (wykonanie umowy)',
            ],
            [
              'Przekazywanie wypłat artystom za sprzedane prace',
              'Dane artystów do wypłat',
              'Art. 6 ust. 1 lit. b RODO (wykonanie umowy)',
            ],
            [
              'Prowadzenie księgowości i wypełnianie obowiązków podatkowych',
              'Dane zamówień i płatności, dane artystów do wypłat',
              'Art. 6 ust. 1 lit. c RODO (obowiązek prawny)',
            ],
            [
              'Zapewnienie bezpieczeństwa i zapobieganie nadużyciom',
              'Dane konta, dane analityczne i dane urządzenia',
              'Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes)',
            ],
            [
              'Analityka produktowa i ulepszanie aplikacji',
              'Dane analityczne i dane urządzenia',
              'Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes) lub art. 6 ust. 1 lit. a RODO (zgoda), jeżeli jest wymagana przepisami',
            ],
            [
              'Odpowiadanie na zapytania kierowane do nas e-mailem',
              'Dane kontaktowe i treść korespondencji',
              'Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes)',
            ],
            [
              'Ustalanie, dochodzenie lub obrona przed roszczeniami',
              'Dane związane z danym roszczeniem',
              'Art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes)',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Jeżeli przetwarzanie odbywa się na podstawie zgody, możesz ją w każdej chwili wycofać. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania, którego dokonano przed jej wycofaniem.',
        },
      ],
    },
    {
      id: 'photos',
      title: 'Zdjęcia Twoich wnętrz',
      blocks: [
        {
          type: 'p',
          text: 'Zdjęcia ścian i pomieszczeń są dla nas szczególnie ważne, ponieważ często pokazują prywatną przestrzeń. Dlatego obowiązują następujące zasady:',
        },
        {
          type: 'ul',
          items: [
            'wykorzystujemy je <strong>wyłącznie</strong> do przygotowania wizualizacji dzieł na Twojej ścianie i dopasowania propozycji w aplikacji;',
            'nie sprzedajemy ich, nie udostępniamy w celach marketingowych i nie publikujemy ich innym użytkownikom ani artystom;',
            'możesz je w każdej chwili usunąć w aplikacji lub prosząc nas o to e-mailem; są one także usuwane wraz z usunięciem konta.',
          ],
        },
        {
          type: 'note',
          text: 'Prosimy, aby przesyłane zdjęcia przedstawiały przede wszystkim ścianę lub pomieszczenie. Unikaj fotografowania osób, dokumentów i innych informacji, których nie chcesz nam przekazywać.',
        },
      ],
    },
    {
      id: 'payments',
      title: 'Płatności i wypłaty dla artystów',
      blocks: [
        {
          type: 'p',
          text: 'Płatności w ARTLY obsługuje <strong>Stripe</strong>. Dane karty i inne dane płatnicze podajesz bezpośrednio w formularzu Stripe, a my otrzymujemy jedynie informacje potrzebne do potwierdzenia i rozliczenia transakcji (np. kwotę, status płatności, ostatnie cyfry karty).',
        },
        {
          type: 'p',
          text: 'Wypłaty dla artystów realizowane są za pośrednictwem usługi <strong>Stripe Connect</strong>. W ramach zakładania konta wypłat Stripe zbiera i weryfikuje dane tożsamości oraz dane rachunku bankowego artysty (procedura „poznaj swojego klienta”, KYC), co wynika z przepisów o przeciwdziałaniu praniu pieniędzy. W tym zakresie Stripe działa jako odrębny administrator danych.',
        },
        {
          type: 'p',
          text: 'Więcej informacji o tym, jak Stripe przetwarza dane osobowe, znajdziesz w <a href="https://stripe.com/privacy">polityce prywatności Stripe</a>.',
        },
      ],
    },
    {
      id: 'analytics',
      title: 'Analityka, pliki cookies i podobne technologie',
      blocks: [
        {
          type: 'p',
          text: 'Do analizy sposobu korzystania z aplikacji i serwisu używamy narzędzia <strong>PostHog</strong>. Pozwala nam ono zrozumieć, które funkcje są używane, gdzie użytkownicy napotykają trudności i jak możemy ulepszać ARTLY.',
        },
        {
          type: 'p',
          text: 'W tym celu możemy wykorzystywać pliki cookies, pamięć lokalną urządzenia oraz podobne technologie, które zapisują identyfikatory techniczne. Niezbędne technologie służą do prawidłowego działania serwisu i aplikacji (np. utrzymania sesji logowania). Technologie analityczne stosujemy w zakresie dopuszczonym przepisami, a tam, gdzie jest to wymagane, po uzyskaniu Twojej zgody.',
        },
        {
          type: 'p',
          text: `Z analityki możesz zrezygnować w każdej chwili: zablokuj lub usuń pliki cookies w ustawieniach przeglądarki, ogranicz śledzenie w ustawieniach urządzenia albo wnieś sprzeciw wobec przetwarzania danych w celach analitycznych, pisząc na adres ${mailto('Rezygnacja z analityki')}. Rezygnacja z analityki nie wpływa na możliwość korzystania z ARTLY.`,
        },
      ],
    },
    {
      id: 'processors',
      title: 'Odbiorcy danych',
      blocks: [
        {
          type: 'p',
          text: 'Twoje dane mogą być przekazywane podmiotom, które wspierają nas w świadczeniu usług. Powierzamy im dane wyłącznie w zakresie niezbędnym do realizacji danej usługi, na podstawie umów zapewniających odpowiedni poziom ochrony:',
        },
        {
          type: 'table',
          head: ['Odbiorca', 'Rola'],
          rows: [
            ['Stripe', 'Obsługa płatności, wypłat dla artystów (Stripe Connect) i weryfikacji tożsamości'],
            ['PostHog', 'Analityka produktowa'],
            ['Cloudflare', 'Hosting serwisu internetowego, dostarczanie treści i ochrona przed atakami'],
            ['Dostawcy infrastruktury aplikacji', 'Hosting, przechowywanie danych i zdjęć, uwierzytelnianie oraz wysyłka wiadomości e-mail'],
          ],
        },
        {
          type: 'p',
          text: 'Gdy kupujesz dzieło, przekazujemy artyście informacje niezbędne do realizacji zamówienia, takie jak Twoje imię i nazwisko oraz dane do dostawy. Dane możemy również przekazać organom publicznym, gdy obowiązek taki wynika z przepisów prawa.',
        },
        {
          type: 'p',
          text: '<strong>Nie sprzedajemy</strong> Twoich danych osobowych.',
        },
      ],
    },
    {
      id: 'transfers',
      title: 'Przekazywanie danych poza EOG',
      blocks: [
        {
          type: 'p',
          text: 'Niektórzy z naszych dostawców mają siedzibę lub przetwarzają dane poza Europejskim Obszarem Gospodarczym (EOG), w szczególności w Stanach Zjednoczonych. W takich przypadkach dane są przekazywane wyłącznie przy zastosowaniu odpowiednich zabezpieczeń przewidzianych w RODO, takich jak:',
        },
        {
          type: 'ul',
          items: [
            'decyzja Komisji Europejskiej stwierdzająca odpowiedni stopień ochrony, w tym ramy <strong>EU-US Data Privacy Framework</strong> w odniesieniu do certyfikowanych podmiotów;',
            '<strong>standardowe klauzule umowne</strong> zatwierdzone przez Komisję Europejską.',
          ],
        },
        {
          type: 'p',
          text: `Możesz uzyskać kopię stosowanych zabezpieczeń, kontaktując się z nami pod adresem ${mailto('Przekazywanie danych poza EOG')}.`,
        },
      ],
    },
    {
      id: 'retention',
      title: 'Okres przechowywania danych',
      blocks: [
        {
          type: 'p',
          text: 'Przechowujemy dane tylko tak długo, jak jest to potrzebne do celów, w których je zebraliśmy:',
        },
        {
          type: 'ul',
          items: [
            '<strong>dane konta</strong>: do czasu usunięcia konta;',
            '<strong>zdjęcia ścian i pomieszczeń</strong>: do czasu ich usunięcia przez Ciebie lub do usunięcia konta, w zależności od tego, co nastąpi wcześniej;',
            '<strong>dane transakcji i dokumenty księgowe</strong>: przez 5 lat od końca roku kalendarzowego, w którym upłynął termin płatności podatku, zgodnie z przepisami prawa podatkowego;',
            '<strong>dane analityczne</strong>: przez okres niezbędny do celów analitycznych, nie dłużej niż do wycofania zgody lub uwzględnienia sprzeciwu;',
            '<strong>dane przetwarzane w celu dochodzenia lub obrony przed roszczeniami</strong>: do upływu okresu przedawnienia tych roszczeń.',
          ],
        },
        {
          type: 'p',
          text: 'Informacje o tym, jak usunąć konto i jakie dane są przechowywane po jego usunięciu, znajdziesz na stronie <a href="/deletion/">Usuwanie konta</a>.',
        },
      ],
    },
    {
      id: 'rights',
      title: 'Twoje prawa',
      blocks: [
        {
          type: 'p',
          text: 'W związku z przetwarzaniem danych osobowych przysługują Ci następujące prawa:',
        },
        {
          type: 'ul',
          items: [
            '<strong>prawo dostępu</strong> do danych i uzyskania ich kopii (art. 15 RODO);',
            '<strong>prawo do sprostowania</strong> nieprawidłowych lub niekompletnych danych (art. 16 RODO);',
            '<strong>prawo do usunięcia danych</strong> („prawo do bycia zapomnianym”) (art. 17 RODO);',
            '<strong>prawo do ograniczenia przetwarzania</strong> (art. 18 RODO);',
            '<strong>prawo do przenoszenia danych</strong>, które nam przekazałeś, w ustrukturyzowanym, powszechnie używanym formacie (art. 20 RODO);',
            '<strong>prawo do wniesienia sprzeciwu</strong> wobec przetwarzania opartego na prawnie uzasadnionym interesie (art. 21 RODO);',
            '<strong>prawo do wycofania zgody</strong> w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem (art. 7 ust. 3 RODO).',
          ],
        },
        {
          type: 'p',
          text: `Aby skorzystać ze swoich praw, napisz do nas na adres ${mailto('Realizacja praw RODO')}. Najlepiej napisz z adresu e-mail powiązanego z Twoim kontem. Odpowiemy bez zbędnej zwłoki, nie później niż w ciągu miesiąca od otrzymania żądania; termin ten może zostać przedłużony w przypadkach przewidzianych w RODO. Konto możesz też samodzielnie usunąć w aplikacji: <strong>Profil → Ustawienia → Usuń konto</strong>.`,
        },
      ],
    },
    {
      id: 'complaint',
      title: 'Prawo do wniesienia skargi',
      blocks: [
        {
          type: 'p',
          text: 'Jeżeli uważasz, że przetwarzamy Twoje dane niezgodnie z prawem, masz prawo wnieść skargę do organu nadzorczego: <strong>Prezesa Urzędu Ochrony Danych Osobowych</strong>, ul. Stawki 2, 00-193 Warszawa (<a href="https://uodo.gov.pl">uodo.gov.pl</a>).',
        },
        {
          type: 'p',
          text: 'Zachęcamy jednak, aby najpierw skontaktować się z nami: postaramy się szybko wyjaśnić każdą wątpliwość.',
        },
      ],
    },
    {
      id: 'children',
      title: 'Dzieci',
      blocks: [
        {
          type: 'p',
          text: 'ARTLY nie jest skierowane do dzieci. Aby założyć konto, musisz mieć ukończone 16 lat. Jeżeli nie jesteś pełnoletni, możesz kupować lub sprzedawać dzieła wyłącznie za zgodą rodzica lub opiekuna prawnego.',
        },
        {
          type: 'p',
          text: `Jeżeli uważasz, że dziecko przekazało nam swoje dane osobowe bez wymaganej zgody, skontaktuj się z nami pod adresem ${mailto('Dane dziecka')}, a niezwłocznie je usuniemy.`,
        },
      ],
    },
    {
      id: 'changes',
      title: 'Zmiany polityki prywatności',
      blocks: [
        {
          type: 'p',
          text: 'Możemy aktualizować niniejszą politykę prywatności, np. w związku ze zmianami w aplikacji, w zakresie współpracujących z nami dostawców lub w przepisach prawa. Aktualna wersja jest zawsze dostępna na tej stronie, a data ostatniej aktualizacji podana jest na górze dokumentu.',
        },
        {
          type: 'p',
          text: 'O istotnych zmianach poinformujemy Cię z wyprzedzeniem w aplikacji lub e-mailem.',
        },
      ],
    },
    {
      id: 'contact',
      title: 'Kontakt',
      blocks: [
        {
          type: 'p',
          text: `W sprawach związanych z prywatnością i ochroną danych osobowych napisz do nas: ${mailto('Prywatność')}.`,
        },
        {
          type: 'p',
          text: `${OPERATOR.name}<br>${OPERATOR.street}<br>${OPERATOR.postalCode} ${OPERATOR.city}, ${OPERATOR.countryPl}<br>NIP ${OPERATOR.nip}`,
        },
      ],
    },
  ],
} satisfies LegalDoc;
