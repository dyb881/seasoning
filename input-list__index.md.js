(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"0zqC":function(e,t,a){"use strict";a.r(t);var l=a("tJVT"),n=a("q1tI"),c=a.n(n),r=a("k3GJ"),d=a("9kvl"),i=a("dEAq"),u=a("ZpkN");a("TIsu");function o(e,t){var a,l=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return l||(l=t.tsx?"tsx":"jsx"),l}var m=e=>{var t,a,m,s=Object(n["useRef"])(),E=Object(n["useContext"])(i["context"]),f=E.locale,b=Object(i["useLocaleProps"])(f,e),p=Object(i["useDemoUrl"])(b.identifier),v=b.demoUrl||p,_=(null===d["a"]||void 0===d["a"]?void 0:d["a"].location.hash)==="#".concat(b.identifier),h=1===Object.keys(b.sources).length,k=Object(i["useCodeSandbox"])(null!==(t=b.hideActions)&&void 0!==t&&t.includes("CSB")?null:b),O=Object(i["useRiddle"])(null!==(a=b.hideActions)&&void 0!==a&&a.includes("RIDDLE")?null:b),j=Object(i["useMotions"])(b.motions||[],s.current),N=Object(l["default"])(j,2),w=N[0],y=N[1],g=Object(i["useCopy"])(),C=Object(l["default"])(g,2),x=C[0],R=C[1],S=Object(n["useState"])("_"),A=Object(l["default"])(S,2),I=A[0],L=A[1],T=Object(n["useState"])(o(I,b.sources[I])),q=Object(l["default"])(T,2),D=q[0],P=q[1],B=Object(n["useState"])(Boolean(b.defaultShowCode)),J=Object(l["default"])(B,2),M=J[0],F=J[1],G=Object(n["useState"])(Math.random()),U=Object(l["default"])(G,2),$=U[0],z=U[1],X=b.sources[I][D]||b.sources[I].content,H=Object(i["useTSPlaygroundUrl"])(f,X),K=Object(n["useRef"])(),V=Object(i["usePrefersColor"])(),Y=Object(l["default"])(V,1),Z=Y[0];function Q(e){L(e),P(o(e,b.sources[e]))}return Object(n["useEffect"])((()=>{z(Math.random())}),[Z]),c.a.createElement("div",{style:b.style,className:[b.className,"__dumi-default-previewer",_?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:b.identifier,"data-debug":b.debug||void 0,"data-iframe":b.iframe||void 0},b.iframe&&c.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),c.a.createElement("div",{ref:s,className:"__dumi-default-previewer-demo",style:{transform:b.transform?"translate(0, 0)":void 0,padding:b.compact||b.iframe&&!1!==b.compact?"0":void 0,background:b.background}},b.iframe?c.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(b.iframe).replace(/(\d)$/,"$1px")},key:$,src:v,ref:K}):b.children),c.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":b.title},b.title&&c.a.createElement(i["AnchorLink"],{to:"#".concat(b.identifier)},b.title),b.description&&c.a.createElement("div",{dangerouslySetInnerHTML:{__html:b.description}})),c.a.createElement("div",{className:"__dumi-default-previewer-actions"},k&&c.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:k}),O&&c.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:O}),b.motions&&c.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:y,onClick:()=>w()}),b.iframe&&c.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>z(Math.random())}),!(null!==(m=b.hideActions)&&void 0!==m&&m.includes("EXTERNAL"))&&c.a.createElement(i["Link"],{target:"_blank",to:v},c.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),c.a.createElement("span",null),c.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":R,onClick:()=>x(X)}),"tsx"===D&&M&&c.a.createElement(i["Link"],{target:"_blank",to:H},c.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),c.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(M?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>F(!M)})),M&&c.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&c.a.createElement(r["b"],{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xb7\xb7\xb7",defaultActiveKey:I,onChange:Q},Object.keys(b.sources).map((e=>c.a.createElement(r["a"],{tab:"_"===e?"index.".concat(o(e,b.sources[e])):e,key:e})))),c.a.createElement("div",{className:"__dumi-default-previewer-source"},c.a.createElement(u["a"],{code:X,lang:D,showCopy:!1}))))};t["default"]=m},"9kvl":function(e,t,a){"use strict";var l=a("FfOG");a.d(t,"a",(function(){return l["b"]}));a("bCY9")},TIsu:function(e,t,a){},b8fE:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),c=a("dEAq"),r=a("0zqC"),d=a("Rsk4"),i=n.a.memo(d["default"]["input-list-demo"].component);t["default"]=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"inputlist"},n.a.createElement(c["AnchorLink"],{to:"#inputlist","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"InputList"),n.a.createElement("p",null,"\u628a\u5355\u4e2a\u8f93\u5165\u6846\u7ec4\u5408\u6210\u8f93\u5165\u6846\u7ec4")),n.a.createElement(r["default"],d["default"]["input-list-demo"].previewerProps,n.a.createElement(i,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(c["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"value"),n.a.createElement("td",null,"\u8f93\u5165\u6846\u7684\u503c\u6570\u7ec4"),n.a.createElement("td",null,"any[]"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"onChange"),n.a.createElement("td",null,"\u503c\u66f4\u6539\u540e"),n.a.createElement("td",null,"(value: any[]) => void"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"children"),n.a.createElement("td",null,"\u8f93\u5165\u6846"),n.a.createElement("td",null,"React.ReactNode"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"addButton"),n.a.createElement("td",null,"\u6dfb\u52a0\u6309\u94ae"),n.a.createElement("td",null,"React.ReactNode"),n.a.createElement("td",null,"Add field")),n.a.createElement("tr",null,n.a.createElement("td",null,"delButton"),n.a.createElement("td",null,"\u5220\u9664\u6309\u94ae"),n.a.createElement("td",null,"React.ReactNode"),n.a.createElement("td",null,"Del field")))))))}}}]);