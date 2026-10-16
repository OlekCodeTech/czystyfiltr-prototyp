// Wszystkie treści strony w jednym miejscu — przy przenosinach na WordPress
// każdy klucz odpowiada polu w panelu (ACF / Bricks dynamic data).

export const FIRMA = {
  nazwa: 'czystyfiltr.pl',
  ulica: 'ul. Za Torem 10b',
  kod: '59-800',
  miasto: 'Lubań',
  region: 'woj. dolnośląskie',
  telefon: '509 533 252',
  telefonHref: 'tel:+48509533252',
  email: null, // do uzupełnienia
  godziny: null, // do uzupełnienia
  gwarancjaMies: 12,
  czasRealizacji: '1–2 dni robocze',
  social: [
    { id: 'facebook', label: 'Facebook' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'youtube', label: 'YouTube' },
  ],
};

export const MENU = [
  { label: 'Oferta', to: 'oferta', children: ['czyszczenie-dpf-fap', 'czyszczenie-katalizatorow', 'czyszczenie-scr', 'mycie-kolektorow-i-czesci'] },
  { label: 'Cennik', to: 'cennik' },
  { label: 'Jak to działa', to: 'jak-to-dziala' },
  { label: 'O nas', to: 'o-nas' },
  { label: 'Baza wiedzy', to: 'baza-wiedzy' },
  { label: 'Kontakt', to: 'kontakt' },
];

export const OBJAWY = [
  { ikona: 'lamp', tytul: 'Kontrolka DPF się świeci', opis: 'Komputer zgłasza zbyt duże przeciwciśnienie w filtrze i prosi o wypalanie, które nie przynosi efektu.' },
  { ikona: 'turtle', tytul: 'Tryb awaryjny', opis: 'Silnik nagle traci moc i nie przekracza 2500–3000 obr./min. Auto chroni się przed uszkodzeniem.' },
  { ikona: 'gauge', tytul: 'Spadek mocy', opis: 'Samochód gorzej przyspiesza, zwłaszcza pod górę i z obciążeniem, choć tryb awaryjny się nie włącza.' },
  { ikona: 'fuel', tytul: 'Większe spalanie', opis: 'Zapchany filtr dławi wydech, więc silnik zużywa więcej paliwa przy tej samej jeździe.' },
  { ikona: 'flame', tytul: 'Nieudane wypalanie', opis: 'Wentylator pracuje po zgaszeniu silnika, obroty biegu jałowego są podniesione, a wypalanie co chwilę się przerywa.' },
  { ikona: 'oil', tytul: 'Przybywa oleju', opis: 'Częste, przerwane wypalania rozrzedzają olej paliwem. Poziom na bagnecie rośnie zamiast spadać.' },
];

export const KROKI = [
  { tytul: 'Odbiór filtra', opis: 'Zamawiasz odbiór online lub telefonicznie. Kurier zabiera filtr z domu albo z warsztatu. Możesz też przywieźć go do nas, do Lubania.' },
  { tytul: 'Badanie przed', opis: 'Mierzymy przeciwciśnienie filtra na maszynie, zanim zaczniemy czyścić. Oglądamy czoło filtra i sprawdzamy, czy wkład nie jest pęknięty lub stopiony.' },
  { tytul: 'Czyszczenie', opis: 'Wypłukujemy sadzę i popiół z kanałów filtra metodą hydrodynamiczną, a potem dokładnie go suszymy.' },
  { tytul: 'Badanie po, raport i zwrot', opis: 'Ponowny pomiar na maszynie i wydruk z wynikami przed i po. Zdjęcie raportu wysyłamy Ci, zanim filtr wróci kurierem.' },
];

