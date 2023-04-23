var y=Object.defineProperty;var r=(i,e)=>y(i,"name",{value:e,configurable:!0});import{d as g,r as c,b as o,e as d,i as _,t as f,n as h,o as a,j as b}from"./vue.esm-bundler-6ef4fa0f.js";import{a as p}from"./anime.es-36cbcd4c.js";import{_ as T}from"./_plugin-vue_export-helper-a0691a9b.js";const x={class:"change-content"},k={class:"content"},E={key:0,class:"item --1"},I={key:1,class:"item --2"},N={class:"text"},m=g({__name:"TestChangeContent",setup(i){const e=c(!0),s=c(!0),t=c(),l=500,v=r(()=>{const n=p.timeline();n.add({easing:"easeInOutCirc",targets:t.value,rotate:["-45deg","-45deg"],translateX:["-100%","0"],duration:l,begin:()=>{t.value.style.visibility="visible",s.value=!0},complete:()=>{e.value=!0}}),n.add({easing:"easeInOutCirc",delay:1e3,targets:t.value,rotate:["-45deg","-45deg"],translateX:["0","100%"],duration:l,complete:()=>{t.value.style.visibility=null}})},"changeType1"),C=r(()=>{const n=p.timeline();n.add({easing:"easeInOutCirc",targets:t.value,rotate:["-45deg","-45deg"],translateX:["100%","0"],duration:l,begin:()=>{t.value.style.visibility="visible",s.value=!1},complete:()=>{e.value=!1}}),n.add({easing:"easeInOutCirc",delay:1e3,targets:t.value,rotate:["-45deg","-45deg"],translateX:["0","-100%"],duration:l,complete:()=>{t.value.style.visibility=null}})},"changeType2");return(n,X)=>(a(),o("div",x,[d("div",k,[e.value?(a(),o("div",E,"コンテンツ1")):(a(),o("div",I,"コンテンツ2"))]),e.value?(a(),o("button",{key:0,class:"button --2",onClick:C},"2に変更")):_("",!0),e.value?_("",!0):(a(),o("button",{key:1,class:"button --1",onClick:v},"1に変更")),d("div",{ref_key:"overlayEl",ref:t,class:h(["overlay",e.value?"--1":"--2"])},[d("div",N,f(s.value?"なんの！！":"うおお！！"),1)],2)]))}});const B=T(m,[["__scopeId","data-v-f071c1ea"]]);m.__docgenInfo={exportName:"default",displayName:"TestChangeContent",description:"",tags:{}};const u=g({__name:"ChangeContent",setup(i){return(e,s)=>(a(),b(B))}});u.__docgenInfo={exportName:"default",displayName:"ChangeContent",description:"",tags:{}};const P={parameters:{storySource:{source:`import ChangeContent from './ChangeContent.vue'\r
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
export const Default = Template.bind({})`,locationsMap:{default:{startLoc:{col:17,line:8},endLoc:{col:2,line:11},startBody:{col:17,line:8},endBody:{col:2,line:11}}}}},title:"EXPERIMENTAL/コンテンツ切替",component:u},O=r(()=>({components:{ChangeContent:u},template:"<ChangeContent />"}),"Template"),R=O.bind({}),S=["Default"];export{R as Default,S as __namedExportsOrder,P as default};
//# sourceMappingURL=ChangeContent.stories-5db110e0.js.map
