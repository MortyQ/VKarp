import colors from 'vuetify/es5/util/colors'
const strapiBaseUri = process.env.API_URL || 'http://localhost:1337'
import { i18n } from './localization/i18n'
export default {
  target: 'static',
  ssr: false,
  env: {
    strapiBaseUri,
  },

  head: {
    titleTemplate: '%s - vkarpe',
    title: 'vkarpe',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/global.scss'],

  plugins: [
    { src: '~/plugins/uikit.js', ssr: false },
    { src: '@/plugins/vee-validator', ssr: false },
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '@/plugins/axios', ssr: false },
    { src: '~/plugins/tiptap-vuetify', ssr: false },
  ],
  strapi: {
    url: strapiBaseUri,
    entities: [
      {
        name: 'authors',
        type: 'collection',
      },
      {
        name: 'categories',
        type: 'collection',
      },
      {
        name: 'homepage',
        type: 'single',
      },
      {
        name: 'global',
        type: 'single',
      },
    ],
  },

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],

  modules: ['@nuxtjs/axios', '@nuxtjs/dayjs', '@nuxtjs/i18n'],

  i18n,

  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify/lib', 'tiptap-vuetify'],
  },
}