export const USLUGI = [
  {
    slug: 'czyszczenie-dpf-fap',
    foto: 'media/dpf-czolo.jpg',
    krotko: 'DPF / FAP',
    nazwa: 'Czyszczenie filtrów DPF / FAP',
    h1: 'Czyszczenie filtrów DPF i FAP',
    lead: 'Przywracamy drożność filtra cząstek stałych w autach osobowych, dostawczych, ciężarowych i maszynach. Badanie przeciwciśnienia przed i po czyszczeniu, wydruk w komplecie.',
    karta: 'Usuwamy sadzę i popiół z filtra cząstek stałych. Wynik potwierdza wydruk z badania przeciwciśnienia przed i po.',
    ikona: 'dpf',
    fraza: 'czyszczenie DPF, regeneracja FAP',
    usuwamy: [
      { co: 'Sadza', opis: 'Cząstki węgla z niepełnego spalania oleju napędowego. Normalnie wypala je samochód, ale przy jeździe po mieście proces się nie domyka.' },
      { co: 'Popiół', opis: 'Niepalna pozostałość z dodatków w oleju silnikowym. Żadne wypalanie jej nie usunie, dlatego z czasem filtr zapycha się na stałe.' },
      { co: 'Olej i nagar', opis: 'Ślady oleju z turbosprężarki lub przez odmę. Wypłukujemy je razem z osadem, ale przyczynę trzeba usunąć w aucie.' },
    ],
    sens: [
      'Kontrolka DPF wraca mimo udanych wypalań serwisowych',
      'Przeciwciśnienie jest za wysokie, a wkład ceramiczny jest cały',
      'Auto ma duży przebieg i filtr nigdy nie był czyszczony',
      'Chcesz uniknąć kosztu nowego filtra (zwykle kilka tysięcy złotych)',
    ],
    bezSensu: [
      'Wkład jest pęknięty lub stopiony. Sprawdzamy to przed czyszczeniem i od razu informujemy',
      'Przyczyną jest niesprawny wtrysk, turbo lub EGR. Najpierw naprawa, inaczej filtr szybko zapcha się znowu',
    ],
    faq: [
      { q: 'Czy czyszczenie jest tak samo skuteczne jak nowy filtr?', a: 'Jeśli wkład jest cały, po czyszczeniu przeciwciśnienie wraca do wartości zbliżonych do nowego filtra. Wynik widzisz na wydruku z badania po czyszczeniu.' },
      { q: 'Czy muszę kodować filtr po montażu?', a: 'W wielu autach po montażu trzeba zresetować adaptację filtra w sterowniku. Zrobi to każdy warsztat z komputerem diagnostycznym.' },
      { q: 'Czy filtr FAP z dodatkiem Eolys też czyścicie?', a: 'Tak. Przy filtrach FAP warto jednocześnie sprawdzić poziom płynu dodatku w zbiorniczku.' },
    ],
  },
  {
    slug: 'czyszczenie-katalizatorow',
    foto: 'media/katalizator.jpg',
    krotko: 'Katalizatory',
    nazwa: 'Czyszczenie katalizatorów',
    h1: 'Czyszczenie katalizatorów',
    lead: 'Usuwamy nagar i osad, które dławią katalizator utleniający (DOC) i katalizator w autach benzynowych. Mniej oporów wydechu, mniej błędów w sterowniku.',
    karta: 'Odblokowujemy zarośnięte katalizatory DOC i benzynowe. Pomiar przeciwciśnienia przed i po.',
    ikona: 'cat',
    fraza: 'czyszczenie katalizatora',
    usuwamy: [
      { co: 'Nagar', opis: 'Twardy osad węglowy na czole wkładu, który zmniejsza przepływ spalin.' },
      { co: 'Olej', opis: 'Pozostałości oleju z turbo lub odmy, które oblepiają kanały wkładu.' },
      { co: 'Osad z dodatków', opis: 'Popiół i związki z paliwa i oleju, które z czasem zatykają powierzchnię katalityczną.' },
    ],
    sens: [
      'Katalizator jest zarośnięty, ale wkład nie jest stopiony ani pęknięty',
      'Sterownik zgłasza zbyt duże opory wydechu',
      'Czyścimy DPF, który ma zintegrowany katalizator DOC',
    ],
    bezSensu: [
      'Wkład jest stopiony po wypadaniu zapłonów. Wtedy potrzebny jest nowy katalizator',
      'Błąd sprawności katalizatora wynika z zużycia warstwy katalitycznej, a nie z zabrudzenia',
    ],
    faq: [
      { q: 'Czy czyszczenie usunie błąd P0420?', a: 'Tylko jeśli przyczyną jest zabrudzenie. Jeśli warstwa katalityczna jest zużyta, czyszczenie nie przywróci jej sprawności. Powiemy to po badaniu.' },
      { q: 'Czy czyścicie katalizatory z aut benzynowych?', a: 'Tak, jeśli wkład jest mechanicznie cały. Stopionego wkładu nie da się naprawić.' },
    ],
  },
  {
    slug: 'czyszczenie-scr',
    foto: 'media/scr.jpg',
    krotko: 'SCR',
    nazwa: 'Czyszczenie układów SCR',
    h1: 'Czyszczenie układów SCR',
    lead: 'Czyścimy katalizatory SCR z kryształów mocznika i osadów po AdBlue. Dotyczy aut osobowych, dostawczych, ciężarówek Euro 6 oraz maszyn.',
    karta: 'Usuwamy kryształy AdBlue i osady z katalizatorów SCR, także w zestawach DPF+SCR Euro 6.',
    ikona: 'scr',
    fraza: 'czyszczenie SCR, AdBlue SCR',
    usuwamy: [
      { co: 'Kryształy mocznika', opis: 'Biały, twardy osad z AdBlue, który odkłada się przy krótkich trasach i niskiej temperaturze spalin.' },
      { co: 'Sadza i popiół', opis: 'W zestawach DPF+SCR osad z filtra przedostaje się także do wkładu SCR.' },
      { co: 'Zanieczyszczenia AdBlue', opis: 'Osady z płynu złej jakości lub zanieczyszczonego w zbiorniku.' },
    ],
    sens: [
      'Błędy sprawności SCR lub ograniczenie mocy po zatankowaniu AdBlue',
      'Widoczne białe kryształy przy wtryskiwaczu AdBlue lub na czole wkładu',
      'Ciężarówka lub maszyna z zestawem DPF+SCR, który traci przepływ',
    ],
    bezSensu: [
      'Usterka dotyczy wtryskiwacza, pompy lub czujnika NOx. Te elementy trzeba naprawić w aucie',
    ],
    faq: [
      { q: 'Czy czyścicie zestawy DPF+SCR z ciężarówek?', a: 'Tak. Przy dużych zestawach ustalamy odbiór i cenę indywidualnie, zadzwoń przed wysyłką.' },
      { q: 'Czy po czyszczeniu SCR trzeba coś programować?', a: 'Zwykle nie, ale przy części pojazdów warto skasować błędy i wykonać test układu dozowania w serwisie.' },
    ],
  },
  {
    slug: 'mycie-kolektorow-i-czesci',
    foto: 'media/wydech.jpg',
    krotko: 'Kolektory i części',
    nazwa: 'Kolektory i części — mycie ciśnieniowe',
    h1: 'Czyszczenie kolektorów i części mechanicznych',
    lead: 'Myjemy ciśnieniowo kolektory wydechowe i ssące, zawory EGR, intercoolery i inne zabrudzone części. Z nagaru i oleju do czystego metalu, przed regeneracją lub ponownym montażem.',
    karta: 'Myjemy ciśnieniowo kolektory, EGR, intercoolery i inne części z nagaru i oleju.',
    ikona: 'manifold',
    fraza: 'czyszczenie kolektora wydechowego',
    czesci: ['Kolektory wydechowe', 'Kolektory ssące', 'Zawory i chłodnice EGR', 'Intercoolery', 'Przepustnice', 'Obudowy i elementy osprzętu'],
    usuwamy: [
      { co: 'Nagar', opis: 'Twardy osad węglowy w kolektorach ssących i na zaworach EGR, który dławi przepływ powietrza.' },
      { co: 'Olej i szlam', opis: 'Mieszanka oleju z sadzą w intercoolerach i przewodach dolotu.' },
      { co: 'Brud eksploatacyjny', opis: 'Zabrudzenia zewnętrzne przed regeneracją, malowaniem lub sprzedażą części.' },
    ],
    sens: [
      'Kolektor ssący zarósł nagarem i silnik traci moc',
      'Zawór EGR się zacina lub chłodnica EGR jest zapchana',
      'Intercooler jest zalany olejem po awarii turbosprężarki',
    ],
    bezSensu: [
      'Część jest pęknięta lub skorodowana na wylot. Mycie nie zastąpi naprawy',
    ],
    faq: [
      { q: 'Jakie części przyjmujecie do mycia?', a: 'Kolektory, EGR, intercoolery, przepustnice i inne metalowe elementy osprzętu silnika. Jeśli nie wiesz, czy dana część się nada, zadzwoń.' },
      { q: 'Czy mycie ciśnieniowe może uszkodzić część?', a: 'Dobieramy ciśnienie i środek do materiału. Elementy z elektroniką (np. siłowniki) zdejmujemy lub zabezpieczamy przed myciem.' },
    ],
  },
];

