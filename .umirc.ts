import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'seasoning',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // favicon: '/simple-logo.svg',
  // logo: '/logo.svg',
  outputPath: 'docs-dist',
  base: '/seasoning',
  publicPath: '/seasoning/',
  mode: 'site',
  extraBabelPlugins: [
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'es', style: true },
      'antd',
    ],
  ],
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/dyb881/seasoning' },
  ],
});
