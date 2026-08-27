# Czyste Sprawy — strona firmowa

Statyczna strona firmy sprzątającej **Czyste Sprawy Yuliia Dubetska** (Poznań).
Sprzątanie mieszkań, domów i biur, po remoncie, po wynajmie krótkoterminowym
oraz mycie okien.

**Stack:** Astro 5 (SSG) · Tailwind CSS 4 · zero frameworków JS na froncie.

---

## Uruchomienie

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

> ⚠️ Wersje zależności przypięte. Nowsze Astro/Vite korzystają z rolldown,
> który wymaga Node ≥ 20.19. Projekt stoi na Astro 5.6 + Vite 6.

---

## Historia zmian (skrót)

1. **Wersja pierwotna** — 3 usługi z profilu Fixly, kolor marki jako dominanta
   (ciemnozielone tło większości sekcji i footera), kalkulator zastąpiony
   formularzem wyceny (brak jakiegokolwiek cennika u klientki).
2. **Korekta po review klienta** — właścicielka podesłała dodatkowe dane
   (ubezpieczenie OC, pełna lista wykluczeń, katalog usług dodatkowych z
   cenami referencyjnymi, struktura usług konkurencji) i poprosiła o zmiany
   opisane niżej. Ta wersja README dotyczy stanu **po korekcie**.

---

## Co zmieniło się w korekcie

### Paleta kolorów

Ciemna zieleń przestała być tłem dużych sekcji i stała się **akcentem**:
logo, przyciski, wąskie pasy zaufania. Dodano jasną szałwię/miętę
(`--color-sage`) do kart „dlaczego my” i luźniejszych bloków, żeby strona nie
kojarzyła się z ciężkim, butelkowym zielonym blokiem na każdym ekranie.
Footer z ciemnozielonego zamienił się na jasny (ivory), z cienkimi liniami
działowymi zamiast kolejnej ramki.

Zobacz `src/styles/global.css` — komentarz przy `@theme` tłumaczy zasadę.

### Usunięte z interfejsu (na życzenie klientki)

- **„4 lata doświadczenia”** — zniknęło z górnego paska. Dane zostają w
  `site.ts` (`proof.yearsExperience`) i są nadal widoczne w faktach na `/o-nas`.
- **Ocena 5.0 na Fixly** — usunięta z górnego paska, strony głównej i
  `/kontakt`. Firma ma tylko 2 opinie, więc eksponowanie gwiazdek działało na
  niekorzyść. Dane zostają w `site.ts` i w `schema.org` (niewidoczna korzyść
  SEO), a strona `/opinie` istnieje, ale **nie jest linkowana z nawigacji**
  (ma `noindex`, dostępna tylko z stopki).
- **Prawy panel „w liczbach” na stronie głównej** — usunięty.
- **Sekcja „Konkret zamiast obietnic”** — usunięta, zastąpiona siatką ikon
  „Osiem powodów, żeby zaufać” (patrz niżej).
- **Opinie na stronie głównej** — usunięte.

### Dodane

- **Ubezpieczenie OC 1 000 000 zł** — nowa, silna informacja od klientki.
  Widoczne w pasku zaufania na stronie głównej i w faktach na `/o-nas`.
- **Dwie nowe usługi**: „Sprzątanie po remoncie” i „Sprzątanie po wynajmie
  krótkoterminowym” (na podstawie struktury usług konkurencji —
  Extra Cleaning Warszawa). Usług jest teraz **5**, nie 3.
- **„Czego nie robimy”** (`src/data/services.ts` → `exclusions`) — wprost od
  klientki: nie przenosimy mebli, nie czyścimy rolet/żaluzji, nie myjemy
  żyrandoli/klatki schodowej/sufitów, nie dezynfekujemy pomieszczeń.
  Wyświetlane na `/uslugi` i na każdej stronie usługi.
- **Katalog usług dodatkowych** (`src/data/addons.ts`, ~30 pozycji: AGD,
  okna/balkon, pranie tapicerki, inne) — patrz zastrzeżenie o cenach niżej.
