import Button01 from './Button01.vue'

export default {
  title: 'ボタン/ボタン01',
  component: Button01,
  argTypes: {
    label: { control: 'text' },
    onClick: {},
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
