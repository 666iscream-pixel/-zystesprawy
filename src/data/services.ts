/**
 * Usługi.
 *
 * Rozszerzone z 3 do 5 pozycji na podstawie materiałów referencyjnych
 * (struktura usług konkurencji — Extra Cleaning Warszawa) i wprost
 * z życzenia właścicielki. Zakresy prac to standard branżowy —
 * ⚠️ DO POTWIERDZENIA przez właścicielkę przed publikacją (README).
 *
 * Cen bazowych NIE podajemy jako ostatecznych: firma nie ma publikowanego
 * cennika. Orientacyjne widełki (kalkulator) liczone są z cen referencyjnych
 * rynku — patrz `src/data/pricing.ts` i README.
 */

export type ScopeGroup = { title: string; items: string[] };

export type Service = {
  slug: string;
  name: string;
  short: string;
  lead: string;
  forWhom: string;
  icon: 'home' | 'window' | 'office' | 'renovation' | 'keys';
  groups: ScopeGroup[];
  notes: string[];
  order: number;
};

export const services: Service[] = [
  {
    slug: 'sprzatanie-mieszkan-i-domow',
    name: 'Sprzątanie mieszkań i domów',
    short: 'Mieszkania i domy',
    lead: 'Regularne utrzymanie porządku albo jednorazowe sprzątanie generalne — zależnie od tego, czego dom potrzebuje.',
    forWhom:
      'Dla osób, które nie chcą oddawać weekendów sprzątaniu, oraz przed ważnymi okazjami: przyjazdem gości, świętami, przeprowadzką.',
    icon: 'home',
    order: 1,
    groups: [
      {
        title: 'Pokoje i przestrzeń wspólna',
        items: [
          'Odkurzanie podłóg, dywanów i wykładzin',
          'Mycie podłóg',
          'Ścieranie kurzu ze wszystkich dostępnych powierzchni',
          'Mycie drzwi, klamek, listew przypodłogowych i parapetów',
          'Czyszczenie włączników światła i gniazdek',
          'Uporządkowanie przestrzeni wspólnych',
        ],
      },
      {
        title: 'Kuchnia',
        items: [
          'Mycie blatów roboczych i ścianek kuchennych',
          'Mycie zlewu i baterii',
          'Czyszczenie płyty grzewczej i frontów szafek',
          'Mycie sprzętu AGD z zewnątrz',
          'Usuwanie tłustych zabrudzeń z powierzchni kuchennych',
          'Mycie podłogi',
        ],
      },
      {
        title: 'Łazienka',
        items: [
          'Mycie i dezynfekcja toalety',
          'Umywalka, bateria, prysznic lub wanna',
          'Usuwanie kamienia i osadów z armatury',
          'Mycie luster i glazury',
          'Mycie podłogi',
        ],
      },
    ],
    notes: [
      'Sprzątanie generalne obejmuje dodatkowo trudniejsze zabrudzenia, fugi oraz przestrzeń pod odsuwanymi meblami — wyceniamy je osobno.',
      'Mycie okien to usługa dodatkowa, rozliczana za okno.',
      'Wnętrza sprzętu AGD (piekarnik, lodówka, mikrofalówka) — na życzenie, patrz usługi dodatkowe.',
    ],
  },

  {
    slug: 'sprzatanie-po-remoncie',
    name: 'Sprzątanie po remoncie',
    short: 'Po remoncie',
    lead: 'Usuwamy pył budowlany, resztki farby, silikonu i kleju — i doprowadzamy wnętrze do stanu, w którym można się wprowadzić.',
    forWhom:
      'Po zakończonym remoncie lub wykończeniu mieszkania od dewelopera, kiedy ekipa budowlana już wyszła, a wnętrze nadal nie nadaje się do zamieszkania.',
    icon: 'renovation',
    order: 2,
    groups: [
      {
        title: 'Usuwanie zabrudzeń poremontowych',
        items: [
          'Dokładne usuwanie pyłu budowlanego ze wszystkich dostępnych powierzchni',
          'Usuwanie śladów po taśmach malarskich, naklejkach oraz kleju',
          'Usuwanie pozostałości farby i silikonu — w zakresie bezpiecznym dla powierzchni',
          'Usuwanie kurzu i pyłu z podłóg, ścian i mebli',
        ],
      },
      {
        title: 'Wykończenie i detale',
        items: [
          'Mycie drzwi, futryn, parapetów, listew przypodłogowych i klamek',
          'Czyszczenie włączników światła i gniazdek',
          'Czyszczenie blatów i widocznych powierzchni',
          'Czyszczenie mebli i sprzętów AGD z zewnątrz',
        ],
      },
      {
        title: 'Kuchnia i łazienka',
        items: [
          'Mycie blatów, zlewu i armatury',
          'Usuwanie kurzu i resztek farby oraz pyłu z płytek i fug',
          'Dokładne odkurzanie i mycie podłóg we wszystkich pomieszczeniach',
        ],
      },
    ],
    notes: [
      'Mycie okien po remoncie (z resztkami farby, kleju i taśm) to usługa dodatkowa, wyceniana osobno — patrz cennik dodatków.',
      'Pozostałości farby i silikonu usuwamy tylko w zakresie bezpiecznym dla powierzchni — nie ryzykujemy uszkodzenia paneli, fug czy ram.',
    ],
  },

  {
    slug: 'mycie-okien',
    name: 'Mycie okien',
    short: 'Mycie okien',
    lead: 'Szyby, ramy, skrzydła i parapety. Bez smug i bez zacieków na ościeżnicach.',
    forWhom:
      'Sezonowo wiosną i jesienią, po remoncie, przed wynajmem albo zawsze wtedy, gdy światło przestaje wpadać tak, jak powinno.',
    icon: 'window',
    order: 3,
    groups: [
      {
        title: 'Zakres',
        items: [
          'Mycie szyb z obu stron',
          'Mycie ram i skrzydeł okiennych',
          'Czyszczenie parapetów wewnętrznych',
          'Przetarcie uszczelek i przestrzeni pod skrzydłem',
          'Osuszenie i wypolerowanie szyb do braku smug',
        ],
      },
    ],
    notes: [
      'Wycena zależy od liczby okien, typu ram i liczby skrzydeł — dlatego liczymy za okno, a nie za metr.',
      'Nie myjemy okien od zewnątrz na wysokości wymagającej dostępu linowego lub podnośnika.',
      'Okna po remoncie, z resztkami farby, kleju czy taśm, wyceniamy jako osobną pozycję — patrz cennik dodatków.',
    ],
  },

  {
    slug: 'sprzatanie-biur',
    name: 'Sprzątanie biur, firm i instytucji',
    short: 'Biura i firmy',
    lead: 'Regularna obsługa biur, budynków biurowych i obiektów produkcyjnych — rano lub wieczorem, bez zakłócania pracy zespołu.',
    forWhom:
      'Małe i średnie biura, gabinety, salony, lokale usługowe, instytucje oraz obiekty produkcyjne i przemysłowe, które potrzebują stałego, przewidywalnego standardu czystości.',
    icon: 'office',
    order: 4,
    groups: [
      {
        title: 'Stanowiska pracy',
        items: [
          'Ścieranie kurzu z biurek, szafek i sprzętu biurowego',
          'Odkurzanie podłóg i wykładzin',
          'Mycie podłóg',
          'Opróżnianie koszy i wymiana worków',
        ],
      },
      {
        title: 'Sanitariaty i kuchnia',
        items: [
          'Mycie i dezynfekcja toalet oraz umywalek',
          'Uzupełnianie i porządkowanie strefy sanitarnej',
          'Porządek w aneksie kuchennym',
          'Mycie sprzętu AGD z zewnątrz',
        ],
      },
      {
        title: 'Części wspólne',
        items: [
          'Mycie drzwi, klamek i przeszkleń wewnętrznych',
          'Ścieranie kurzu z parapetów i listew',
          'Utrzymanie porządku w recepcji i korytarzach',
        ],
      },
      {
        title: 'Posadzki i obiekty produkcyjne',
        items: [
          'Czyszczenie posadzek biurowych i przemysłowych',
          'Sprzątanie hal i obiektów produkcyjnych',
          'Mycie elewacji szklanych i przeszkleń wielkopowierzchniowych',
        ],
      },
    ],
    notes: [
      'Zakres i częstotliwość ustalamy po bezpłatnej wizycie w obiekcie — pakiety abonamentowe: patrz oferta dla firm.',
      'Obiekty produkcyjne i przemysłowe wyceniamy indywidualnie — zakres zależy od rodzaju posadzki i powierzchni.',
      'Pracujemy poza godzinami pracy biura, jeśli tak jest wygodniej.',
      'Rozliczenie na fakturę, w cyklu miesięcznym.',
    ],
  },

  {
    slug: 'sprzatanie-po-wynajmie',
    name: 'Sprzątanie po wynajmie krótkoterminowym',
    short: 'Po wynajmie',
    lead: 'Szybkie przygotowanie mieszkania między gośćmi — dla właścicieli lokali na wynajem krótkoterminowy i Airbnb.',
    forWhom:
      'Właściciele i zarządcy mieszkań wynajmowanych krótkoterminowo, którzy potrzebują niezawodnego sprzątania między turami gości, często tego samego dnia.',
    icon: 'keys',
    order: 5,
    groups: [
      {
        title: 'Przygotowanie do kolejnego gościa',
        items: [
          'Zmiana i poprawienie pościeli oraz ręczników (jeśli dostarczone)',
          'Dokładne sprzątanie łazienki i kuchni',
          'Mycie naczyń pozostawionych przez poprzednich gości',
          'Odkurzanie i mycie podłóg we wszystkich pomieszczeniach',
          'Wyniesienie śmieci i uzupełnienie koszy na worki',
          'Sprawdzenie i zgłoszenie usterek lub braków',
        ],
      },
    ],
    notes: [
      'Usługa działa najlepiej przy stałej współpracy — ustalony harmonogram między wymeldowaniem a zameldowaniem.',
      'Pranie pościeli i ręczników poza lokalem — do ustalenia indywidualnie.',
      'Przy krótkim oknie czasowym między gośćmi termin potwierdzamy z wyprzedzeniem.',
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/**
 * Czego nie robimy — wprost od właścicielki. Wyświetlane na każdej stronie
 * usługi i w zasadach współpracy, żeby nie było niedomówień.
 */
export const exclusions = [
  'Nie przenosimy mebli',
  'Nie czyścimy rolet i żaluzji',
  'Nie myjemy żyrandoli',
  'Nie myjemy klatki schodowej',
  'Nie myjemy sufitów',
  'Nie dezynfekujemy pomieszczenia',
];

/**
 * Konkretne, sprawdzalne atuty — zastępują ogólnikowe hasła.
 * Ubezpieczenie OC dodane osobno w src/data/site.ts (silniejszy sygnał,
 * eksponowany w pasku zaufania).
 */
export const usp = [
  { title: 'Profesjonalny sprzęt', icon: 'tool' },
  { title: 'Doświadczona ekipa sprzątająca', icon: 'team' },
  { title: 'Najwyższa jakość wykonanej usługi', icon: 'sparkle' },
  { title: 'Konkurencyjne ceny', icon: 'tag' },
  { title: 'Bezpieczeństwo', icon: 'shield' },
  { title: 'Gwarancja satysfakcji', icon: 'check' },
  { title: 'Indywidualne podejście do klienta', icon: 'heart' },
  { title: 'Ubezpieczenie OC 1 000 000 zł', icon: 'insurance' },
] as const;

export const alwaysIncluded = [
  'Bezpłatna wycena',
  'Własny sprzęt i środki',
  'Wynoszenie śmieci',
  'Ustalony zakres na piśmie',
];
