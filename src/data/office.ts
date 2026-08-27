/**
 * Oferta B2B — abonamenty dla firm.
 *
 * ⚠️ Brak jakichkolwiek danych o cenach B2B (w przeciwieństwie do usług
 * domowych, dla których istnieją choć referencyjne stawki rynkowe).
 * Dlatego pakiety różnią się WYŁĄCZNIE zakresem i częstotliwością —
 * bez wymyślonych kwot. Cena zawsze "po bezpłatnej wizycie w obiekcie".
 */

export const officeIntro = {
  eyebrow: 'Dla firm',
  title: 'Stały porządek bez pilnowania',
  lead: 'Regularne sprzątanie biur, gabinetów i lokali usługowych w Poznaniu i okolicy — rano lub wieczorem, bez zakłócania pracy zespołu.',
};

export const officePackages = [
  {
    id: 'podstawowy',
    name: 'Pakiet Podstawowy',
    tagline: 'Regularne utrzymanie porządku',
    forWhom:
      'Małe biura i gabinety, które potrzebują stałego, przewidywalnego sprzątania bez rozbudowanych dodatków.',
    frequency: 'Sprzątanie 1× w tygodniu (do ustalenia)',
    items: [
      'Ścieranie kurzu z biurek, szafek i sprzętu biurowego',
      'Odkurzanie i mycie podłóg',
      'Mycie i dezynfekcja toalet oraz umywalek',
      'Opróżnianie koszy i wymiana worków',
      'Porządek w aneksie kuchennym',
    ],
    featured: false,
  },
  {
    id: 'komfort',
    name: 'Pakiet Komfort',
    badge: 'Więcej niż podstawa',
    tagline: 'Wyższa częstotliwość i dodatkowa opieka',
    forWhom:
      'Biura z większym ruchem, salony i studia, gdzie zależy na wyższym standardzie i częstszej obsłudze.',
    frequency: 'Sprzątanie 2–3× w tygodniu (do ustalenia)',
    items: [
      'Wszystko z Pakietu Podstawowego',
      'Mycie sprzętu AGD w kuchni (mikrofalówka, zmywarka)',
      'Uzupełnianie materiałów higienicznych (ręczniki, mydło, papier)',
      'Mycie drzwi, klamek i przeszkleń wewnętrznych',
      'Utrzymanie porządku w recepcji i częściach wspólnych',
    ],
    featured: true,
  },
] as const;

export const officeSteps = [
  { title: 'Zgłoszenie', body: 'Piszesz metraż, rodzaj obiektu i preferowane godziny sprzątania.' },
  { title: 'Bezpłatna wizyta', body: 'Oglądamy obiekt i ustalamy realny zakres prac — bez zobowiązań.' },
  { title: 'Wycena i umowa', body: 'Konkretna cena na piśmie, dopasowana do obiektu i częstotliwości.' },
  { title: 'Stała obsługa', body: 'Rozliczenie na fakturę, w cyklu miesięcznym.' },
];
