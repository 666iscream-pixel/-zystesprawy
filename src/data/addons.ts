/**
 * Usługi dodatkowe — katalog i ceny referencyjne.
 *
 * ⚠️ WAŻNE: firma Czyste Sprawy nie ma publikowanego cennika. Ceny poniżej
 * to punkt odniesienia zebrany z rynku (głównie cennik CleanWhale — platformy
 * sprzątającej działającej też w Poznaniu) i służą wyłącznie do zbudowania
 * ORIENTACYJNEGO kalkulatora, żeby klient miał jakikolwiek punkt odniesienia
 * zamiast zera informacji. NIE są to potwierdzone stawki Czyste Sprawy.
 *
 * Przed publikacją: właścicielka musi je przejrzeć i zatwierdzić albo
 * podać własne. Patrz README, sekcja "Cennik".
 */

export type Unit = 'szt' | 'm2' | 'godz' | 'usluga';

export type Addon = {
  id: string;
  label: string;
  category: 'agd' | 'okna-balkon' | 'tapicerka' | 'inne';
  /** null = brak ceny referencyjnej, wycena indywidualna. */
  price: number | null;
  unit: Unit;
  icon: string;
  /** Pokazywać w skróconym zestawie kalkulatora (najczęściej wybierane). */
  inCalculator?: boolean;
};

export const unitLabel: Record<Unit, string> = {
  szt: 'zł / szt.',
  m2: 'zł / m²',
  godz: 'zł / godz.',
  usluga: 'zł / usługa',
};