export const CENNIK = [
  { segment: 'Samochody osobowe', opis: 'DPF / FAP, także z katalizatorem DOC', cena: null },
  { segment: 'Samochody dostawcze i busy', opis: 'do 3,5 t', cena: null },
  { segment: 'Ciężarowe i autobusy', opis: 'DPF, SCR, zestawy Euro 6', cena: null, uwaga: 'wycena indywidualna przy dużych zestawach' },
  { segment: 'Maszyny rolnicze i budowlane', opis: 'ciągniki, koparki, ładowarki', cena: null },
  { segment: 'Kolektory i części', opis: 'mycie ciśnieniowe', cena: null },
];

export const W_CENIE = [
  'Kurier w obie strony',
  'Badanie przeciwciśnienia przed i po',
  'Wydruk raportu i zdjęcie wysłane przed zwrotem',
  'Faktura VAT',
  `Gwarancja ${FIRMA.gwarancjaMies} miesięcy`,
];

export const GWARANCJA = {
  punkty: [
    { t: `${FIRMA.gwarancjaMies} miesięcy od czyszczenia`, d: 'Liczymy od dnia, w którym filtr do Ciebie wraca.' },
    { t: 'Filtr znowu się zapchał?', d: 'Jeśli w tym czasie filtr straci drożność, wyczyścimy go za darmo.' },
    { t: 'Kiedy gwarancja nie obejmuje filtra', d: 'Gdy zapcha go usterka auta: wtryski, turbo, zawór EGR albo duże zużycie oleju. Dlatego przed czyszczeniem pytamy o objawy.' },
  ],
  wylaczenia: [
    'Niesprawne wtryskiwacze lub nieszczelne końcówki wtrysku',
    'Turbosprężarka podająca olej do układu wydechowego',
    'Niesprawny zawór lub chłodnica EGR',
    'Nadmierne zużycie oleju silnikowego',
    'Mechaniczne uszkodzenie wkładu po montażu',
    'Ingerencja w oprogramowanie sterownika dotyczące DPF',
  ],
};

