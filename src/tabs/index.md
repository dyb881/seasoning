---
nav:
  title: Common
  path: /common
group:
  title: Components
  path: /components
order: 3
---

## Tabs

切换标签栏，主要应对切换时，不刷新内容

### 实例

```tsx
import React, { useEffect } from 'react';
import { Tabs } from 'seasoning';
import { TTabsProps } from 'seasoning/es/tabs';

const Content: React.FC = ({ children }) => {
  useEffect(() => {
    console.log('刷新组件');
  }, []);

  return <div style={{ padding: 10 }}>{children}</div>;
};

const tabProps: TTabsProps = {
  tabs: [{ content: Content }, { content: Content }, { content: Content }],
  transition: true,
  render: ({ content: C }: any, index: number) => {
    return <C>{index}</C>;
  },
  itemRender: (active: boolean, tab: any, index: number) => {
    return <div style={{ padding: 10 }}>{active ? '选中' : `tab${index}`}</div>;
  },
  style: {
    width: 300,
    height: 300,
    border: '1px solid #000',
    marginBottom: 10,
  },
};

export default () => (
  <>
    <Tabs {...tabProps} direction="top" />
    <Tabs {...tabProps} direction="bottom" />
    <Tabs {...tabProps} direction="left" />
    <Tabs {...tabProps} direction="right" />
  </>
);
```

## API

| Name       | Description      | Type                                                        | Default |
| ---------- | ---------------- | ----------------------------------------------------------- | ------- |
| tabs       | 选项配置         | any[]                                                       |         |
| activeKey  | 激活下标         | number                                                      | 0       |
| onChange   | 激活下标变更后   | (activeKey: number) => void                                 |         |
| direction  | 方向             | 'top' \| 'bottom' \| 'left' \| 'right'                      | top     |
| transition | 是否使用过度动画 | boolean                                                     |         |
| render     | 渲染页面内容     | (tab: T, index: number) => React.ReactNode                  |         |
| itemRender | 渲染 tab         | (active: boolean, tab: T, index: number) => React.ReactNode |         |
