import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-CePRvBtH.js";import{a as s,b as h}from"./assume-CTtWK85a.js";import{U as x}from"./index-BlICU0AU.js";import"./index-DmM0KDA7.js";import"./iframe-CaGc7T6_.js";import"./index-nLeaPAJ8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const N=["red","yellow","green"],o=({text:n,color:l})=>{const d={div:"div",...r()};return e.jsx(d.div,{style:{background:l,textAlign:"center"},children:n})},p=s(o)({color:"yellow"}),m=s(o)({color:"yellow"},"Yellow"),j=h(o,"color")("yellow","My"),a=s(o)({color:"green"}),t=s(o)({color:"yellow"}),c=s(o)({color:"red"});function i(n){const l={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsxs(l.h1,{id:"react-compinators-tutorial",children:[e.jsx(l.code,{children:"react-compinators"})," Tutorial"]}),e.jsxs("ol",{children:[e.jsx("li",{children:e.jsx("a",{href:"#props",children:e.jsx("code",{children:"Props"})})}),e.jsxs("ol",{children:[e.jsx("li",{children:e.jsx("a",{href:"#1-assume",children:e.jsx("code",{children:"assume"})})}),e.jsx("li",{children:e.jsx("a",{href:"#2-assumeprop",children:e.jsx("code",{children:"assumeProp"})})}),e.jsx("li",{children:e.jsx("a",{href:"#3-unionvariants",children:e.jsx("code",{children:"unionVariants"})})})]}),e.jsx("li",{children:e.jsxs("a",{href:"#a-note-about-displayname",children:["A note about ",e.jsx("code",{children:"displayName"})]})})]}),e.jsx(l.p,{children:"A simple label component we will use as a running example:"}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-tsx",children:`export const COLORS = ['red', 'yellow', 'green'] as const
export type Color = (typeof COLORS)[number]

interface LabelProps { text: string; color: Color }

const Label = ({text, color: background}: LabelProps) => (
  <div style={{background}}>{text}</div>
)

<Label text="Green"  color="green" />
<Label text="Yellow" color="yellow" />
<Label text="Red"    color="red" />
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Three Labels"}),e.jsx(o,{text:"Green",color:"green"}),e.jsx(o,{text:"Yellow",color:"yellow"}),e.jsx(o,{text:"Red",color:"red"})]}),e.jsx(l.h2,{id:"props",children:"Props"}),e.jsxs(l.h3,{id:"1-assume",children:["1. ",e.jsx(l.code,{children:"assume"})]}),e.jsxs(l.p,{children:["To partially apply a subset of the ",e.jsx(l.code,{children:"<Label>"}),` props, we can use
`,e.jsx(l.code,{children:"assume"}),"(",e.jsx(l.em,{children:"base"}),")(partial props):"]}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-tsx",children:`import {assume} from 'react-compinators'

const YellowLabel = assume(Label)({color: 'yellow'})

<YellowLabel text="Hello World!" />

console.log(YellowLabel.displayName) // assumeColor(Label)
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"assumeColor(Label)"}),e.jsx(p,{text:"Hello World!"})]}),e.jsx(l.h4,{id:"displayname",children:e.jsx(l.code,{children:"displayName"})}),e.jsxs(l.p,{children:["By default, the ",e.jsx(l.code,{children:"displayName"}),` shown in React Dev Tools will be
`,e.jsx(l.code,{children:"assumeColor(Label)"}),", because ",e.jsx(l.code,{children:"Label"})," is the ",e.jsx(l.code,{children:"displayName"}),` of the base component
and we are partially applying a single prop called `,e.jsx(l.code,{children:"color"}),"."]}),e.jsxs(l.p,{children:["The combinators in this library will let you set an optional ",e.jsx(l.code,{children:"displayName"}),` to
aid debugging, but having none, will try to compute a reasonable value from
their arguments.`]}),e.jsxs(l.p,{children:["To override the ",e.jsx(l.code,{children:"displayName"})," ",e.jsx(l.em,{children:"wrapper"}),` we can provide the second, optional
argument to `,e.jsx(l.code,{children:"assume"}),":"]}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-tsx",children:`import {assume} from 'react-compinators'

const YellowLabel = assume(Label)({color: 'yellow'}, 'Yellow')
//                                                       ↑
//                  Optional argument for displayName wrapper 

<YellowLabel text="Hello World!" />

console.log(YellowLabel.displayName) // Yellow(Label)
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Yellow(Label)"}),e.jsx(m,{text:"Hello World!"})]}),e.jsxs(l.p,{children:["Here is how it looks in React Dev Tools with a default (",e.jsx(l.code,{children:"assumeColor"}),`) vs.
custom `,e.jsx(l.code,{children:"displayName"})," (",e.jsx(l.code,{children:"Yellow"}),"):"]}),e.jsx(l.p,{children:e.jsx(l.img,{src:"../docs/dev-tools-display-name.png",alt:"Dev Tools Screenshot"})}),e.jsxs(l.h3,{id:"2-assumeprop",children:["2. ",e.jsx(l.code,{children:"assumeProp"})]}),e.jsxs(l.p,{children:["When you need to partially apply only a single prop, ",e.jsx(l.code,{children:"assumeProp"}),` is a simpler
variant of `,e.jsx(l.code,{children:"assume"}),". Note that it too takes an optional ",e.jsx(l.code,{children:"displayName"})," argument:"]}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-tsx",children:`import {assumeProp} from 'react-compinators'

const YellowLabel = assumeProp(Label, 'color')('yellow', 'My')

<YellowLabel text="Hello World!" />

console.log(YellowLabel.displayName) // My(Label)
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"My(Label)"}),e.jsx(j,{text:"Hello World!"})]}),e.jsxs(l.h3,{id:"3-unionvariants",children:["3. ",e.jsx(l.code,{children:"unionVariants"})]}),e.jsxs(l.p,{children:["What if we wanted to partially apply ",e.jsx(l.em,{children:"three"}),` variants of the button, one for
each color?`]}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-tsx",children:`import {assume} from 'react-compinators'

const GreenLabel  = assume(Label)({color: 'green'})
const YellowLabel = assume(Label)({color: 'yellow'})
const RedLabel    = assume(Label)({color: 'red'})

<RedLabel    text="Red"/>
<YellowLabel text="Yellow"/>
<GreenLabel  text="Green"/>
`})}),e.jsxs("fieldset",{children:[e.jsxs("legend",{children:["Calling ",e.jsx("code",{children:"assume"})," ",e.jsx("i",{children:"three"})," times"]}),e.jsx(a,{text:"Green"}),e.jsx(t,{text:"Yellow"}),e.jsx(c,{text:"Red"})]}),e.jsxs(l.p,{children:["We could loop over the values, or we could use the ",e.jsx(l.code,{children:"unionVariants"}),` combinator.
It supports the common use case of creating a `,e.jsx(l.em,{children:"variant per union member"}),`, useful
when we prefer `,e.jsx(l.em,{children:"more components but less props"}),", over ",e.jsx(l.em,{children:`less props but more
components`}),":"]}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-tsx",children:`import {String} from 'effect'
import {unionVariants} from 'react-compinators'

const [ GreenLabel, YellowLabel, RedLabel ] = unionVariants(Label)(
  'color',           // Prop that we will partially apply.
  COLORS,            // Array of union members.
  String.capitalize, // Optional function will be used to compute variant
                     // displayName from its \`color\` prop.
) 

<RedLabel    text="Red"/>
<YellowLabel text="Yellow"/>
<GreenLabel  text="Green"/>

console.log(YellowLabel.displayName) // Yellow(Label)
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:e.jsx("code",{children:"unionVariants"})}),e.jsx(a,{text:"Green"}),e.jsx(t,{text:"Yellow"}),e.jsx(c,{text:"Red"})]}),e.jsxs(l.h2,{id:"a-note-about-displayname",children:["A note about ",e.jsx(l.code,{children:"displayName"})]}),e.jsxs(l.p,{children:[e.jsx(l.code,{children:"displayName"})," is used mostly for debugging via ",e.jsx(l.a,{href:"https://react.dev/learn/react-developer-tools",rel:"nofollow",children:`React Dev
Tools`}),". The convention for HOCs is:"]}),e.jsx(l.pre,{children:e.jsx(l.code,{className:"language-text",children:`Original Component Name
            ↓   
   Yellow(Label)
      ↑
  HOC Name
`})}),e.jsxs(l.p,{children:[`Read more about React Dev Tools and HOCs
`,e.jsx(l.a,{href:"https://github.com/facebook/react/blob/main/packages/react-devtools/CHANGELOG.md#higher-order-components",rel:"nofollow",children:"here"}),"."]})]}),`
`,e.jsx(l.hr,{})]})}function R(n={}){const{wrapper:l}={...r(),...n.components};return l?e.jsx(l,{...n,children:e.jsx(i,{...n})}):i(n)}export{N as COLORS,a as GreenLabel4,o as Label,c as RedLabel4,p as YellowLabel1,m as YellowLabel2,j as YellowLabel3,t as YellowLabel4,R as default};
