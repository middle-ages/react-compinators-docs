import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-CePRvBtH.js";import{U as c}from"./index-tohlMYUp.js";import{a as s,b as d,u as p,p as t,c as h,m,d as x,e as j}from"./map-KcuHEjJC.js";import"./index-DmM0KDA7.js";import"./iframe-Cjo1kWPp.js";import"./index-nLeaPAJ8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const u=["red","yellow","green"],l=({text:n,color:o})=>{const i={div:"div",...r()};return e.jsx(i.div,{style:{background:o,textAlign:"center"},children:n})},b=s(l)({color:"yellow"}),g=s(l)({color:"yellow"},"Yellow"),f=d(l,"color")("yellow","My"),w=s(l)({color:"green"}),y=s(l)({color:"yellow"}),L=s(l)({color:"red"}),[v,P,Y]=p(l,"color")(u,h),N=t("?",j,x(l,"text")),C=({bar:n})=>{const o={div:"div",...r()};return e.jsx(o.div,{children:n.toString()})},R=n=>({bar:n.foo.length}),A=t(C,m(R));function a(n){const o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(c,{children:[e.jsxs("h1",{children:[e.jsx("span",{style:{fontFamily:"Times New Roman, Times, serif"},children:"λ⚛"})," React Compinators Tutorial"]}),e.jsxs("ol",{children:[e.jsx("li",{children:e.jsx("a",{href:"#props",children:e.jsx("code",{children:"Props"})})}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("a",{href:"#1-assume",children:e.jsx("code",{children:"assume"})})," (",e.jsx("a",{href:"https://middle-ages.github.io/react-compinators-docs/docs/functions/assume.html",children:"API"}),")"]}),e.jsxs("li",{children:[e.jsx("a",{href:"#2-assumeprop",children:e.jsx("code",{children:"assumeProp"})})," (",e.jsx("a",{href:"https://middle-ages.github.io/react-compinators-docs/docs/functions/assumeProp.html",children:"API"}),")"]}),e.jsxs("li",{children:[e.jsx("a",{href:"#3-unionvariants",children:e.jsx("code",{children:"unionVariants"})})," (",e.jsx("a",{href:"https://middle-ages.github.io/react-compinators-docs/docs/functions/unionVariants.html",children:"API"}),")"]}),e.jsxs("li",{children:[e.jsx("a",{href:"#4-modprop",children:e.jsx("code",{children:"modProp"})})," (",e.jsx("a",{href:"https://middle-ages.github.io/react-compinators-docs/docs/functions/modProp.html",children:"API"}),")"]}),e.jsxs("li",{children:[e.jsx("a",{href:"#5-mapprops",children:e.jsx("code",{children:"mapProps"})})," (",e.jsx("a",{href:"https://middle-ages.github.io/react-compinators-docs/docs/functions/mapProps.html",children:"API"}),")"]})]}),e.jsx("li",{children:e.jsxs("a",{href:"#a-note-about-displayname",children:["A note about ",e.jsx("code",{children:"displayName"})]})})]}),e.jsx(o.p,{children:"A simple label component we will use as a running example:"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`export const COLORS = ['red', 'yellow', 'green'] as const
export type Color = (typeof COLORS)[number]

interface LabelProps { text: string; color: Color }

const Label = ({text, color: background}: LabelProps) => (
  <div style={{background}}>{text}</div>
)

<Label text="Green"  color="green" />
<Label text="Yellow" color="yellow" />
<Label text="Red"    color="red" />
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Three Labels"}),e.jsx(l,{text:"Green",color:"green"}),e.jsx(l,{text:"Yellow",color:"yellow"}),e.jsx(l,{text:"Red",color:"red"})]}),e.jsx(o.h2,{id:"props",children:"Props"}),e.jsxs(o.h3,{id:"1-assume",children:["1. ",e.jsx(o.code,{children:"assume"})]}),e.jsxs(o.p,{children:["To partially apply a subset of the ",e.jsx(o.code,{children:"<Label>"}),` props, we can use
`,e.jsx(o.code,{children:"assume"}),"(",e.jsx(o.em,{children:"base"}),")(partial props):"]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {assume} from 'react-compinators'

const YellowLabel = assume(Label)({color: 'yellow'})

<YellowLabel text="Hello World!" />

console.log(YellowLabel.displayName) // assumeColor(Label)
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"assumeColor(Label)"}),e.jsx(b,{text:"Hello World!"})]}),e.jsx(o.h4,{id:"displayname",children:e.jsx(o.code,{children:"displayName"})}),e.jsxs(o.p,{children:["By default, the ",e.jsx(o.code,{children:"displayName"}),` shown in React Dev Tools will be
`,e.jsx(o.code,{children:"assumeColor(Label)"}),", because ",e.jsx(o.code,{children:"Label"})," is the ",e.jsx(o.code,{children:"displayName"}),` of the base component
and we are partially applying a single prop called `,e.jsx(o.code,{children:"color"}),"."]}),e.jsxs(o.p,{children:["The combinators in this library will let you set an optional ",e.jsx(o.code,{children:"displayName"}),` to
aid debugging, but having none, will try to compute a reasonable value from
their arguments.`]}),e.jsxs(o.p,{children:["To override the ",e.jsx(o.code,{children:"displayName"})," ",e.jsx(o.em,{children:"wrapper"}),` we can provide the second, optional
argument to `,e.jsx(o.code,{children:"assume"}),":"]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {assume} from 'react-compinators'

const YellowLabel = assume(Label)({color: 'yellow'}, 'Yellow')
//                                                       ↑
//                  Optional argument for displayName wrapper 

<YellowLabel text="Hello World!" />

console.log(YellowLabel.displayName) // Yellow(Label)
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Yellow(Label)"}),e.jsx(g,{text:"Hello World!"})]}),e.jsxs(o.p,{children:["Here is how it looks in React Dev Tools with a default (",e.jsx(o.code,{children:"assumeColor"}),`) vs.
custom `,e.jsx(o.code,{children:"displayName"})," (",e.jsx(o.code,{children:"Yellow"}),"):"]}),e.jsx(o.p,{children:e.jsx(o.img,{src:"https://middle-ages.github.io/react-compinators-docs/docs/dev-tools-display-name.png",alt:"Dev Tools Screenshot"})}),e.jsxs(o.p,{children:[`All combinators follow this pattern of taking an optional value that will
determine `,e.jsx(o.code,{children:"displayName"}),"."]}),e.jsxs(o.h3,{id:"2-assumeprop",children:["2. ",e.jsx(o.code,{children:"assumeProp"})]}),e.jsxs(o.p,{children:["When you need to partially apply only a single prop, ",e.jsx(o.code,{children:"assumeProp"}),` is a simpler
variant of `,e.jsx(o.code,{children:"assume"}),". Note that it too takes an optional ",e.jsx(o.code,{children:"displayName"})," argument:"]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {assumeProp} from 'react-compinators'

const YellowLabel = assumeProp(Label, 'color')('yellow', 'My')

<YellowLabel text="Hello World!" />

console.log(YellowLabel.displayName) // My(Label)
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"My(Label)"}),e.jsx(f,{text:"Hello World!"})]}),e.jsxs(o.h3,{id:"3-unionvariants",children:["3. ",e.jsx(o.code,{children:"unionVariants"})]}),e.jsxs(o.p,{children:["What if we wanted to partially apply ",e.jsx(o.em,{children:"three"}),` variants of the button, one for
each color?`]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {assume} from 'react-compinators'

const GreenLabel  = assume(Label)({color: 'green'})
const YellowLabel = assume(Label)({color: 'yellow'})
const RedLabel    = assume(Label)({color: 'red'})

<RedLabel    text="Red"/>
<YellowLabel text="Yellow"/>
<GreenLabel  text="Green"/>
`})}),e.jsxs("fieldset",{children:[e.jsxs("legend",{children:["Calling ",e.jsx("code",{children:"assume"})," ",e.jsx("i",{children:"three"})," times"]}),e.jsx(w,{text:"Green"}),e.jsx(y,{text:"Yellow"}),e.jsx(L,{text:"Red"})]}),e.jsxs(o.p,{children:["We could loop over the values, or we could use the ",e.jsx(o.code,{children:"unionVariants"}),` combinator.
It supports the common use case of creating a `,e.jsx(o.em,{children:"variant per union member"}),`, useful
when we prefer `,e.jsx(o.em,{children:"more components but less props"}),", over ",e.jsx(o.em,{children:`less props but more
components`}),":"]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {String} from 'effect'
import {unionVariants} from 'react-compinators'

const [ GreenLabel, YellowLabel, RedLabel ] = unionVariants(
  Label,             // Base component.
  'color',           // Prop that we will be setting.
)(
  COLORS,            // Array of union members.
  String.capitalize, // Optional function will be used to compute variant
                     // displayName from its \`color\` prop.
) 

<RedLabel    text="Red"/>
<YellowLabel text="Yellow"/>
<GreenLabel  text="Green"/>

console.log(YellowLabel.displayName) // Yellow(Label)
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:e.jsx("code",{children:"unionVariants"})}),e.jsx(v,{text:"Green"}),e.jsx(P,{text:"Yellow"}),e.jsx(Y,{text:"Red"})]}),e.jsxs(o.h3,{id:"4-modprop",children:["4. ",e.jsx(o.code,{children:"modProp"})]}),e.jsxs(o.p,{children:[e.jsx(o.code,{children:"modProp"}),` is used to map over a component prop without changing its type.The
returned component will be of the same type as the base component.`]}),e.jsxs(o.p,{children:[`Useful for example to add a CSS class to the a component without creating a new
component or changing the component props at its call site. In this case it would
act like `,e.jsx(o.code,{children:"assume"}),", except instead of fixing a prop value, we are ",e.jsx(o.em,{children:"adding"}),` fixed
value to the prop.`]}),e.jsx(o.p,{children:"Here we convert our label into one that appends a question mark to the text:"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {String, pipe} from 'effect'
import {modProp} from 'react-compinators'

const QuestionLabel: typeof Label = pipe('?', String.concat, modProp(Label, 'text'))

<QuestionLabel color="yellow" text="Hello World" />

console.log(QuestionLabel.displayName) // mapPropText(Label)
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:e.jsx("code",{children:"modPropText(Label)"})}),e.jsx(N,{color:"yellow",text:"Hello World"})]}),e.jsxs(o.h3,{id:"5-mapprops",children:["5. ",e.jsx(o.code,{children:"mapProps"})]}),e.jsx(o.p,{children:"When:"}),e.jsxs(o.ol,{children:[`
`,e.jsxs(o.li,{children:["You have a component that takes props of type ",e.jsx(o.code,{children:"A"}),"."]}),`
`,e.jsxs(o.li,{children:["But you want a component that takes props of type ",e.jsx(o.code,{children:"B"}),"."]}),`
`,e.jsxs(o.li,{children:["And the props you have are of type ",e.jsx(o.code,{children:"B"}),"."]}),`
`,e.jsxs(o.li,{children:["But you do have some way of converting ",e.jsx(o.code,{children:"B"})," ⇒ ",e.jsx(o.code,{children:"A"}),"."]}),`
`]}),e.jsx(o.p,{children:`For example lets convert a component that display a number into a component
that displays character count for a given string:`}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {mapProps} from 'react-compinators'
interface B { foo: string }
interface A { bar: number }

const ComponentA: FC<A> = ({ bar }) => <div>{bar + 1}</div>;

// The function mapping B ⇒ A
const mapper = (a: B): A => ({ bar: a.foo.length })

// We now have a component of B
const ComponentB: FC<B> = pipe(ComponentA, mapProps(mapper));

<ComponentB foo="foo">
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:e.jsx("code",{children:"mapProps(ComponentA)"})}),e.jsx(A,{foo:"Hello World!"})]}),e.jsxs(o.h2,{id:"a-note-about-displayname",children:["A note about ",e.jsx(o.code,{children:"displayName"})]}),e.jsxs(o.p,{children:[e.jsx(o.code,{children:"displayName"})," is used mostly for debugging via ",e.jsx(o.a,{href:"https://react.dev/learn/react-developer-tools",rel:"nofollow",children:`React Dev
Tools`}),". The convention for HOCs is:"]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-text",children:`Original Component Name
            ↓   
   Yellow(Label)
      ↑
  HOC Name
`})}),e.jsxs(o.p,{children:[`Read more about React Dev Tools and HOCs
`,e.jsx(o.a,{href:"https://github.com/facebook/react/blob/main/packages/react-devtools/CHANGELOG.md#higher-order-components",rel:"nofollow",children:"here"}),"."]})]})}function M(n={}){const{wrapper:o}={...r(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(a,{...n})}):a(n)}export{u as COLORS,C as ComponentA,A as ComponentB,w as GreenLabel4,v as GreenLabel5,l as Label,N as QuestionLabel,L as RedLabel4,Y as RedLabel5,b as YellowLabel1,g as YellowLabel2,f as YellowLabel3,y as YellowLabel4,P as YellowLabel5,M as default,R as mapper};
