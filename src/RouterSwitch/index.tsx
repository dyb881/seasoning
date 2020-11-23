import React, { FC } from 'react';
import { Redirect, Route, Switch, SwitchProps } from 'react-router-dom';

type TRouters = {
  [key: string]: React.ComponentType<any>;
};

type TRouterSwitchProps = SwitchProps & {
  routers: TRouters; // 页面配置列表
};

/**
 * 路由配置生成组件
 */
const RouterSwitch: FC<TRouterSwitchProps> = ({ routers, ...props }) => {
  const keys = Object.keys(routers);

  return (
    <Switch {...props}>
      {keys.map((item, index) => (
        <Route key={index} path={item} component={routers[item]} exact />
      ))}
      <Redirect to={keys[0]} />
    </Switch>
  );
};

export default RouterSwitch;
