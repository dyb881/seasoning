---
title: 文件处理工具
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
import { getFile } from 'seasoning/FileTool';

getFile()
```

## 方法列表

一般情况下 Typescript 代码提示完全可以明白使用方法。如有不明的情况请跳转[函数定义](https://github.com/dyb881/seasoning/blob/master/src/FileTool/index.ts)

| Name                   | Function       |
| ---------------------- | -------------- |
| 从文件选择器获取文件   | getFile        |
| 判断文件拓展名         | inExtname      |
| 文件转 Base64          | fileToBase64   |
| 文件转 Base64 批量     | fileToBase64s  |
| base64  转  blob       | base64ToBlob   |
| blob  转   文件        | blobToFile     |
| base64  转   文件      | base64ToFile   |
| base64  转   文件 批量 | base64ToFiles  |
| blob 下载成文件        | blobDownload   |
| base64 下载成文件      | base64Download |
| 直接获取 base64        | getBase64s     |
