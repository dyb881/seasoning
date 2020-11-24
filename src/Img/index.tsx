import React, { FC, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { useStates } from '../Hooks';
import { getImg } from '../ImgTool';

// 裁剪、缩放模式
type TMode =
  | 'scaleToFill'
  | 'aspectFit'
  | 'aspectFill'
  | 'top'
  | 'bottom'
  | 'center'
  | 'left'
  | 'right';

type TImgProps = React.HTMLProps<HTMLDivElement> & {
  src?: string; // 图片地址
  mode?: 'none' | TMode | TMode[]; // 裁剪、缩放模式 default none
  loadingTip?: React.ReactNode; // 加载提示内容
  errorTip?: React.ReactNode; // 错误提示内容
};

/**
 * img 标签加强版
 */
const Img: FC<TImgProps> = ({
  src: srcSource,
  mode = 'none',
  loadingTip = '加载中',
  errorTip = '重新加载',
  className,
  onClick,
  ...props
}) => {
  const box = useRef<HTMLDivElement>(null);
  const { states, setStates } = useStates({
    src: '',
    loading: false,
    error: false,
    cutOut: undefined as boolean | undefined, // 是否裁剪
    imgStyle: {} as React.CSSProperties,
  });
  const { src, loading, error, cutOut, imgStyle } = states;

  const load = async () => {
    try {
      setStates({ src: '', loading: true, error: false });

      const { width, height } = await getImg(srcSource!);

      const imgStyle: React.CSSProperties = {};

      if (cutOut) {
        const { clientWidth, clientHeight } = box.current!;
        const widthRatio = width / clientWidth;
        const heightRatio = height / clientHeight;

        if (mode.includes('aspectFit')) {
          imgStyle[widthRatio > heightRatio ? 'width' : 'height'] = '100%';
        } else if (mode.includes('aspectFill')) {
          imgStyle[widthRatio < heightRatio ? 'width' : 'height'] = '100%';
        }
      }

      setStates({ src: srcSource, loading: false, imgStyle });
    } catch (e) {
      setStates({ loading: false, error: true });
    }
  };

  useEffect(() => {
    const { clientWidth, clientHeight } = box.current!;
    setStates({ cutOut: !!(clientWidth && clientHeight) });
  }, []);

  useEffect(() => {
    if (!srcSource || cutOut === undefined) {
      setStates({ loading: true });
      return;
    }
    load();
  }, [srcSource, cutOut]);

  let modeClass = '';
  if (mode !== 'none' && !loading && !error) {
    modeClass = [
      'seasoning-img-mode',
      ...(Array.isArray(mode) ? mode : [mode]).map(
        i => `seasoning-img-mode-${i}`,
      ),
    ].join(' ');
  }

  return (
    <div
      ref={box}
      className={classnames(
        'seasoning-img',
        { className, ['seasoning-img-tips']: loading || error },
        modeClass,
      )}
      onClick={e => {
        error ? load() : onClick?.(e);
      }}
      {...props}
    >
      {(loading && loadingTip) || (error && errorTip) || (
        <img src={src} style={imgStyle} alt="" />
      )}
    </div>
  );
};

export default Img;
