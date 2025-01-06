/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const config = defineConfig(() => {

  return {
    plugins: [
      react({
        babel: {
          plugins: [
            "@babel/plugin-syntax-import-attributes",
            ["babel-plugin-react-compiler", {}],
          ]
        }
      })
    ],
    css: {
        transformer: 'lightningcss'
    },
    build: {
      target: 'esnext',
      minify: 'terser',
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks() {}
        }
      }
    },
    test: {
      coverage: {
        enabled: true,
        provider: 'v8',
        reporters: ['default', 'html'],
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['src/**/*.test.{ts,tsx}', 'src/**/*.d.ts']
      },
      browser: {
        enabled: true,
        name: 'chromium',
        provider: 'playwright',
      },
    }
  }
})

export default config
