import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as l}from"./index-CePRvBtH.js";import{U as d}from"./index-wEMeglJJ.js";import{a as i,b as r,u as p,p as t,o as h,c as m,m as x,d as j,e as u,f}from"./map-fGemFwS1.js";import"./index-DmM0KDA7.js";import"./iframe-CPeH3bBc.js";import"./index-nLeaPAJ8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const b=["red","yellow","green"],s=({text:n,color:o})=>{const c={div:"div",...l()};return e.jsx(c.div,{style:{background:o,textAlign:"center"},children:n})},g=i(s)({color:"yellow"}),w=i(s)({color:"yellow"},"Yellow"),y=r(s,"color")("yellow","My"),P=r(s,"color")("green"),L=r(s,"color")("yellow"),v=r(s,"color")("red"),[C,N,A]=p(s,"color")(b,m),Y=t("?",f,u(s,"text")),R=({bar:n})=>{const o={div:"div",...l()};return e.jsx(o.div,{children:n.toString()})},W=n=>({bar:n.foo.length}),O=t(R,x(W)),B=({foo:n})=>{const o={div:"div",...l()};return e.jsx(o.div,{children:n.toString()})},H=n=>n.length,T=t(B,j(H,"foo")),G=({text:n})=>{const o={div:"div",...l()};return e.jsx(o.div,{children:n})},S=h(G,"OmitNumber")("number"),k=n=>e.jsx(S,{...n});function a(n){const o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...l(),...n.components};return e.jsxs(d,{children:[e.jsxs("h1",{children:[e.jsx("span",{style:{fontFamily:"Times New Roman, Times, serif"},children:"λ⚛"})," React Compinators Tutorial"]}),e.jsxs("ol",{children:[e.jsx("li",{children:e.jsx("a",{href:"#running-example",children:e.jsx("code",{children:"Running Example"})})}),e.jsx("li",{children:e.jsx("a",{href:"#assume",children:e.jsx("code",{children:"Assume"})})}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("a",{href:"#1-assumeprops",children:e.jsx("code",{children:"assumeProps"})})," (",e.jsx("a",{href:"https://middle-ages.github.io/react-compinators-docs/docs/functions/assumeProps.html",children:"API"}),")"]}),e.jsxs("li",{children:[e.jsx("a",{href:"#2-assumeprop",children:e.jsx("code",{children:"assumeProp"})})," (",e.jsx("a",{href:"https://middle-ages.github.io/react-compinators-docs/docs/functions/assumeProp.html",children:"API"}),")"]}),e.jsxs("li",{children:[e.jsx("a",{href:"#3-unfoldprop",children:e.jsx("code",{children:"unfoldProp"})})," (",e.jsx("a",{href:"https://middle-ages.github.io/react-compinators-docs/docs/functions/unfoldProp.html",children:"API"}),")"]})]}),e.jsx("li",{children:e.jsx("a",{href:"#map",children:e.jsx("code",{children:"Map"})})}),e.jsxs("ol",{children:[e.jsxs("li",{children:[e.jsx("a",{href:"#1-modprop",children:e.jsx("code",{children:"modProp"})})," (",e.jsx("a",{href:"https://middle-ages.github.io/react-compinators-docs/docs/functions/modProp.html",children:"API"}),")"]}),e.jsxs("li",{children:[e.jsx("a",{href:"#2-mapprops",children:e.jsx("code",{children:"mapProps"})})," (",e.jsx("a",{href:"https://middle-ages.github.io/react-compinators-docs/docs/functions/mapProps.html",children:"API"}),")"]}),e.jsxs("li",{children:[e.jsx("a",{href:"#3-mapprop",children:e.jsx("code",{children:"mapProp"})})," (",e.jsx("a",{href:"https://middle-ages.github.io/react-compinators-docs/docs/functions/mapProp.html",children:"API"}),")"]}),e.jsxs("li",{children:[e.jsx("a",{href:"#4-omitprops",children:e.jsx("code",{children:"mapProps"})})," (",e.jsx("a",{href:"https://middle-ages.github.io/react-compinators-docs/docs/functions/omitProps.html",children:"API"}),")"]})]}),e.jsx("li",{children:e.jsxs("a",{href:"#a-note-about-displayname",children:["A note about ",e.jsx("code",{children:"displayName"})]})})]}),e.jsx(o.h2,{id:"running-example",children:"Running Example"}),e.jsx(o.p,{children:"A simple label component we will use as a running example:"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`export const COLORS = ['red', 'yellow', 'green'] as const
export type Color = (typeof COLORS)[number]

