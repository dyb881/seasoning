---
nav:
  title: Common
  path: /common
group:
  title: Tools
  path: /tools
order: 4
---

# 图片处理工具

## 使用方法

```
import { imgTool } from 'seasoning';

imgTool.getImg(src);
```

or

```
import { getImg } from 'seasoning/es/img-tool';

getImg(src);
```

## 方法列表

一般情况下 Typescript 代码提示完全可以明白使用方法。如有不明的情况请跳转[函数定义](https://github.com/dyb881/seasoning/blob/master/src/img-tool/index.ts)

| Function    | Description       |
| ----------- | ----------------- |
| getImg      | 获取图片对象      |
| imgToBase64 | img 标签转 base64 |
