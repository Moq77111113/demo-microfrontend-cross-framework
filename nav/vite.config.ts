import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    origin: 'http://localhost:3001',
  },
  base: 'http://localhost:3001/nav',
  plugins: [
    TanStackRouterVite(),
    react(),
    federation({
      name: '@scope/nav',
      exposes: {
        '.': './src/App.tsx',
      },
      filename: 'remoteEntry-[hash].js',
      manifest: true,
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'chrome89',
  },
});
