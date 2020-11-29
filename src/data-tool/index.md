---
nav:
  title: Common
  path: /common
group:
  title: Tools
  path: /tools
order: 6
---

# 数据处理工具

## 使用方法

```
import { dataTool } from 'seasoning';

dataTool.toOptions(['v1']);
```

or

```
import { toOptions } from 'seasoning/es/data-tool';

toOptions(['v1']);
```

## 方法列表

一般情况下 Typescript 代码提示完全可以明白使用方法。如有不明的情况请跳转[函数定义](https://github.com/dyb881/seasoning/blob/master/src/data-tool/index.ts)

| Function  | Description                   |
| --------- | ----------------------------- |
| toOptions | 转为选项值 { value, label }[] |
| getParams | 获取 URL 参数                 |
