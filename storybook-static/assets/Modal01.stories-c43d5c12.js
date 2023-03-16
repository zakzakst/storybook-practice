var m=Object.defineProperty;var r=(e,t)=>m(e,"name",{value:t,configurable:!0});import{d as f,c as _,r as v,b as y,e as n,n as b,l as g,u as h,f as M,o as w,p as V,g as x}from"./vue.esm-bundler-1651915a.js";import{_ as k}from"./_plugin-vue_export-helper-a0691a9b.js";const c=r(e=>(V("data-v-ffc0d4d3"),e=e(),x(),e),"_withScopeId"),Y=c(()=>n("img",{src:"https://picsum.photos/id/1000/400/200",width:"400",height:"200"},null,-1)),D=c(()=>n("span",{class:"modal__thumb-icon"},null,-1)),I=[Y,D],S={class:"modal__content"},B=M('<div class="modal__head" data-v-ffc0d4d3><div class="modal__heading" data-v-ffc0d4d3>見出しが入ります</div></div><div class="modal__body" data-v-ffc0d4d3><div class="modal__text" data-v-ffc0d4d3>テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。</div><div class="modal__img" data-v-ffc0d4d3><img src="https://picsum.photos/id/1000/400/200" width="400" height="200" data-v-ffc0d4d3></div></div>',2),p=f({__name:"Modal01",props:{speed:{default:.2},translateY:{default:50},scale:{default:.9}},setup(e){const t=e,u=_(()=>({"--speed":t.speed+"s","--translateY":t.translateY+"px","--scale":t.scale})),o=v(!1),s=r(l=>{o.value=l},"changeIsModalOpen");return(l,a)=>(w(),y("div",null,[n("div",{class:"modal__thumb",onClick:a[0]||(a[0]=d=>s(!0))},I),n("div",{class:b(["modal",{"is-active":o.value}]),style:g(h(u))},[n("div",S,[B,n("a",{class:"modal__close",onClick:a[1]||(a[1]=d=>s(!1))})]),n("div",{class:"modal__bg",onClick:a[2]||(a[2]=d=>s(!1))})],6)]))}});const i=k(p,[["__scopeId","data-v-ffc0d4d3"]]);p.__docgenInfo={exportName:"default",displayName:"Modal01",description:"",tags:{},props:[{name:"speed",required:!0,type:{name:"number"},defaultValue:{func:!1,value:"0.2"}},{name:"translateY",required:!0,type:{name:"number"},defaultValue:{func:!1,value:"50"}},{name:"scale",required:!0,type:{name:"number"},defaultValue:{func:!1,value:"0.9"}}]};const C=`
## 見出し

参考
https://www.smbc-gp.co.jp/stera/

### 中見出し

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
`,j={title:"Playground/モーダル01",component:i,argTypes:{speed:{description:"アニメーションスピード",table:{defaultValue:{summary:"アニメーションスピード"}},control:{type:"number"}},translateY:{description:"上下移動値",table:{defaultValue:{summary:"上下移動値"}},control:{type:"number"}},scale:{description:"拡大値",table:{defaultValue:{summary:"拡大値"}},control:{type:"number"}}},parameters:{storySource:{source:`import Modal01 from './Modal01.vue'\r
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
  title: 'Playground/モーダル01',\r
  component: Modal01,\r
  argTypes: {\r
    speed: {\r
      description: 'アニメーションスピード',\r
      table: {\r
        defaultValue: {\r
          summary: 'アニメーションスピード',\r
        },\r
      },\r
      control: { type: 'number' },\r
    },\r
    translateY: {\r
      description: '上下移動値',\r
      table: {\r
        defaultValue: {\r
          summary: '上下移動値',\r
        },\r
      },\r
      control: { type: 'number' },\r
    },\r
    scale: {\r
      description: '拡大値',\r
      table: {\r
        defaultValue: {\r
          summary: '拡大値',\r
        },\r
      },\r
      control: { type: 'number' },\r
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
  speed: 0.2,\r
  translateY: 50,\r
  scale: 0.9,\r
}\r
`,locationsMap:{default:{startLoc:{col:17,line:55},endLoc:{col:2,line:61},startBody:{col:17,line:55},endBody:{col:2,line:61}}}},docs:{description:{component:C}}}},T=r(e=>({components:{Modal01:i},setup(){return{args:e}},template:'<Modal01 v-bind="args" />'}),"Template"),N=T.bind({});N.args={speed:.2,translateY:50,scale:.9};const z=["Default"];export{N as Default,z as __namedExportsOrder,j as default};
//# sourceMappingURL=Modal01.stories-c43d5c12.js.map
