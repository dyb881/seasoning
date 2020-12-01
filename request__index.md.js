(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{n1Cs:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),s=n.n(a),i=n("dEAq"),o=n("0zqC"),l=n("Rsk4").default["seasoning-request"].component;t["default"]=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"markdown"},s.a.createElement("h2",{id:"\u8bf7\u6c42\u5668"},s.a.createElement(i["AnchorLink"],{to:"#\u8bf7\u6c42\u5668","aria-hidden":"true",tabIndex:-1},s.a.createElement("span",{className:["icon","icon-link"]})),"\u8bf7\u6c42\u5668"),s.a.createElement("p",null,"\u914d\u7f6e\u578b\u8bf7\u6c42\u5c01\u88c5\uff0c\u6240\u6709\u53c2\u6570\u6700\u7ec8\u5747\u5408\u6210\u8bf7\u6c42\u914d\u7f6e\u5bf9\u8c61\uff0c\u5e76\u4f7f\u7528 TRequestFunction \u53d1\u51fa\u8bf7\u6c42\uff0cTRequestFunction \u53ef\u91cd\u5199\u66ff\u6362")),s.a.createElement(o["default"],{sources:{_:{tsx:"import React from 'react';\nimport { Space, Button } from 'antd';\nimport { Request } from 'seasoning';\n\n// \u521d\u59cb\u5316\u4e4b\u540e\u53ef\u5f97\u5230 baseURL \u548c\u591a\u4e2a\u8bf7\u6c42\u7c7b\u578b\u65b9\u6cd5\nconst { baseURL, get, post, put, patch, del, upload, clone } = new Request({\n  host: 'http://localhost',\n  apiPath: '/api',\n  interceptorsRequest: config => {\n    // \u8bf7\u6c42\u62e6\u622a\u5668\u5199\u5165\u767b\u5f55\u4fe1\u606f\n    config.headers = { ...config.headers, token: '123456789' };\n    return config;\n  },\n});\n\nconst cloneRequest = clone({\n  apiPath: '/apis',\n});\n\nexport default () => (\n  <Space>\n    <Button\n      type=\"primary\"\n      onClick={async () => {\n        await get('/test?id=1000');\n        await get('http://localhost/api/test?id=1000');\n        await get('http://localhost/api/test', { id: 1000 });\n        await get('http://localhost/api/test', { id: 1000 }, '\u6d4b\u8bd5\u8bf7\u6c421');\n        await get(\n          'http://localhost/api/test',\n          { id: 1000 },\n          {\n            label: '\u6d4b\u8bd5\u8bf7\u6c422',\n            url: 'http://localhost/api/testNew',\n            data: { id: 2000 },\n          }\n        );\n        await get(\n          'http://localhost/api/test',\n          { id: 1000 },\n          '\u6d4b\u8bd5\u8bf7\u6c421',\n          { label: '\u6d4b\u8bd5\u8bf7\u6c423' },\n          { label: '\u6d4b\u8bd5\u8bf7\u6c424' }\n        );\n      }}\n    >\n      \u6309\u987a\u5e8f\u53d1\u51fa GET \u8bf7\u6c42\n    </Button>\n    <Button\n      type=\"primary\"\n      onClick={async () => {\n        await post('/test', { id: 1000 });\n        await upload('/upload', { file: File, file2: File }, '\u4e0a\u4f20\u6587\u4ef6');\n      }}\n    >\n      \u6309\u987a\u5e8f\u53d1\u51fa POST Upload \u8bf7\u6c42\n    </Button>\n    <Button\n      type=\"primary\"\n      onClick={async () => {\n        await cloneRequest.post('/test', { id: 1000 });\n      }}\n    >\n      \u4f7f\u7528\u514b\u9686\u8bf7\u6c42\u5668\u53d1\u51fa\u8bf7\u6c42\n    </Button>\n  </Space>\n);"}},dependencies:{react:{version:"17.0.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.8.6",css:"antd/dist/antd.css"},seasoning:{version:"1.10.0"}},identifier:"seasoning-request"},s.a.createElement(l,null)),s.a.createElement("div",{className:"markdown"},s.a.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},s.a.createElement(i["AnchorLink"],{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},s.a.createElement("span",{className:["icon","icon-link"]})),"\u53c2\u6570\u8bf4\u660e"),s.a.createElement("p",null,"\u7531\u4e8e\u76f8\u5173\u7684\u53c2\u6570\u8f83\u591a\uff0c\u76f4\u63a5\u8fdb\u5165\u4ee3\u7801\u770b\u6ce8\u91ca\u6bd4\u8f83\u76f4\u89c2\uff0c\u9700\u8981\u91cd\u70b9\u5173\u6ce8\u521d\u59cb\u5316\u914d\u7f6e TRequestConfig"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(i["Link"],{to:"https://github.com/dyb881/seasoning/blob/master/src/request/types.ts"},"\u7c7b\u578b\u5b9a\u4e49")),s.a.createElement("li",null,s.a.createElement(i["Link"],{to:"https://github.com/dyb881/seasoning/blob/master/src/request/config.ts"},"\u9ed8\u8ba4\u914d\u7f6e"))))))}}}]);