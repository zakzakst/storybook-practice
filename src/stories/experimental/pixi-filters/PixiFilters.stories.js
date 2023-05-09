import PixiFilters from './PixiFilters.vue'

export default {
  title: 'EXPERIMENTAL/PIXIフィルター',
  component: PixiFilters,
}

const Template = () => ({
  components: { PixiFilters },
  template: '<PixiFilters />',
})

export const Default = Template.bind({})