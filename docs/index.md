---
hero:
  title: seasoning
  desc: 你的项目可能缺少一点调味料
  actions:
    - text: 快速入门
      link: /components
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 开箱即用
    desc: 直接引用即可使用各种便携工具，还能配置按需加载，避免过度引用
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: 高性能
    desc: 尽量减少引用包，在代码实现上最求性能的体现
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 为项目开发而生
    desc: 正常情况下是不需要使用该库，但是在开源库不理想的情况下可以参考一下
---

## seasoning - 给你的项目加一点调味料

配置按需加载

```
['import', { libraryName: 'seasoning', libraryDirectory: 'es', style: true }]
```

引用

```
import { StyleConsole } from 'seasoning';
const { log } = new StyleConsole({ red: 'color: red' })
log.red('红色日志')
```
