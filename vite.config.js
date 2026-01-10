import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    host: "0.0.0.0", // Public access
    port: 5173,
    strictPort: true,
    tunnel: false, // No tunnel
    open: false, // No auto-open
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions:{enabled: true},
      manifest: {
        name: "WebTree",
        short_name: "WebTree",
        description: "WebTree",
        theme_color: "#000000",
        icons: [
          {
            src: "icons/an round tree with open to up and close in bottom-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "icons/an round tree with open to up and close in bottom-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "icons/an round tree with open to up and close in bottom-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "icons/an round tree with open to up and close in bottom-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/an round tree with open to up and close in bottom-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "icons/an round tree with open to up and close in bottom-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "icons/an round tree with open to up and close in bottom-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/an round tree with open to up and close in bottom-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icons/an round tree with open to up and close in bottom-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/an round tree with open to up and close in bottom-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
      },
    }),
  ],
});
