import { fontawesomeInit } from './fontawesomeInit'

export default defineNuxtPlugin((nuxtApp) => {
  fontawesomeInit(nuxtApp.vueApp)
})
