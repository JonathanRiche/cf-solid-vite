import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig(({ mode }) => ({
  plugins: [
    solid(),
  ],
  optimizeDeps: {
    include: ['solid-js', 'solid-js/web'],
  },
  server: {
    proxy: {
      '/test': 'http://localhost:8787',
      '^/$': {
        target: 'http://localhost:8787',
        changeOrigin: true
      },
    }
  },
  build: {
    outDir: mode === 'development' ? '.dev-dist' : 'dist',
    emptyOutDir: true,
    watch: mode === 'development' ? {
      include: ['frontend/**', 'src/**'],
    } : null,
    worker: {
      format: 'es',
    },
    sourcemap: true,
    rollupOptions: {
      input: {
        client: './src/client.ts',
        app: './frontend/index.tsx'
      },
      output: { entryFileNames: '[name].js', assetFileNames: "assets/[name].[ext]" }

    },
  },
  resolve: {
    dedupe: ['solid-js'],
  }

}


))
