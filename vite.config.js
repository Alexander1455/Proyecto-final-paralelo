import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // change port
  plugins: [react()],
  server: {
    port: 8080
  }
})
