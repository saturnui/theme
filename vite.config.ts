
import path from 'path'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import Theme from './plugins/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS(),
    Theme(),
  ],
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, 'main.ts'),
      formats: ['es'],
      fileName: 'saturn',
    },
  },
})
