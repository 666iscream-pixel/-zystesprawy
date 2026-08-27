# Czyste Sprawy — strona firmowa

Statyczna strona firmy sprzątającej **Czyste Sprawy Yuliia Dubetska** (Poznań).
Sprzątanie mieszkań, domów i biur oraz mycie okien.

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

## Skąd pochodzą treści

Strona powstała **bez wywiadu z właścicielką** — wszystko, co na niej jest,
pochodzi z publicznych, weryfikowalnych źródeł albo jest oznaczone jako
do potwierdzenia.

### Zweryfikowane (można publikować)

| Dana | Źródło |
| --- | --- |
| Nazwa, właścicielka, adres | Panorama Firm |
| NIP `7812087638` | Panorama Firm |
| 4 lata doświadczenia | profil Fixly |
| Ocena **5.0** z **2 opinii**, 100% pięciogwiazdkowych | profil Fixly |
| Treść obu opinii (przepisana 1:1) | profil Fixly |
| „Dane firmy sprawdzone w GUS” | profil Fixly |
| Trzy usługi: mieszkania i domy, mycie okien, biura | profil Fixly |
| Obszar: Poznań, Swarzędz, Luboń, Mosina, Śrem i powiat śremski, Kościan, Środa Wlkp., Szamotuły, Oborniki, Grodzisk Wlkp. | profil Fixly |

Opinie leżą w `src/data/reviews.ts` i trafiają do `schema.org/Review`
oraz `aggregateRating`. **Nie dopisujemy tam nic bez źródła.**

### Do potwierdzenia przez właścicielkę

| Co | Gdzie | Status |
| --- | --- | --- |
| **Numer telefonu** | `src/data/site.ts` | placeholder `+48 000 000 000` — nie ma go ani na Fixly, ani w Panoramie Firm |
| **E-mail** | `src/data/site.ts` | placeholder |
| **Godziny pracy** | `src/data/site.ts` | wpisane „Pn–Sb 8:00–20:00” — zgadza się? |
| **REGON** | `src/data/site.ts` | puste |
| **Domena** | `src/data/site.ts`, `astro.config.mjs` | założone `czystesprawy.pl` |
| **Zakresy usług** | `src/data/services.ts` | standard branżowy — trzeba potwierdzić, co faktycznie wchodzi |
| **Obsługa formularza** | `src/pages/wycena.astro` | działa przez WhatsApp i mailto; backend niepotrzebny, ale można dodać |
| **Logo w wektorze** | `public/brand/` | mamy tylko PNG 310×310 od klientki |

---

## 🔴 Największa luka: brak cennika

Na Fixly w sekcji „Cennik” widnieje **„Brak cennika”**. Firma nigdzie publicznie
nie podaje stawek.

**Dlatego na stronie nie ma kalkulatora ani tabeli cen.** Wymyślenie stawek
byłoby wprowadzaniem klienta w błąd, a przy pierwszej rozbieżności — realnym
problemem właścicielki.

Zamiast tego zbudowany jest **formularz wyceny** (`/wycena`): zbiera komplet
informacji potrzebnych do wyceny (usługa, obiekt, metraż, łazienki, liczba okien,
dodatki, termin, miejscowość, kontakt) i buduje z nich gotową wiadomość,
którą klient wysyła jednym kliknięciem na WhatsApp albo mailem.

### Rekomendacja

Brak cennika **kosztuje realne pieniądze**: klient, który porównuje trzy firmy,
odpada tam, gdzie nie widzi żadnej liczby. Minimum do dodania:

1. widełki „od X zł” dla każdej z trzech usług,
2. cena za okno (mycie okien rozlicza się sztukowo),
3. informacja, od czego cena rośnie.

Gdy stawki będą znane, warto rozważyć kalkulator widełkowy — architektura
strony jest na to gotowa (wystarczy dodać `src/data/pricing.ts`).

---

## Struktura

```
src/
├── data/
│   ├── site.ts        dane firmy, kontakt, obszar, dowody społeczne
│   ├── services.ts    trzy usługi + zakresy + obietnice
│   ├── reviews.ts     opinie z Fixly, 1:1
│   └── faq.ts
├── components/        Logo, Header, Footer, StickyBar, Reviews, Faq, Cta…
├── layouts/BaseLayout.astro
└── pages/
    ├── index.astro
    ├── uslugi/index.astro · uslugi/[slug].astro
    ├── wycena.astro     ← główna konwersja
    ├── opinie.astro · o-nas.astro · kontakt.astro · faq.astro · 404.astro
```

Treści zmienia się wyłącznie w `src/data/`.

---

## System wizualny

Wyprowadzony z logotypu (monogram CS) — dwa kolory, bez wyjątków.

| Token | Wartość | Zastosowanie |
| --- | --- | --- |
| `--color-forest` | `#1C4520` | kolor marki (próbka z logo) — tło ciemnych sekcji, nagłówki, przyciski |
| `--color-ivory` | `#F4F2EC` | tło strony |
| `--color-ivory-warm` | `#EBE8DF` | tło sekcji |
| `--color-sand` | `#B79A5B` | wąski akcent: włosowe linie, numeracja, gwiazdki |

Typografia: **Playfair Display** (nagłówki, z kursywą jako akcentem) +
**Inter** (tekst). Oba z pełną obsługą polskich znaków, hostowane lokalnie.

Świadomie **nie** jest to kopia stylistyki innego projektu: logotyp jest
klasyczny i wyciszony, więc strona też — kanciaste narożniki, dużo światła,
kontrast wielkości zamiast kolorowych akcentów.

---

## Czego świadomie nie umieszczono

- **Zdjęć** — firma nie udostępniła żadnych. Zdjęcia stockowe zostałyby
  natychmiast rozpoznane i osłabiłyby wiarygodność. Layout jest zbudowany tak,
  żeby działał bez fotografii (dowody liczbowe zamiast obrazków).
- **Ubezpieczenia OC** — nigdzie nie ma o nim wzmianki. Jeśli polisa istnieje,
  trzeba ją dodać: dla klientów biurowych to warunek podpisania umowy.
- **Liczby wykonanych zleceń** — brak danych.
- **Polityki prywatności i regulaminu** — wymagane prawnie, do napisania.

---

## Kolejne kroki (poza kodem)

1. **Wizytówka Google Business.** Firma ma Fixly i Panoramę Firm, ale w lokalnym
   wyszukiwaniu bez wizytówki Google praktycznie nie istnieje.
2. **Zebrać opinie.** Dwie opinie to za mało, żeby przekonać nieufnego klienta —
   nawet przy ocenie 5.0. Cel: 10+ w trzy miesiące.
3. **Ustalić i opublikować widełki cenowe** (patrz wyżej).
4. **Zdjęcia przed/po** — najtańszy sposób na wiarygodność w tej branży.
5. Korekta native speakera przed publikacją.
