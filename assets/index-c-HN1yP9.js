import{j as T}from"./jsx-runtime-D_zvdyIk.js";import{v}from"./v4-CtRu48qb.js";const y=({text:t,color:e,onClick:r})=>T.jsx("button",{onClick:r,style:{background:e},children:t});try{y.displayName="DummyButton",y.__docgenInfo={description:"A dummy button useful in tests and stories.",displayName:"DummyButton",props:{text:{defaultValue:null,description:"Should be shown in storybook.",name:"text",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:'"green" | "red" | "yellow"'}},onClick:{defaultValue:null,description:"Should be shown in storybook.",name:"onClick",required:!0,type:{name:"() => void"}}}}}catch{}const{addons:x}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:A}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:m}=__STORYBOOK_MODULE_GLOBAL__;var S=Object.defineProperty,D=(t,e)=>{for(var r in e)S(t,r,{get:e[r],enumerable:!0})},w="storybook/actions",B=`${w}/action-event`,I={depth:10,clearOnStoryChange:!0,limit:50},h=(t,e)=>{let r=Object.getPrototypeOf(t);return!r||e(r)?r:h(r,e)},j=t=>!!(typeof t=="object"&&t&&h(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),L=t=>{if(j(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let r=Object.getOwnPropertyDescriptor(e,"view"),o=r==null?void 0:r.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...r,value:Object.create(o.constructor.prototype)}),e}return t},P=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?v():Date.now().toString(36)+Math.random().toString(36).substring(2);function p(t,e={}){let r={...I,...e},o=function(...i){var d,u;if(e.implicit){let O=(d="__STORYBOOK_PREVIEW__"in m?m.__STORYBOOK_PREVIEW__:void 0)==null?void 0:d.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(O){let c=!((u=globalThis==null?void 0:globalThis.FEATURES)!=null&&u.disallowImplicitActionsInRenderV8),g=new A({phase:O.phase,name:t,deprecated:c});if(c)console.warn(g);else throw g}}let n=x.getChannel(),s=P(),a=5,l=i.map(L),E=i.length>1?l:l[0],b={id:s,count:0,data:{name:t,args:E},options:{...r,maxDepth:a+(r.depth||3),allowFunction:r.allowFunction||!1}};n.emit(B,b)};return o.isAction=!0,o.implicit=e.implicit,o}const{definePreview:U}=__STORYBOOK_MODULE_PREVIEW_API__,{global:_}=__STORYBOOK_MODULE_GLOBAL__;var C={};D(C,{argsEnhancers:()=>V,loaders:()=>k});var R=(t,e)=>typeof e[t]>"u"&&!(t in e),K=t=>{let{initialArgs:e,argTypes:r,id:o,parameters:{actions:i}}=t;if(!i||i.disable||!i.argTypesRegex||!r)return{};let n=new RegExp(i.argTypesRegex);return Object.entries(r).filter(([s])=>!!n.test(s)).reduce((s,[a,l])=>(R(a,e)&&(s[a]=p(a,{implicit:!0,id:o})),s),{})},M=t=>{let{initialArgs:e,argTypes:r,parameters:{actions:o}}=t;return o!=null&&o.disable||!r?{}:Object.entries(r).filter(([i,n])=>!!n.action).reduce((i,[n,s])=>(R(n,e)&&(i[n]=p(typeof s.action=="string"?s.action:n)),i),{})},V=[M,K],f=!1,Y=t=>{let{parameters:{actions:e}}=t;if(!(e!=null&&e.disable)&&!f&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in _&&typeof _.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let r=_.__STORYBOOK_TEST_ON_MOCK_CALL__;r((o,i)=>{let n=o.getMockName();n!=="spy"&&(!/^next\/.*::/.test(n)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(s=>n.startsWith(s)))&&p(n)(i)}),f=!0}},k=[Y];export{y as D,p as a};
