var y=Object.defineProperty;var o=(u,n)=>y(u,"name",{value:n,configurable:!0});import{d as h,r as p,b as m,e as a,k,F as x,D,o as _,t as E,E as I}from"./vue.esm-bundler-6ef4fa0f.js";import{a as r}from"./anime.es-36cbcd4c.js";import{_ as T}from"./_plugin-vue_export-helper-a0691a9b.js";const N={class:"container"},P={class:"menu-button"},w={class:"menu-button__sub-buttons"},d=h({__name:"MenuButton",setup(u){const n=p(!1),t=p(!1),c=70,l=300,M=o(()=>{t.value||(t.value=!0,r({targets:".menu-button__sub-button",duration:l,easing:"easeOutBack",translateX:(i,s,e)=>c*Math.sin(-(Math.PI/2-Math.PI/(e-1)*s)),translateY:(i,s,e)=>c*Math.cos(Math.PI/2+Math.PI/(e-1)*s),delay:r.stagger(100),complete:()=>{n.value=!0,t.value=!1}}))},"openMenu"),b=o(()=>{t.value||(t.value=!0,r({targets:".menu-button__sub-button",duration:l,easing:"easeInBack",translateX:0,translateY:0,delay:r.stagger(100),complete:()=>{n.value=!1,t.value=!1}}))},"closeMenu"),B=o(()=>{n.value?b():M()},"onClick");return(i,s)=>{const e=I("font-awesome-icon");return _(),m("div",N,[a("div",P,[a("button",{class:"menu-button__main",onClick:B},[k(e,{icon:"fa-solid fa-bars",size:"2x",class:"menu-button__main-icon"})]),a("div",w,[(_(),m(x,null,D(5,(v,g)=>a("button",{key:g,class:"menu-button__sub-button"},E(v),1)),64))])])])}}});const f=T(d,[["__scopeId","data-v-f43ccc39"]]);d.__docgenInfo={exportName:"default",displayName:"MenuButton",description:"",tags:{}};const L=`
## 検討事項など
- ライブラリがTypeScriptの型対応していません。ただ、下記の理由から\`@ts-ignore\`での対応も検討していいのではないかと考えています。
  - アニメーションに関するライブラリのため型指定が関連する場面は少ないと想定される
  - atomコンポーネントのみでの使用可などでもいいのではないか
- 採用するメリットとして、ライセンスが商用無料なことが挙げられます。
- デザイナーのかた、具体的なデザイン案がありましたらアイデアいただけますでしょうか。
`,A={title:"EXPERIMENTAL/メニューボタン",component:f,parameters:{storySource:{source:`import MenuButton from './MenuButton.vue'\r
\r
const descriptionMarkDown = \`\r
## 検討事項など\r
- ライブラリがTypeScriptの型対応していません。ただ、下記の理由から\\\`@ts-ignore\\\`での対応も検討していいのではないかと考えています。\r
  - アニメーションに関するライブラリのため型指定が関連する場面は少ないと想定される\r
  - atomコンポーネントのみでの使用可などでもいいのではないか\r
- 採用するメリットとして、ライセンスが商用無料なことが挙げられます。\r
- デザイナーのかた、具体的なデザイン案がありましたらアイデアいただけますでしょうか。\r
\`\r
\r
export default {\r
  title: 'EXPERIMENTAL/メニューボタン',\r
  component: MenuButton,\r
  parameters: {\r
    docs: {\r
      description: {\r
        component: descriptionMarkDown,\r
      },\r
    },\r
  },\r
}\r
\r
const Template = () => ({\r
  components: { MenuButton },\r
  template: '<MenuButton />',\r
})\r
\r
export const Default = Template.bind({})`,locationsMap:{default:{startLoc:{col:17,line:24},endLoc:{col:2,line:27},startBody:{col:17,line:24},endBody:{col:2,line:27}}}},docs:{description:{component:L}}}},S=o(()=>({components:{MenuButton:f},template:"<MenuButton />"}),"Template"),F=S.bind({}),V=["Default"];export{F as Default,V as __namedExportsOrder,A as default};
//# sourceMappingURL=MenuButton.stories-75ce897f.js.map
