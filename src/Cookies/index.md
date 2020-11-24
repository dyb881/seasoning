---
title: Cookies
nav:
  title: Common
  path: /common
group:
  title: Tools
  path: /tools
---

## Cookies

Cookie 获取与插入

### 使用方法

```
import { Cookies } from 'seasoning';

Cookies.get('name');
```

## 方法列表

一般情况下 Typescript 代码提示完全可以明白使用方法。如有不明的情况请跳转[函数定义](https://github.com/dyb881/seasoning/blob/master/src/Cookies/index.ts)

| Function | Description     |
| -------- | --------------- |
| get      | 读取 cookie     |
| getBatch | 批量读取 cookie |
| set      | 写入 cookie     |
| setBatch | 批量写入 cookie |
