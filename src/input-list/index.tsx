import React, { FC, isValidElement, cloneElement, useState, useEffect } from 'react';
import { TInputNotRequired } from '../types';
import classnames from 'classnames';
import './index.less';

export type TInputListProps<T = any> = TInputNotRequired<T[]> & {
  children: React.ReactNode;
  addButton?: React.ReactNode; // 新增行按钮
  delButton?: React.ReactNode; // 删除行按钮
  className?: string;
  itemClassName?: string;
  [key: string]: any;
};

/**
 * 多行输入字段
 */
export const InputList: FC<TInputListProps> = ({
  value,
  onChange,
  children,
  addButton = 'Add field',
  delButton = 'Del field',
  className,
  itemClassName,
  ...props
}) => {
  const val = value || [];

  const add = () => {
    onChange?.([...val, undefined]);
  };

  const del = (index: number) => {
    const newVal = [...val];
    newVal.splice(index, 1);
    onChange?.(newVal);
  };

  return (
    <div className={classnames('seasoning-input-list', className)}>
      {val.map((i, k) => (
        <div className={classnames('seasoning-input-list-item', itemClassName)} key={k}>
          <div className="seasoning-input-list-item-main">
            {isValidElement(children)
              ? cloneElement(children, {
                  ...props,
                  value: i,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    const newVal = [...val];
                    newVal[k] = e && e.target ? e.target.value : e;
                    onChange?.(newVal);
                  },
                })
              : children}
          </div>
          {cloneElement(isValidElement(delButton) ? delButton : <span>{delButton}</span>, { onClick: () => del(k) })}
        </div>
      ))}
      {cloneElement(isValidElement(addButton) ? addButton : <span>{addButton}</span>, { onClick: add })}
    </div>
  );
};

export default InputList;
