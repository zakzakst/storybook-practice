// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  plugins: [
    '@/src/plugins/fontawesome.ts'
  ],
  build: {
    transpile: [
    "@fortawesome/vue-fontawesome",
    "@fortawesome/fontawesome-svg-core",
    "@fortawesome/pro-solid-svg-icons",
    "@fortawesome/free-brands-svg-icons",
    ],
  },
})
