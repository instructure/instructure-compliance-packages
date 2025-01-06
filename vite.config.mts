/// <reference types="vitest/config" />
import { defineConfig } from 'vite'

const config = defineConfig(() => {

  return {
    build: {
      target: 'esnext',
      minify: 'terser',
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
        reporters: ['default'],
        include: ['**/*.{ts}'],
        exclude: ['**/*.test.{ts}', '**/*.d.ts']
      }
    }
  }
})

export default config
