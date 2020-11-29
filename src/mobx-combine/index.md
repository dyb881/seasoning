---
nav:
  title: Common
  path: /common
group:
  title: Tools
  path: /tools
order: 11
---

## Mobx Stores 关联器

用于生成 mobx 对应的关联器

### 使用方法

```tsx
import React from 'react';
import { Space, Button } from 'antd';
import { makeAutoObservable } from 'mobx';
import { mobxCombine } from 'seasoning';

class Stores {
  num = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => {
    this.num += 1;
  };

  reset = () => {
    this.num = 0;
  };
}

/**
 * 全局状态
 */
const stores = new Stores();

/**
 * 生成关联器
 */
const { combine, combinePage } = mobxCombine(stores);

const Num = combine(({ stores }) => <span>{stores.num}</span>);

export default combine(({ stores }) => (
  <Space>
    <Num />
    <Button onClick={stores.increase}>increase</Button>
    <Button onClick={stores.reset}>reset</Button>
  </Space>
));
```
