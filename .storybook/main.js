// const { loadConfigFromFile, mergeConfig, InlineConfig } = require('vite')

module.exports = {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  "features": {
    "storyStoreV7": true
  },
  /** @param {InlineConfig} config */
  // async viteFinal(config) {
  //   const { config: { resolve } } = await loadConfigFromFile('../vite.config.ts')
  //   return mergeConfig(config, {
  //     // Use the same "resolve" configuration as your app
  //     resolve,
  //     // Add dependencies to pre-optimization
  //     // optimizeDeps: {
  //     //   include: ['storybook-dark-mode'],
  //     // },
  //   })
  // },
}