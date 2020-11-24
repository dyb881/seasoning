import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'seasoning',
  favicon: '/logo.svg',
  logo: '/logo.svg',
  outputPath: 'docs-dist',
  base: '/seasoning',
  publicPath: '/seasoning/',
  mode: 'site',
  dynamicImport: {},
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'seasoning',
        camel2DashComponentName: false,
        customStyleName: name => {
          return `./style/index.less`;
        },
      },
      'seasoning',
    ],
    [
      'import',
      { libraryName: 'antd', libraryDirectory: 'es', style: true },
      'antd',
    ],
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],
  ],
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/dyb881/seasoning' },
  ],
});