export const FAQ_GLOWNA = [
  { q: 'Ile trwa czyszczenie filtra DPF?', a: `Sam proces w warsztacie zajmuje ${FIRMA.czasRealizacji}. Przy wysyłce kurierem doliczamy czas transportu w obie strony, zwykle po jednym dniu.` },
  { q: 'Czy czyszczenie jest tak samo skuteczne jak nowy filtr?', a: 'Jeśli wkład ceramiczny jest cały, przeciwciśnienie po czyszczeniu wraca do wartości zbliżonych do nowego filtra. Potwierdza to wydruk z badania po czyszczeniu.' },
  { q: 'Jak zapakować filtr do wysyłki?', a: 'Zatkaj wlot i wylot folią, owiń filtr folią bąbelkową i włóż do kartonu wypełnionego tak, żeby się nie przesuwał. Instrukcję ze zdjęciami znajdziesz na stronie Jak to działa.' },
  { q: 'Co jeśli filtra nie da się wyczyścić?', a: 'Badamy filtr przed czyszczeniem. Jeśli wkład jest pęknięty lub stopiony, dzwonimy z informacją, zanim cokolwiek zrobimy.' },
  { q: 'Czy wystawiacie fakturę VAT?', a: 'Tak, faktura jest w cenie usługi. Dane do faktury podajesz przy zamówieniu odbioru.' },
  { q: 'Czy usuwacie lub wycinacie filtry DPF?', a: 'Nie. Usunięcie DPF jest niezgodne z przepisami i kończy się problemami na przeglądzie. Zajmujemy się wyłącznie czyszczeniem.' },
];

