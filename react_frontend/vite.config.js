// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Exportación con base configurada para GitHub Pages
export default defineConfig({
  base: '/DV_06_REACT-SUPABASE/',  // 🔗 nombre del repositorio en GitHub
  plugins: [react()],
});
