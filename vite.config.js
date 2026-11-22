import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/airplane-model-store2-stylization1/'
// })

//! Налаштування Vite
//todo: https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  //! Ім'я репозиторію для GitHub Pages
  base: '/airplane-model-store2-stylization1/',

  //! Налаштування аліасів для абсолютних шляхів імпортів
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
});