export const MIASTA = [
  {
    slug: 'czyszczenie-dpf-zgorzelec', nazwa: 'Zgorzelec', wMiescie: 'w Zgorzelcu', zMiasta: 'ze Zgorzelca',
    km: 27, min: 25, trasa: 'drogą krajową nr 30',
    lokalnie: 'Zgorzelec to miasto przy przejściu granicznym z Görlitz i autostradzie A4. Dużo tu busów, aut dostawczych i ciężarówek, które jeżdżą głównie trasą, a w mieście stoją w korkach przy moście. To mieszanka, która szybko zapycha DPF: długie odcinki na autostradzie przerywane jazdą stop-start przy odprawie i dostawach.',
    dla: 'Firmom transportowym i kurierskim ze Zgorzelca proponujemy stały odbiór filtrów i rozliczenie zbiorcze.',
    faq: [
      { q: 'Czy odbieracie filtry ze Zgorzelca?', a: 'Tak, kurierem w cenie usługi. Możesz też podjechać do nas do Lubania, to około 25 minut.' },
      { q: 'Czy obsługujecie klientów z Görlitz?', a: 'Tak, przyjmujemy filtry od klientów z Niemiec. Kontakt na razie po polsku, fakturę wystawiamy także na firmę z UE.' },
    ],
  },
  {
    slug: 'czyszczenie-dpf-boleslawiec', nazwa: 'Bolesławiec', wMiescie: 'w Bolesławcu', zMiasta: 'z Bolesławca',
    km: 43, min: 40, trasa: 'przez Nowogrodziec',
    lokalnie: 'Bolesławiec leży przy węźle A4 i A18, więc przez miasto przejeżdża dużo transportu ciężarowego i flot firmowych. W okolicy pracują też zakłady i gospodarstwa z maszynami Euro 5 i Euro 6, gdzie zapchany DPF oznacza przestój w środku sezonu.',
    dla: 'Dla firm z Bolesławca i Nowogrodźca ustalamy stały dzień odbioru, a dla maszyn wycenę z góry przed wysyłką.',
    faq: [
      { q: 'Ile jedzie się z Bolesławca do Lubania?', a: 'Około 40 minut, przez Nowogrodziec. Filtr można też wysłać kurierem w cenie usługi.' },
      { q: 'Czy czyścicie filtry z ciężarówek z Bolesławca?', a: 'Tak, także zestawy DPF+SCR Euro 6. Przy dużych zestawach zadzwoń przed wysyłką, ustalimy odbiór.' },
    ],
  },
  {
    slug: 'czyszczenie-dpf-lesna', nazwa: 'Leśna', wMiescie: 'w Leśnej', zMiasta: 'z Leśnej',
    km: 11, min: 15, trasa: '',
    lokalnie: 'Z Leśnej do nas jest kilkanaście minut, więc najwygodniej przywieźć filtr osobiście. Wokół Leśnej i Jeziora Złotnickiego dominują krótkie trasy i rolnictwo. Krótkie przejazdy nie pozwalają filtrowi się wypalić, a ciągniki i ładowarki pracują długo na niskich obrotach.',
    dla: 'Rolnikom z gminy Leśna oferujemy czyszczenie filtrów z ciągników i maszyn z odbiorem osobistym w Lubaniu.',
    faq: [
      { q: 'Czy mogę przywieźć filtr osobiście z Leśnej?', a: 'Tak, to kilkanaście minut drogi. Zadzwoń wcześniej, żebyśmy mogli od razu przyjąć filtr na maszynę.' },
      { q: 'Czy czyścicie filtry z ciągników?', a: 'Tak, filtry DPF i katalizatory z maszyn rolniczych i budowlanych.' },
    ],
  },
  {
    slug: 'czyszczenie-dpf-jelenia-gora', nazwa: 'Jelenia Góra', wMiescie: 'w Jeleniej Górze', zMiasta: 'z Jeleniej Góry',
    km: 55, min: 55, trasa: 'drogą krajową nr 30 przez Gryfów Śląski',
    lokalnie: 'W Jeleniej Górze i Kotlinie Jeleniogórskiej auta jeżdżą po stromych drogach i krótkich odcinkach miejskich, a zimą długo pracują na zimnym silniku. To trudne warunki dla filtra DPF, który potrzebuje dłuższej, równej jazdy, żeby się wypalić.',
    dla: 'Warsztatom z Jeleniej Góry, które nie mają własnej maszyny do czyszczenia DPF, proponujemy stałą współpracę i odbiór filtrów kurierem.',
    faq: [
      { q: 'Jak wysłać filtr z Jeleniej Góry?', a: 'Zamów odbiór przez formularz. Kurier odbierze filtr z domu lub z warsztatu, a po czyszczeniu odwiezie go pod ten sam adres.' },
      { q: 'Ile trwa całość przy wysyłce kurierem?', a: `Czyszczenie trwa ${FIRMA.czasRealizacji}, do tego transport w obie strony. Zwykle filtr wraca w ciągu kilku dni roboczych.` },
    ],
  },
];

