(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"7ZSp":function(e,t,a){},JBu9:function(e,t,a){"use strict";a.r(t);var n=a("ODXe"),l=a("q1tI"),r=a.n(l),o=a("dEAq"),c=a("9kvl"),u=(a("OxFa"),e=>{var t=e.location,a=Object(l["useContext"])(o["context"]),n=a.base,u=a.locale,i=a.config.locales,m=i.find((e=>{var t=e.name;return t!==u}));function s(e){var a=n.replace("/".concat(u),""),l=t.pathname.replace(n,a)||"/";if(e!==i[0].name){var r="".concat(a,"/").concat(e).replace(/\/\//,"/"),o=t.pathname.replace(n.replace(/^\/$/,"//"),"");return"".concat(r).concat(o).replace(/\/$/,"")}return l}return m?r.a.createElement("div",{className:"__dumi-default-locale-select","data-locale-count":i.length},i.length>2?r.a.createElement("select",{value:u,onChange:e=>c["a"].push(s(e.target.value))},i.map((e=>r.a.createElement("option",{value:e.name,key:e.name},e.label)))):r.a.createElement(o["Link"],{to:s(m.name)},m.label)):null}),i=u,m=(a("jp8u"),e=>{var t=e.onMobileMenuClick,a=e.navPrefix,n=e.location,c=Object(l["useContext"])(o["context"]),u=c.base,m=c.config,s=m.mode,d=m.title,f=m.logo,p=c.nav;return r.a.createElement("div",{className:"__dumi-default-navbar","data-mode":s},r.a.createElement("button",{className:"__dumi-default-navbar-toggle",onClick:t}),r.a.createElement(o["Link"],{className:"__dumi-default-navbar-logo",style:{backgroundImage:f&&"url('".concat(f,"')")},to:u,"data-plaintext":!1===f||void 0},d),r.a.createElement("nav",null,a,p.map((e=>{var t,a=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&r.a.createElement("ul",null,e.children.map((e=>r.a.createElement("li",{key:e.path},r.a.createElement(o["NavLink"],{to:e.path},e.title)))));return r.a.createElement("span",{key:e.title||e.path},e.path?r.a.createElement(o["NavLink"],{to:e.path,key:e.path},e.title):e.title,a)})),r.a.createElement(i,{location:n})))}),s=m,d=a("wx14"),f=a("Ff2n"),p=(a("mAF5"),e=>{var t=e.slugs,a=Object(f["a"])(e,["slugs"]);return r.a.createElement("ul",Object(d["default"])({role:"slug-list"},a),t.filter((e=>{var t=e.depth;return t>1&&t<4})).map((e=>r.a.createElement("li",{key:e.heading,title:e.value,"data-depth":e.depth},r.a.createElement(o["AnchorLink"],{to:"#".concat(e.heading)},r.a.createElement("span",null,e.value))))))}),h=p,v=(a("hQjr"),e=>{var t=e.mobileMenuCollapsed,a=e.location,n=Object(l["useContext"])(o["context"]),c=n.config,u=c.logo,m=c.title,s=c.description,d=c.mode,f=c.repository.url,p=n.menu,v=n.nav,g=n.base,y=n.meta,E=Boolean((y.hero||y.features||y.gapless)&&"site"===d)||!1===y.sidemenu||void 0;return r.a.createElement("div",{className:"__dumi-default-menu","data-mode":d,"data-hidden":E,"data-mobile-show":!t||void 0},r.a.createElement("div",{className:"__dumi-default-menu-inner"},r.a.createElement("div",{className:"__dumi-default-menu-header"},r.a.createElement(o["Link"],{to:g,className:"__dumi-default-menu-logo",style:{backgroundImage:u&&"url('".concat(u,"')")}}),r.a.createElement("h1",null,m),r.a.createElement("p",null,s),/github\.com/.test(f)&&"doc"===d&&r.a.createElement("p",null,r.a.createElement("object",{type:"image/svg+xml",data:"https://img.shields.io/github/stars".concat(f.match(/((\/[^\/]+){2})$/)[1],"?style=social")}))),v.length?r.a.createElement("div",{className:"__dumi-default-menu-mobile-area"},r.a.createElement("ul",{className:"__dumi-default-menu-nav-list"},v.map((e=>{var t,a=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&r.a.createElement("ul",null,e.children.map((e=>r.a.createElement("li",{key:e.path||e.title},r.a.createElement(o["NavLink"],{to:e.path},e.title)))));return r.a.createElement("li",{key:e.path||e.title},e.path?r.a.createElement(o["NavLink"],{to:e.path},e.title):e.title,a)}))),r.a.createElement(i,{location:a})):r.a.createElement("div",{className:"__dumi-default-menu-doc-locale"},r.a.createElement(i,{location:a})),r.a.createElement("ul",{className:"__dumi-default-menu-list"},!E&&p.map((e=>{var t,n=Boolean(null===(t=y.slugs)||void 0===t?void 0:t.length),l=e.children&&Boolean(e.children.length),c="menu"===y.toc&&!l&&n&&e.path===a.pathname;return r.a.createElement("li",{key:e.path||e.title},r.a.createElement(o["NavLink"],{to:e.path,exact:!(e.children&&e.children.length)},e.title),Boolean(e.children&&e.children.length)&&r.a.createElement("ul",null,e.children.map((e=>r.a.createElement("li",{key:e.path},r.a.createElement(o["NavLink"],{to:e.path,exact:!0},r.a.createElement("span",null,e.title)),Boolean("menu"===y.toc&&"undefined"!==typeof window&&e.path===a.pathname&&n)&&r.a.createElement(h,{slugs:y.slugs}))))),c&&r.a.createElement(h,{slugs:y.slugs}))})))))}),g=v,y=(a("KAdo"),()=>{var e=Object(l["useState"])(""),t=Object(n["default"])(e,2),a=t[0],c=t[1],u=Object(l["useState"])([]),i=Object(n["default"])(u,2),m=i[0],s=i[1],f=Object(l["useRef"])(),p=Object(o["useSearch"])(a);return Object(l["useEffect"])((()=>{Array.isArray(p)?s(p):"function"===typeof p&&p(".".concat(f.current.className))}),[p]),r.a.createElement("div",{className:"__dumi-default-search"},r.a.createElement("input",Object(d["default"])({className:"__dumi-default-search-input",type:"search",ref:f},Array.isArray(p)?{value:a,onChange:e=>c(e.target.value)}:{})),r.a.createElement("ul",null,m.map((e=>{var t;return r.a.createElement("li",{key:e.path,onClick:()=>c("")},r.a.createElement(o["AnchorLink"],{to:e.path},(null===(t=e.parent)||void 0===t?void 0:t.title)&&r.a.createElement("span",null,e.parent.title),e.title))}))))}),E=(a("7ZSp"),e=>r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"__dumi-default-layout-hero"},r.a.createElement("h1",null,e.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.desc}}),e.actions&&e.actions.map((e=>r.a.createElement(o["Link"],{to:e.link,key:e.text},r.a.createElement("button",{type:"button"},e.text))))))),b=e=>r.a.createElement("div",{className:"__dumi-default-layout-features"},e.map((e=>r.a.createElement("dl",{key:e.title,style:{backgroundImage:e.icon?"url(".concat(e.icon,")"):void 0}},r.a.createElement("dt",null,e.title),r.a.createElement("dd",{dangerouslySetInnerHTML:{__html:e.desc}}))))),_=e=>{var t,a,c=e.children,u=e.location,i=Object(l["useContext"])(o["context"]),m=i.config,d=m.mode,f=m.repository,p=i.meta,v=i.locale,_=f.url,k=f.branch,j=Object(l["useState"])(!0),O=Object(n["default"])(j,2),w=O[0],N=O[1],S="site"===d,L=S&&p.hero,x=S&&p.features,A=!1!==p.sidemenu&&!L&&!x&&!p.gapless,C=!L&&!x&&Boolean(null===(t=p.slugs)||void 0===t?void 0:t.length)&&("content"===p.toc||void 0===p.toc)&&!p.gapless,M=/^zh|cn$/i.test(v),P=new Date(p.updatedTime).toLocaleString(),I={github:"GitHub",gitlab:"GitLab"}[(null===(a=(_||"").match(/(github|gitlab)/))||void 0===a?void 0:a[1])||"nothing"];return Object(l["useEffect"])((()=>{window.scrollTo({top:0})}),[u.pathname]),r.a.createElement("div",{className:"__dumi-default-layout","data-route":u.pathname,"data-show-sidemenu":String(A),"data-show-slugs":String(C),"data-site-mode":S,"data-gapless":String(!!p.gapless),onClick:()=>N(!0)},r.a.createElement(s,{location:u,navPrefix:r.a.createElement(y,null),onMobileMenuClick:e=>{N((e=>!e)),e.stopPropagation()}}),r.a.createElement(g,{mobileMenuCollapsed:w,location:u}),C&&r.a.createElement(h,{slugs:p.slugs,className:"__dumi-default-layout-toc"}),L&&E(p.hero),x&&b(p.features),r.a.createElement("div",{className:"__dumi-default-layout-content"},c,!L&&!x&&p.filePath&&!p.gapless&&r.a.createElement("div",{className:"__dumi-default-layout-footer-meta"},I&&r.a.createElement(o["Link"],{to:"".concat(_,"/edit/").concat(k,"/").concat(p.filePath)},M?"\u5728 ".concat(I," \u4e0a\u7f16\u8f91\u8fd9\u7bc7\u6587\u6863"):"Edit this doc on ".concat(I)),r.a.createElement("span",{"data-updated-text":M?"\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff1a":"Last Update: "},P)),(L||x)&&p.footer&&r.a.createElement("div",{className:"__dumi-default-layout-footer",dangerouslySetInnerHTML:{__html:p.footer}})))};t["default"]=_},KAdo:function(e,t,a){},KcUY:function(e,t,a){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=m(a("q1tI")),r=u(a("q3YX")),o=u(a("bYHP")),c=u(a("nLCz"));function u(e){return e&&e.__esModule?e:{default:e}}function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function m(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a["default"]=e,t&&t.set(e,a),a}function s(e,t){return v(e)||h(e,t)||f(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t){if(e){if("string"===typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function h(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,l=!1,r=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done);n=!0)if(a.push(o.value),t&&a.length===t)break}catch(u){l=!0,r=u}finally{try{n||null==c["return"]||c["return"]()}finally{if(l)throw r}}return a}}function v(e){if(Array.isArray(e))return e}var g=function(e,t){var a=function(){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];var l=a[1].replace(/[^^]\/$/,"");return(null===(e=a[0].find((function(e){var t=e.path;return t===l})))||void 0===e?void 0:e.meta)||{}},n=(0,l.useState)(a(e,t)),r=s(n,2),o=r[0],c=r[1];return(0,l.useLayoutEffect)((function(){c(a(e,t))}),[t]),o},y=function(e,t){var a=function(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(null===(t=n[0].find((function(e){return n[1].startsWith("/".concat(e.name))})))||void 0===t?void 0:t.name)||e[0].name},n=(0,l.useState)(a(e,t)),r=s(n,2),o=r[0],c=r[1];return(0,l.useLayoutEffect)((function(){c(a(e,t))}),[t]),o},E=function(e,t,a){var n=function(){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];for(var l=a[0].navs[a[1]]||[],r="*",o=l.length-1;o>=0;o-=1){var c=l[o],u=[c].concat(c.children).filter(Boolean),i=u.find((function(e){return e.path&&new RegExp("^".concat(e.path.replace(/\.html$/,""),"(/|.|$)")).test(a[2])}));if(i){r=i.path;break}}return(null===(e=a[0].menus[a[1]])||void 0===e?void 0:e[r])||[]},r=(0,l.useState)(n(e,t,a)),o=s(r,2),c=o[0],u=o[1];return(0,l.useLayoutEffect)((function(){u(n(e,t,a))}),[e.navs,e.menus,t,a]),c},b=function(e,t,a){var n=function(){for(var t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return n[0]===n[1][0].name?n[2].path:"".concat(a.path,"/").concat(e).replace(/\/\//,"/")},r=(0,l.useState)(n(e,t,a)),o=s(r,2),c=o[0],u=o[1];return(0,l.useLayoutEffect)((function(){u(n(e,t,a))}),[e]),c},_=function(e){var t=e.location,a=e.route,n=e.children,u=t.pathname.replace(a.path.replace(/^\/$/,"//"),""),i=g(a.routes,t.pathname),m=y(r["default"].locales,u),s=E(r["default"],m,t.pathname),d=b(m,r["default"].locales,a);return(0,l.useEffect)((function(){t.hash&&o["default"].scrollToAnchor(decodeURIComponent(t.hash.slice(1)))}),[]),l["default"].createElement(c["default"].Provider,{value:{config:r["default"],meta:i,locale:m,nav:r["default"].navs[m]||[],menu:s,base:d,routes:a.routes}},n)},k=_;t["default"]=k},OxFa:function(e,t,a){},hQjr:function(e,t,a){},jp8u:function(e,t,a){},mAF5:function(e,t,a){}}]);