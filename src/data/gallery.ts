/**
 * Realizacje — prawdziwe zdjęcia przed/po. Pliki w `public/galeria/`.
 * Dopisywać tu kolejne, w miarę jak będą przychodzić od klientki.
 */

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export const gallery: GalleryItem[] = [
  {
    src: '/galeria/bateria-umywalkowa.jpg',
    alt: 'Bateria umywalkowa pokryta osadem przed i po czyszczeniu',
    caption: 'Bateria umywalkowa — kamień i osad z wody',
  },
  {
    src: '/galeria/kabina-prysznicowa.jpg',
    alt: 'Szklana kabina prysznicowa przed i po czyszczeniu',
    caption: 'Kabina prysznicowa — szkło bez zacieków',
  },
];
