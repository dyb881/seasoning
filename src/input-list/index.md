---
nav:
  title: Common
  path: /common
group:
  title: Components
  path: /components
  order: 2
order: 5
---

# InputList

把单个输入框组合成输入框组

```tsx
/**
 * iframe: true
 */
import React from 'react';
import { Input } from 'antd';
import { InputList } from 'seasoning';

export default () => (
  <div style={{ padding: 10 }}>
    <InputList onChange={console.log}>
      <Input />
    </InputList>
  </div>
);
```

## API

| Name      | Description    | Type                   | Default   |
| --------- | -------------- | ---------------------- | --------- |
| value     | 输入框的值数组 | any[]                  |           |
| onChange  | 值更改后       | (value: any[]) => void |           |
| children  | 输入框         | React.ReactNode        |           |
| addButton | 添加按钮       | React.ReactNode        | Add field |
| delButton | 删除按钮       | React.ReactNode        | Del field |
