import React, { FC } from 'react';
import classnames from 'classnames';
import './index.less';

/**
 * 文本居中
 */
const FontCenter: FC<React.HTMLProps<HTMLDivElement>> = ({ className, children, ...props }) => {
  return (
    <div className={classnames('seasoning-font-center', className)} {...props}>
      <div className="seasoning-font-center-text">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default FontCenter;
