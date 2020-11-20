---
title: 请求器
---

## Request

配置型请求封装，所有参数最终均合成请求配置对象，并使用 TRequestFunction 发出请求，TRequestFunction 可重写替换

```tsx
import React from 'react';
import { Space, Button } from 'antd';
import { Request } from 'seasoning';

// 初始化之后可得到 baseURL 和多个请求类型方法
const { baseURL, get, post, put, patch, del, upload } = new Request({
  host: 'http://localhost',
  apiPath: '/api',
  interceptorsRequest: (config) => {
    // 请求拦截器写入登录信息
    config.headers = { ...config.headers, token: '123456789' };
    return config;
  },
});

export default () => (
  <Space>
    <Button
      type="primary"
      onClick={async () => {
        await get('/test?id=1000');
        await get('http://localhost/api/test?id=1000');
        await get('http://localhost/api/test', { id: 1000 });
        await get('http://localhost/api/test', { id: 1000 }, '测试请求1');
        await get(
          'http://localhost/api/test',
          { id: 1000 },
          {
            label: '测试请求2',
            url: 'http://localhost/api/testNew',
            data: { id: 2000 },
          },
        );
        await get(
          'http://localhost/api/test',
          { id: 1000 },
          '测试请求1',
          { label: '测试请求3' },
          { label: '测试请求4' },
        );
      }}
    >
      按顺序发出 GET 请求
    </Button>
    <Button
      type="primary"
      onClick={async () => {
        await post('/test', { id: 1000 });
        await upload('/upload', { file: File, file2: File }, '上传文件');
      }}
    >
      按顺序发出 POST Upload 请求
    </Button>
  </Space>
);
```

## 参数说明

由于相关的参数较多，直接进入代码看注释比较直观，需要重点关注初始化配置 TRequestConfig

- [类型定义](https://github.com/dyb881/seasoning/blob/master/src/Request/types.ts)
- [默认配置](https://github.com/dyb881/seasoning/blob/master/src/Request/config.ts)
