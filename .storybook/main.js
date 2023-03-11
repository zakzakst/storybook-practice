const {
  // loadConfigFromFile,
  mergeConfig,
  // InlineConfig,
} = require('vite')

module.exports = {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  'features': {
    'storyStoreV7': true
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@import "../src/assets/styles/base.scss";',
          },
        },
      },
    })
  },
  /** @param {InlineConfig} config */
  // async viteFinal(config) {
  //   const { config: { resolve } } = await loadConfigFromFile('../vite.config.ts')
  //   return mergeConfig(config, {
  //     // Use the same 'resolve' configuration as your app
  //     resolve,
  //     // Add dependencies to pre-optimization
  //     // optimizeDeps: {
  //     //   include: ['storybook-dark-mode'],
  //     // },
  //   })
  // },
}