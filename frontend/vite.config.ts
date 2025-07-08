// frontend/vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const VITE_BASE_URL = process.env.VITE_BASE_URL || '/';

export default defineConfig({
  plugins: [react()],
  base: VITE_BASE_URL, 
})