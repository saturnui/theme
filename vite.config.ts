
import path from 'path'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import Vuwi from './plugins/vuwi'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS(),
    Vuwi(),
  ],
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, 'main.ts'),
      formats: ['es'],
      fileName: `vuwi`,
    }
  }
})
