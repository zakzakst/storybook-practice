import IconList from './IconList.vue'

// import IconCard from './IconCard.vue'
// import IconMail from '../../../components/atoms/icons/IconMail.vue'
// 下記記述方法でエラー発生
// import IconMail from '../../../assets/icons/mail.svg'
// Failed to execute 'createElement' on 'Document': The tag name provided ('/src/assets/icons/mail.svg') is not a valid name.

export default {
  title: 'Style Guide/アイコン',
  component: IconList,
}

// Templateでslot使うの上手くいかなかった（下記でできるっぽいが、であればIconList.vue作った方が早いし変更もしやすいと感じたのでやっていない）
// https://github.com/storybookjs/storybook/discussions/12691
// const Template = () => ({
//   components: { IconCard, IconMail },
//   template: `
//     <IconCard label="メール" />
//       <IconMail />
//     </IconCard>
//   `,
// })

const Template = () => ({
  components: { IconList },
  template: '<IconList />',
})

export const Default = Template.bind({})