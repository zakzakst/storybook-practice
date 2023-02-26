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
}