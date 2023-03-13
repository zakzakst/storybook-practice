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
  argTypes: {
    speed: {
      description: 'アニメーションスピード',
      table: {
        defaultValue: {
          summary: 'アニメーションスピード',
        },
      },
      control: { type: 'number' },
    },
    translateY: {
      description: '上下移動値',
      table: {
        defaultValue: {
          summary: '上下移動値',
        },
      },
      control: { type: 'number' },
    },
    scale: {
      description: '拡大値',
      table: {
        defaultValue: {
          summary: '拡大値',
        },
      },
      control: { type: 'number' },
    },
  },
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

const Template = (args) => ({
  components: { Modal01 },
  setup() {
    return { args }
  },
  template: '<Modal01 v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  speed: 0.2,
  translateY: 50,
  scale: 0.9,
}
