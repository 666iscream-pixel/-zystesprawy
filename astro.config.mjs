// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://czystesprawy.pl',
  /**
   * Prefiks ścieżki dla wdrożeń w podkatalogu (GitHub Pages).
   * Astro dokłada go do zasobów `_astro/` przed policzeniem haszy nazw plików.
   * Puste = wdrożenie w katalogu głównym (docelowa domena).
   */
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: { plugins: [tailwind()] },
});
