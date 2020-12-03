(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{zxPi:function(n,e,t){"use strict";t.r(e);var o=t("q1tI"),a=t.n(o),s=t("dEAq"),r=t("0zqC"),m=t("Rsk4").default["mobx-combine-mobx-combine"].component;e["default"]=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"mobx-stores-\u5173\u8054\u5668"},a.a.createElement(s["AnchorLink"],{to:"#mobx-stores-\u5173\u8054\u5668","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:["icon","icon-link"]})),"Mobx Stores \u5173\u8054\u5668"),a.a.createElement("p",null,"\u7528\u4e8e\u751f\u6210 mobx \u5bf9\u5e94\u7684\u5173\u8054\u5668"),a.a.createElement("h3",{id:"\u4f7f\u7528\u65b9\u6cd5"},a.a.createElement(s["AnchorLink"],{to:"#\u4f7f\u7528\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:["icon","icon-link"]})),"\u4f7f\u7528\u65b9\u6cd5")),a.a.createElement(r["default"],{sources:{_:{tsx:"import React from 'react';\nimport { Space, Button } from 'antd';\nimport { makeAutoObservable } from 'mobx';\nimport { mobxCombine } from 'seasoning';\n\nclass Stores {\n  num = 0;\n\n  constructor() {\n    makeAutoObservable(this);\n  }\n\n  increase = () => {\n    this.num += 1;\n  };\n\n  reset = () => {\n    this.num = 0;\n  };\n}\n\n/**\n * \u5168\u5c40\u72b6\u6001\n */\nconst stores = new Stores();\n\n/**\n * \u751f\u6210\u5173\u8054\u5668\n */\nconst { combine, combinePage } = mobxCombine(stores);\n\nconst Num = combine(({ stores }) => <span>{stores.num}</span>);\n\nexport default combine(({ stores }) => (\n  <Space>\n    <Num />\n    <Button onClick={stores.increase}>increase</Button>\n    <Button onClick={stores.reset}>reset</Button>\n  </Space>\n));"}},dependencies:{react:{version:"17.0.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.8.6",css:"antd/dist/antd.css"},seasoning:{version:"1.11.0"},mobx:{version:"6.0.4"}},"component-name":"mobx-combine",identifier:"mobx-combine-mobx-combine"},a.a.createElement(m,null))))}}}]);