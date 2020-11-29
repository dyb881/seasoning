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

const Content: React.FC = ({ children }) => {
  useEffect(() => {
    console.log('刷新组件');
  }, []);

  return <div style={{ padding: 10 }}>{children}</div>;
};

const render = (active, index) => {
  return <div style={{ padding: 10 }}>{active ? '选中' : `tab${index}`}</div>;
};

const tabs = [
  { content: <Content>0</Content>, render },
  { content: <Content>1</Content>, render },
  { content: <Content>2</Content>, render },
];

const tabProps = {
  tabs,
  transition: true,
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

| Name       | Description      | Type                                   | Default |
| ---------- | ---------------- | -------------------------------------- | ------- |
| tabs       | 选项配置         | TTab[]                                 |         |
| activeKey  | 激活下标         | number                                 | 0       |
| onChange   | 激活下标变更后   | (activeKey: number) => void            |         |
| direction  | 方向             | 'top' \| 'bottom' \| 'left' \| 'right' | top     |
| transition | 是否使用过度动画 | boolean                                |         |

## TTab 选项配置

| Name    | Description  | Type                                                           | Default |
| ------- | ------------ | -------------------------------------------------------------- | ------- |
| content | 内容         | React.ReactNode                                                |         |
| render  | tab 选项渲染 | (active: boolean, index: number, tab: TTab) => React.ReactNode |         |