interface LabelProps { text: string; color: Color }

const Label = ({text, color: background}: LabelProps) => (
  <div style={{background}}>{text}</div>
)

<Label text="Green"  color="green" />
<Label text="Yellow" color="yellow" />
<Label text="Red"    color="red" />
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Three Labels"}),e.jsx(s,{text:"Green",color:"green"}),e.jsx(s,{text:"Yellow",color:"yellow"}),e.jsx(s,{text:"Red",color:"red"})]}),e.jsx(o.h2,{id:"the-combinators",children:"The Combinators"}),e.jsx(o.h3,{id:"assume",children:"Assume"}),e.jsxs(o.h4,{id:"1-assumeprops",children:["1. ",e.jsx(o.code,{children:"assumeProps"})]}),e.jsxs(o.p,{children:["To partially apply a subset of the ",e.jsx(o.code,{children:"<Label>"}),` props, we can use
`,e.jsx(o.code,{children:"assumeProps"}),"(",e.jsx(o.em,{children:"base"}),")(partial props):"]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {assumeProps} from 'react-compinators'

const YellowLabel = assumeProps(Label)({color: 'yellow'})

<YellowLabel text="Hello World!" />

console.log(YellowLabel.displayName) // assumePropsColor(Label)
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"assumePropsColor(Label)"}),e.jsx(g,{text:"Hello World!"})]}),e.jsxs(o.p,{children:["By default, the ",e.jsx(o.code,{children:"displayName"}),` shown in React Dev Tools will be
`,e.jsx(o.code,{children:"assumeColor(Label)"}),", because ",e.jsx(o.code,{children:"Label"})," is the ",e.jsx(o.code,{children:"displayName"}),` of the base component
and we are partially applying a single prop called `,e.jsx(o.code,{children:"color"}),"."]}),e.jsxs(o.p,{children:["The combinators in this library will let you set an optional ",e.jsx(o.code,{children:"displayName"}),` to
aid debugging, but having none, will try to compute a reasonable value from
their arguments.`]}),e.jsxs(o.p,{children:["To override the ",e.jsx(o.code,{children:"displayName"})," ",e.jsx(o.em,{children:"wrapper"}),` we can provide the second, optional
argument to `,e.jsx(o.code,{children:"assumeProps"}),":"]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {assumeProps} from 'react-compinators'

const YellowLabel = assumeProps(Label)({color: 'yellow'}, 'Yellow')
//                                                       ↑
//                  Optional argument for displayName wrapper 

<YellowLabel text="Hello World!" />

console.log(YellowLabel.displayName) // Yellow(Label)
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Yellow(Label)"}),e.jsx(w,{text:"Hello World!"})]}),e.jsxs(o.p,{children:["This is how it looks in React Dev Tools with a default ",e.jsx(o.code,{children:"displayName"}),":"]}),e.jsx("img",{src:"https://middle-ages.github.io/react-compinators-docs/docs/dev-tools-display-name-default.png",alt:"Dev Tools default displayName",style:{border:"2px inset",maxWidth:"20rem"}}),e.jsxs(o.p,{children:["But when we provide the ",e.jsx(o.code,{children:"Yellow"})," argument to ",e.jsx(o.code,{children:"assumeProps"})," we get:"]}),e.jsx("img",{src:"https://middle-ages.github.io/react-compinators-docs/docs/dev-tools-display-name-custom.png",alt:"Dev Tools custom displayName",style:{border:"2px inset",maxWidth:"20rem"}}),e.jsxs(o.p,{children:[`All combinators follow this pattern of taking an optional value that will
determine `,e.jsx(o.code,{children:"displayName"}),"."]}),e.jsxs(o.h4,{id:"2-assumeprop",children:["2. ",e.jsx(o.code,{children:"assumeProp"})]}),e.jsxs(o.p,{children:["When you need to partially apply only a single prop, ",e.jsx(o.code,{children:"assumeProp"}),` is a simpler
variant of `,e.jsx(o.code,{children:"assume"}),". Note that it takes an optional ",e.jsx(o.code,{children:"displayName"}),` argument as
well:`]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {assumeProp} from 'react-compinators'

const YellowLabel = assumeProp(Label, 'color')('yellow', 'My')

<YellowLabel text="Hello World!" />

console.log(YellowLabel.displayName) // My(Label)
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:"My(Label)"}),e.jsx(y,{text:"Hello World!"})]}),e.jsxs(o.h4,{id:"3-unfoldprop",children:["3. ",e.jsx(o.code,{children:"unfoldProp"})]}),e.jsxs(o.p,{children:["What if we wanted to partially apply ",e.jsx(o.em,{children:"three"}),` variants of the button, one for
each color?`]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {assumeProp} from 'react-compinators'

export const GreenLabel  = assumeProp(Label, 'color')('green')
export const YellowLabel = assumeProp(Label, 'color')('yellow')
export const RedLabel    = assumeProp(Label, 'color')('red')

<RedLabel    text="Red"/>
<YellowLabel text="Yellow"/>
<GreenLabel  text="Green"/>
`})}),e.jsxs("fieldset",{children:[e.jsxs("legend",{children:["Calling ",e.jsx("code",{children:"assumeProp"})," ",e.jsx("i",{children:"three"})," times"]}),e.jsx(P,{text:"Green"}),e.jsx(L,{text:"Yellow"}),e.jsx(v,{text:"Red"})]}),e.jsxs(o.p,{children:["We could loop over the values, or we could use the ",e.jsx(o.code,{children:"unfoldProp"}),` combinator.
It supports the common use case of creating a `,e.jsx(o.em,{children:"variant per union member"}),`, useful
when we prefer `,e.jsx(o.em,{children:"more components but fewer props"}),", over ",e.jsx(o.em,{children:`fewer props but more
components`}),":"]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {String} from 'effect'
import {unfoldProp} from 'react-compinators'

const [ GreenLabel, YellowLabel, RedLabel ] = unfoldProp(
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
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:e.jsx("code",{children:"unfoldProp"})}),e.jsx(C,{text:"Green"}),e.jsx(N,{text:"Yellow"}),e.jsx(A,{text:"Red"})]}),e.jsx(o.h3,{id:"map",children:"Map"}),e.jsxs(o.h4,{id:"1-modprop",children:["1. ",e.jsx(o.code,{children:"modProp"})]}),e.jsxs(o.p,{children:[e.jsx(o.code,{children:"modProp"}),` is used to map over a component prop without changing its type.The
returned component will be of the same type as the base component.`]}),e.jsxs(o.p,{children:[`Useful for example to add a CSS class to the a component without creating a new
component, and without changing the component props at its call site. In this
case it would act like `,e.jsx(o.code,{children:"assumeProp"}),`, except instead of fixing a prop value, we
are `,e.jsx(o.em,{children:"adding"})," a fixed value to the prop."]}),e.jsx(o.p,{children:"Here we convert our label into one that appends a question mark to the text:"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {String, pipe} from 'effect'
import {modProp} from 'react-compinators'

const QuestionLabel: typeof Label = pipe('?', String.concat, modProp(Label, 'text'))

<QuestionLabel color="yellow" text="Hello World" />

console.log(QuestionLabel.displayName) // mapPropText(Label)
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:e.jsx("code",{children:"modPropText(Label)"})}),e.jsx(Y,{color:"yellow",text:"Hello World"})]}),e.jsxs(o.h4,{id:"2-mapprops",children:["2. ",e.jsx(o.code,{children:"mapProps"})]}),e.jsxs(o.p,{children:[e.jsx(o.code,{children:"modProps"})," is actually a special case of ",e.jsx(o.code,{children:"mapProps"}),", useful when:"]}),e.jsxs(o.ol,{children:[`
`,e.jsxs(o.li,{children:["You have a component that takes props of type ",e.jsx(o.code,{children:"A"}),"."]}),`
`,e.jsxs(o.li,{children:["But you want a component that takes props of type ",e.jsx(o.code,{children:"B"}),"."]}),`
`,e.jsxs(o.li,{children:["And the props you have are of type ",e.jsx(o.code,{children:"B"}),"."]}),`
`,e.jsxs(o.li,{children:["But you do have some way of converting ",e.jsx(o.code,{children:"B"})," ⇒ ",e.jsx(o.code,{children:"A"}),"."]}),`
`]}),e.jsx(o.p,{children:`For example let's convert a component that display a number into a component
that displays character count for a given string:`}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {mapProps} from 'react-compinators'
interface B { foo: string }
interface A { bar: number }

const ComponentA: FC<A> = ({ bar }) => <div>{bar.toString()}</div>;

// The function mapping B ⇒ A
const mapper = (a: B): A => ({ bar: a.foo.length })

// We now have a component of B
const ComponentB: FC<B> = pipe(ComponentA, mapProps(mapper));

<ComponentB foo="Hello World!">
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:e.jsx("code",{children:"mapProps(ComponentA)"})}),e.jsx(O,{foo:"Hello World!"})]}),e.jsxs(o.p,{children:["In this case we are renaming a prop and changing prop type, but ",e.jsx(o.code,{children:"mapProps"}),` can
do anything as long as the types fit.`]}),e.jsxs(o.h4,{id:"3-mapprop",children:["3. ",e.jsx(o.code,{children:"mapProp"})]}),e.jsxs(o.p,{children:["When you don't need the full power of ",e.jsx(o.code,{children:"mapProps"}),`, map prop focuses on a single
named prop, and can only change its value but `,e.jsx(o.em,{children:"not"})," the prop name."]}),e.jsx(o.p,{children:`Here is the example of converting a component that displays numbers into one
that display character count, but here the prop name is the same between base
component and the one returned:`}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {mapProp} from 'react-compinators'
interface B { foo: string }
interface A { foo: number }

const ComponentA: FC<A> = ({foo}) => <div>{foo.toString()}</div>;
const mapper = (foo: string): number => foo.length
const ComponentB: FC<B> = pipe(ComponentA, mapProp(mapper, 'foo'));

<ComponentB foo="Hello World!">
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:e.jsx("code",{children:"mapProp(ComponentA)"})}),e.jsx(T,{foo:"Hello World!"})]}),e.jsxs(o.h4,{id:"4-omitprops",children:["4. ",e.jsx(o.code,{children:"omitProps"})]}),e.jsxs(o.p,{children:[`When a parent component spreads its props to its children, there is usually some
prop massaging required. When this requires `,e.jsx(o.em,{children:"removal"}),` of props by name, you can
convert your component into one that drops these props using `,e.jsx(o.code,{children:"omitProps"}),"."]}),e.jsxs(o.p,{children:["In the code below, the ",e.jsx(o.code,{children:"<Parent>"}),` component takes a pair of props while its
child gets only a single prop. Instead of manipulating the props object, we
convert the child into one that ignores the extra prop:`]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {omitProps} from 'react-compinators'

interface ParentProps {text: string; number: number}
interface ChildProps {text: string}

const Child = ({text}: ChildProps) => <div>{text}</div>

const OmitNumber = omitProps(Child, 'OmitNumber')('number')

// No need to filter props: child is wrapped in a HOC that will
// discard the extra prop.
const Parent = (props: ParentProps) => (<OmitNumber {...props} >)

<Parent text="Hello World!" number={123} />
`})}),e.jsxs("fieldset",{children:[e.jsx("legend",{children:e.jsx("code",{children:"Parent » OmitNumber(Child)"})}),e.jsx(k,{text:"Hello World!",number:123})]}),e.jsxs(o.h3,{id:"a-note-about-displayname",children:["A note about ",e.jsx(o.code,{children:"displayName"})]}),e.jsxs(o.p,{children:[e.jsx(o.code,{children:"displayName"})," is used mostly for debugging via ",e.jsx(o.a,{href:"https://react.dev/learn/react-developer-tools",rel:"nofollow",children:`React Dev
Tools`}),". The convention for HOCs is:"]}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-text",children:`Original Component Name
            ↓   
   Yellow(Label)
      ↑
  HOC Name
`})}),e.jsxs(o.p,{children:[`Read more about React Dev Tools and HOCs
`,e.jsx(o.a,{href:"https://github.com/facebook/react/blob/main/packages/react-devtools/CHANGELOG.md#higher-order-components",rel:"nofollow",children:"here"}),"."]})]})}function X(n={}){const{wrapper:o}={...l(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(a,{...n})}):a(n)}export{b as COLORS,G as Child,R as ComponentA1,B as ComponentA2,O as ComponentB1,T as ComponentB2,P as GreenLabel4,C as GreenLabel5,s as Label,S as OmitNumber,k as Parent,Y as QuestionLabel,v as RedLabel4,A as RedLabel5,g as YellowLabel1,w as YellowLabel2,y as YellowLabel3,L as YellowLabel4,N as YellowLabel5,X as default,W as mapper1,H as mapper2};
