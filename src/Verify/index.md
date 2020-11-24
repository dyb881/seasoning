---
title: 验证工具
nav:
  title: Common
  path: /common
group:
  title: Tools
  path: /tools
---

## Verify

正则与一些校验工具函数

### 使用方法

```
import { Verify } from 'seasoning';

Verify.regular.carNumber.test(carNumber);
```

or

```
import { regular } from 'seasoning/Verify';

regular.carNumber.test(carNumber);
```

## 方法列表

一般情况下 Typescript 代码提示完全可以明白使用方法。如有不明的情况请跳转[函数定义](https://github.com/dyb881/seasoning/blob/master/src/Verify/index.ts)

| Function | Description    |
| -------- | -------------- |
| regular  | 正则对象       |
| isIdCard | 身份证格式校验 |

## regular

| Name        | Description |
| ----------- | ----------- |
| carNumber   | 车牌号      |
| phone       | 手机号      |
| idCard      | 身份证      |
| chineseName | 中文姓名    |
