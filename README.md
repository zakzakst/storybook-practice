# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 参考
https://storybook.js.org/showcase
https://chakra-ui.netlify.app/?path=/story/icons--default

### 共通SCSSの設定
https://zenn.dev/shunk_py/articles/a52625f98fc8e7

### controls
https://engineering.nifty.co.jp/blog/3540

### app.component
https://stackoverflow.com/questions/72098527/use-global-vue-3-plugins-in-storybook-stories

### google fonts適用
https://storybook.js.org/docs/react/configure/story-rendering
https://debug-life.net/entry/4676

### アイコンコンポーネント
https://v2.ja.vuejs.org/v2/cookbook/editable-svg-icons.html

### github pages
https://qiita.com/takeshisakuma/items/f4d54472b31ab098e147#github-pagesに公開する
https://zakzakst.github.io/storybook-practice/

### エラー時に参考にした
https://github.com/FortAwesome/vue-fontawesome/issues/215
https://stackoverflow.com/questions/74799253/storybook-nuxt-3-with-script-setup-component-computed-is-not-defined
https://github.com/storybookjs/storybook/discussions/12691
https://zenn.dev/tetracalibers/articles/b420f3fa146575

※下記試したけど上手くいかない（@storybook/builder-webpack5）もmain.jsの設定変えただけだと上手くいかない。GitHub Pagesでなくレンタルサーバーでも上手くいかないか確認する。.nojekyllの空ファイル入れるの忘れない

https://github.com/storybookjs/storybook/issues/14694

## 見てみる
https://storybook.js.org/addons/storybook-vue-addon
https://zenn.dev/sa2knight/books/storybook-7-with-vue-3/viewer/preview_js
