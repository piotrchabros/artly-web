import type { LegalDoc } from '../types';
import { OPERATOR, mailto } from '../operator';

const address = `${OPERATOR.street}, ${OPERATOR.postalCode} ${OPERATOR.city}, ${OPERATOR.countryPl}`;

export default {
  title: 'Regulamin ARTLY',
  description:
    'Zasady korzystania z platformy ARTLY, która łączy kupujących z artystami: konto, zamówienia, płatności, odstąpienie od umowy i reklamacje.',
  lastUpdated: OPERATOR.lastUpdated,
  intro: [
    {
      type: 'p',
      text: `Niniejszy Regulamin określa zasady świadczenia usług drogą elektroniczną przez ${OPERATOR.name} w ramach platformy ARTLY, w tym zasady zawierania za jej pośrednictwem umów sprzedaży dzieł sztuki pomiędzy Kupującymi a Artystami. Regulamin jest regulaminem, o którym mowa w art. 8 ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.`,
    },
    {
      type: 'note',
      text: '<strong>Ważne:</strong> ARTLY jest platformą pośredniczącą. Sprzedawcą Dzieła jest Artysta, który je wystawił, a nie Operator, chyba że przy Dziele wyraźnie wskazano inaczej. Umowa sprzedaży zawierana jest bezpośrednio pomiędzy Kupującym a Artystą.',
    },
  ],
  sections: [
    {
      id: 'definitions',
      title: '1. Definicje',
      blocks: [
        { type: 'p', text: 'Użyte w Regulaminie pojęcia oznaczają:' },
        {
          type: 'ul',
          items: [
            '<strong>Aplikacja</strong> – aplikacja mobilna ARTLY na urządzenia z systemem iOS i Android, a także powiązane z nią serwisy internetowe Operatora;',
            '<strong>Platforma</strong> – udostępniany w Aplikacji system teleinformatyczny umożliwiający prezentowanie Dzieł, tworzenie Wizualizacji oraz zawieranie umów pomiędzy Kupującymi a Artystami;',
            `<strong>Operator</strong> – ${OPERATOR.name}, ${address}, NIP ${OPERATOR.nip};`,
            '<strong>Użytkownik</strong> – każda osoba korzystająca z Aplikacji, w tym Kupujący i Artysta;',
            '<strong>Kupujący</strong> – Użytkownik, który przegląda Dzieła, tworzy Wizualizacje lub składa zamówienia;',
            '<strong>Artysta</strong> – Użytkownik, który wystawia w Aplikacji Dzieła i oferuje je do sprzedaży lub przyjmuje zamówienia na Dzieła na zamówienie;',
            '<strong>Dzieło</strong> – utwór plastyczny lub inny przedmiot o charakterze artystycznym prezentowany w Aplikacji przez Artystę;',
            '<strong>Dzieło na zamówienie</strong> – Dzieło wykonywane przez Artystę według specyfikacji Kupującego lub w celu zaspokojenia jego zindywidualizowanych potrzeb;',
            '<strong>Konto</strong> – indywidualny zbiór danych i ustawień Użytkownika w Aplikacji, dostępny po zalogowaniu;',
            '<strong>Wizualizacja</strong> – funkcja Aplikacji pozwalająca zobaczyć Dzieło na zdjęciu ściany lub pomieszczenia przesłanym przez Użytkownika;',
            '<strong>Konsument</strong> – osoba fizyczna dokonująca z przedsiębiorcą czynności prawnej niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową;',
            '<strong>Przedsiębiorca na prawach konsumenta</strong> – osoba fizyczna zawierająca umowę bezpośrednio związaną z jej działalnością gospodarczą, gdy z treści umowy wynika, że nie posiada ona dla niej charakteru zawodowego;',
            '<strong>Stripe</strong> – dostawca usług płatniczych, za pośrednictwem którego realizowane są płatności w Aplikacji oraz wypłaty dla Artystów (Stripe Connect);',
            '<strong>Regulamin</strong> – niniejszy dokument.',
          ],
        },
      ],
    },
    {
      id: 'operator',
      title: '2. Operator i rola Platformy',
      blocks: [
        {
          type: 'p',
          text: `Usługodawcą świadczącym usługi drogą elektroniczną w ramach Aplikacji jest ${OPERATOR.name}, ${address}, NIP ${OPERATOR.nip}. Kontakt z Operatorem jest możliwy pod adresem e-mail ${mailto()}.`,
        },
        { type: 'p', text: 'W ramach Aplikacji Operator świadczy nieodpłatnie następujące usługi drogą elektroniczną:' },
        {
          type: 'ul',
          items: [
            'prowadzenie Konta;',
            'udostępnianie katalogu Dzieł oraz rekomendacji;',
            'tworzenie Wizualizacji na podstawie zdjęć przesłanych przez Użytkownika;',
            'umożliwianie Artystom wystawiania Dzieł i przyjmowania zamówień;',
            'umożliwianie Kupującym składania zamówień i komunikacji z Artystami w sprawach zamówień.',
          ],
        },
        {
          type: 'p',
          text: 'Operator działa wyłącznie jako pośrednik, który udostępnia Platformę. <strong>Sprzedawcą Dzieła jest Artysta</strong>, chyba że przy danym Dziele wyraźnie wskazano, że sprzedawcą jest Operator. Operator nie jest stroną umów sprzedaży ani umów o wykonanie Dzieła na zamówienie zawieranych pomiędzy Kupującym a Artystą i nie odpowiada za ich wykonanie, z zastrzeżeniem bezwzględnie obowiązujących przepisów prawa.',
        },
        {
          type: 'p',
          text: 'Artysta oświadcza w Aplikacji, czy działa jako przedsiębiorca. Informacja ta jest prezentowana Kupującemu przed zawarciem umowy. Jeżeli Artysta nie jest przedsiębiorcą, do zawieranej z nim umowy nie stosuje się przepisów o ochronie konsumentów, w tym przepisów o prawie odstąpienia od umowy zawartej na odległość.',
        },
      ],
    },
    {
      id: 'requirements',
      title: '3. Wymagania techniczne i zasady korzystania',
      blocks: [
        { type: 'p', text: 'Do korzystania z Aplikacji niezbędne są:' },
        {
          type: 'ul',
          items: [
            'urządzenie mobilne z systemem iOS lub Android w wersji obsługiwanej przez aktualną wersję Aplikacji;',
            'dostęp do sieci Internet;',
            'aktywny adres e-mail lub konto u dostawcy logowania obsługiwanego przez Aplikację;',
            'w przypadku korzystania z Wizualizacji – zgoda na dostęp Aplikacji do aparatu lub galerii zdjęć urządzenia.',
          ],
        },
        {
          type: 'p',
          text: 'Użytkownik zobowiązany jest korzystać z Aplikacji zgodnie z prawem, Regulaminem i dobrymi obyczajami. Zabronione jest dostarczanie treści o charakterze bezprawnym, w szczególności treści:',
        },
        {
          type: 'ul',
          items: [
            'naruszających prawa autorskie, prawa do wizerunku lub inne prawa osób trzecich;',
            'obraźliwych, nawołujących do nienawiści lub przemocy, pornograficznych z udziałem małoletnich lub w inny sposób sprzecznych z prawem;',
            'wprowadzających w błąd co do autorstwa, pochodzenia lub cech Dzieła;',
            'zawierających złośliwe oprogramowanie lub mogących zakłócić działanie Aplikacji.',
          ],
        },
        {
          type: 'p',
          text: `Treści mogące naruszać prawo lub Regulamin można zgłosić Operatorowi pod adresem ${mailto('Zgłoszenie treści')}, wskazując treść, jej lokalizację w Aplikacji oraz uzasadnienie zgłoszenia. Operator rozpatruje zgłoszenia niezwłocznie, a o podjętej decyzji, w tym o usunięciu treści lub ograniczeniu dostępu do Konta, informuje zainteresowanych Użytkowników wraz z uzasadnieniem.`,
        },
        {
          type: 'p',
          text: 'Korzystanie z usług świadczonych drogą elektroniczną wiąże się z typowymi zagrożeniami, takimi jak złośliwe oprogramowanie, phishing czy nieuprawniony dostęp do Konta. Użytkownik powinien chronić dane logowania, korzystać z aktualnego oprogramowania i nie udostępniać Konta osobom trzecim.',
        },
      ],
    },
    {
      id: 'account',
      title: '4. Konto',
      blocks: [
        {
          type: 'p',
          text: 'Przeglądanie części treści Aplikacji może być możliwe bez Konta. Do składania zamówień, zapisywania ulubionych Dzieł oraz wystawiania Dzieł niezbędne jest założenie Konta.',
        },
        {
          type: 'p',
          text: 'Konto może założyć osoba fizyczna, która ukończyła <strong>16 lat</strong>, a także osoba prawna lub jednostka organizacyjna, której ustawa przyznaje zdolność prawną.',
        },
        {
          type: 'p',
          text: 'Składanie zamówień oraz sprzedaż Dzieł wymagają pełnej zdolności do czynności prawnych. Osoba, która nie posiada pełnej zdolności do czynności prawnych, może kupować lub sprzedawać Dzieła wyłącznie za zgodą rodzica lub opiekuna prawnego.',
        },
        {
          type: 'p',
          text: 'Umowa o prowadzenie Konta zostaje zawarta z chwilą zakończenia rejestracji i akceptacji Regulaminu, na czas nieoznaczony. Użytkownik zobowiązany jest podawać dane prawdziwe i aktualne.',
        },
        {
          type: 'p',
          text: 'Zasady przetwarzania danych osobowych Użytkowników określa <a href="/privacy/">Polityka prywatności</a>.',
        },
      ],
    },
    {
      id: 'buyers',
      title: '5. Kupujący',
      blocks: [
        { type: 'p', text: 'Kupujący może w szczególności:' },
        {
          type: 'ul',
          items: [
            'przeglądać Dzieła i otrzymywać rekomendacje;',
            'tworzyć Wizualizacje na podstawie zdjęć własnych ścian lub pomieszczeń;',
            'zapisywać ulubione Dzieła;',
            'składać zamówienia na Dzieła gotowe oraz Dzieła na zamówienie.',
          ],
        },
        {
          type: 'p',
          text: 'Wizualizacja ma charakter poglądowy. Rzeczywisty wygląd Dzieła, w tym kolory i proporcje, może różnić się od jego obrazu w Aplikacji, w szczególności z uwagi na oświetlenie, jakość zdjęcia i ustawienia ekranu.',
        },
      ],
    },
    {
      id: 'artists',
      title: '6. Artyści',
      blocks: [
        {
          type: 'p',
          text: 'Artysta może wystawiać w Aplikacji Dzieła, określając w szczególności ich tytuł, opis, wymiary, technikę, cenę, koszty i sposób dostawy oraz informację, czy działa jako przedsiębiorca. Artysta odpowiada za kompletność i prawdziwość tych informacji.',
        },
        { type: 'p', text: 'Wystawiając Dzieło, Artysta oświadcza i zapewnia, że:' },
        {
          type: 'ul',
          items: [
            'jest autorem Dzieła albo przysługują mu prawa pozwalające na jego sprzedaż;',
            'Dzieło oraz materiały dotyczące Dzieła (zdjęcia, opisy) nie naruszają praw osób trzecich;',
            'Dzieło jest wolne od wad prawnych i może zostać sprzedane;',
            'posiada Dzieło lub będzie w stanie je wykonać i dostarczyć w terminie wskazanym w Aplikacji.',
          ],
        },
        {
          type: 'p',
          text: 'Artysta, który jest przedsiębiorcą, wykonuje wobec Kupujących obowiązki wynikające z przepisów prawa, w tym przepisów o prawach konsumenta, w szczególności w zakresie informacji przedumownych, odstąpienia od umowy i odpowiedzialności za zgodność Dzieła z umową. Artysta samodzielnie odpowiada za rozliczenia podatkowe związane ze sprzedażą Dzieł.',
        },
        {
          type: 'p',
          text: 'Operator może odmówić publikacji Dzieła lub usunąć Dzieło naruszające prawo lub Regulamin, informując Artystę o przyczynie.',
        },
      ],
    },
    {
      id: 'orders',
      title: '7. Zamówienia',
      blocks: [
        {
          type: 'p',
          text: 'Prezentacja Dzieła w Aplikacji stanowi ofertę Artysty w rozumieniu Kodeksu cywilnego, chyba że przy Dziele wskazano inaczej.',
        },
      ],
      subsections: [
        {
          title: 'Dzieła gotowe',
          blocks: [
            {
              type: 'ol',
              items: [
                'Kupujący wybiera Dzieło, podaje dane niezbędne do realizacji zamówienia i wybiera sposób dostawy.',
                'Przed złożeniem zamówienia Aplikacja prezentuje łączną cenę Dzieła wraz z podatkami i kosztami dostawy oraz dane Artysty jako sprzedawcy.',
                'Złożenie zamówienia następuje przez kliknięcie przycisku oznaczonego słowami wskazującymi na obowiązek zapłaty i dokonanie płatności.',
                'Umowa sprzedaży pomiędzy Kupującym a Artystą zostaje zawarta z chwilą skutecznego dokonania płatności. Kupujący otrzymuje potwierdzenie zamówienia na adres e-mail przypisany do Konta.',
              ],
            },
          ],
        },
        {
          title: 'Dzieła na zamówienie',
          blocks: [
            {
              type: 'ol',
              items: [
                'Kupujący przesyła Artyście za pośrednictwem Aplikacji zapytanie, określając swoje oczekiwania co do Dzieła.',
                'Artysta może przyjąć zapytanie, przedstawiając warunki wykonania Dzieła, w szczególności cenę, termin i sposób dostawy, albo je odrzucić.',
                'Umowa zostaje zawarta z chwilą akceptacji warunków przez Kupującego i skutecznego dokonania płatności.',
                'Kupujący przyjmuje do wiadomości, że w przypadku Dzieła na zamówienie Konsumentowi nie przysługuje prawo odstąpienia od umowy (punkt 11).',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'payments',
      title: '8. Płatności',
      blocks: [
        {
          type: 'p',
          text: 'Płatności w Aplikacji obsługuje Stripe. Dostępne metody płatności są wskazywane w Aplikacji przed złożeniem zamówienia. Operator nie przechowuje pełnych danych kart płatniczych.',
        },
        {
          type: 'p',
          text: 'Płatność dokonywana przez Kupującego stanowi zapłatę ceny na rzecz Artysty. Zwroty płatności, w tym w razie odstąpienia od umowy lub uwzględnienia reklamacji, realizowane są za pośrednictwem Stripe przy użyciu takiego samego sposobu płatności, jakiego użył Kupujący, chyba że Kupujący zgodzi się na inne rozwiązanie niewiążące się dla niego z żadnymi kosztami.',
        },
        {
          type: 'p',
          text: 'Korzystanie z usług Stripe może wymagać akceptacji warunków Stripe. Stripe przetwarza dane płatnicze jako odrębny podmiot, zgodnie z własnymi zasadami.',
        },
      ],
    },
    {
      id: 'payouts',
      title: '9. Wypłaty dla Artystów',
      blocks: [
        {
          type: 'p',
          text: 'Wypłaty środków dla Artystów realizowane są za pośrednictwem Stripe Connect. Warunkiem otrzymywania wypłat jest założenie konta w Stripe Connect, akceptacja warunków Stripe oraz pozytywna weryfikacja tożsamości i danych przeprowadzana przez Stripe.',
        },
        {
          type: 'p',
          text: 'Artysta otrzymuje cenę Dzieła pomniejszoną o <strong>prowizję określoną w aplikacji</strong>, należną Operatorowi za korzystanie z Platformy. Wysokość prowizji jest prezentowana Artyście w Aplikacji przed wystawieniem Dzieła. Zmiana wysokości prowizji nie dotyczy zamówień złożonych przed jej wejściem w życie.',
        },
        {
          type: 'p',
          text: 'Terminy wypłat wynikają z harmonogramu Stripe oraz informacji wskazanych w Aplikacji. Operator może wstrzymać wypłatę środków z danego zamówienia do czasu rozpatrzenia reklamacji lub odstąpienia od umowy dotyczących tego zamówienia albo w razie uzasadnionego podejrzenia naruszenia prawa lub Regulaminu.',
        },
      ],
    },
    {
      id: 'delivery',
      title: '10. Dostawa',
      blocks: [
        {
          type: 'p',
          text: 'Dostawę Dzieła organizuje Artysta. Dostępne sposoby, koszty i przewidywany termin dostawy są wskazywane w Aplikacji przed złożeniem zamówienia.',
        },
        {
          type: 'p',
          text: 'Artysta zobowiązany jest odpowiednio zabezpieczyć Dzieło na czas transportu. Kupujący powinien w miarę możliwości sprawdzić przesyłkę przy odbiorze, a w razie uszkodzenia sporządzić z przewoźnikiem protokół szkody. Brak protokołu nie pozbawia Konsumenta jego uprawnień.',
        },
        {
          type: 'p',
          text: 'Ryzyko przypadkowej utraty lub uszkodzenia Dzieła przechodzi na Konsumenta z chwilą wydania mu Dzieła.',
        },
      ],
    },
    {
      id: 'withdrawal',
      title: '11. Odstąpienie od umowy',
      blocks: [
        {
          type: 'p',
          text: 'Konsument oraz Przedsiębiorca na prawach konsumenta, który zawarł umowę z Artystą będącym przedsiębiorcą, może w terminie <strong>14 dni</strong> odstąpić od umowy bez podawania przyczyny i bez ponoszenia kosztów, z wyjątkiem kosztów wskazanych poniżej. Termin biegnie od dnia, w którym Kupujący lub wskazana przez niego osoba trzecia inna niż przewoźnik weszła w posiadanie Dzieła.',
        },
        {
          type: 'p',
          text: `Aby odstąpić od umowy, wystarczy przed upływem terminu złożyć Artyście jednoznaczne oświadczenie, za pośrednictwem Aplikacji lub w inny sposób, do czego można wykorzystać wzór formularza stanowiący załącznik nr 2 do ustawy z dnia 30 maja 2014 r. o prawach konsumenta. Oświadczenie można również przesłać do wiadomości Operatora na adres ${mailto('Odstąpienie od umowy')}.`,
        },
        {
          type: 'ul',
          items: [
            'Artysta zwraca wszystkie dokonane płatności, w tym koszty najtańszego zwykłego sposobu dostawy, niezwłocznie, nie później niż w terminie 14 dni od otrzymania oświadczenia. Artysta może wstrzymać się ze zwrotem do chwili otrzymania Dzieła z powrotem lub dostarczenia dowodu jego odesłania.',
            'Kupujący odsyła Dzieło niezwłocznie, nie później niż w terminie 14 dni od dnia odstąpienia, i ponosi bezpośrednie koszty jego zwrotu, chyba że Artysta zgodził się je ponieść.',
            'Kupujący odpowiada za zmniejszenie wartości Dzieła wynikające z korzystania z niego w sposób wykraczający poza konieczny do stwierdzenia jego charakteru, cech i funkcjonowania.',
          ],
        },
        {
          type: 'note',
          text: '<strong>Wyjątek – Dzieła na zamówienie.</strong> Zgodnie z art. 38 ust. 1 pkt 3 ustawy o prawach konsumenta prawo odstąpienia od umowy zawartej na odległość nie przysługuje w odniesieniu do umowy, w której przedmiotem świadczenia jest rzecz nieprefabrykowana, wyprodukowana według specyfikacji konsumenta lub służąca zaspokojeniu jego zindywidualizowanych potrzeb. Dotyczy to Dzieł na zamówienie.',
        },
        {
          type: 'p',
          text: 'Prawo odstąpienia nie przysługuje wobec Artysty, który nie jest przedsiębiorcą. Użytkownik może w każdej chwili, bez kosztów, rozwiązać umowę o prowadzenie Konta zgodnie z punktem 15.',
        },
      ],
    },
    {
      id: 'complaints',
      title: '12. Reklamacje',
      blocks: [
        {
          type: 'p',
          text: 'Artysta będący przedsiębiorcą odpowiada wobec Konsumenta i Przedsiębiorcy na prawach konsumenta za brak zgodności Dzieła z umową na zasadach określonych w ustawie o prawach konsumenta, a wobec pozostałych Kupujących – na zasadach rękojmi określonych w Kodeksie cywilnym, o ile nie została ona skutecznie wyłączona.',
        },
      ],
      subsections: [
        {
          title: 'Reklamacje dotyczące Dzieł',
          blocks: [
            {
              type: 'p',
              text: `Reklamację dotyczącą Dzieła należy złożyć Artyście za pośrednictwem Aplikacji. W razie braku kontaktu z Artystą reklamację można przesłać Operatorowi na adres ${mailto('Reklamacja zamówienia')}; Operator niezwłocznie przekaże ją Artyście. Reklamacja powinna zawierać dane Kupującego, oznaczenie zamówienia, opis niezgodności oraz żądanie Kupującego.`,
            },
            {
              type: 'p',
              text: 'Artysta będący przedsiębiorcą ustosunkowuje się do reklamacji Konsumenta w terminie 14 dni od jej otrzymania. Jeżeli w tym terminie nie udzieli odpowiedzi, uważa się, że uznał reklamację za uzasadnioną.',
            },
          ],
        },
        {
          title: 'Reklamacje dotyczące usług Operatora',
          blocks: [
            {
              type: 'p',
              text: `Reklamacje dotyczące działania Aplikacji i usług świadczonych przez Operatora można składać na adres ${mailto('Reklamacja usługi')}. Operator rozpatruje reklamację i udziela odpowiedzi w terminie <strong>14 dni</strong> od dnia jej otrzymania, na adres e-mail, z którego została wysłana.`,
            },
          ],
        },
        {
          title: 'Pozasądowe rozwiązywanie sporów',
          blocks: [
            {
              type: 'p',
              text: 'Konsument może skorzystać z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń, w szczególności zwrócić się o pomoc do miejskiego lub powiatowego rzecznika konsumentów, organizacji społecznej zajmującej się ochroną konsumentów lub wojewódzkiego inspektoratu Inspekcji Handlowej. Informacje o tych procedurach są dostępne na stronach Urzędu Ochrony Konkurencji i Konsumentów.',
            },
          ],
        },
      ],
    },
    {
      id: 'ip',
      title: '13. Własność intelektualna',
      blocks: [
        {
          type: 'p',
          text: 'Prawa autorskie do Dzieł przysługują Artystom. Zakup Dzieła oznacza nabycie własności egzemplarza, a nie autorskich praw majątkowych do utworu, chyba że Artysta i Kupujący wyraźnie postanowią inaczej w formie wymaganej przez prawo.',
        },
        {
          type: 'p',
          text: 'Wystawiając Dzieło, Artysta udziela Operatorowi nieodpłatnej, niewyłącznej licencji, nieograniczonej terytorialnie, na korzystanie ze zdjęć i opisów Dzieła w zakresie niezbędnym do ich wyświetlania w Aplikacji, tworzenia Wizualizacji oraz promowania Dzieła i Platformy, na czas prezentowania Dzieła w Aplikacji.',
        },
        {
          type: 'p',
          text: 'Zdjęcia ścian i pomieszczeń przesłane przez Użytkownika pozostają jego własnością. Użytkownik upoważnia Operatora do korzystania z nich wyłącznie w celu tworzenia Wizualizacji i świadczenia usług na jego rzecz. Operator nie sprzedaje tych zdjęć. Użytkownik może je usunąć w dowolnym momencie.',
        },
        {
          type: 'p',
          text: 'Aplikacja, jej układ, oprogramowanie, znak ARTLY i inne elementy udostępniane przez Operatora podlegają ochronie prawnej i nie mogą być wykorzystywane bez jego zgody poza zakresem wynikającym z Regulaminu.',
        },
      ],
    },
    {
      id: 'liability',
      title: '14. Odpowiedzialność',
      blocks: [
        {
          type: 'p',
          text: 'Operator dokłada starań, aby Aplikacja działała w sposób ciągły i prawidłowy. Operator może czasowo ograniczyć dostęp do Aplikacji w związku z pracami konserwacyjnymi, aktualizacjami lub względami bezpieczeństwa, starając się ograniczać takie przerwy do niezbędnego minimum.',
        },
        {
          type: 'p',
          text: 'Operator nie jest stroną umów zawieranych pomiędzy Kupującymi a Artystami i nie odpowiada za ich niewykonanie lub nienależyte wykonanie, w tym za cechy, jakość i dostawę Dzieł oraz za prawdziwość informacji podanych przez Artystów. Operator odpowiada za treści dostarczane przez Użytkowników wyłącznie w zakresie przewidzianym przepisami prawa.',
        },
        {
          type: 'p',
          text: 'Wobec Użytkowników niebędących Konsumentami ani Przedsiębiorcami na prawach konsumenta odpowiedzialność Operatora ograniczona jest do szkód wyrządzonych umyślnie. Postanowienia Regulaminu nie wyłączają ani nie ograniczają odpowiedzialności Operatora wobec Konsumentów w zakresie, w jakim nie pozwalają na to przepisy prawa.',
        },
      ],
    },
    {
      id: 'termination',
      title: '15. Rozwiązanie umowy i usunięcie Konta',
      blocks: [
        {
          type: 'p',
          text: 'Użytkownik może w każdej chwili, bez podawania przyczyny i bez ponoszenia kosztów, rozwiązać umowę o prowadzenie Konta, usuwając Konto w Aplikacji (<strong>Profil → Ustawienia → Usuń konto</strong>) albo przesyłając żądanie usunięcia Konta drogą e-mailową. Szczegółowe informacje znajdują się na stronie <a href="/deletion/">Usuwanie konta</a>.',
        },
        {
          type: 'p',
          text: 'Operator może rozwiązać umowę o prowadzenie Konta z zachowaniem 14-dniowego okresu wypowiedzenia z ważnych przyczyn, w tym zaprzestania świadczenia usług. W razie rażącego lub uporczywego naruszania prawa lub Regulaminu Operator może zablokować Konto lub rozwiązać umowę ze skutkiem natychmiastowym, informując Użytkownika o przyczynie.',
        },
        {
          type: 'p',
          text: 'Rozwiązanie umowy o prowadzenie Konta nie wpływa na zamówienia złożone wcześniej, które podlegają realizacji i rozliczeniu na dotychczasowych zasadach.',
        },
      ],
    },
    {
      id: 'law',
      title: '16. Prawo właściwe i spory',
      blocks: [
        {
          type: 'p',
          text: 'Regulamin oraz umowy zawierane na jego podstawie podlegają prawu polskiemu. Wybór prawa nie pozbawia Konsumenta ochrony przyznanej mu przez przepisy, których nie można wyłączyć w drodze umowy, obowiązujące w państwie jego zwykłego pobytu.',
        },
        {
          type: 'p',
          text: 'Spory z Konsumentami rozstrzygają sądy właściwe zgodnie z przepisami ogólnymi. Spory z Użytkownikami niebędącymi Konsumentami ani Przedsiębiorcami na prawach konsumenta rozstrzyga sąd właściwy dla siedziby Operatora.',
        },
      ],
    },
    {
      id: 'changes',
      title: '17. Zmiany Regulaminu',
      blocks: [
        {
          type: 'p',
          text: 'Operator może zmienić Regulamin z ważnych przyczyn, w szczególności w razie zmiany przepisów prawa, zmiany zakresu lub sposobu świadczenia usług, wprowadzenia nowych funkcji albo konieczności zapewnienia bezpieczeństwa Aplikacji.',
        },
        {
          type: 'p',
          text: 'O zmianie Regulaminu Operator informuje Użytkowników w Aplikacji lub drogą e-mailową co najmniej 14 dni przed jej wejściem w życie. Użytkownik, który nie akceptuje zmian, może przed ich wejściem w życie rozwiązać umowę o prowadzenie Konta. Do zamówień złożonych przed wejściem zmian w życie stosuje się dotychczasowe postanowienia Regulaminu.',
        },
      ],
    },
    {
      id: 'contact',
      title: '18. Kontakt',
      blocks: [
        {
          type: 'p',
          text: `${OPERATOR.name}<br>${OPERATOR.street}<br>${OPERATOR.postalCode} ${OPERATOR.city}, ${OPERATOR.countryPl}<br>NIP ${OPERATOR.nip}<br>E-mail: ${mailto()}`,
        },
        {
          type: 'p',
          text: `Regulamin jest dostępny nieodpłatnie pod adresem <a href="${OPERATOR.site}/terms/">${OPERATOR.site}/terms/</a> w formie umożliwiającej jego pobranie, utrwalenie i wydrukowanie.`,
        },
      ],
    },
  ],
} satisfies LegalDoc;