- **Kalkulator orientacyjny** (`/kalkulator`) — wybór usługi + liczba pokoi +
  liczba okien + dodatki → widełki + CTA na WhatsApp. Osobna od formularza
  `/wycena` (dokładniejszy, do bezpośredniego kontaktu).
- **`/dla-firm`** — dwa pakiety abonamentowe (Podstawowy / Komfort), różniące
  się WYŁĄCZNIE zakresem i częstotliwością, bez wymyślonych cen — zawsze
  „wycena po bezpłatnej wizycie” (brak jakichkolwiek danych o stawkach B2B).
- **`/galeria`** i **`/blog`** — świadome zaślepki (`noindex`), z listą tego,
  co się w nich znajdzie.
- **Przełącznik języka PL/UK/RU** w nagłówku — zaślepka bez tłumaczeń
  (klientka poprosiła o wersje ukraińską i rosyjską, bez angielskiej).
  Każda pozycja poza PL oznaczona „wkrótce”.
- **Zdjęcie właścicielki** na `/o-nas` (`public/brand/team-photo.webp`) —
  plik od klientki, nieprzycięty na jej wyraźną prośbę.
- Nawigacja: `Usługi · Kalkulator · Dla firm · Galeria · Blog · O nas · Kontakt`.

---

## 🔴 Kluczowe zastrzeżenie: skąd wzięły się ceny

Firma **nie ma i nigdy nie miała** opublikowanego cennika (na Fixly wprost:
„Brak cennika”). Dwa źródła cen w tym projekcie mają różny poziom pewności:

| Źródło | Co | Pewność |
| --- | --- | --- |
| `src/data/addons.ts` | ~30 usług dodatkowych z cenami | **Referencyjne** — zebrane głównie z cennika CleanWhale (platforma działająca też w Poznaniu). Podane przez klientkę jako punkt wyjścia, NIE jako jej własne stawki. |
| `src/data/pricing.ts` | Widełki bazowe wg liczby pokoi dla 3 usług domowych | **Orientacyjne** — oszacowane na podstawie ogólnych stawek rynkowych dla Poznania. Nikt (ani klientka, ani źródło zewnętrzne) ich nie potwierdził. |

**Przed publikacją właścicielka musi:**
1. przejrzeć `pricing.ts` i `addons.ts` wiersz po wierszu,
2. zaakceptować, poprawić albo usunąć każdą liczbę,
3. dopiero wtedy kalkulator (`/kalkulator`) przestaje być ryzykiem, a staje
   się realnym narzędziem sprzedażowym.

Do czasu potwierdzenia — kalkulator jasno komunikuje „orientacyjnie” i zawsze
kończy się linkiem do `/wycena` (formularz bez żadnych wbudowanych cen,
budujący wiadomość do wysłania).

---

## Do potwierdzenia przez właścicielkę

| Co | Gdzie | Status |
| --- | --- | --- |
| **Ceny w `pricing.ts` i `addons.ts`** | patrz sekcja wyżej | referencyjne/orientacyjne, nie potwierdzone |
| **Numer telefonu** | `src/data/site.ts` | placeholder `+48 000 000 000` |
| **E-mail** | `src/data/site.ts` | placeholder |
| **Godziny pracy** | `src/data/site.ts` | wpisane „Pn–Sb 8:00–20:00” — zgadza się? |
| **REGON** | `src/data/site.ts` | puste |
| **Domena** | `src/data/site.ts`, `astro.config.mjs` | założone `czystesprawy.pl` |
| **Zakresy usług (opisy prac)** | `src/data/services.ts` | standard branżowy — do potwierdzenia |
| **Logo w wektorze** | `public/brand/` | mamy tylko PNG 310×310 i zdjęcie `team-photo.webp` od klientki |
| **Pakiety B2B (`/dla-firm`)** | `src/data/office.ts` | tylko zakres i częstotliwość, zero cen — czy to wystarczy, czy klientka chce jednak podać widełki? |

