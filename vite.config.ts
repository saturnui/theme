
import path from 'path'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS({
      preflight: false,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'main.js'),
      name: 'vuwi-theme',
      fileName: (format) => `vuwi-theme.${format}.js`,
    }
  }
})
