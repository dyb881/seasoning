---
title: Transition
nav:
  title: Common
  path: /common
group:
  title: Components
  path: /components
---

## Transition

组件出入动画，基于 react-transition-group 封装

### 实例

#### 元素切换

```tsx
import React from 'react';
import { Button } from 'antd';
import { Transition } from 'seasoning';

const pages = [{ background: 'red' }, { background: 'blue' }, { background: '#d9d9d9' }];
const names = ['fade', 'left', 'right', 'top', 'bottom'];

const Page: React.FC<{ name: string }> = ({ name }) => {
  const [key, setKey] = React.useState(0);
  const page = pages[key];

  return (
    <div>
      <div
        style={{
          width: 100,
          height: 50,
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid #000',
        }}
      >
        <Transition name={name}>
          <div
            key={key}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              left: 0,
              top: 0,
              ...page,
            }}
          >
            元素{key + 1}
          </div>
        </Transition>
      </div>
      <Button
        style={{ margin: '10px 0' }}
        onClick={() => {
          setKey(key => {
            if (key >= pages.length - 1) return 0;
            return ++key;
          });
        }}
      >
        切换元素 {name}
      </Button>
    </div>
  );
};

export default () => {
  return names.map(i => <Page name={i} />);
};
```

#### 元素弹出

```tsx
import React from 'react';
import { Button } from 'antd';
import { Transition } from 'seasoning';

const names = ['popup-left', 'popup-right', 'popup-top', 'popup-bottom'];

const Popup: React.FC<{ name: string }> = ({ name }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <div
        style={{
          width: 100,
          height: 50,
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid #000',
        }}
      >
        <Transition name={name}>
          {!show ? (
            <span />
          ) : (
            <div
              key="弹出"
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                background: 'red',
              }}
            >
              弹出层
            </div>
          )}
        </Transition>
      </div>
      <Button
        style={{ margin: '10px 0' }}
        onClick={() => {
          setShow(show => !show);
        }}
      >
        弹出关闭 {name}
      </Button>
    </div>
  );
};

export default () => {
  return names.map(i => <Popup name={i} />);
};
```

## API

| Name      | Description  | Type   | Default         |
| --------- | ------------ | ------ | --------------- |
| name      | 动画标识名   | string |                 |
| time      | 动画时长     | number | 400             |
| enterTime | 进入动画时长 | number | 为空时使用 time |
| exitTime  | 离开动画时长 | number | 为空时使用 time |

## 默认动画

| Name         | Description |
| ------------ | ----------- |
| fade         | 淡入淡出    |
| left         | 从左边出现  |
| right        | 从右边出现  |
| top          | 从上方出现  |
| bottom       | 从下方出现  |
| popup-left   | 从左边弹出  |
| popup-right  | 从右边弹出  |
| popup-top    | 从上方弹出  |
| popup-bottom | 从下方弹出  |

## 自定义动画

```less
@import 'node_modules/seasoning/es/Transition/style/fun.less';
/*
创建动画
.createTransition(
  动画标识名,
  {进入动画 - 开始},
  {进入动画 - 结束},
  {离开动画 - 开始},
  {离开动画 - 结束}
);
往返动画
.createTransition(
  动画标识名,
  {进入动画 - 开始 & 离开动画 - 结束},
  {进入动画 - 结束 & 离开动画 - 开始},
);
*/

/**
 * 创建一个淡入淡出动画
 */
.createTransition(fade, {opacity: 0;}, {opacity: 1;});
```
