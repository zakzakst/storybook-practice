import IconMail from '../../assets/mail.svg';

export default {
  title: 'Style Guide/アイコン',
  argTypes: {
    src: {
      control: false,
    }
  }
}

const Template = (args) => ({
  setup() {
    return { args }
  },
  template: '<img v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  src: IconMail,
}
// Default.parameters = {
//   controls: { hideNoControlsWarning: true },
// }