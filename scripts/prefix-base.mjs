/**
 * Dodaje prefiks ścieżki do linków wpisanych na sztywno w kodzie.
 *
 * Podział odpowiedzialności:
 *   • zasoby z `_astro/` (CSS, JS, fonty) — załatwia opcja `base` w astro.config.
 *     Musi to robić Astro, bo prefiks trafia tam PRZED policzeniem hasza nazwy
 *     pliku. Modyfikowanie tych plików po buildzie zmieniałoby treść bez zmiany
 *     nazwy — i przeglądarki zostawałyby ze starą wersją.
 *   • linki i pliki z `public/` wpisane jako zwykłe stringi (`/cennik`,
 *     `/brand/logo.png`, `/realizacje/*.jpg`) — Astro ich nie zna, więc
 *     poprawia je ten skrypt.
 *
 * Użycie:  BASE_PATH=/sparkle.house node scripts/prefix-base.mjs
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const BASE = (process.env.BASE_PATH ?? '').replace(/\/$/, '');
const DIST = 'dist';

if (!BASE) {
  console.log('BASE_PATH nie ustawiony — pomijam prefiksowanie.');
  process.exit(0);
}

/** Atrybuty, których wartości wskazują na podstrony lub pliki z `public/`. */
const ATTRS = ['href', 'src', 'poster', 'data-lightbox', 'action'];

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

let files = 0;
let hits = 0;

for await (const file of walk(DIST)) {
  if (extname(file) !== '.html') continue;

  let html = await readFile(file, 'utf8');
  const before = html;

  for (const attr of ATTRS) {
    // Bezwzględne ścieżki w obrębie serwisu: zaczynają się od "/", ale nie od
    // "//" (protokół-względne) i nie mają jeszcze prefiksu (Astro mógł go już
    // dodać do zasobów `_astro/`).
    const re = new RegExp(`(${attr}=")(?!${BASE}/)/(?!/)`, 'g');
    html = html.replace(re, (m, a) => {
      hits++;
      return `${a}${BASE}/`;
    });
  }

  if (html !== before) {
    await writeFile(file, html, 'utf8');
    files++;
  }
}

console.log(`Prefiks "${BASE}" dodany: ${hits} ścieżek w ${files} plikach.`);
