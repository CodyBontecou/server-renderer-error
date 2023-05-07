import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Hotspringers | Mapped Interests | Open Sourced | Crowd Sourced',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: "Let's map the interesting locations around the globe.",
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined',
        },
      ],
    },
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/MarkerCluster.css',
    '~/assets/css/MarkerCluster.Default.css',
    'leaflet-minimap/dist/Control.MiniMap.min.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
