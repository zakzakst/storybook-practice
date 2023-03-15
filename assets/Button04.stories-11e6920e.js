var u=Object.defineProperty;var n=(t,o)=>u(t,"name",{value:o,configurable:!0});import{d,b as e,e as a,F as i,j as _,o as r,t as m,p as B,g as f}from"./vue.esm-bundler-1651915a.js";import{_ as b}from"./_plugin-vue_export-helper-a0691a9b.js";const g=n(t=>(B("data-v-9e90506a"),t=t(),f(),t),"_withScopeId"),h={class:"button",href:"#"},w={class:"button__text"},y=g(()=>a("span",{class:"button__arrow"},null,-1)),s=d({__name:"Button04",props:{label:{default:"Button04"}},setup(t){return(o,S)=>(r(),e("a",h,[a("span",w,[(r(!0),e(i,null,_(t.label,(l,p)=>(r(),e("span",{key:p},m(l),1))),128))]),y]))}});const c=b(s,[["__scopeId","data-v-9e90506a"]]);s.__docgenInfo={exportName:"default",displayName:"Button04",description:"",tags:{},props:[{name:"label",required:!0,type:{name:"string"},defaultValue:{func:!1,value:"'Button04'"}}]};const x=`
## 見出し

参考
https://www.northgraphic.net/

### 中見出し

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
`,M={title:"Showcase/ボタン04",component:c,argTypes:{label:{description:"ボタンテキスト",table:{defaultValue:{summary:"テキスト"}},control:"text"}},parameters:{storySource:{source:`import Button04 from './Button04.vue'\r
\r
const descriptionMarkDown = \`\r
## 見出し\r
\r
参考\r
https://www.northgraphic.net/\r
\r
### 中見出し\r
\r
テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。\r
\`\r
\r
export default {\r
  title: 'Showcase/ボタン04',\r
  component: Button04,\r
  argTypes: {\r
    label: {\r
      description: 'ボタンテキスト',\r
      table: {\r
        defaultValue: {\r
          summary: 'テキスト',\r
        },\r
      },\r
      control: 'text',\r
    },\r
  },\r
  parameters: {\r
    docs: {\r
      description: {\r
        component: descriptionMarkDown,\r
      },\r
      source: {\r
        code: \`<Button04 label="Button04" />\`,\r
      },\r
    },\r
  },\r
}\r
\r
const Template = (args) => ({\r
  components: { Button04 },\r
  setup() {\r
    return { args }\r
  },\r
  template: '<Button04 v-bind="args" />',\r
})\r
\r
export const Default = Template.bind({})\r
Default.args = {\r
  label: 'Button04',\r
}\r
`,locationsMap:{default:{startLoc:{col:17,line:40},endLoc:{col:2,line:46},startBody:{col:17,line:40},endBody:{col:2,line:46}}}},docs:{description:{component:x},source:{code:'<Button04 label="Button04" />'}}}},v=n(t=>({components:{Button04:c},setup(){return{args:t}},template:'<Button04 v-bind="args" />'}),"Template"),D=v.bind({});D.args={label:"Button04"};const V=["Default"];export{D as Default,V as __namedExportsOrder,M as default};
//# sourceMappingURL=Button04.stories-11e6920e.js.map
