import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
    build: {
      target: 'esnext',
      minify: 'terser',
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
    }
  }
})

export default config
