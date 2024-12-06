import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      filename: 'remoteEntry-[hash].js',
      remotes: {
        '@scope/nav': 'http://localhost:3001/nav/mf-manifest.json',
        '@scope/svelte': 'http://localhost:3002/mf-manifest.json',
      },
      manifest: true,
      shared: ['react', 'react-dom'],
      runtimePlugins: ['./src/plugin.js'],
    }),
  ],
  build: {
    target: 'chrome89',
  },
});
