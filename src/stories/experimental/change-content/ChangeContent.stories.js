import ChangeContent from './ChangeContent.vue'

export default {
  title: 'EXPERIMENTAL/コンテンツ切替',
  component: ChangeContent,
}

const Template = () => ({
  components: { ChangeContent },
  template: '<ChangeContent />',
})

export const Default = Template.bind({})