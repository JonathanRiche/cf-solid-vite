import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
// import ssrPlugin from 'vite-ssr-components/plugin'

import solid from 'vite-plugin-solid'
export default defineConfig({
  plugins: [cloudflare(),
  // ssrPlugin(),
  solid({ ssr: true })
  ],
  ssr: {
    external: ['solid-js/web']
  },
  optimizeDeps: {
    include: ['solid-js'],
    exclude: ['solid-js/web'],
    // exclude: ['sqlocal'],
  }
})
