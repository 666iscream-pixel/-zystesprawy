/**
 * Usługi.
 *
 * Zestaw usług pochodzi z profilu Fixly (dokładnie trzy). Zakresy prac to
 * standard branżowy spisany tak, żeby był konkretny i sprawdzalny —
 * ⚠️ DO POTWIERDZENIA przez właścicielkę przed publikacją (README).
 *
 * Cen NIE podajemy: firma nie ma opublikowanego cennika ("Brak cennika"
 * na Fixly), a wymyślanie stawek byłoby wprowadzaniem klienta w błąd.
 * Zamiast tego prowadzimy do bezpłatnej wyceny.
 */

export type ScopeGroup = { title: string; items: string[] };

export type Service = {
  slug: string;
  name: string;
  short: string;
  lead: string;
  forWhom: string;
  icon: 'home' | 'window' | 'office';
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
      'Wnętrza sprzętu AGD (piekarnik, lodówka, mikrofalówka) — na życzenie, po wcześniejszym ustaleniu.',
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
    order: 2,
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
      'Okna po remoncie, z resztkami farby, kleju czy taśm, wyceniamy indywidualnie — to bardziej czasochłonne niż samo mycie.',
    ],
  },

  {
    slug: 'sprzatanie-biur',
    name: 'Sprzątanie biur',
    short: 'Biura',
    lead: 'Regularna obsługa biur, gabinetów i lokali usługowych — rano lub wieczorem, bez zakłócania pracy zespołu.',
    forWhom:
      'Małe i średnie biura, gabinety, salony i studia, które potrzebują stałego, przewidywalnego standardu czystości.',
    icon: 'office',
    order: 3,
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
    ],
    notes: [
      'Zakres i częstotliwość ustalamy po bezpłatnej wizycie w obiekcie.',
      'Pracujemy poza godzinami pracy biura, jeśli tak jest wygodniej.',
      'Rozliczenie na fakturę, w cyklu miesięcznym.',
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Obietnice, które da się sprawdzić — bez ogólników typu „profesjonalizm”. */
export const promises = [
  {
    title: '4 lata doświadczenia',
    body: 'Firma działa od czterech lat i jest zweryfikowana w rejestrze GUS. Za każde zlecenie odpowiada konkretna osoba, nie infolinia.',
  },
  {
    title: 'Bezpłatna wycena przed startem',
    body: 'Cenę ustalamy przed rozpoczęciem pracy — na podstawie metrażu, zakresu i zdjęć. Bez dopłat wymyślonych na miejscu.',
  },
  {
    title: 'Własny sprzęt i środki',
    body: 'Przyjeżdżamy z profesjonalnym sprzętem i środkami dobranymi do rodzaju powierzchni. Nie musisz nic przygotowywać.',
  },
  {
    title: 'Indywidualne podejście',
    body: 'Zakres ustalamy pod konkretne mieszkanie czy biuro, a nie według jednego uniwersalnego szablonu.',
  },
];

export const alwaysIncluded = [
  'Bezpłatna wycena',
  'Własny sprzęt i środki',
  'Wynoszenie śmieci',
  'Ustalony zakres na piśmie',
];
