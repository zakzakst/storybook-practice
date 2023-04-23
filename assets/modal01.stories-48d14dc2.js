var _=Object.defineProperty;var n=(e,o)=>_(e,"name",{value:o,configurable:!0});import{d as u,r as f,c as v,b as g,e as t,n as y,u as h,f as M,o as b,p as x,g as k}from"./vue.esm-bundler-6ef4fa0f.js";import{_ as B}from"./_plugin-vue_export-helper-a0691a9b.js";const p=n(e=>(x("data-v-fc0ae7f3"),e=e(),k(),e),"_withScopeId"),D=p(()=>t("img",{src:"https://picsum.photos/id/1000/400/200",width:"400",height:"200"},null,-1)),w=p(()=>t("span",{class:"modal__thumb-icon"},null,-1)),C=[D,w],I={class:"modal__content"},S=M('<div class="modal__head" data-v-fc0ae7f3><div class="modal__heading" data-v-fc0ae7f3>見出しが入ります</div></div><div class="modal__body" data-v-fc0ae7f3><div class="modal__text" data-v-fc0ae7f3>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</div><div class="modal__img" data-v-fc0ae7f3><img src="https://picsum.photos/id/1000/400/200" width="400" height="200" data-v-fc0ae7f3></div></div>',2),c=u({__name:"Modal01",props:{type:{default:"pop"}},setup(e){const o=e,r=f(!1),m=v(()=>({"is-active":r.value,[`--type-${o.type}`]:!0})),s=n(d=>{r.value=d},"changeIsModalOpen");return(d,a)=>(b(),g("div",null,[t("div",{class:"modal__thumb",onClick:a[0]||(a[0]=l=>s(!0))},C),t("div",{class:y(["modal",h(m)])},[t("div",I,[S,t("a",{class:"modal__close",onClick:a[1]||(a[1]=l=>s(!1))})]),t("div",{class:"modal__bg",onClick:a[2]||(a[2]=l=>s(!1))})],2)]))}});const i=B(c,[["__scopeId","data-v-fc0ae7f3"]]);c.__docgenInfo={exportName:"default",displayName:"Modal01",description:"",tags:{},props:[{name:"type",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"'pop'"}}]};const T=`
## 見出し

詳細は下記ドキュメント参照

https://path/to/page

### 中見出し

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
`,L={title:"Basic Pattern/モーダル01",component:i,argTypes:{type:{description:"アニメーションタイプ",table:{defaultValue:{summary:"アニメーションタイプ"}},control:{type:"select"},options:["pop","fade","slide"]}},parameters:{storySource:{source:`import Modal01 from './Modal01.vue'\r
\r
const descriptionMarkDown = \`\r
## 見出し\r
\r
詳細は下記ドキュメント参照\r
\r
https://path/to/page\r
\r
### 中見出し\r
\r
テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。\r
\`\r
\r
export default {\r
  title: 'Basic Pattern/モーダル01',\r
  component: Modal01,\r
  argTypes: {\r
    type: {\r
      description: 'アニメーションタイプ',\r
      table: {\r
        defaultValue: {\r
          summary: 'アニメーションタイプ',\r
        },\r
      },\r
      control: { type: 'select' },\r
      options: ['pop', 'fade', 'slide'],\r
    },\r
  },\r
  parameters: {\r
    docs: {\r
      description: {\r
        component: descriptionMarkDown,\r
      },\r
    },\r
  },\r
}\r
\r
const Template = (args) => ({\r
  components: { Modal01 },\r
  setup() {\r
    return { args }\r
  },\r
  template: '<Modal01 v-bind="args" />',\r
})\r
\r
export const Default = Template.bind({})\r
Default.args = {\r
  type: 'pop',\r
}\r
`,locationsMap:{default:{startLoc:{col:17,line:39},endLoc:{col:2,line:45},startBody:{col:17,line:39},endBody:{col:2,line:45}}}},docs:{description:{component:T}}}},V=n(e=>({components:{Modal01:i},setup(){return{args:e}},template:'<Modal01 v-bind="args" />'}),"Template"),N=V.bind({});N.args={type:"pop"};const P=["Default"];export{N as Default,P as __namedExportsOrder,L as default};
//# sourceMappingURL=modal01.stories-48d14dc2.js.map
