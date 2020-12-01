(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{IIbc:function(e,n,r){"use strict";r.r(n);var t=r("q1tI"),a=r.n(t),o=r("dEAq"),m=r("0zqC"),c=r("Rsk4").default["form-enhance-form-enhance"].component,s=r("Rsk4").default["form-enhance-form-enhance-1"].component;n["default"]=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"\u8868\u5355\u589e\u5f3a\u5de5\u5177"},a.a.createElement(o["AnchorLink"],{to:"#\u8868\u5355\u589e\u5f3a\u5de5\u5177","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:["icon","icon-link"]})),"\u8868\u5355\u589e\u5f3a\u5de5\u5177"),a.a.createElement("p",null,"\u57fa\u4e8e ",a.a.createElement(o["Link"],{to:"https://github.com/react-component/field-form"},"rc-field-form")," \u5c01\u88c5\u7684\u8868\u5355\u589e\u5f3a\u5de5\u5177"),a.a.createElement("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},a.a.createElement(o["AnchorLink"],{to:"#\u4f7f\u7528\u65b9\u6cd5","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:["icon","icon-link"]})),"\u4f7f\u7528\u65b9\u6cd5"),a.a.createElement("h3",{id:"\u76f4\u63a5\u4f7f\u7528"},a.a.createElement(o["AnchorLink"],{to:"#\u76f4\u63a5\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:["icon","icon-link"]})),"\u76f4\u63a5\u4f7f\u7528")),a.a.createElement(m["default"],{sources:{_:{tsx:"import React from 'react';\nimport Form, { FormInstance, useForm as useFormSource, Field } from 'rc-field-form';\nimport { FieldProps } from 'rc-field-form/es/Field';\nimport { formEnhance } from 'seasoning';\nimport { TFormEnhance, TFormItemPropsEnhance } from 'seasoning/es/form-enhance';\n\nconst { useFormEnhance, formItemEnhance } = formEnhance;\n\n// ------------------------ \u7c7b\u578b\u589e\u5f3a ------------------------ //\n\ntype TForm = TFormEnhance<FormInstance>;\n\ntype TFormItemProps = TFormItemPropsEnhance<FieldProps>;\n\n// ------------------------ \u7c7b\u578b\u589e\u5f3a ------------------------ //\n\n// ------------------------ \u8868\u5355\u589e\u5f3a ------------------------ //\n\nconst useForm = useFormEnhance<TForm>(useFormSource);\n\nconst FormItem = formItemEnhance<TFormItemProps>(Field, () => <input />);\n\n// ------------------------ \u8868\u5355\u589e\u5f3a ------------------------ //\n\nexport default () => {\n  const { form, submit } = useForm();\n\n  return (\n    <Form form={form} onFinish={console.log}>\n      <FormItem name=\"username\" label=\"username\" placeholder required />\n      <FormItem name=\"password\" label=\"password\" placeholder required />\n      <button onClick={submit}>\u63d0\u4ea4</button>\n    </Form>\n  );\n};"}},dependencies:{seasoning:{version:"1.10.0"},react:{version:"17.0.1"},"rc-field-form":{version:"1.17.2"}},"component-name":"form-enhance",iframe:50,identifier:"form-enhance-form-enhance"},a.a.createElement(c,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h3",{id:"\u5728-antd-\u4e0b\u4f7f\u7528"},a.a.createElement(o["AnchorLink"],{to:"#\u5728-antd-\u4e0b\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:["icon","icon-link"]})),"\u5728 antd \u4e0b\u4f7f\u7528")),a.a.createElement(m["default"],{sources:{_:{tsx:"import React from 'react';\nimport { Form, Input, Button } from 'antd';\nimport { FormInstance } from 'antd/es/form';\nimport { FormItemProps } from 'antd/es/form/FormItem';\nimport { formEnhance } from 'seasoning';\nimport { TFormEnhance, TFormItemPropsEnhance } from 'seasoning/es/form-enhance';\n\nconst { useFormEnhance, formItemEnhance } = formEnhance;\n\n// ------------------------ \u7c7b\u578b\u589e\u5f3a ------------------------ //\n\ntype TForm = TFormEnhance<FormInstance>;\n\ntype TFormItemProps = TFormItemPropsEnhance<FormItemProps>;\n\n// ------------------------ \u7c7b\u578b\u589e\u5f3a ------------------------ //\n\n// ------------------------ \u8868\u5355\u589e\u5f3a ------------------------ //\n\nconst useForm = useFormEnhance<TForm>(Form.useForm);\n\nconst FormItem = formItemEnhance<TFormItemProps>(Form.Item, () => <Input />);\n\n// ------------------------ \u8868\u5355\u589e\u5f3a ------------------------ //\n\nexport default () => {\n  const { form, submit } = useForm();\n\n  return (\n    <Form form={form} onFinish={console.log}>\n      <FormItem name=\"username\" label=\"username\" placeholder required />\n      <FormItem name=\"password\" label=\"password\" placeholder required />\n      <Button onClick={submit}>\u63d0\u4ea4</Button>\n    </Form>\n  );\n};"}},dependencies:{react:{version:"17.0.1"},"react-dom":{version:">=16.9.0"},antd:{version:"4.8.6",css:"antd/dist/antd.css"},seasoning:{version:"1.10.0"}},"component-name":"form-enhance",iframe:250,identifier:"form-enhance-form-enhance-1"},a.a.createElement(s,null)),a.a.createElement("div",{className:"markdown"},a.a.createElement("h2",{id:"\u65b9\u6cd5\u5217\u8868"},a.a.createElement(o["AnchorLink"],{to:"#\u65b9\u6cd5\u5217\u8868","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:["icon","icon-link"]})),"\u65b9\u6cd5\u5217\u8868"),a.a.createElement("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b Typescript \u4ee3\u7801\u63d0\u793a\u5b8c\u5168\u53ef\u4ee5\u660e\u767d\u4f7f\u7528\u65b9\u6cd5\u3002\u5982\u6709\u4e0d\u660e\u7684\u60c5\u51b5\u8bf7\u8df3\u8f6c",a.a.createElement(o["Link"],{to:"https://github.com/dyb881/seasoning/blob/master/src/form-enhance/index.ts"},"\u51fd\u6570\u5b9a\u4e49")),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Function"),a.a.createElement("th",null,"Description"))),a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("td",null,"useFormEnhance"),a.a.createElement("td",null,"useForm \u589e\u5f3a")),a.a.createElement("tr",null,a.a.createElement("td",null,"formItemEnhance"),a.a.createElement("td",null,"FormItem \u589e\u5f3a")))))))}}}]);