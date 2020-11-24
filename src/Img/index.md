---
title: Img
nav:
  title: Common
  path: /common
group:
  title: Components
  path: /components
---

## Img

img 标签加强版

### 实例

缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素

```tsx
import React from 'react';
import { Space } from 'antd';
import { Img } from 'seasoning';

const src =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

export default () => (
  <Space>
    <Img
      src={src}
      mode="scaleToFill"
      style={{ width: 100, height: 50, border: '1px solid #000' }}
    />
  </Space>
);
```

缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。

```tsx
import React from 'react';
import { Space } from 'antd';
import { Img } from 'seasoning';

const src =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

export default () => (
  <Space>
    <Img
      src={src}
      mode="aspectFit"
      style={{ width: 100, height: 50, border: '1px solid #000' }}
    />
    <Img
      src={src}
      mode={['aspectFit', 'left']}
      style={{ width: 100, height: 50, border: '1px solid #000' }}
    />
    <Img
      src={src}
      mode={['aspectFit', 'right']}
      style={{ width: 100, height: 50, border: '1px solid #000' }}
    />
  </Space>
);
```

缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。

```tsx
import React from 'react';
import { Space } from 'antd';
import { Img } from 'seasoning';

const src =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

export default () => (
  <Space>
    <Img
      src={src}
      mode="aspectFill"
      style={{ width: 100, height: 50, border: '1px solid #000' }}
    />
    <Img
      src={src}
      mode={['aspectFill', 'top']}
      style={{ width: 100, height: 50, border: '1px solid #000' }}
    />
    <Img
      src={src}
      mode={['aspectFill', 'bottom']}
      style={{ width: 100, height: 50, border: '1px solid #000' }}
    />
  </Space>
);
```

## API

| Name       | Description    | Type                       | default  |
| ---------- | -------------- | -------------------------- | -------- |
| src        | 图片地址       | string                     |          |
| mode       | 裁剪、缩放模式 | 'none' \| TMode \| TMode[] | none     |
| loadingTip | 加载提示内容   | React.ReactNode            | 加载中   |
| errorTip   | 错误提示内容   | React.ReactNode            | 重新加载 |

## TMode

### 注！只有在 className 或 style 设置了高宽才能生效

### TMode 的值可以为数组，任意组合以下模式

- scaleToFill 缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
- aspectFit 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
- aspectFill 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
- top 裁剪模式，不缩放图片，只显示图片的顶部区域
- bottom 裁剪模式，不缩放图片，只显示图片的底部区域
- center 裁剪模式，不缩放图片，只显示图片的中间区域
- left 裁剪模式，不缩放图片，只显示图片的左边区域
- right 裁剪模式，不缩放图片，只显示图片的右边区域
