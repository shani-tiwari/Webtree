import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  // server: {
  //   host: "0.0.0.0", // Public access
  //   port: 5173,
  //   strictPort: true,
  //   tunnel: false, // No tunnel
  //   open: false, // No auto-open
  // },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      manifest: {
        name: "webtree",
        short_name: "webtree",
        icons: [
          {
            src: "icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          },
        ],
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#000000",
      },
      workbox: {
        navigateFallbackDenylist: [
          /^\/sitemap\.xml$/,
          /^\/robots\.txt$/,
          /^\/1ead026798054782827bba53da149021\.txt$/,
        ],
        // logo caching
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/img\.logo\.dev\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "logo-dev-cache",
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
});
