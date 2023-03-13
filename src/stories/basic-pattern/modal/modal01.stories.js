import Modal01 from './Modal01.vue'

const descriptionMarkDown = `
## 見出し

詳細は下記ドキュメント参照

https://path/to/page

### 中見出し

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
`

export default {
  title: 'Basic Pattern/モーダル01',
  component: Modal01,
  argTypes: {
    type: {
      description: 'アニメーションタイプ',
      table: {
        defaultValue: {
          summary: 'アニメーションタイプ',
        },
      },
      control: { type: 'select' },
      options: ['pop', 'fade', 'slide'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: descriptionMarkDown,
      },
    },
  },
}

const Template = (args) => ({
  components: { Modal01 },
  setup() {
    return { args }
  },
  template: '<Modal01 v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  type: 'pop',
}
