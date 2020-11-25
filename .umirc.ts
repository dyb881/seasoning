import { defineConfig } from 'dumi';

const getImport = (name: string, options: any) => ['import', { libraryName: name, ...options }, name];

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
    getImport('seasoning', {
      camel2DashComponentName: false,
      customStyleName: name => './style/index.less',
    }),
    getImport('antd', { libraryDirectory: 'es', style: true }),
    getImport('antd-mobile', { libraryDirectory: 'es', style: true }),
    getImport('lodash', { libraryDirectory: '', camel2DashComponentName: false }),
  ],
  navs: [null, { title: 'GitHub', path: 'https://github.com/dyb881/seasoning' }],
});
