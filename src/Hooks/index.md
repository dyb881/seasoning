---
nav:
  title: Common
  path: /common
group:
  title: Tools
  path: /tools
order: 9
---

# 自定义 Hooks

## 使用方法

```
import { hooks } from 'seasoning';

const { states, setStates } = hooks.useStates({});
```

or

```
import { useStates } from 'seasoning/es/hooks';

const { states, setStates } = useStates({});
```

## Hooks 列表

| Name      | Description             |
| --------- | ----------------------- |
| useStates | 仿 class state 的 hooks |
| useModal  | 弹窗 hooks              |
