import { defineConfig } from 'astro/config';
import customTheme from './src/styles/md-theme.json';
import svelte from '@astrojs/svelte';

// https://astro.build/config
import deno from "@astrojs/deno";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [svelte(), prefetch()],
  output: 'server',
  adapter: deno(),
  markdown: {
    shikiConfig: {
      theme: customTheme,
      wrap: true
    }
  }
});