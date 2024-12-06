import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3002,
    origin: 'http://localhost:3002',
  },
  plugins: [
    svelte(),
    federation({
      filename: 'remoteEntry-[hash].js',
      name: '@scope/svelte',

      exposes: {
        '.': './src/main.ts',
      },
      manifest: true,
      remotes: {},
      shared: ['svelte'],
    }),
  ],
  build: {
    target: 'chrome89',
  },
});
