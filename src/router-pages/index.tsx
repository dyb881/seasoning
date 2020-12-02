import React, { FC, useEffect } from 'react';
import { matchPath, HashRouter, HashRouterProps, BrowserRouter, BrowserRouterProps } from 'react-router-dom';
import { History, createHashHistory, createBrowserHistory } from 'history';
import { RouterSwitch, TRouters } from '../router-switch';

export type TRouter = {
  path: string; // 路由地址
  component?: React.ComponentType<any>; // 绑定组件
  [key: string]: any;
};

type TType = 'hash' | 'browser';

type TListen<T extends TRouter = TRouter> = (router: T) => void;

/**
 * 路由选项
 */
export type TRouterPagesOptions<T extends TRouter = TRouter> = {
  routers: T[]; // 路由配置
  type?: TType; // 路由类型
  listen?: TListen<T>; // 路由监听
};

/**
 * 路由页面创建工具
 */
export default class RouterPages<T extends TRouter = TRouter> {
  routers: T[] = [];
  type: TType = 'hash';
  listen?: TListen<T>;

  history: History;
  routersProps: TRouters;

  constructor(options: TRouterPagesOptions<T>) {
    Object.assign(this, options);

    // 创建路由控制器
    this.history = this.type === 'hash' ? createHashHistory() : createBrowserHistory();

    // 创建路由配置
    this.routersProps = this.routers
      .filter((i) => i.component)
      .reduce((routersProps, { path, component }) => {
        routersProps[path] = component!;
        return routersProps;
      }, {} as TRouters);
  }

  /**
   * 匹配路由响应监听
   */
  match = (pathname = this.history.location.pathname) => {
    for (const router of this.routers) {
      if (matchPath(pathname, { path: router.path, exact: true })) {
        this.listen?.(router); // 匹配并响应对应路由配置
        break;
      }
    }
  };

  /**
   * 路由页面集合
   */
  Pages: FC = () => {
    return <RouterSwitch routers={this.routersProps} />;
  };

  /**
   * 路由注入
   */
  Router: FC<HashRouterProps & BrowserRouterProps> = (props) => {
    useEffect(() => {
      if (!this.listen) return;
      this.match(); // 初次匹配
      this.history.listen(({ pathname }) => this.match(pathname)); // 监听地址变动
    }, []);

    return this.type === 'hash' ? <HashRouter {...props} /> : <BrowserRouter {...props} />;
  };
}
