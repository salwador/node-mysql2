(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8059],{1432:(e,t,n)=>{"use strict";n.d(t,{A:()=>V});var s=n(6540),o=n(2303),c=n(4164),a=n(5293),r=n(6342);function l(){const{prism:e}=(0,r.p)(),{colorMode:t}=(0,a.G)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}var i=n(7559),u=n(8426),d=n.n(u);const m=/title=(?<quote>["'])(?<title>.*?)\1/,p=/\{(?<range>[\d,-]+)\}/,b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},f={...b,lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},h=Object.keys(b);function g(e,t){const n=e.map((e=>{const{start:n,end:s}=f[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${s})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function k(e,t){let n=e.replace(/\n$/,"");const{language:s,magicComments:o,metastring:c}=t;if(c&&p.test(c)){const e=c.match(p).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,s=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(s),code:n}}if(void 0===s)return{lineClassNames:{},code:n};const a=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return g(["tex"],t);case"lua":case"haskell":case"sql":return g(["lua"],t);case"wasm":return g(["wasm"],t);case"vb":case"vba":case"visual-basic":return g(["vb","rem"],t);case"vbnet":return g(["vbnet","rem"],t);case"batch":return g(["rem"],t);case"basic":return g(["rem","f90"],t);case"fsharp":return g(["js","ml"],t);case"ocaml":case"sml":return g(["ml"],t);case"fortran":return g(["f90"],t);case"cobol":return g(["cobol"],t);default:return g(h,t)}}(s,o),r=n.split("\n"),l=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),m=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<r.length;){const e=r[d].match(a);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${d},`:u[t]?l[u[t]].start=d:m[t]&&(l[m[t]].range+=`${l[m[t]].start}-${d-1},`),r.splice(d,1)}n=r.join("\n");const b={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{b[e]??=[],b[e].push(t)}))})),{lineClassNames:b,code:n}}const x={codeBlockContainer:"codeBlockContainer_Ckt0"};var j=n(4848);function B(e){let{as:t,...n}=e;const s=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[s,o]=e;const c=t[s];c&&"string"==typeof o&&(n[c]=o)})),n}(l());return(0,j.jsx)(t,{...n,style:s,className:(0,c.A)(n.className,x.codeBlockContainer,i.G.common.codeBlock)})}const v={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function y(e){let{children:t,className:n}=e;return(0,j.jsx)(B,{as:"pre",tabIndex:0,className:(0,c.A)(v.codeBlockStandalone,"thin-scrollbar",n),children:(0,j.jsx)("code",{className:v.codeBlockLines,children:t})})}var N=n(9532);const C={attributes:!0,characterData:!0,childList:!0,subtree:!0};function w(e,t){const[n,o]=(0,s.useState)(),c=(0,s.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,s.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=C);const o=(0,N._q)(t),c=(0,N.Be)(n);(0,s.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,c),()=>t.disconnect()}),[e,o,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var E=n(1765);const L={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function A(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:o,getTokenProps:a}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const r=o({line:t,className:(0,c.A)(n,s&&L.codeLine)}),l=t.map(((e,t)=>(0,j.jsx)("span",{...a({token:e})},t)));return(0,j.jsxs)("span",{...r,children:[s?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{className:L.codeLineNumber}),(0,j.jsx)("span",{className:L.codeLineContent,children:l})]}):l,(0,j.jsx)("br",{})]})}var S=n(1312);function _(e){return(0,j.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,j.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function T(e){return(0,j.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,j.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const I={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function M(e){let{code:t,className:n}=e;const[o,a]=(0,s.useState)(!1),r=(0,s.useRef)(void 0),l=(0,s.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const s=document.createElement("textarea"),o=document.activeElement;s.value=e,s.setAttribute("readonly",""),s.style.contain="strict",s.style.position="absolute",s.style.left="-9999px",s.style.fontSize="12pt";const c=document.getSelection(),a=c.rangeCount>0&&c.getRangeAt(0);n.append(s),s.select(),s.selectionStart=0,s.selectionEnd=e.length;let r=!1;try{r=document.execCommand("copy")}catch{}s.remove(),a&&(c.removeAllRanges(),c.addRange(a)),o&&o.focus()}(t),a(!0),r.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(r.current)),[]),(0,j.jsx)("button",{type:"button","aria-label":o?(0,S.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,S.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,S.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.A)("clean-btn",n,I.copyButton,o&&I.copyButtonCopied),onClick:l,children:(0,j.jsxs)("span",{className:I.copyButtonIcons,"aria-hidden":"true",children:[(0,j.jsx)(_,{className:I.copyButtonIcon}),(0,j.jsx)(T,{className:I.copyButtonSuccessIcon})]})})}function $(e){return(0,j.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,j.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const R={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function W(e){let{className:t,onClick:n,isEnabled:s}=e;const o=(0,S.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,j.jsx)("button",{type:"button",onClick:n,className:(0,c.A)("clean-btn",t,s&&R.wordWrapButtonEnabled),"aria-label":o,title:o,children:(0,j.jsx)($,{className:R.wordWrapButtonIcon,"aria-hidden":"true"})})}function H(e){let{children:t,className:n="",metastring:o,title:a,showLineNumbers:i,language:u}=e;const{prism:{defaultLanguage:d,magicComments:p}}=(0,r.p)(),b=function(e){return e?.toLowerCase()}(u??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d),f=l(),h=function(){const[e,t]=(0,s.useState)(!1),[n,o]=(0,s.useState)(!1),c=(0,s.useRef)(null),a=(0,s.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),r=(0,s.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");o(n)}),[c]);return w(c,r),(0,s.useEffect)((()=>{r()}),[e,r]),(0,s.useEffect)((()=>(window.addEventListener("resize",r,{passive:!0}),()=>{window.removeEventListener("resize",r)})),[r]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:a}}(),g=function(e){return e?.match(m)?.groups.title??""}(o)||a,{lineClassNames:x,code:y}=k(t,{metastring:o,language:b,magicComments:p}),N=i??function(e){return Boolean(e?.includes("showLineNumbers"))}(o);return(0,j.jsxs)(B,{as:"div",className:(0,c.A)(n,b&&!n.includes(`language-${b}`)&&`language-${b}`),children:[g&&(0,j.jsx)("div",{className:v.codeBlockTitle,children:g}),(0,j.jsxs)("div",{className:v.codeBlockContent,children:[(0,j.jsx)(E.f4,{theme:f,code:y,language:b??"text",children:e=>{let{className:t,style:n,tokens:s,getLineProps:o,getTokenProps:a}=e;return(0,j.jsx)("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,c.A)(t,v.codeBlock,"thin-scrollbar"),style:n,children:(0,j.jsx)("code",{className:(0,c.A)(v.codeBlockLines,N&&v.codeBlockLinesWithNumbering),children:s.map(((e,t)=>(0,j.jsx)(A,{line:e,getLineProps:o,getTokenProps:a,classNames:x[t],showLineNumbers:N},t)))})})}}),(0,j.jsxs)("div",{className:v.buttonGroup,children:[(h.isEnabled||h.isCodeScrollable)&&(0,j.jsx)(W,{className:v.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),(0,j.jsx)(M,{className:v.codeButton,code:y})]})]})]})}function V(e){let{children:t,...n}=e;const c=(0,o.A)(),a=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),r="string"==typeof a?H:y;return(0,j.jsx)(r,{...n,children:a},String(c))}},1622:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var s=n(6540),o=n(4164),c=n(3427),a=n(2303),r=n(1422);const l={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var i=n(4848);function u(e){return!!e&&("SUMMARY"===e.tagName||u(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function m(e){let{summary:t,children:n,...m}=e;(0,c.A)().collectAnchor(m.id);const p=(0,a.A)(),b=(0,s.useRef)(null),{collapsed:f,setCollapsed:h}=(0,r.u)({initialState:!m.open}),[g,k]=(0,s.useState)(m.open),x=s.isValidElement(t)?t:(0,i.jsx)("summary",{children:t??"Details"});return(0,i.jsxs)("details",{...m,ref:b,open:g,"data-collapsed":f,className:(0,o.A)(l.details,p&&l.isBrowser,m.className),onMouseDown:e=>{u(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;u(t)&&d(t,b.current)&&(e.preventDefault(),f?(h(!1),k(!0)):h(!0))},children:[x,(0,i.jsx)(r.N,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{h(e),k(!e)},children:(0,i.jsx)("div",{className:l.collapsibleContent,children:n})})]})}const p={details:"details_b_Ee"},b="alert alert--info";function f(e){let{...t}=e;return(0,i.jsx)(m,{...t,className:(0,o.A)(b,p.details,t.className)})}},8426:(e,t)=>{function n(e){let t,n=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))n.push(parseInt(s,10));else if(t=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,c]=t;if(s&&c){s=parseInt(s),c=parseInt(c);const e=s<c?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(c+=e);for(let t=s;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},8453:(e,t,n)=>{"use strict";n.d(t,{R:()=>a,x:()=>r});var s=n(6540);const o={},c=s.createContext(o);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);