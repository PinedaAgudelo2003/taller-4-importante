import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: '.ngrok-free.dev'
  },

  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ['pwa.png', 'robots.txt'],

      workbox: {
        navigateFallback: "/index.html",
        globPatterns: ["**/*.{js,css,html,png,jpeg,svg}"]
      },

      manifest: {
        name: 'Weather World',
        short_name: 'Weather',
        description: 'App de clima para visualizar pronósticos y datos meteorológicos.',
        start_url: "/",
        display: "standalone",
        background_color: '#ffffff',
        theme_color: '#000000',

        screenshots: [
        {
          src: '/img/principal2.jpeg',
          sizes: '192x192',
          type: 'image/jpeg',
          form_factor: "narrow"
         },
      {
        src: '/img/principal.jpeg',
        sizes: '192x192',
        type: 'image/jpeg',
         form_factor: "wide"
       }
      ],

        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})