---

## Struktura

```
src/
├── data/
│   ├── site.ts        dane firmy, kontakt, obszar, dowody, ubezpieczenie OC
│   ├── services.ts    5 usług + zakresy + wykluczenia + USP (8 haseł)
│   ├── pricing.ts      ⚠️ ceny orientacyjne — patrz zastrzeżenie wyżej
│   ├── addons.ts        ⚠️ ceny referencyjne — patrz zastrzeżenie wyżej
│   ├── office.ts       pakiety B2B, bez cen
│   ├── reviews.ts      2 opinie z Fixly, 1:1
│   └── faq.ts
├── components/
│   ├── Icon.astro      jeden zestaw ikon (usługi, USP, kategorie dodatków)
│   ├── Calculator.astro
│   ├── LangSwitcher.astro   zaślepka PL/UK/RU
│   ├── EmptySection.astro   szablon dla /galeria i /blog
│   └── Logo, Header, Footer, StickyBar, Reviews, Faq, Cta…
├── layouts/BaseLayout.astro
└── pages/
    ├── index.astro
    ├── uslugi/index.astro · uslugi/[slug].astro   (5 podstron)
    ├── kalkulator.astro   ← kalkulator orientacyjny + pełny cennik dodatków
    ├── wycena.astro       ← formularz bez wbudowanych cen
    ├── dla-firm.astro
    ├── galeria.astro · blog/index.astro   (zaślepki, noindex)
    ├── opinie.astro   (bez linku w nawigacji, noindex)
    ├── o-nas.astro · kontakt.astro · faq.astro · 404.astro
```

Treści zmienia się wyłącznie w `src/data/`.

---

## System wizualny

Wyprowadzony z logotypu (monogram CS). Po korekcie: **ciemna zieleń jako
akcent**, nie dominanta.

| Token | Wartość | Zastosowanie |
| --- | --- | --- |
| `--color-forest` | `#1C4520` | logo, przyciski, wąskie pasy — NIE tło dużych sekcji |
| `--color-sage` | `#DCE6DC` | karty „dlaczego my”, delikatne podświetlenia |
| `--color-ivory` | `#F7F6F1` | tło strony |
| `--color-ivory-warm` | `#EEF0E9` | tło sekcji |
| `--color-sand` | `#B79A5B` | wąski akcent: włosowe linie, numeracja |

Typografia: **Playfair Display** (nagłówki, z kursywą jako akcentem) +
**Inter** (tekst). Oba z pełną obsługą polskich znaków, hostowane lokalnie.

---

## Czego świadomie nie umieszczono

- **Zdjęć realizacji** — poza portretem właścicielki na `/o-nas`, firma nie
  udostępniła zdjęć przed/po. `/galeria` czeka na materiały.
- **Liczby wykonanych zleceń** — brak danych.
- **Polityki prywatności i regulaminu** — wymagane prawnie, do napisania.
- **Cen w `/dla-firm`** — celowo, brak jakichkolwiek danych źródłowych o
  stawkach B2B (w odróżnieniu od usług domowych, gdzie istnieją choć
  referencyjne liczby).

---

## Kolejne kroki (poza kodem)

1. **Zatwierdzić ceny** w `pricing.ts` i `addons.ts` — patrz zastrzeżenie wyżej.
   To najważniejszy krok przed publikacją.
2. **Wizytówka Google Business.** Firma ma Fixly i Panoramę Firm, ale bez
   wizytówki Google w lokalnym wyszukiwaniu praktycznie nie istnieje.
3. **Zebrać więcej opinii.** Dwie to za mało, żeby przekonać nieufnego
   klienta — stąd decyzja o schowaniu ich z eksponowanych miejsc. Cel: 10+.
4. **Zdjęcia przed/po** do `/galeria` — najtańszy sposób na wiarygodność
   w tej branży.
5. **Tłumaczenia UK/RU**, jeśli przełącznik języka ma zacząć działać naprawdę.
6. Korekta native speakera przed publikacją.
