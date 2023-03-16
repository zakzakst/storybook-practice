var _=Object.defineProperty;var o=(e,n)=>_(e,"name",{value:n,configurable:!0});import{d as u,r as f,c as v,b as g,e as t,n as y,u as h,f as M,o as b,p as w,g as x}from"./vue.esm-bundler-1651915a.js";import{_ as k}from"./_plugin-vue_export-helper-a0691a9b.js";const c=o(e=>(w("data-v-fc0ae7f3"),e=e(),x(),e),"_withScopeId"),B=c(()=>t("img",{src:"https://picsum.photos/id/1000/400/200",width:"400",height:"200"},null,-1)),D=c(()=>t("span",{class:"modal__thumb-icon"},null,-1)),C=[B,D],I={class:"modal__content"},S=M('<div class="modal__head" data-v-fc0ae7f3><div class="modal__heading" data-v-fc0ae7f3>見出しが入ります</div></div><div class="modal__body" data-v-fc0ae7f3><div class="modal__text" data-v-fc0ae7f3>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</div><div class="modal__img" data-v-fc0ae7f3><img src="https://picsum.photos/id/1000/400/200" width="400" height="200" data-v-fc0ae7f3></div></div>',2),p=u({__name:"Modal01",props:{type:{default:"pop"}},setup(e){const n=e,r=f(!1),m=v(()=>({"is-active":r.value,[`--type-${n.type}`]:!0})),s=o(d=>{r.value=d},"changeIsModalOpen");return(d,a)=>(b(),g("div",null,[t("div",{class:"modal__thumb",onClick:a[0]||(a[0]=l=>s(!0))},C),t("div",{class:y(["modal",h(m)])},[t("div",I,[S,t("a",{class:"modal__close",onClick:a[1]||(a[1]=l=>s(!1))})]),t("div",{class:"modal__bg",onClick:a[2]||(a[2]=l=>s(!1))})],2)]))}});const i=k(p,[["__scopeId","data-v-fc0ae7f3"]]);p.__docgenInfo={exportName:"default",displayName:"Modal01",description:"",tags:{},props:[{name:"type",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"'pop'"}}]};const T=`
## 見出し

参考
https://www.smbc-gp.co.jp/stera/

### 中見出し

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
`,E={title:"Basic Pattern/モーダル01",component:i,argTypes:{type:{description:"アニメーションタイプ",table:{defaultValue:{summary:"アニメーションタイプ"}},control:{type:"select"},options:["pop","fade","slide"]}},parameters:{storySource:{source:`import Modal01 from './Modal01.vue'\r
\r
const descriptionMarkDown = \`\r
## 見出し\r
\r
参考\r
https://www.smbc-gp.co.jp/stera/\r
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
`,locationsMap:{default:{startLoc:{col:17,line:38},endLoc:{col:2,line:44},startBody:{col:17,line:38},endBody:{col:2,line:44}}}},docs:{description:{component:T}}}},V=o(e=>({components:{Modal01:i},setup(){return{args:e}},template:'<Modal01 v-bind="args" />'}),"Template"),N=V.bind({});N.args={type:"pop"};const L=["Default"];export{N as Default,L as __namedExportsOrder,E as default};
//# sourceMappingURL=Modal01.stories-3abda181.js.map
