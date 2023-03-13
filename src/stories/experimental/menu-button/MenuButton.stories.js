import MenuButton from './MenuButton.vue'

const descriptionMarkDown = `
## 検討事項など
- ライブラリがTypeScriptの型対応していません。ただ、下記の理由から\`@ts-ignore\`での対応も検討していいのではないかと考えています。
  - アニメーションに関するライブラリのため型指定が関連する場面は少ないと想定される
  - atomコンポーネントのみでの使用可などでもいいのではないか
- 採用するメリットとして、ライセンスが商用無料なことが挙げられます。
- デザイナーのかた、具体的なデザイン案がありましたらアイデアいただけますでしょうか。
`

export default {
  title: 'EXPERIMENTAL/メニューボタン',
  component: MenuButton,
  parameters: {
    docs: {
      description: {
        component: descriptionMarkDown,
      },
    },
  },
}

const Template = () => ({
  components: { MenuButton },
  template: '<MenuButton />',
})

export const Default = Template.bind({})