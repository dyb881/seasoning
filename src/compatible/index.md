---
nav:
  title: Mobile
  path: /mobile
group:
  title: Tools
  path: /tools
  order: 1
order: 1
---

# 兼容处理

## 使用方法

```
import { compatible } from 'seasoning';

compatible.activeElementScrollIntoView()
```

or

```
import { activeElementScrollIntoView } from 'seasoning/es/compatible';

activeElementScrollIntoView()
```

## 参数列表

浏览器信息

| name      | Description |
| --------- | ----------- |
| ua        | 浏览器标识  |
| browser   | 浏览器信息  |
| engine    | 浏览器引擎  |
| os        | 系统信息    |
| device    | 设备信息    |
| isIOS     | 是否苹果    |
| isAndroid | 是否安卓    |
| isIphoneX | 是否苹果 X  |

## 方法列表

一般情况下 Typescript 代码提示完全可以明白使用方法。如有不明的情况请跳转[函数定义](https://github.com/dyb881/seasoning/blob/master/src/compatible/index.ts)

| Function                    | Description              |
| --------------------------- | ------------------------ |
| isInView                    | 是否在可视区             |
| activeElementIsInView       | 判断焦点元素是否在可视区 |
| scrollIntoView              | 滚动到可视区域           |
| activeElementScrollIntoView | 焦点元素滚动到可视区域   |
| autoRem                     | 自动计算 rem             |
| locationReplace             | 安卓重定向无效修复       |
| getKeyboardCoverProps       | IOS 键盘遮挡的处理 props |
