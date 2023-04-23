import HeadlessUi from './HeadlessUi.vue'

export default {
  title: 'EXPERIMENTAL/ヘッドレスUI',
  component: HeadlessUi,
}

const Template = () => ({
  components: { HeadlessUi },
  template: '<HeadlessUi />',
})

export const Default = Template.bind({})