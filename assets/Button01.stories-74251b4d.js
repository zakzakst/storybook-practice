var o=Object.defineProperty;var r=(n,e)=>o(n,"name",{value:e,configurable:!0});import{B as t}from"./Button01-e53addc1.js";import"./vue.esm-bundler-1651915a.js";import"./_plugin-vue_export-helper-a0691a9b.js";const s=`
## 見出し

参考
https://www.justsystems.com/jp/

### 中見出し

テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
`,m={title:"Showcase/ボタン01",component:t,argTypes:{label:{description:"ボタンテキスト",table:{defaultValue:{summary:"テキスト"}},control:"text"}},parameters:{storySource:{source:`import Button01 from './Button01.vue'\r
\r
const descriptionMarkDown = \`\r
## 見出し\r
\r
参考\r
https://www.justsystems.com/jp/\r
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
`,locationsMap:{default:{startLoc:{col:17,line:40},endLoc:{col:2,line:46},startBody:{col:17,line:40},endBody:{col:2,line:46}}}},docs:{description:{component:s},source:{code:'<Button01 label="テキスト" />'}}}},a=r(n=>({components:{Button01:t},setup(){return{args:n}},template:'<Button01 v-bind="args" />'}),"Template"),l=a.bind({});l.args={label:"ボタン01"};const d=["Default"];export{l as Default,d as __namedExportsOrder,m as default};
//# sourceMappingURL=Button01.stories-74251b4d.js.map
