(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{Vt1k:function(e,t,n){"use strict";n.r(t);var l=n("q1tI"),a=n.n(l),r=n("dEAq"),c=n("ZpkN");n("Rsk4");t["default"]=e=>(a.a.useEffect((()=>{null!==e&&void 0!==e&&e.location.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"\u517c\u5bb9\u5904\u7406"},a.a.createElement(r["AnchorLink"],{to:"#\u517c\u5bb9\u5904\u7406","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u517c\u5bb9\u5904\u7406"),a.a.createElement("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},a.a.createElement(r["AnchorLink"],{to:"#\u4f7f\u7528\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u65b9\u6cd5"),a.a.createElement(c["a"],{code:"import { compatible } from 'seasoning';\n\ncompatible.activeElementScrollIntoView()",lang:"unknown"}),a.a.createElement("p",null,"or"),a.a.createElement(c["a"],{code:"import { activeElementScrollIntoView } from 'seasoning/es/compatible';\n\nactiveElementScrollIntoView()",lang:"unknown"}),a.a.createElement("h2",{id:"demo"},a.a.createElement(r["AnchorLink"],{to:"#demo","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"Demo"),a.a.createElement("p",null,"\u521b\u5efa compatible.ts \u6587\u4ef6\uff0c\u5e76\u5728\u6240\u6709\u4ee3\u7801\u6700\u524d\u7aef import \u8be5\u6587\u4ef6"),a.a.createElement(c["a"],{code:"/**\n * \u5728\u5165\u53e3\u6587\u4ef6\u9876\u90e8\u5f15\u7528\u8fd0\u884c\u517c\u5bb9\u4ee3\u7801\n */\n\n/**\n * \u517c\u5bb9\u5305\n * \u6839\u636e\u9700\u8981\u517c\u5bb9\u7684\u673a\u578b\uff0c\u6309\u9700\u8f7d\u5165\u517c\u5bb9\u5305\n * \u9ed8\u8ba4\u4e0d\u5b89\u88c5\u4f9d\u8d56\uff0c\u81ea\u884c\u5b89\u88c5\n * whatwg-fetch es6-proxy-polyfill@1.2.1 core-js abort-controller\n */\n// import 'whatwg-fetch';\n// import 'abort-controller/polyfill';\n// import 'core-js/features/object/entries';\n// import 'core-js/features/object/values';\n// import 'core-js/features/object/assign';\n// import 'core-js/features/string/includes';\n// import 'core-js/features/array/includes';\n// import 'core-js/features/array/from';\n// import 'core-js/features/promise';\n// import 'core-js/features/symbol';\n// import 'core-js/features/set';\n// import 'core-js/features/map';\nimport { autoRem, isIOS, isAndroid, activeElementScrollIntoView } from 'seasoning/es/compatible';\n\nautoRem(320, 750, true);\n\n/**\n * \u5904\u7406 iOS \u517c\u5bb9\n */\nif (isIOS) {\n  window.addEventListener('focusout', () => {\n    // \u4fee\u590d\u5fae\u4fe1\u6d4f\u89c8\u5668\u7248\u672c6.7.4 IOS12\u4f1a\u51fa\u73b0\u952e\u76d8\u6536\u8d77\u540e\uff0c\u89c6\u56fe\u88ab\u9876\u4e0a\u53bb\u4e86\u6ca1\u6709\u4e0b\u6765\n    setTimeout(() => window.scrollTo(0, document.body.scrollTop));\n  });\n}\n\n/**\n * \u5904\u7406 Android \u517c\u5bb9\n */\nif (isAndroid) {\n  // Android \u952e\u76d8\u5f39\u51fa\u3001\u6536\u8d77\uff0c\u53ef\u89c6\u533a\u9ad8\u5ea6\u4f1a\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u6eda\u52a8\u5230\u8f93\u5165\u6846\n  window.addEventListener('resize', activeElementScrollIntoView, false);\n}\n\n/**\n * \u9519\u8bef\u62e6\u622a\u5904\u7406\uff0c\u9632\u6b62\u767d\u5c4f\n */\nwindow.onerror = (...err: any[]) => {\n  console.log(...err);\n};",lang:"unknown"}),a.a.createElement("h2",{id:"\u53c2\u6570\u5217\u8868"},a.a.createElement(r["AnchorLink"],{to:"#\u53c2\u6570\u5217\u8868","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u5217\u8868"),a.a.createElement("p",null,"\u6d4f\u89c8\u5668\u4fe1\u606f"),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Type"),a.a.createElement("th",null,"Description"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"ua"),a.a.createElement("td",null,"string"),a.a.createElement("td",null,"\u6d4f\u89c8\u5668\u6807\u8bc6")),a.a.createElement("tr",null,a.a.createElement("td",null,"browser"),a.a.createElement("td",null,a.a.createElement(r["Link"],{to:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a54ddc5a32aefe7f01f8889830b4a43569e70db2/types/ua-parser-js/index.d.ts"},"IBrowser")),a.a.createElement("td",null,"\u6d4f\u89c8\u5668\u4fe1\u606f")),a.a.createElement("tr",null,a.a.createElement("td",null,"engine"),a.a.createElement("td",null,a.a.createElement(r["Link"],{to:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a54ddc5a32aefe7f01f8889830b4a43569e70db2/types/ua-parser-js/index.d.ts"},"IEngine")),a.a.createElement("td",null,"\u6d4f\u89c8\u5668\u5f15\u64ce")),a.a.createElement("tr",null,a.a.createElement("td",null,"os"),a.a.createElement("td",null,a.a.createElement(r["Link"],{to:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a54ddc5a32aefe7f01f8889830b4a43569e70db2/types/ua-parser-js/index.d.ts"},"IOS")),a.a.createElement("td",null,"\u7cfb\u7edf\u4fe1\u606f")),a.a.createElement("tr",null,a.a.createElement("td",null,"device"),a.a.createElement("td",null,a.a.createElement(r["Link"],{to:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a54ddc5a32aefe7f01f8889830b4a43569e70db2/types/ua-parser-js/index.d.ts"},"IDevice")),a.a.createElement("td",null,"\u8bbe\u5907\u4fe1\u606f")),a.a.createElement("tr",null,a.a.createElement("td",null,"isIOS"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u662f\u5426\u82f9\u679c")),a.a.createElement("tr",null,a.a.createElement("td",null,"isAndroid"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u662f\u5426\u5b89\u5353")),a.a.createElement("tr",null,a.a.createElement("td",null,"isIphoneX"),a.a.createElement("td",null,"boolean"),a.a.createElement("td",null,"\u662f\u5426\u82f9\u679c X")))),a.a.createElement("h2",{id:"\u65b9\u6cd5\u5217\u8868"},a.a.createElement(r["AnchorLink"],{to:"#\u65b9\u6cd5\u5217\u8868","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5\u5217\u8868"),a.a.createElement("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b Typescript \u4ee3\u7801\u63d0\u793a\u5b8c\u5168\u53ef\u4ee5\u660e\u767d\u4f7f\u7528\u65b9\u6cd5\u3002\u5982\u6709\u4e0d\u660e\u7684\u60c5\u51b5\u8bf7\u8df3\u8f6c",a.a.createElement(r["Link"],{to:"https://github.com/dyb881/seasoning/blob/master/src/compatible/index.ts"},"\u51fd\u6570\u5b9a\u4e49")),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Function"),a.a.createElement("th",null,"Type"),a.a.createElement("th",null,"Description"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"isInView"),a.a.createElement("td",null,"(el: Element) => boolean"),a.a.createElement("td",null,"\u662f\u5426\u5728\u53ef\u89c6\u533a")),a.a.createElement("tr",null,a.a.createElement("td",null,"activeElementIsInView"),a.a.createElement("td",null,"() => boolean"),a.a.createElement("td",null,"\u5224\u65ad\u7126\u70b9\u5143\u7d20\u662f\u5426\u5728\u53ef\u89c6\u533a")),a.a.createElement("tr",null,a.a.createElement("td",null,"scrollIntoView"),a.a.createElement("td",null,"(el: Element, delay?: number) => void"),a.a.createElement("td",null,"\u6eda\u52a8\u5230\u53ef\u89c6\u533a\u57df")),a.a.createElement("tr",null,a.a.createElement("td",null,"activeElementScrollIntoView"),a.a.createElement("td",null,"() => void"),a.a.createElement("td",null,"\u7126\u70b9\u5143\u7d20\u6eda\u52a8\u5230\u53ef\u89c6\u533a\u57df")),a.a.createElement("tr",null,a.a.createElement("td",null,"autoRem"),a.a.createElement("td",null,"(min: number, max: number, isResize?: boolean) => () => void"),a.a.createElement("td",null,"\u81ea\u52a8\u8ba1\u7b97 rem")),a.a.createElement("tr",null,a.a.createElement("td",null,"locationReplace"),a.a.createElement("td",null,"(url: string) => void"),a.a.createElement("td",null,"\u5b89\u5353\u91cd\u5b9a\u5411\u65e0\u6548\u4fee\u590d")),a.a.createElement("tr",null,a.a.createElement("td",null,"getKeyboardCoverProps"),a.a.createElement("td",null,"(props?: any) => any"),a.a.createElement("td",null,"\u4f4e\u7248\u672c\u6d4f\u89c8\u5668\uff0cIOS \u952e\u76d8\u906e\u6321\u7684\u5904\u7406 React props")))))))}}]);