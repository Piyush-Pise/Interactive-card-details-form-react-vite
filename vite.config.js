import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Interactive-card-details-form-react-vite",
  plugins: [react()],
})
