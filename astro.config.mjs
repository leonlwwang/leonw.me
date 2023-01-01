import { defineConfig } from 'astro/config';
import customTheme from './src/styles/md-theme.json';
import svelte from '@astrojs/svelte';

// https://astro.build/config
import deno from "@astrojs/deno";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import critters from "astro-critters";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://leonw.me',
  integrations: [svelte(), prefetch(), critters(), sitemap()],
  output: 'server',
  adapter: deno(),
  markdown: {
    shikiConfig: {
      theme: customTheme,
      wrap: true
    }
  }
});