export const MIASTA_ROZBUDOWA = ['Lwówek Śląski', 'Świeradów-Zdrój', 'Gryfów Śląski'];

export const KATEGORIE = ['Objawy i kody błędów', 'Czyszczenie czy wymiana', 'Eksploatacja i zapobieganie', 'Ciężarowe i maszyny'];

export const WPISY = [
  {
    slug: 'objawy-zapchanego-filtra-dpf',
    foto: 'media/dpf-zapchany.jpg',
    tytul: 'Objawy zapchanego filtra DPF: 6 sygnałów, których nie warto ignorować',
    kategoria: 'Objawy i kody błędów',
    czas: 6,
    lead: 'Zapchany filtr DPF rzadko psuje się z dnia na dzień. Zwykle wcześniej daje kilka sygnałów, które łatwo zrzucić na pogodę albo gorsze paliwo. Im wcześniej je zauważysz, tym większa szansa, że wystarczy czyszczenie zamiast nowego filtra.',
    uslugi: ['czyszczenie-dpf-fap'],
    sekcje: [
      { h: 'Dlaczego filtr DPF się zapycha', p: ['Filtr cząstek stałych zatrzymuje sadzę ze spalin. Podczas dłuższej jazdy ze stałą prędkością sterownik podnosi temperaturę spalin i sadza się wypala. Przy krótkich trasach wypalanie nie ma szans się zakończyć.', 'Oprócz sadzy w filtrze zbiera się popiół z dodatków w oleju. Popiołu nie da się wypalić, dlatego nawet w aucie jeżdżącym w trasie filtr po latach traci drożność.'] },
      { h: '1. Kontrolka DPF lub komunikat o filtrze', p: ['To najczęstszy i najbardziej oczywisty sygnał. Sterownik widzi za duże przeciwciśnienie i prosi o jazdę, która pozwoli wypalić filtr. Jeśli kontrolka wraca co kilka dni, sama jazda trasą już nie pomoże.'] },
      { h: '2. Tryb awaryjny', p: ['Auto nagle traci moc i nie wkręca się powyżej 2500–3000 obr./min. Sterownik ogranicza silnik, żeby nie doszło do przegrzania lub uszkodzenia turbosprężarki. To moment, w którym warto przestać jeździć i zbadać filtr.'] },
      { h: '3. Spadek mocy bez komunikatu', p: ['Zanim pojawi się kontrolka, często spada dynamika. Auto gorzej przyspiesza pod górę i z obciążeniem. Wielu kierowców zauważa to dopiero przy wyprzedzaniu.'] },
      { h: '4. Większe spalanie', p: ['Zapchany filtr dławi wydech, a sterownik częściej uruchamia wypalanie, które samo zużywa dodatkowe paliwo. Wzrost spalania o litr na sto kilometrów bez innej przyczyny to sygnał ostrzegawczy.'] },
      { h: '5. Przerywane wypalanie', p: ['Wentylator chłodnicy pracuje po zgaszeniu silnika, obroty biegu jałowego są podniesione, czuć charakterystyczny zapach z wydechu. Jeśli wyłączasz auto w trakcie wypalania, proces zaczyna się od nowa.'] },
      { h: '6. Rośnie poziom oleju', p: ['Podczas wypalania część paliwa trafia do oleju silnikowego. Przy częstych, przerywanych wypalaniach olej się rozrzedza, a jego poziom na bagnecie rośnie. To groźne dla silnika, więc nie ignoruj tego objawu.'] },
      { h: 'Co zrobić, gdy widzisz te objawy', p: ['Najpierw sprawdź, czy przyczyną nie jest inna usterka: niesprawne wtryskiwacze, turbo podające olej lub zacięty EGR. Potem zbadaj przeciwciśnienie filtra. Jeśli wkład jest cały, czyszczenie przywraca drożność za ułamek ceny nowego filtra.'] },
    ],
  },
  {
    slug: 'czyszczenie-czy-wymiana-dpf',
    foto: 'media/przekroj-2.jpg',
    tytul: 'Czyszczenie, wypalanie czy nowy DPF? Porównanie kosztów i skuteczności',
    kategoria: 'Czyszczenie czy wymiana',
    czas: 5,
    lead: 'Gdy filtr DPF się zapcha, masz kilka dróg wyjścia. Różnią się kosztem, skutecznością i tym, jak długo spokój potrwa. Zestawiamy je obok siebie, łącznie z opcją, której nie polecamy.',
    uslugi: ['czyszczenie-dpf-fap'],
    porownanie: true,
    sekcje: [
      { h: 'Wypalanie serwisowe', p: ['Warsztat wymusza wypalanie komputerem diagnostycznym. Usuwa część sadzy, ale nie usuwa popiołu. Pomaga, gdy filtr jest zapchany niedawno i głównie sadzą. Przy filtrze z dużym przebiegiem efekt bywa krótkotrwały.'] },
      { h: 'Czyszczenie hydrodynamiczne', p: ['Filtr jest wymontowany i płukany na maszynie, która usuwa zarówno sadzę, jak i popiół. Przeciwciśnienie mierzymy przed i po, więc efekt jest udokumentowany. To rozwiązanie dla filtrów z całym wkładem.'] },
      { h: 'Nowy filtr', p: ['Najdroższa opcja, zwykle kilka tysięcy złotych za oryginał. Ma sens, gdy wkład jest pęknięty lub stopiony. Tanie zamienniki bywają nietrwałe, warto sprawdzać ich homologację.'] },
      { h: 'Wycięcie filtra', p: ['Tej usługi nie wykonujemy. Usunięcie DPF jest niezgodne z przepisami, grozi niezaliczonym przeglądem i karą przy kontroli drogowej, a auto po wycięciu trudniej sprzedać.'] },
      { h: 'Co wybrać', p: ['Jeśli filtr ma cały wkład, a przyczyna zapchania została usunięta, czyszczenie daje efekt zbliżony do nowego filtra przy znacznie niższym koszcie. Jeśli nie wiesz, w jakim stanie jest filtr, zbadamy go przed czyszczeniem i powiemy wprost.'] },
    ],
  },
  {
    slug: 'dlaczego-dpf-sie-zapycha',
    foto: 'media/dym.jpg',
    tytul: 'Dlaczego DPF się zapycha i jak temu zapobiec',
    kategoria: 'Eksploatacja i zapobieganie',
    czas: 5,
    lead: 'Czyszczenie przywraca filtrowi drożność, ale jeśli przyczyna zostanie w aucie, filtr zapcha się ponownie. Oto najczęstsze powody i to, co możesz zrobić na co dzień.',
    uslugi: ['czyszczenie-dpf-fap', 'czyszczenie-scr'],
    sekcje: [
      { h: 'Krótkie trasy', p: ['Filtr potrzebuje kilkunastu minut jazdy z równą prędkością, żeby się wypalić. Jeśli auto jeździ głównie po mieście, raz na tydzień lub dwa zrób dłuższą trasę drogą szybkiego ruchu.'] },
      { h: 'Niesprawne wtryskiwacze', p: ['Lejące wtryskiwacze produkują więcej sadzy, niż filtr jest w stanie wypalić. Przed czyszczeniem warto sprawdzić korekty wtrysków, inaczej efekt potrwa krótko.'] },
      { h: 'Turbosprężarka i odma', p: ['Olej przedostający się do układu wydechowego zalepia kanały filtra i zamienia się w popiół. Ślady oleju na wlocie filtra to sygnał, żeby sprawdzić turbo.'] },
      { h: 'Zawór EGR', p: ['Zacięty zawór EGR zaburza spalanie i zwiększa ilość sadzy. Jego czyszczenie lub naprawa często idzie w parze z czyszczeniem DPF.'] },
      { h: 'Niewłaściwy olej', p: ['Do aut z DPF stosuj olej o niskiej zawartości popiołów siarczanowych (normy low SAPS, np. ACEA C3). Zwykły olej szybciej zapełnia filtr popiołem.'] },
      { h: 'Przerywane wypalanie', p: ['Jeśli słyszysz wentylator po zgaszeniu silnika lub widzisz podniesione obroty, pozwól autu dokończyć wypalanie. Każde przerwanie oznacza start od nowa i więcej paliwa w oleju.'] },
    ],
  },
];

