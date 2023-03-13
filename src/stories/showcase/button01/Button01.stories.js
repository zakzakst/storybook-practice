import Button01 from './Button01.vue'

const descriptionMarkDown = `
## 見出し

詳細は下記ドキュメント参照

https://path/to/page

### 中見出し

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
`

export default {
  title: 'Showcase/ボタン01',
  component: Button01,
  argTypes: {
    label: {
      description: 'ボタンテキスト',
      table: {
        defaultValue: {
          summary: 'テキスト',
        },
      },
      control: 'text',
    },
  },
  parameters: {
    docs: {
      description: {
        component: descriptionMarkDown,
      },
      source: {
        code: `<Button01 label="テキスト" />`,
      },
    },
  },
}

const Template = (args) => ({
  components: { Button01 },
  setup() {
    return { args }
  },
  template: '<Button01 v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  label: 'ボタン01',
}
