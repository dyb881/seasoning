import React, { useState } from 'react';

/**
 * 仿 class state 的 hooks
 * 新状态会合并到原状态
 */
export const useStates = <T extends object>(defaultStates: T) => {
  const reducer = (states: T, newStates: Partial<T> & { [key: string]: any }) => ({ ...states, ...newStates });
  const [states, setStates] = React.useReducer(reducer, defaultStates);
  return { states, setStates };
};

/**
 * 弹窗 hooks
 */
export const useModal = (defaultVisible = false) => {
  const [visible, setVisible] = useState(defaultVisible);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const switchs = () => setVisible(visible => !visible);
  const modalProps = { visible, onClose: hide };

  return { show, hide, switchs, visible, modalProps };
};

export default { useStates, useModal };
