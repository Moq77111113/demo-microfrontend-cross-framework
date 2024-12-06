// vite.config.ts
import { defineConfig } from "file:///home/moq/projects/mfe/svelte/node_modules/.pnpm/vite@5.4.11/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///home/moq/projects/mfe/svelte/node_modules/.pnpm/@sveltejs+vite-plugin-svelte@4.0.2_svelte@5.8.0_vite@5.4.11/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
import { federation } from "file:///home/moq/projects/mfe/svelte/node_modules/.pnpm/@module-federation+vite@1.1.9_rollup@4.28.1/node_modules/@module-federation/vite/lib/index.cjs";
var vite_config_default = defineConfig({
  server: {
    port: 3002,
    origin: "http://localhost:3002"
  },
  plugins: [
    svelte(),
    federation({
      filename: "remoteEntry-[hash].js",
      name: "@scope/svelte",
      exposes: {
        ".": "./src/main.ts"
      },
      manifest: true,
      remotes: {},
      shared: ["svelte"]
    })
  ],
  build: {
    target: "chrome89"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9tb3EvcHJvamVjdHMvbWZlL3N2ZWx0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvbW9xL3Byb2plY3RzL21mZS9zdmVsdGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvbW9xL3Byb2plY3RzL21mZS9zdmVsdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHN2ZWx0ZSB9IGZyb20gJ0BzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGUnO1xuaW1wb3J0IHsgZmVkZXJhdGlvbiB9IGZyb20gJ0Btb2R1bGUtZmVkZXJhdGlvbi92aXRlJztcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAyLFxuICAgIG9yaWdpbjogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMicsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBzdmVsdGUoKSxcbiAgICBmZWRlcmF0aW9uKHtcbiAgICAgIGZpbGVuYW1lOiAncmVtb3RlRW50cnktW2hhc2hdLmpzJyxcbiAgICAgIG5hbWU6ICdAc2NvcGUvc3ZlbHRlJyxcblxuICAgICAgZXhwb3Nlczoge1xuICAgICAgICAnLic6ICcuL3NyYy9tYWluLnRzJyxcbiAgICAgIH0sXG4gICAgICBtYW5pZmVzdDogdHJ1ZSxcbiAgICAgIHJlbW90ZXM6IHt9LFxuICAgICAgc2hhcmVkOiBbJ3N2ZWx0ZSddLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2Nocm9tZTg5JyxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5USxTQUFTLG9CQUFvQjtBQUN0UyxTQUFTLGNBQWM7QUFDdkIsU0FBUyxrQkFBa0I7QUFHM0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUVOLFNBQVM7QUFBQSxRQUNQLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxVQUFVO0FBQUEsTUFDVixTQUFTLENBQUM7QUFBQSxNQUNWLFFBQVEsQ0FBQyxRQUFRO0FBQUEsSUFDbkIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
