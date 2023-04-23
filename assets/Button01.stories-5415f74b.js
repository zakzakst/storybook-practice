var o=Object.defineProperty;var r=(n,e)=>o(n,"name",{value:e,configurable:!0});import{B as t}from"./Button01-2ce712ae.js";import"./vue.esm-bundler-9fead487.js";import"./_plugin-vue_export-helper-a0691a9b.js";const a=`
## 見出し

詳細は下記ドキュメント参照

https://path/to/page

### 中見出し

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
`,d={title:"Showcase/ボタン01",component:t,argTypes:{label:{description:"ボタンテキスト",table:{defaultValue:{summary:"テキスト"}},control:"text"}},parameters:{storySource:{source:`import Button01 from './Button01.vue'\r
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
  title: 'Showcase/ボタン01',\r
  component: Button01,\r
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
        code: \`<Button01 label="テキスト" />\`,\r
      },\r
    },\r
  },\r
}\r
\r
const Template = (args) => ({\r
  components: { Button01 },\r
  setup() {\r
    return { args }\r
  },\r
  template: '<Button01 v-bind="args" />',\r
})\r
\r
export const Default = Template.bind({})\r
Default.args = {\r
  label: 'ボタン01',\r
}\r
`,locationsMap:{default:{startLoc:{col:17,line:41},endLoc:{col:2,line:47},startBody:{col:17,line:41},endBody:{col:2,line:47}}}},docs:{description:{component:a},source:{code:'<Button01 label="テキスト" />'}}}},s=r(n=>({components:{Button01:t},setup(){return{args:n}},template:'<Button01 v-bind="args" />'}),"Template"),l=s.bind({});l.args={label:"ボタン01"};const m=["Default"];export{l as Default,m as __namedExportsOrder,d as default};
//# sourceMappingURL=Button01.stories-5415f74b.js.map
