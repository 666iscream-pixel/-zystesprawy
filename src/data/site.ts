/**
 * Dane firmy.
 *
 * Źródła (zweryfikowane): profil Fixly, wizytówka Panorama Firm.
 * ⚠️ Pola oznaczone TODO trzeba uzupełnić przed publikacją — patrz README.
 */

export const site = {
  name: 'Czyste Sprawy',
  legalName: 'Czyste Sprawy Yuliia Dubetska',
  owner: 'Yuliia Dubetska',
  tagline: 'Sprzątanie wnętrz i mycie okien',
  domain: 'https://czystesprawy.pl', // TODO: potwierdzić docelową domenę
  city: 'Poznań',

  // --- Kontakt ------------------------------------------------------------
  // Format międzynarodowy bez spacji dla linków.
  phone: '+48880384930',
  phoneDisplay: '+48 880 384 930',
  whatsapp: '48880384930',
  email: 'kontakt@czystesprawy.pl', // TODO

  // --- Adres (Panorama Firm) ---------------------------------------------
  address: {
    street: 'ul. Żmigrodzka 41/49 lok. 312',
    postalCode: '60-171',
    city: 'Poznań',
    district: 'Grunwald',
    region: 'wielkopolskie',
    country: 'PL',
  },

  /** Współrzędne przybliżone — Poznań Grunwald. Do uściślenia przy mapie. */
  geo: { lat: 52.3959, lng: 16.8709 },

  // --- Rejestry -----------------------------------------------------------
  nip: '7812087638', // potwierdzone w Panorama Firm
  regon: '', // TODO

  hours: 'Pn–Sb 8:00–20:00', // TODO: potwierdzić

  /**
   * Dowody społeczne (stan na sierpień 2026, profil Fixly).
   * ⚠️ Na życzenie klientki lata doświadczenia i ocena Fixly NIE są już
   * eksponowane w interfejsie (mało opinii jak na widoczny banner) —
   * zostają jednak w danych i w schema.org (aggregateRating), bo to
   * niewidoczna korzyść SEO bez wizualnego "krzyczenia" liczbami.
   */
  proof: {
    yearsExperience: 4,
    rating: 5.0,
    reviewsCount: 2,
    verifiedInGus: true,
  },

  /** Ubezpieczenie OC — podane przez właścicielkę, silny sygnał zaufania. */
  insurance: {
    type: 'OC',
    amount: '1 000 000 zł',
    label: 'Ubezpieczenie OC do 1 000 000 zł',
  },

  // --- Obecność w sieci ---------------------------------------------------
  fixly: 'https://fixly.pl/profil/hzeac18r',
  panoramaFirm:
    'https://panoramafirm.pl/wielkopolskie,,pozna%C5%84,grunwald,%C5%BCmigrodzka,41_49_lok._312/czyste_sprawy_yuliia_dubetska-baibae_mko.html',
  // TODO: wizytówka Google — założyć i wstawić link
  googleBusiness: '',

  /** Obszar działania — dokładnie ten z profilu Fixly. */
  areaLabel: 'Poznań i okolice',
  areaServed: [
    'Poznań',
    'Swarzędz',
    'Luboń',
    'Mosina',
    'Śrem',
    'Kościan',
    'Środa Wielkopolska',
    'Szamotuły',
    'Oborniki',
    'Grodzisk Wielkopolski',
    'powiat śremski',
  ],
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waDefaultMessage =
  'Dzień dobry! Piszę ze strony czystesprawy.pl — chciał(a)bym zapytać o wycenę sprzątania.';
