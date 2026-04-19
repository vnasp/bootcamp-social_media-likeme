import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bootcamp-social_media-likeme/",
  plugins: [react()],
})
