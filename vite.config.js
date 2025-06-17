import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all available network interfaces
    port: 9000,       // Run on port 9000
    watch: {
      usePolling: true, // Required for Docker container hot reloading
    },
  }
})
