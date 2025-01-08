import { defineConfig, type UserConfig } from 'vite'

const config: UserConfig = {
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        format: 'iife',
        inlineDynamicImports: true,
        dir: 'dist',
        entryFileNames: 'redirect.js',
      }
    }
  }
}

export default defineConfig(config)