export const addons: Addon[] = [
  // --- AGD i kuchnia ---------------------------------------------------
  { id: 'piekarnik', label: 'Mycie piekarnika', category: 'agd', price: 40, unit: 'szt', icon: 'oven', inCalculator: true },
  { id: 'okap', label: 'Mycie okapu', category: 'agd', price: 40, unit: 'szt', icon: 'vent', inCalculator: true },
  { id: 'mikrofalowka', label: 'Mycie mikrofalówki', category: 'agd', price: 18, unit: 'szt', icon: 'microwave', inCalculator: true },
  { id: 'zmywarka', label: 'Czyszczenie zmywarki', category: 'agd', price: 50, unit: 'szt', icon: 'dishwasher', inCalculator: true },
  { id: 'lodowka-1d', label: 'Czyszczenie lodówki (1-drzwiowa)', category: 'agd', price: 40, unit: 'szt', icon: 'fridge', inCalculator: true },
  { id: 'lodowka-2d', label: 'Czyszczenie lodówki (2-drzwiowa)', category: 'agd', price: null, unit: 'szt', icon: 'fridge' },
  { id: 'pralka', label: 'Czyszczenie pralki', category: 'agd', price: null, unit: 'szt', icon: 'washer' },
  { id: 'maszyna-kawy', label: 'Mycie maszyny do kawy', category: 'agd', price: null, unit: 'szt', icon: 'coffee' },
  { id: 'naczynia', label: 'Mycie naczyń (ręczne)', category: 'agd', price: 25, unit: 'usluga', icon: 'dishes' },
  { id: 'szafki-kuchenne', label: 'Sprzątanie szafek kuchennych', category: 'agd', price: 65, unit: 'usluga', icon: 'cabinet', inCalculator: true },
  { id: 'szafa', label: 'Porządek i czyszczenie wnętrza szafy', category: 'agd', price: 30, unit: 'szt', icon: 'wardrobe', inCalculator: true },

  // --- Okna i balkon -----------------------------------------------------
  { id: 'okno-dodatkowe', label: 'Mycie okna (poza pakietem)', category: 'okna-balkon', price: 40, unit: 'szt', icon: 'window' },
  { id: 'okno-po-remoncie', label: 'Mycie okna po remoncie', category: 'okna-balkon', price: 60, unit: 'szt', icon: 'window' },
  { id: 'balustrada-szklana', label: 'Mycie balustrady balkonowej (szklanej)', category: 'okna-balkon', price: 20, unit: 'szt', icon: 'railing' },
  { id: 'balkon', label: 'Sprzątanie balkonu lub tarasu', category: 'okna-balkon', price: 35, unit: 'usluga', icon: 'balcony', inCalculator: true },
  { id: 'powierzchnia-po-remoncie', label: 'Dodatkowa powierzchnia po remoncie', category: 'okna-balkon', price: 10, unit: 'm2', icon: 'area' },

  // --- Pranie tapicerki i tekstyliów -------------------------------------
  { id: 'fotel', label: 'Pranie fotela', category: 'tapicerka', price: 55, unit: 'szt', icon: 'armchair' },
  { id: 'krzeslo', label: 'Pranie krzesła / taboretu', category: 'tapicerka', price: 22, unit: 'szt', icon: 'chair' },
  { id: 'fotel-biurowy', label: 'Pranie fotela biurowego', category: 'tapicerka', price: 22, unit: 'szt', icon: 'chair' },
  { id: 'zaglowek', label: 'Pranie tapicerowanego zagłówka łóżka', category: 'tapicerka', price: 130, unit: 'szt', icon: 'bed' },
  { id: 'wozek', label: 'Pranie tapicerki wózka / spacerówki', category: 'tapicerka', price: 66, unit: 'szt', icon: 'stroller' },
  { id: 'kanapa-2os', label: 'Pranie kanapy dwuosobowej', category: 'tapicerka', price: 165, unit: 'szt', icon: 'sofa', inCalculator: true },
  { id: 'kanapa-3os', label: 'Pranie kanapy trzyosobowej', category: 'tapicerka', price: 185, unit: 'szt', icon: 'sofa' },
  { id: 'naroznik-4os', label: 'Pranie narożnika (4 os.)', category: 'tapicerka', price: 199, unit: 'szt', icon: 'sofa' },
  { id: 'naroznik-56os', label: 'Pranie narożnika (5–6 os.)', category: 'tapicerka', price: 220, unit: 'szt', icon: 'sofa' },
  { id: 'naroznik-7os', label: 'Pranie narożnika (7+ os.)', category: 'tapicerka', price: 240, unit: 'szt', icon: 'sofa' },
  { id: 'materac-1os', label: 'Pranie materaca jednoosobowego', category: 'tapicerka', price: 70, unit: 'szt', icon: 'bed' },
  { id: 'materac-1os-2str', label: 'Pranie materaca jednoosobowego (obie strony)', category: 'tapicerka', price: 140, unit: 'szt', icon: 'bed' },
  { id: 'materac-2os', label: 'Pranie materaca dwuosobowego', category: 'tapicerka', price: 140, unit: 'szt', icon: 'bed' },
  { id: 'materac-2os-2str', label: 'Pranie materaca dwuosobowego (obie strony)', category: 'tapicerka', price: 280, unit: 'szt', icon: 'bed' },
  { id: 'dywan', label: 'Pranie dywanu', category: 'tapicerka', price: 17, unit: 'm2', icon: 'rug', inCalculator: true },
  { id: 'wykladzina', label: 'Pranie wykładziny', category: 'tapicerka', price: 17, unit: 'm2', icon: 'rug' },

  // --- Inne ---------------------------------------------------------------
  { id: 'prasowanie', label: 'Prasowanie', category: 'inne', price: 50, unit: 'godz', icon: 'iron', inCalculator: true },
  { id: 'kuweta', label: 'Sprzątanie kuwety', category: 'inne', price: 10, unit: 'usluga', icon: 'pet' },
  { id: 'dodatkowa-godzina', label: 'Dodatkowa godzina pracy', category: 'inne', price: 45, unit: 'godz', icon: 'clock' },
];

export const addonCategories: { id: Addon['category']; label: string; icon: 'oven' | 'window' | 'sofa' | 'sparkle' }[] = [
  { id: 'agd', label: 'AGD i kuchnia', icon: 'oven' },
  { id: 'okna-balkon', label: 'Okna i balkon', icon: 'window' },
  { id: 'tapicerka', label: 'Pranie tapicerki i tekstyliów', icon: 'sofa' },
  { id: 'inne', label: 'Inne', icon: 'sparkle' },
];

export function getAddon(id: string): Addon | undefined {
  return addons.find((a) => a.id === id);
}

export const pricingDisclaimer =
  'Ceny usług dodatkowych mają charakter orientacyjny i są punktem wyjścia do rozmowy — ostateczną kwotę potwierdzamy przed rozpoczęciem pracy.';
