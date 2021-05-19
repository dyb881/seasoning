import React, { FC } from 'react';
import classnames from 'classnames';
import './index.less';

export type TFontCenterProps = React.HTMLProps<HTMLDivElement>;

/**
 * 文本上下居中
 */
const FontCenter: FC<TFontCenterProps> = ({ className, children, ...props }) => {
  return (
    <div className={classnames('seasoning-font-center', className)} {...props}>
      <div className="seasoning-font-center-text">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default FontCenter;
