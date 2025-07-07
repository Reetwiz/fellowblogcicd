import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This tells Vite to add "/reetwiz-fellowblogs-cd/" before all asset links.
  base: '/reetwiz-fellowblogs-cd/', 
})