(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{"0zqC":function(e,t,a){"use strict";a.r(t);var n=a("tJVT"),l=a("q1tI"),r=a.n(l),c=a("k3GJ"),o=a("9kvl"),i=a("dEAq"),u=a("ZpkN");a("TIsu");function d(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var s=e=>{var t,a,s,m=Object(l["useRef"])(),f=Object(l["useContext"])(i["context"]),b=f.locale,p=Object(i["useLocaleProps"])(b,e),E=Object(i["useDemoUrl"])(p.identifier),_=p.demoUrl||E,v=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(p.identifier),h=1===Object.keys(p.sources).length,k=Object(i["useCodeSandbox"])(null!==(t=p.hideActions)&&void 0!==t&&t.includes("CSB")?null:p),w=Object(i["useRiddle"])(null!==(a=p.hideActions)&&void 0!==a&&a.includes("RIDDLE")?null:p),O=Object(i["useMotions"])(p.motions||[],m.current),j=Object(n["default"])(O,2),y=j[0],N=j[1],g=Object(i["useCopy"])(),C=Object(n["default"])(g,2),x=C[0],S=C[1],A=Object(l["useState"])("_"),I=Object(n["default"])(A,2),R=I[0],T=I[1],L=Object(l["useState"])(d(R,p.sources[R])),q=Object(n["default"])(L,2),P=q[0],D=q[1],J=Object(l["useState"])(Boolean(p.defaultShowCode)),M=Object(n["default"])(J,2),z=M[0],B=M[1],F=Object(l["useState"])(Math.random()),G=Object(n["default"])(F,2),U=G[0],$=G[1],X=p.sources[R][P]||p.sources[R].content,H=Object(i["useTSPlaygroundUrl"])(b,X),K=Object(l["useRef"])(),V=Object(i["usePrefersColor"])(),Y=Object(n["default"])(V,1),Z=Y[0];function Q(e){T(e),D(d(e,p.sources[e]))}return Object(l["useEffect"])((()=>{$(Math.random())}),[Z]),r.a.createElement("div",{style:p.style,className:[p.className,"__dumi-default-previewer",v?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:p.identifier,"data-debug":p.debug||void 0,"data-iframe":p.iframe||void 0},p.iframe&&r.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),r.a.createElement("div",{ref:m,className:"__dumi-default-previewer-demo",style:{transform:p.transform?"translate(0, 0)":void 0,padding:p.compact||p.iframe&&!1!==p.compact?"0":void 0,background:p.background}},p.iframe?r.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(p.iframe).replace(/(\d)$/,"$1px")},key:U,src:_,ref:K}):p.children),r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":p.title},p.title&&r.a.createElement(i["AnchorLink"],{to:"#".concat(p.identifier)},p.title),p.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:p.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},k&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:k}),w&&r.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:w}),p.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:N,onClick:()=>y()}),p.iframe&&r.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>$(Math.random())}),!(null!==(s=p.hideActions)&&void 0!==s&&s.includes("EXTERNAL"))&&r.a.createElement(i["Link"],{target:"_blank",to:_},r.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),r.a.createElement("span",null),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":S,onClick:()=>x(X)}),"tsx"===P&&z&&r.a.createElement(i["Link"],{target:"_blank",to:H},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),r.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(z?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>B(!z)})),z&&r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&r.a.createElement(c["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:R,onChange:Q},Object.keys(p.sources).map((e=>r.a.createElement(c["a"],{tab:"_"===e?"index.".concat(d(e,p.sources[e])):e,key:e})))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(u["a"],{code:X,lang:P,showCopy:!1}))))};t["default"]=s},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},TIsu:function(e,t,a){},bzl2:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=a("0zqC"),o=a("Rsk4"),i=l.a.memo(o["default"]["router-switch-demo"].component);t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"routerswitch"},l.a.createElement(r["AnchorLink"],{to:"#routerswitch","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"RouterSwitch"),l.a.createElement("p",null,"\u57fa\u4e8e react-router-dom \u7684 Switch \u5c01\u88c5\uff0c\u53c2\u6570\u4e00\u81f4\uff0c\u989d\u5916\u6dfb\u52a0 routers \u5c5e\u6027")),l.a.createElement(c["default"],o["default"]["router-switch-demo"].previewerProps,l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"routers"),l.a.createElement("td",null,"\u9875\u9762\u914d\u7f6e\u5217\u8868"),l.a.createElement("td",null,"{"," [key: string]: React.ComponentType<any> ","}"),l.a.createElement("td",null)))))))}}}]);