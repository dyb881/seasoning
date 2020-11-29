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

```
/**
 * mobx 主类
 */
class Stores {
  user = new User();
}

/**
 * 全局状态
 */
export const stores = new Stores();

/**
 * 生成关联器
 */
export const { combine, combinePage } = mobxCombine(stores);

export default stores;
```
