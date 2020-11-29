import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { configure } from 'mobx';
import { observer } from 'mobx-react';

/**
 * 全局设置
 */
configure({
  useProxies: 'ifavailable', // 自动判断是否使用代理对象
});

/**
 * mobx 关联器
 */
export const mobxCombine = <T extends any>(stores: T) => {
  /**
   * 全局状态类型
   */
  type TStores = { stores: T };

  /**
   * 状态联合到组件（函数组件）
   * 使用后状态变更时会刷新两次组件，build 后就不会有这情况了，可放心开发
   */
  const combine = <P extends object>(Component: FC<P & TStores>) => {
    // 生成观察者组件
    const Observer = observer(Component);
    // 注入全局状态
    const Combine: FC<P> = props => <Observer {...props} stores={stores} />;
    return Combine;
  };

  /**
   * 在原有基础上加入路由类型定义
   */
  const combinePage = <Params extends object, P extends object = {}>(
    Component: FC<P & TStores & RouteComponentProps<Params>>
  ) => {
    return combine(Component);
  };

  return { combine, combinePage };
};

export default mobxCombine;
