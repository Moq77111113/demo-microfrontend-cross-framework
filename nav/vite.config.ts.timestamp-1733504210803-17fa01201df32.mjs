// vite.config.ts
import { defineConfig } from "file:///home/moq/projects/mfe/nav/node_modules/.pnpm/vite@5.4.11/node_modules/vite/dist/node/index.js";
import react from "file:///home/moq/projects/mfe/nav/node_modules/.pnpm/@vitejs+plugin-react@4.3.4_vite@5.4.11/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { federation } from "file:///home/moq/projects/mfe/nav/node_modules/.pnpm/@module-federation+vite@1.1.9_rollup@4.28.1/node_modules/@module-federation/vite/lib/index.cjs";
import { TanStackRouterVite } from "file:///home/moq/projects/mfe/nav/node_modules/.pnpm/@tanstack+router-plugin@1.86.0_vite@5.4.11/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
var vite_config_default = defineConfig({
  server: {
    port: 3001,
    origin: "http://localhost:3001"
  },
  base: "http://localhost:3001/nav",
  plugins: [
    TanStackRouterVite(),
    react(),
    federation({
      name: "@scope/nav",
      exposes: {
        ".": "./src/App.tsx"
      },
      filename: "remoteEntry-[hash].js",
      manifest: true,
      shared: ["react", "react-dom"]
    })
  ],
  build: {
    target: "chrome89"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tb3EvcHJvamVjdHMvbWZlL25hdlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbW9xL3Byb2plY3RzL21mZS9uYXYvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbW9xL3Byb2plY3RzL21mZS9uYXYvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBmZWRlcmF0aW9uIH0gZnJvbSAnQG1vZHVsZS1mZWRlcmF0aW9uL3ZpdGUnO1xuXG5pbXBvcnQgeyBUYW5TdGFja1JvdXRlclZpdGUgfSBmcm9tICdAdGFuc3RhY2svcm91dGVyLXBsdWdpbi92aXRlJztcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAxLFxuICAgIG9yaWdpbjogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMScsXG4gIH0sXG4gIGJhc2U6ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvbmF2JyxcbiAgcGx1Z2luczogW1xuICAgIFRhblN0YWNrUm91dGVyVml0ZSgpLFxuICAgIHJlYWN0KCksXG4gICAgZmVkZXJhdGlvbih7XG4gICAgICBuYW1lOiAnQHNjb3BlL25hdicsXG4gICAgICBleHBvc2VzOiB7XG4gICAgICAgICcuJzogJy4vc3JjL0FwcC50c3gnLFxuICAgICAgfSxcbiAgICAgIGZpbGVuYW1lOiAncmVtb3RlRW50cnktW2hhc2hdLmpzJyxcbiAgICAgIG1hbmlmZXN0OiB0cnVlLFxuICAgICAgc2hhcmVkOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2Nocm9tZTg5JyxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUSxTQUFTLG9CQUFvQjtBQUM3UixPQUFPLFdBQVc7QUFDbEIsU0FBUyxrQkFBa0I7QUFFM0IsU0FBUywwQkFBMEI7QUFHbkMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLG1CQUFtQjtBQUFBLElBQ25CLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxRQUNQLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixRQUFRLENBQUMsU0FBUyxXQUFXO0FBQUEsSUFDL0IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
