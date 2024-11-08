/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { browserslistToTargets } from 'lightningcss';
import browsersList from '@instructure/browserslist-config-instui';
import basicSsl from '@vitejs/plugin-basic-ssl'
import mkcert from'vite-plugin-mkcert'
import Mkcert from 'vite-plugin-mkcert/dist/mkcert/index';

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
      }),
      mkcert()
    ],
    css: {
        transformer: 'lightningcss',
        lightningcss: {
          targets: browserslistToTargets(browsersList),
          cssModules: {}
        }
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
