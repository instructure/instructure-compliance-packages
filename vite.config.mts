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
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('@instructure/ui-dom-utils') || id.includes('@instructure/ui-focusable')) {
              return 'instructure-utils';
            }
          }
        }
      }
    }
  }
})

export default config
