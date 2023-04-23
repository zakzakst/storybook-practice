var C=Object.defineProperty;var l=(r,e)=>C(r,"name",{value:e,configurable:!0});import{d as p,r as i,b as o,e as c,i as u,t as y,n as f,o as a,j as h}from"./vue.esm-bundler-a7d918ba.js";import{a as _}from"./anime.es-36cbcd4c.js";import{_ as b}from"./_plugin-vue_export-helper-a0691a9b.js";const T={class:"change-content"},x={class:"content"},k={key:0,class:"item --1"},E={key:1,class:"item --2"},I={class:"text"},g=p({__name:"TestChangeContent",setup(r){const e=i(!0),s=i(!0),t=i(),m=l(()=>{const n=_.timeline();n.add({easing:"easeInOutCirc",targets:t.value,rotate:["-45deg","-45deg"],translateX:["-100%","0"],duration:1e3,begin:()=>{t.value.style.visibility="visible",s.value=!0},complete:()=>{e.value=!0}}),n.add({easing:"easeInOutCirc",delay:1e3,targets:t.value,rotate:["-45deg","-45deg"],translateX:["0","100%"],duration:1e3,complete:()=>{t.value.style.visibility="visible"}})},"changeType1"),v=l(()=>{const n=_.timeline();n.add({easing:"easeInOutCirc",targets:t.value,rotate:["-45deg","-45deg"],translateX:["100%","0"],duration:1e3,begin:()=>{t.value.style.visibility="visible",s.value=!1},complete:()=>{e.value=!1}}),n.add({easing:"easeInOutCirc",delay:1e3,targets:t.value,rotate:["-45deg","-45deg"],translateX:["0","-100%"],duration:1e3,complete:()=>{t.value.style.visibility="visible"}})},"changeType2");return(n,O)=>(a(),o("div",T,[c("div",x,[e.value?(a(),o("div",k,"コンテンツ1")):(a(),o("div",E,"コンテンツ2"))]),e.value?(a(),o("button",{key:0,class:"button --2",onClick:v},"2に変更")):u("",!0),e.value?u("",!0):(a(),o("button",{key:1,class:"button --1",onClick:m},"1に変更")),c("div",{ref_key:"overlayEl",ref:t,class:f(["overlay",e.value?"--1":"--2"])},[c("div",I,y(s.value?"反撃！！":"侵略！！"),1)],2)]))}});const N=b(g,[["__scopeId","data-v-4f59a76e"]]);g.__docgenInfo={exportName:"default",displayName:"TestChangeContent",description:"",tags:{}};const d=p({__name:"ChangeContent",setup(r){return(e,s)=>(a(),h(N))}});d.__docgenInfo={exportName:"default",displayName:"ChangeContent",description:"",tags:{}};const A={parameters:{storySource:{source:`import ChangeContent from './ChangeContent.vue'\r
\r
export default {\r
  title: 'EXPERIMENTAL/コンテンツ切替',\r
  component: ChangeContent,\r
}\r
\r
const Template = () => ({\r
  components: { ChangeContent },\r
  template: '<ChangeContent />',\r
})\r
\r
export const Default = Template.bind({})`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:2,line:11},startBody:{col:17,line:8},endBody:{col:2,line:11}}}}},title:"EXPERIMENTAL/コンテンツ切替",component:d},B=l(()=>({components:{ChangeContent:d},template:"<ChangeContent />"}),"Template"),P=B.bind({}),R=["Default"];export{P as Default,R as __namedExportsOrder,A as default};
//# sourceMappingURL=ChangeContent.stories-e57f0b07.js.map
