import Button04 from './Button04.vue'

const descriptionMarkDown = `
## 見出し

詳細は下記ドキュメント参照

https://path/to/page

### 中見出し

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
`

export default {
  title: 'Showcase/ボタン/ボタン04',
  component: Button04,
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
        code: `<Button04 label="Button04" />`,
      },
    },
  },
}

const Template = (args) => ({
  components: { Button04 },
  setup() {
    return { args }
  },
  template: '<Button04 v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  label: 'Button04',
}
