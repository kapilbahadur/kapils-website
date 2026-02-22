import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  site: 'https://kapilbahadur.github.io',
  base: '/kapils-website/',
  output: 'static',
  adapter: github(),
});