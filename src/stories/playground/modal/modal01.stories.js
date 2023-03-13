import Modal01 from './Modal01.vue'

const descriptionMarkDown = `
## 見出し

詳細は下記ドキュメント参照

https://path/to/page

### 中見出し

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
`

export default {
  title: 'Playground/モーダル01',
  component: Modal01,
  // argTypes: {
  //   label: {
  //     description: 'ボタンテキスト',
  //     table: {
  //       defaultValue: {
  //         summary: 'テキスト',
  //       },
  //     },
  //     control: 'text',
  //   },
  // },
  parameters: {
    docs: {
      description: {
        component: descriptionMarkDown,
      },
      // source: {
      //   code: `<Button04 label="Button04" />`,
      // },
    },
  },
}

// const Template = (args) => ({
const Template = () => ({
  components: { Modal01 },
  // setup() {
  //   return { args }
  // },
  template: '<Modal01 />',
})

export const Default = Template.bind({})
// Default.args = {
//   label: 'Button04',
// }
