// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error - vite-plugin-vuetify is not typed
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Web League',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg',
          href: '/web_league_logo.svg',
        },
      ],
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2024-11-01',
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
      },
    },
  },
})
