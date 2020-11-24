---
title: 路由页面创建
nav:
  title: Common
  path: /common
group:
  title: Tools
  path: /tools
---

## RouterPages

基于 react-router-dom 的路由页面创建工具

## 使用方法

```
import React from 'react';
import { RouterPages } from 'seasoning';

const { history, Pages, Router } = new RouterPages({
  routers: [{ path: '/home', component: Home }],
  listen: (router) => {
    console.log('路由监听', router);
  },
});

export default () => {
  <Router>
    <Pages />
  </Router>;
};
```

## Options

| Name    | Description | Type                      | default |
| ------- | ----------- | ------------------------- | ------- |
| routers | 路由配置    | TRouter[]                 |         |
| type    | 路由类型    | 'hash' \| 'browser'       | hash    |
| listen  | 路由监听    | (router: TRouter) => void |         |
