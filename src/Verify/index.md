---
nav:
  title: Common
  path: /common
group:
  title: Tools
  path: /tools
order: 7
---

# 验证工具

正则与一些校验工具函数

## 使用方法

```
import { verify } from 'seasoning';

verify.regular.carNumber.test(carNumber);
verify.isIdCard(idcard);
```

or

```
import { regular, isIdCard } from 'seasoning/es/verify';

regular.carNumber.test(carNumber);
isIdCard(idcard);
```

## 方法列表

一般情况下 Typescript 代码提示完全可以明白使用方法。如有不明的情况请跳转[函数定义](https://github.com/dyb881/seasoning/blob/master/src/verify/index.ts)

| Function | Description    |
| -------- | -------------- |
| regular  | 正则对象       |
| isIdCard | 身份证格式校验 |

## regular

| Name        | Description      |
| ----------- | ---------------- |
| carNumber   | 车牌号           |
| phone       | 手机号           |
| idCard      | 身份证           |
| chineseName | 中文姓名(2-8 位) |
