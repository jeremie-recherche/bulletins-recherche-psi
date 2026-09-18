import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://recherche-psi.github.io',
  base: '/bulletins-recherche-psi',
  output: 'static',
  trailingSlash: 'always',
});
