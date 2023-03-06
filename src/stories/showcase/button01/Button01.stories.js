import Button01 from './Button01.vue'

const description = `
  詳細は下記ドキュメント参照<br>
  <a href="#">htttps://path/to/page</a>
`

export default {
  title: 'Showcase/ボタン/ボタン01',
  component: Button01,
  // args: {
  //   label: 'ボタンテキスト',
  // },
  argTypes: {
    label: {
      description: 'ボタンテキスト',
      table: {
        defaultValue: {
          summary: 'テキスト',
        },
        // type: {
        //   summary: 'string',
        // },
      },
      control: 'text',
    },
    // onClick: {},
  },
  parameters: {
    docs: {
      description: {
        // component: '<a href="#">ボタン</a>テキスト',
        component: description,
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
