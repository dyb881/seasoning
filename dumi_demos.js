(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"0zqC":function(e,t,a){"use strict";a.r(t);var n=a("tJVT"),r=a("q1tI"),o=a.n(r),c=a("k3GJ"),i=a("9kvl"),l=a("dEAq"),u=a("ZpkN");a("TIsu");function d(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var s=e=>{var t,a,s,m=Object(r["useRef"])(),f=Object(r["useContext"])(l["context"]),b=f.locale,p=Object(l["useLocaleProps"])(b,e),v=Object(l["useDemoUrl"])(p.identifier),O=p.demoUrl||v,_=(null===i["a"]||void 0===i["a"]?void 0:i["a"].location.hash)==="#".concat(p.identifier),j=1===Object.keys(p.sources).length,E=Object(l["useCodeSandbox"])(null!==(t=p.hideActions)&&void 0!==t&&t.includes("CSB")?null:p),y=Object(l["useRiddle"])(null!==(a=p.hideActions)&&void 0!==a&&a.includes("RIDDLE")?null:p),w=Object(l["useMotions"])(p.motions||[],m.current),h=Object(n["default"])(w,2),g=h[0],k=h[1],N=Object(l["useCopy"])(),C=Object(n["default"])(N,2),P=C[0],x=C[1],S=Object(r["useState"])("_"),A=Object(n["default"])(S,2),T=A[0],L=A[1],M=Object(r["useState"])(d(T,p.sources[T])),R=Object(n["default"])(M,2),q=R[0],D=R[1],I=Object(r["useState"])(Boolean(p.defaultShowCode)),J=Object(n["default"])(I,2),B=J[0],G=J[1],U=Object(r["useState"])(Math.random()),X=Object(n["default"])(U,2),$=X[0],F=X[1],z=p.sources[T][q]||p.sources[T].content,H=Object(l["useTSPlaygroundUrl"])(b,z),K=Object(r["useRef"])(),Q=Object(l["usePrefersColor"])(),V=Object(n["default"])(Q,1),W=V[0];function Y(e){L(e),D(d(e,p.sources[e]))}return Object(r["useEffect"])((()=>{F(Math.random())}),[W]),o.a.createElement("div",{style:p.style,className:[p.className,"__dumi-default-previewer",_?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:p.identifier,"data-debug":p.debug||void 0,"data-iframe":p.iframe||void 0},p.iframe&&o.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),o.a.createElement("div",{ref:m,className:"__dumi-default-previewer-demo",style:{transform:p.transform?"translate(0, 0)":void 0,padding:p.compact||p.iframe&&!1!==p.compact?"0":void 0,background:p.background}},p.iframe?o.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(p.iframe).replace(/(\d)$/,"$1px")},key:$,src:O,ref:K}):p.children),o.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":p.title},p.title&&o.a.createElement(l["AnchorLink"],{to:"#".concat(p.identifier)},p.title),p.description&&o.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.description}})),o.a.createElement("div",{className:"__dumi-default-previewer-actions"},E&&o.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:E}),y&&o.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:y}),p.motions&&o.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:k,onClick:()=>g()}),p.iframe&&o.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>F(Math.random())}),!(null!==(s=p.hideActions)&&void 0!==s&&s.includes("EXTERNAL"))&&o.a.createElement(l["Link"],{target:"_blank",to:O},o.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),o.a.createElement("span",null),o.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":x,onClick:()=>P(z)}),"tsx"===q&&B&&o.a.createElement(l["Link"],{target:"_blank",to:H},o.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),o.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(B?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>G(!B)})),B&&o.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!j&&o.a.createElement(c["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:T,onChange:Y},Object.keys(p.sources).map((e=>o.a.createElement(c["a"],{tab:"_"===e?"index.".concat(d(e,p.sources[e])):e,key:e})))),o.a.createElement("div",{className:"__dumi-default-previewer-source"},o.a.createElement(u["a"],{code:z,lang:q,showCopy:!1}))))};t["default"]=s},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},F4QJ:function(e,t,a){"use strict";function n(){var e=o(a("q1tI"));return n=function(){return e},e}function r(){var e=a("dEAq");return r=function(){return e},e}function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=function(e,t){var a=[],o=e.match.params.uuid,c=void 0===e.location.query.wrapper,l=t[o];if(l){var u=i(i({},l.previewerProps),{},{hideActions:(l.previewerProps.hideActions||[]).concat(["EXTERNAL"])});void 0!==e.location.query.capture&&(u.motions=(u.motions||[]).slice(),u.motions.unshift("autoplay"),u.motions.every((function(e){return!e.startsWith("capture")}))&&u.motions.push("capture:[id|=root]")),a=c?[n()["default"].createElement((function(){return(0,r().useMotions)(u.motions||[],document.documentElement),n()["default"].createElement("div",{},n()["default"].createElement(l.component))}))]:[u,n()["default"].createElement(l.component)]}return a};t["default"]=u},TIsu:function(e,t,a){}}]);