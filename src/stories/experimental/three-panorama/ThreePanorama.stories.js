import ThreePanorama from './ThreePanorama.vue'

export default {
  title: 'EXPERIMENTAL/パノラマ',
  component: ThreePanorama,
}

const Template = () => ({
  components: { ThreePanorama },
  template: '<ThreePanorama />',
})

export const Default = Template.bind({})