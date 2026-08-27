/**
 * Cennik orientacyjny — jedyne źródło prawdy dla kalkulatora.
 *
 * ⚠️ KLUCZOWE ZASTRZEŻENIE: firma Czyste Sprawy nie publikuje własnego
 * cennika (na Fixly widnieje wprost „Brak cennika”). Widełki poniżej to
 * ORIENTACYJNE stawki rynkowe dla Poznania, zebrane po to, żeby kalkulator
 * miał jakikolwiek punkt odniesienia zamiast zera informacji — a nie
 * potwierdzone ceny właścicielki. Przed publikacją MUSI je zaakceptować
 * albo zastąpić własnymi. Patrz README.
 */

export type Range = { from: number; to: number | null };

export const roomTiers = [
  { id: '1', label: '1 pokój', hint: 'kawalerka, do ~35 m²' },
  { id: '2', label: '2 pokoje', hint: 'ok. 35–55 m²' },
  { id: '3', label: '3 pokoje', hint: 'ok. 55–75 m²' },
  { id: '4', label: '4 pokoje i więcej', hint: 'od ~75 m²' },
] as const;

export type RoomTierId = (typeof roomTiers)[number]['id'];

/** Usługi objęte kalkulatorem pokojowym (biura i po wynajmie — osobne ścieżki). */
export const calculatorServices = [
  { slug: 'sprzatanie-mieszkan-i-domow', label: 'Sprzątanie mieszkań i domów' },
  { slug: 'sprzatanie-po-remoncie', label: 'Sprzątanie po remoncie' },
  { slug: 'sprzatanie-po-wynajmie', label: 'Sprzątanie po wynajmie krótkoterminowym' },
] as const;

export const priceMatrix: Record<string, Record<RoomTierId, Range>> = {
  'sprzatanie-mieszkan-i-domow': {
    '1': { from: 150, to: 200 },
    '2': { from: 200, to: 260 },
    '3': { from: 260, to: 330 },
    '4': { from: 330, to: null },
  },
  'sprzatanie-po-remoncie': {
    '1': { from: 350, to: 450 },
    '2': { from: 450, to: 600 },
    '3': { from: 600, to: 750 },
    '4': { from: 750, to: null },
  },
  'sprzatanie-po-wynajmie': {
    '1': { from: 120, to: 160 },
    '2': { from: 160, to: 200 },
    '3': { from: 200, to: 260 },
    '4': { from: 260, to: null },
  },
};

/** Mycie okien liczone osobno, za sztukę — niezależnie od pokoi. */
export const windowPrice: Range = { from: 35, to: 55 };

export function formatRange(r: Range): string {
  return r.to === null ? `od ${r.from} zł` : `${r.from}–${r.to} zł`;
}

export function zl(n: number): string {
  return `${n.toLocaleString('pl-PL')} zł`;
}
