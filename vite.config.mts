/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 import { browserslistToTargets } from 'lightningcss';
 import browsersList from '@instructure/browserslist-config-instui';

const config = defineConfig(() => {

  const ReactCompilerConfig = {}

  return {
    plugins: [
      react({
        babel: {
          plugins: [
            "@babel/plugin-syntax-import-attributes",
            "babel-plugin-react-compiler",
            ReactCompilerConfig
          ]
        }
      })
    ],
    css: {
        transformer: 'lightningcss',
        lightningcss: {
          targets: browserslistToTargets(browsersList),
        }
    },
    build: {
      target: 'esnext',
      minify: 'terser',
       cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('@instructure/ui-dom-utils') || id.includes('@instructure/ui-focusable')) {
              return 'instructure-utils';
            }
            if (id.includes('@instructure/ui')) {
              return 'instructure-ui';
            }
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react';
            }
            if (id.includes('node_modules')) {
              return 'modules';
            }
          }
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
