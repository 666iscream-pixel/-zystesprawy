/**
 * Opinie klientów — przepisane 1:1 z profilu Fixly.
 * Nic tu nie jest wymyślone. Nowych opinii nie dopisujemy bez źródła.
 */

export type Review = {
  author: string;
  city: string;
  service: string;
  date: string; // ISO
  dateLabel: string;
  text: string;
  source: 'Fixly';
  rating: 5;
};

export const reviews: Review[] = [
  {
    author: 'Julianna',
    city: 'Poznań',
    service: 'Sprzątanie mieszkań i domów',
    date: '2026-04-15',
    dateLabel: '15 kwietnia 2026',
    text: 'Pani sprzątająca pojawiła się o czasie, sprzątnęła co trzeba szybko i porządnie.',
    source: 'Fixly',
    rating: 5,
  },
  {
    author: 'Maria',
    city: 'Poznań',
    service: 'Mycie okien',
    date: '2025-12-12',
    dateLabel: '12 grudnia 2025',
    text: 'Usługa wykonana błyskawicznie i perfekcyjnie.',
    source: 'Fixly',
    rating: 5,
  },
];
