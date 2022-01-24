
import path from 'path'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS(),
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
