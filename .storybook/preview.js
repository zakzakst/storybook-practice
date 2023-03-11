import { app } from '@storybook/vue3';
import { fontawesomeInit } from '../src/plugins/fontawesomeInit'

fontawesomeInit(app)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}