(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{bzl2:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("dEAq"),l=n("0zqC"),c=n("Rsk4").default["router-switch-router-switch"].component;t["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"routerswitch"},r.a.createElement(o["AnchorLink"],{to:"#routerswitch","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"RouterSwitch"),r.a.createElement("p",null,"\u57fa\u4e8e react-router-dom \u7684 Switch \u5c01\u88c5\uff0c\u53c2\u6570\u4e00\u81f4\uff0c\u989d\u5916\u6dfb\u52a0 routers \u5c5e\u6027")),r.a.createElement(l["default"],{sources:{_:{tsx:"import React from 'react';\nimport { HashRouter, Link } from 'react-router-dom';\nimport { Button } from 'antd';\nimport { RouterSwitch } from 'seasoning';\n\nconst Home = () => (\n  <div>\n    <Link to=\"user\">\n      <Button type=\"primary\">go to user</Button>\n    </Link>\n  </div>\n);\n\nconst User = () => (\n  <div>\n    <Link to=\"home\">\n      <Button type=\"primary\">go to home</Button>\n    </Link>\n  </div>\n);\n\nexport default () => (\n  <HashRouter>\n    <RouterSwitch\n      routers={{\n        '/home': Home,\n        '/user': User,\n      }}\n    />\n  </HashRouter>\n);"}},dependencies:{seasoning:{version:"1.8.0"},react:{version:"17.0.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.8.5",css:"antd/dist/antd.css"},"react-router-dom":{version:"5.2.0"}},"component-name":"router-switch",iframe:!0,identifier:"router-switch-router-switch"},r.a.createElement(c,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(o["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:["icon","icon-link"]})),"API"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Default"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"routers"),r.a.createElement("td",null,"\u9875\u9762\u914d\u7f6e\u5217\u8868"),r.a.createElement("td",null,"{"," [key: string]: React.ComponentType<any> ","}"),r.a.createElement("td",null)))))))}}}]);