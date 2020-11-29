---
nav:
  title: Common
  path: /common
group:
  title: Tools
  path: /tools
order: 5
---

# DOM 处理工具

针对标签处理的一些相关工具

## 使用方法

```
import { domTool } from 'seasoning';

domTool.installLink(cssUrl);
```

or

```
import { installLink } from 'seasoning/es/dom-tool';

installLink(cssUrl);
```

## 方法列表

一般情况下 Typescript 代码提示完全可以明白使用方法。如有不明的情况请跳转[函数定义](https://github.com/dyb881/seasoning/blob/master/src/dom-tool/index.ts)

| Function         | Description  |
| ---------------- | ------------ |
| installLink      | 插入样式     |
| installScript    | 插入脚本     |
| installLinkOne   | 单次插入样式 |
| installScriptOne | 单次插入脚本 |
