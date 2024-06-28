/// <reference types="vitest" />
/// <reference types="vite/client" />
import terser from '@rollup/plugin-terser';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    build: {
      outDir: 'build'
    },
    plugins: [
      react(),
      tsconfigPaths(),
      // To enable console in production remove below conditions
      (command === 'serve' || command === 'build') &&
        terser({
          compress: {
            drop_console: true
          }
        }),
      // TODO : Change below manifest file according to your project add appropriate icons in public folder
      VitePWA({
        registerType: 'prompt',
        includeAssets: ['icons/favicon.ico'],
        manifest: {
          theme_color: '#f88935',
          background_color: '#f69435',
          display: 'standalone',
          scope: '/',
          start_url: '/',
          name: 'Agile React Boiler Plate',
          short_name: 'Agile React App',
          description: 'Description regarding your application',
          icons: [
            {
              src: 'icons/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'icons/icon-256x256.png',
              sizes: '256x256',
              type: 'image/png'
            },
            {
              src: 'icons/icon-384x384.png',
              sizes: '384x384',
              type: 'image/png'
            },
            {
              src: 'icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/setupTests.ts']
    }
  };
});
