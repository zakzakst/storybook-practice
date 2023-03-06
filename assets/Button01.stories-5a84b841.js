var l=Object.defineProperty;var n=(t,e)=>l(t,"name",{value:e,configurable:!0});import{d as r,a as c,b as o,t as u,o as p}from"./vue.esm-bundler-ccede0c7.js";const i={class:"button__text"},d=o("span",{class:"button__arrow"},[o("i",{class:"fas fa-arrow-right"})],-1),a=r({__name:"Button01",props:{label:{default:"ボタン01"}},emits:["click"],setup(t,{emit:e}){const s=n(()=>{e("click")},"onClick");return(f,B)=>(p(),c("a",{class:"button",href:"#",onClick:s},[o("span",i,u(t.label),1),d]))}});a.__docgenInfo={exportName:"default",displayName:"Button01",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"'ボタン01'"}}],events:[{name:"click"}]};const x={parameters:{storySource:{source:`import Button01 from './Button01.vue'

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
`,locationsMap:{default:{startLoc:{col:17,line:12},endLoc:{col:2,line:18},startBody:{col:17,line:12},endBody:{col:2,line:18}}}}},title:"ボタン/ボタン01",component:a,argTypes:{label:{control:"text"},onClick:{}}},_=n(t=>({components:{Button01:a},setup(){return{args:t}},template:'<Button01 v-bind="args" />'}),"Template"),m=_.bind({});m.args={label:"ボタン01"};const y=["Default"];export{m as Default,y as __namedExportsOrder,x as default};
//# sourceMappingURL=Button01.stories-5a84b841.js.map
