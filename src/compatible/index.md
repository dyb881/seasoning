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

## Demo

创建 compatible.ts 文件，并在所有代码最前端 import 该文件

```
/**
 * 在入口文件顶部引用运行兼容代码
 */

/**
 * 兼容包
 * 根据需要兼容的机型，按需载入兼容包
 * 默认不安装依赖，自行安装
 * whatwg-fetch es6-proxy-polyfill@1.2.1 core-js abort-controller
 */
// import 'whatwg-fetch';
// import 'abort-controller/polyfill';
// import 'core-js/features/object/entries';
// import 'core-js/features/object/values';
// import 'core-js/features/object/assign';
// import 'core-js/features/string/includes';
// import 'core-js/features/array/includes';
// import 'core-js/features/array/from';
// import 'core-js/features/promise';
// import 'core-js/features/symbol';
// import 'core-js/features/set';
// import 'core-js/features/map';
import { autoRem, isIOS, isAndroid, activeElementScrollIntoView } from 'seasoning/es/compatible';

autoRem(320, 750, true);

/**
 * 处理 iOS 兼容
 */
if (isIOS) {
  window.addEventListener('focusout', () => {
    // 修复微信浏览器版本6.7.4 IOS12会出现键盘收起后，视图被顶上去了没有下来
    setTimeout(() => window.scrollTo(0, document.body.scrollTop));
  });
}

/**
 * 处理 Android 兼容
 */
if (isAndroid) {
  // Android 键盘弹出、收起，可视区高度会发生变化时，滚动到输入框
  window.addEventListener('resize', activeElementScrollIntoView, false);
}

/**
 * 错误拦截处理，防止白屏
 */
window.onerror = (...err: any[]) => {
  console.log(...err);
};
```

## 参数列表

浏览器信息

| Name      | Type                                                                                                                                       | Description |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| ua        | string                                                                                                                                     | 浏览器标识  |
| browser   | [IBrowser](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a54ddc5a32aefe7f01f8889830b4a43569e70db2/types/ua-parser-js/index.d.ts) | 浏览器信息  |
| engine    | [IEngine](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a54ddc5a32aefe7f01f8889830b4a43569e70db2/types/ua-parser-js/index.d.ts)  | 浏览器引擎  |
| os        | [IOS](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a54ddc5a32aefe7f01f8889830b4a43569e70db2/types/ua-parser-js/index.d.ts)      | 系统信息    |
| device    | [IDevice](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a54ddc5a32aefe7f01f8889830b4a43569e70db2/types/ua-parser-js/index.d.ts)  | 设备信息    |
| isIOS     | boolean                                                                                                                                    | 是否苹果    |
| isAndroid | boolean                                                                                                                                    | 是否安卓    |
| isIphoneX | boolean                                                                                                                                    | 是否苹果 X  |

## 方法列表

一般情况下 Typescript 代码提示完全可以明白使用方法。如有不明的情况请跳转[函数定义](https://github.com/dyb881/seasoning/blob/master/src/compatible/index.ts)

| Function                    | Type                                                         | Description                                  |
| --------------------------- | ------------------------------------------------------------ | -------------------------------------------- |
| isInView                    | (el: Element) => boolean                                     | 是否在可视区                                 |
| activeElementIsInView       | () => boolean                                                | 判断焦点元素是否在可视区                     |
| scrollIntoView              | (el: Element, delay?: number) => void                        | 滚动到可视区域                               |
| activeElementScrollIntoView | () => void                                                   | 焦点元素滚动到可视区域                       |
| autoRem                     | (min: number, max: number, isResize?: boolean) => () => void | 自动计算 rem                                 |
| locationReplace             | (url: string) => void                                        | 安卓重定向无效修复                           |
| getKeyboardCoverProps       | (props?: any) => any                                         | 低版本浏览器，IOS 键盘遮挡的处理 React props |
