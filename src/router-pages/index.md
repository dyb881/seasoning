---
nav:
  title: Common
  path: /common
group:
  title: Tools
  path: /tools
order: 10
---

## 路由页面创建

基于 react-router-dom 的路由页面创建工具

```tsx
/**
 * iframe: true
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { RouterPages } from 'seasoning';

const Home = () => (
  <div>
    <Link to="user">
      <Button type="primary">go to user</Button>
    </Link>
  </div>
);

const User = () => (
  <div>
    <Link to="home">
      <Button type="primary">go to home</Button>
    </Link>
  </div>
);

const { Pages, Router } = new RouterPages({
  routers: [
    { path: '/home', component: Home },
    { path: '/user', component: User },
  ],
  listen: router => {
    console.log('路由监听', router);
  },
});

export default () => (
  <Router>
    <Pages />
  </Router>
);
```

## Options

| Name    | Description | Type                      | Default |
| ------- | ----------- | ------------------------- | ------- |
| routers | 路由配置    | TRouter[]                 |         |
| type    | 路由类型    | 'hash' \| 'browser'       | hash    |
| listen  | 路由监听    | (router: TRouter) => void |         |
