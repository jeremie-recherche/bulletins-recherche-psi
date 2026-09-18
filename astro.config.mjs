import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jeremie-recherche.github.io',
  base: '/bulletins-recherche-psi',
  output: 'static',
  trailingSlash: 'always',
});
