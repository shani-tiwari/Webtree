import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
server: {
    host: '0.0.0.0',      // Public access
    port: 5173,
    strictPort: true,
    tunnel: false,        // No tunnel
    open: false           // No auto-open
  },
  plugins: [react(), tailwindcss()],
})
