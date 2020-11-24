import React, { FC, useEffect } from 'react';
import { useStates } from '../Hooks';
import classnames from 'classnames';

type TTab = {
  content: React.ReactNode;
  render: (active: boolean, index: number, tab: TTab) => React.ReactNode;
};

type TDirection = 'top' | 'bottom' | 'left' | 'right';

type TTabsProps = React.HTMLProps<HTMLDivElement> & {
  tabs: TTab[];
  activeKey?: number;
  onChange?: (activeKey: number) => void;
  direction?: TDirection;
  transition?: boolean;
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
    contents[key] = tabs[key].content;
    setStates({ contents });
  }, [key]);

  console.log(contents);

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
            {i.render(key === k, k, i)}
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
