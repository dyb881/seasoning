import React, { FC, useEffect } from 'react';
import { useStates } from '../hooks';
import classnames from 'classnames';
import './index.less';

export type TTabsProps<T extends any = any> = Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> & {
  tabs: T[];
  activeKey?: number;
  onChange?: (activeKey: number) => void;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  transition?: boolean;
  render: (tab: T, index: number) => React.ReactNode; // 渲染页面内容
  itemRender: (active: boolean, tab: T, index: number) => React.ReactNode; // 渲染 tab
};

/**
 * 切换标签栏
 */
const Tabs: FC<TTabsProps> = ({
  tabs,
  activeKey = 0,
  onChange,
  direction = 'top',
  transition,
  render,
  itemRender,
  className,
  ...props
}) => {
  const { states, setStates } = useStates({
    contents: [] as React.ReactNode[],
    key: activeKey,
  });
  const { contents, key } = states;

  useEffect(() => {
    if (contents[key]) return;
    contents[key] = render(tabs[key], key);
    setStates({ contents });
  }, [key]);

  return (
    <div
      className={classnames(
        'seasoning-tabs',
        `seasoning-tabs-${direction}`,
        { 'seasoning-tabs-transition': transition },
        className
      )}
      {...props}
    >
      <div className="seasoning-tabs-options">
        {tabs.map((i, k) => (
          <div
            key={k}
            className="seasoning-tabs-options-item"
            onClick={() => {
              setStates({ key: k });
              onChange?.(k);
            }}
          >
            {itemRender(key === k, i, k)}
          </div>
        ))}
      </div>
      <div className="seasoning-tabs-main">
        <div
          className="seasoning-tabs-main-box"
          style={
            ['top', 'bottom'].includes(direction)
              ? { width: `${tabs.length * 100}%`, left: `-${key * 100}%` }
              : { height: `${tabs.length * 100}%`, top: `-${key * 100}%` }
          }
        >
          {tabs.map((_, k) => (
            <div key={k} className="seasoning-tabs-main-item">
              {contents[k]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
