---
title: 数据处理工具
nav:
  title: Common
  path: /common
group:
  title: Tools
  path: /tools
---

## DataTool

数据处理工具

### 使用方法

```
import { DataTool } from 'seasoning';

DataTool.toOptions(['v1']);
```

or

```
import { toOptions } from 'seasoning/es/DataTool';

toOptions(['v1']);
```

## 方法列表

一般情况下 Typescript 代码提示完全可以明白使用方法。如有不明的情况请跳转[函数定义](https://github.com/dyb881/seasoning/blob/master/src/DataTool/index.ts)

| Function  | Description                   |
| --------- | ----------------------------- |
| toOptions | 转为选项值 { value, label }[] |