export const POROWNANIE = {
  kolumny: ['Wypalanie serwisowe', 'Czyszczenie hydrodynamiczne', 'Nowy filtr', 'Wycięcie DPF'],
  wiersze: [
    { cecha: 'Koszt', w: ['niski', 'średni', 'wysoki, kilka tys. zł', 'niski, ale z ryzykiem kar'] },
    { cecha: 'Usuwa sadzę', w: ['częściowo', 'tak', 'nie dotyczy', 'nie dotyczy'] },
    { cecha: 'Usuwa popiół', w: ['nie', 'tak', 'nie dotyczy', 'nie dotyczy'] },
    { cecha: 'Udokumentowany efekt', w: ['nie', 'tak, wydruk przed/po', 'tak', 'nie'] },
    { cecha: 'Zgodne z przepisami', w: ['tak', 'tak', 'tak', 'nie'] },
    { cecha: 'Przegląd techniczny', w: ['bez problemu', 'bez problemu', 'bez problemu', 'ryzyko negatywnego wyniku'] },
  ],
};

// Źródła zdjęć i filmów (tymczasowe, do podmiany na materiały z warsztatu)
export const ZRODLA = [
  { plik: 'dpf-zapchany.jpg', tytul: 'DPF vor Reinigung', autor: 'Michael KR', licencja: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:DPF_vor_Reinigung.JPG', zmiany: 'przycięte' },
  { plik: 'dpf-czysty.jpg', tytul: 'DPF nach Reinigung', autor: 'Michael KR', licencja: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:DPF_nach_Reinigung.JPG', zmiany: 'przycięte' },
  { plik: 'dpf-czolo.jpg', tytul: 'Siliziumkarbid-Partikelfilter', autor: 'Michael Kairo', licencja: 'domena publiczna', url: 'https://commons.wikimedia.org/wiki/File:Siliziumkarbid-Partikelfilter.jpg' },
  { plik: 'katalizator.jpg', tytul: 'DPF Sensoren Oxikat', autor: 'Michael KR', licencja: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:DPF_Sensoren_Oxikat_039.JPG' },
  { plik: 'scr.jpg', tytul: 'Hino Standardized SCR Unit', autor: 'z22', licencja: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Hino_Standardized_SCR_Unit.jpg' },
  { plik: 'wydech.jpg', tytul: 'FAP-Filter Peugeot', autor: 'Wikimedia Commons', licencja: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:FAP-Filter_Peugeot.jpg' },
  { plik: 'wklady.jpg', tytul: 'DPF Siliziumkarbid', autor: 'Michael KR', licencja: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:DPF_Siliziumkarbid.JPG' },
  { plik: 'przekroj.jpg', tytul: 'Diesel particulate filter 01', autor: 'Hatsukari715', licencja: 'domena publiczna', url: 'https://commons.wikimedia.org/wiki/File:Diesel_particulate_filter_01.JPG' },
  { plik: 'przekroj-2.jpg', tytul: 'Russfilter cutout EMS', autor: 'Wikimedia Commons', licencja: 'CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:Russfilter_cutout_EMS.jpg' },
  { plik: 'dpf-lkw.jpg', tytul: 'HJS Sintermetallfilter LKW Variante', autor: 'Michael KR', licencja: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:HJS_Sintermetallfilter_LKW_Variante.jpg' },
  { plik: 'hero-mechanik.mp4', tytul: 'An auto mechanic inspecting the undercarriage of a vehicle', autor: 'Pexels', licencja: 'licencja Pexels', url: 'https://www.pexels.com/video/an-auto-mechanic-inspecting-the-undercarrige-of-a-vehicle-8987009/' },
  { plik: 'hero-wydech.mp4', tytul: 'The exhaust pipes of a car under a lift', autor: 'Pexels', licencja: 'licencja Pexels', url: 'https://www.pexels.com/video/the-exhaust-pipes-of-a-car-under-a-lift-18019165/' },
  { plik: 'hero-myjka.mp4', tytul: 'Close-up of power sprayers', autor: 'Pexels', licencja: 'licencja Pexels', url: 'https://www.pexels.com/video/close-up-of-power-sprayers-9245565/' },
  { plik: 'dym.mp4', tytul: 'Close-up video of an exhaust pipe', autor: 'Pexels', licencja: 'licencja Pexels', url: 'https://www.pexels.com/video/close-up-video-of-a-exhaust-pipe-6160051/' },
];
