---
title: 文件处理工具
nav:
  title: Common
  path: /common
group:
  title: Tools
  path: /tools
---

## FileTool

针对文件处理的一些相关工具

### 使用方法

```
import { FileTool } from 'seasoning';

FileTool.getFile()
```

or

```
import { getFile } from 'seasoning/es/FileTool';

getFile()
```

## 方法列表

一般情况下 Typescript 代码提示完全可以明白使用方法。如有不明的情况请跳转[函数定义](https://github.com/dyb881/seasoning/blob/master/src/FileTool/index.ts)

| Function       | Description                                                    |
| -------------- | -------------------------------------------------------------- |
| getFile        | 从文件选择器获取文件                                           |
| inExtname      | 判断文件拓展名                                                 |
| fileToBase64   | 文件转 Base64                                                  |
| fileToBase64s  | 文件转 Base64 批量                                             |
| base64ToBlob   | base64 转 blob                                                 |
| blobToFile     | blob 转文件                                                    |
| base64ToFile   | base64 转文件                                                  |
| base64ToFiles  | base64 转文件 批量                                             |
| blobDownload   | blob 下载成文件                                                |
| base64Download | base64 下载成文件                                              |
| getBase64s     | 直接获取 base64，添加 maxSize 参数后，可解决图片上传旋转的问题 |
