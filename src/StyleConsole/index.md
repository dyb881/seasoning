---
title: 颜色控制台
nav:
  title: Common
  path: /common
group:
  title: Tools
  path: /tools
  roder: 1
---

## StyleConsole

创建带样式的日志打印对象

```tsx
import React from 'react';
import { Button } from 'antd';
import { StyleConsole } from 'seasoning';

const styles = {
  blue: 'color: #0089E5;',
  green: 'color: #2DB700;',
  red: 'color: #F41900;',
};
const { log, group } = new StyleConsole(styles);

const onClick = () => {
  log.blue('蓝色日志文本');
  group.red('红色日志组', () => {
    console.log('默认日志文本');
    log.green('绿色日志文本');
  });
};

export default () => (
  <Button type="primary" onClick={onClick}>
    请打开控制台并点击按钮查看实际效果
  </Button>
);
```

## API

| Name     | Function         | Type                                        |
| -------- | ---------------- | ------------------------------------------- |
| 普通日志 | log[Style.key]   | (text: string) => void                      |
| 日志组   | group[Style.key] | (text: string, content: () => void) => void |
