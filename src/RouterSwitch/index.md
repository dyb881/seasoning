---
title: RouterSwitch
nav:
  title: Common
  path: /common
group:
  title: Components
  path: /components
---

## RouterSwitch

基于 react-router-dom 的 Switch 封装，参数一致，额外添加 routers 属性

```tsx
/**
 * iframe: true
 */
import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { Button } from 'antd';
import { RouterSwitch } from 'seasoning';

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

export default () => (
  <HashRouter>
    <RouterSwitch
      routers={{
        '/home': Home,
        '/user': User,
      }}
    />
  </HashRouter>
);
```

## API

| Name    | Description  | Type                                         | default |
| ------- | ------------ | -------------------------------------------- | ------- |
| routers | 页面配置列表 | { [key: string]: React.ComponentType<any\> } |         |
