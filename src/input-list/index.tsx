import React, { FC, isValidElement, cloneElement, useState, useEffect } from 'react';
import { TInputNotRequired } from '../types';
import './index.less';

export type TInputListProps = TInputNotRequired<any[]> & {
  children: React.ReactNode;
  addButton?: React.ReactNode; // 新增行按钮
  delButton?: React.ReactNode; // 删除行按钮
  [key: string]: any;
};

/**
 * 多行输入字段
 */
export const InputList: FC<TInputListProps> = ({
  value = [],
  onChange,
  children,
  addButton = 'Add field',
  delButton = 'Del field',
  ...props
}) => {
  const [val, setVal] = useState(value);

  useEffect(() => {
    onChange?.(val);
  }, [val]);

  const add = () => {
    const newVal = [...val, undefined];
    setVal(newVal);
  };

  const del = (index: number) => {
    const newVal = [...val];
    newVal.splice(index, 1);
    setVal(newVal);
  };

  return (
    <div className="seasoning-input-list">
      {val.map((i, k) => (
        <div className="seasoning-input-list-item" key={k}>
          <div className="seasoning-input-list-item-main">
            {isValidElement(children)
              ? cloneElement(children, {
                  ...props,
                  value: i,
                  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                    const newVal = [...val];
                    newVal[k] = e && e.target ? e.target.value : e;
                    setVal(newVal);
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
