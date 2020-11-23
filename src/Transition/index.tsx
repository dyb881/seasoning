import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface IProps {
  name: string; // 动画标识名
  time?: number; // 动画时长
  enterTime?: number; // 进入动画时长
  exitTime?: number; // 离开动画时长
}

/**
 * 组件进出动画
 */
const Transition: React.SFC<IProps> = ({
  name,
  time = 400,
  enterTime = time,
  exitTime = time,
  children,
}) => (
  <TransitionGroup>
    {React.Children.map(children, (child: any) => (
      <CSSTransition
        key={child.key}
        classNames={name}
        timeout={{ enter: enterTime, exit: exitTime }}
      >
        {child}
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default Transition;
