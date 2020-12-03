(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{bR9O:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("dEAq"),c=n("0zqC"),m=n("Rsk4").default["tabs-tabs"].component;t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"tabs"},l.a.createElement(r["AnchorLink"],{to:"#tabs","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Tabs"),l.a.createElement("p",null,"\u5207\u6362\u6807\u7b7e\u680f\uff0c\u4e3b\u8981\u5e94\u5bf9\u5207\u6362\u65f6\uff0c\u4e0d\u5237\u65b0\u5185\u5bb9"),l.a.createElement("h3",{id:"\u5b9e\u4f8b"},l.a.createElement(r["AnchorLink"],{to:"#\u5b9e\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"\u5b9e\u4f8b")),l.a.createElement(c["default"],{sources:{_:{tsx:"import React, { useEffect } from 'react';\nimport { Tabs } from 'seasoning';\nimport { TTabsProps } from 'seasoning/es/tabs';\n\nconst Content: React.FC = ({ children }) => {\n  useEffect(() => {\n    console.log('\u5237\u65b0\u7ec4\u4ef6');\n  }, []);\n\n  return <div style={{ padding: 10 }}>{children}</div>;\n};\n\nconst tabProps: TTabsProps = {\n  tabs: [{ content: Content }, { content: Content }, { content: Content }],\n  transition: true,\n  render: ({ content: C }: any, index: number) => {\n    return <C>{index}</C>;\n  },\n  itemRender: (active: boolean, tab: any, index: number) => {\n    return <div style={{ padding: 10 }}>{active ? '\u9009\u4e2d' : `tab${index}`}</div>;\n  },\n  style: {\n    width: 300,\n    height: 300,\n    border: '1px solid #000',\n    marginBottom: 10,\n  },\n};\n\nexport default () => (\n  <>\n    <Tabs {...tabProps} direction=\"top\" />\n    <Tabs {...tabProps} direction=\"bottom\" />\n    <Tabs {...tabProps} direction=\"left\" />\n    <Tabs {...tabProps} direction=\"right\" />\n  </>\n);"}},dependencies:{seasoning:{version:"1.11.0"},react:{version:"17.0.1"}},"component-name":"tabs",identifier:"tabs-tabs"},l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"API"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"tabs"),l.a.createElement("td",null,"\u9009\u9879\u914d\u7f6e"),l.a.createElement("td",null,"any[]"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"activeKey"),l.a.createElement("td",null,"\u6fc0\u6d3b\u4e0b\u6807"),l.a.createElement("td",null,"number"),l.a.createElement("td",null,"0")),l.a.createElement("tr",null,l.a.createElement("td",null,"onChange"),l.a.createElement("td",null,"\u6fc0\u6d3b\u4e0b\u6807\u53d8\u66f4\u540e"),l.a.createElement("td",null,"(activeKey: number) => void"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"direction"),l.a.createElement("td",null,"\u65b9\u5411"),l.a.createElement("td",null,"'top' | 'bottom' | 'left' | 'right'"),l.a.createElement("td",null,"top")),l.a.createElement("tr",null,l.a.createElement("td",null,"transition"),l.a.createElement("td",null,"\u662f\u5426\u4f7f\u7528\u8fc7\u5ea6\u52a8\u753b"),l.a.createElement("td",null,"boolean"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"render"),l.a.createElement("td",null,"\u6e32\u67d3\u9875\u9762\u5185\u5bb9"),l.a.createElement("td",null,"(tab: T, index: number) => React.ReactNode"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"itemRender"),l.a.createElement("td",null,"\u6e32\u67d3 tab"),l.a.createElement("td",null,"(active: boolean, tab: T, index: number) => React.ReactNode"),l.a.createElement("td",null)))))))}}}]);