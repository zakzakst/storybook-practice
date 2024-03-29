const {
  // loadConfigFromFile,
  mergeConfig,
  // InlineConfig,
} = require("vite");

module.exports = {
  stories: [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-backgrounds",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@storybook/addon-docs",
    "storybook-design-token",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
    // builder: 'webpack5',
  },
  features: {
    storyStoreV7: true,
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
      // リポジトリ名を設定
      base: "/storybook-practice/",
    });
  },
};
