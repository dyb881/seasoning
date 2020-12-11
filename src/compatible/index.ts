import { UAParser } from 'ua-parser-js';

/**
 * 浏览器解析器
 */
export const { ua, browser, engine, os, device } = new UAParser().getResult();

export const isIOS = os.name === 'iOS';

export const isAndroid = os.name === 'Android';

export const isIphoneX = isIOS && window.screen.height >= 812;

/**
 * 是否在可视区
 */
export const isInView = (el: Element) => {
  const { top, bottom } = el.getBoundingClientRect();
  return top >= 0 && bottom <= window.innerHeight;
};

/**
 * 判断焦点元素是否在可视区
 */
export const activeElementIsInView = () => !!document.activeElement && isInView(document.activeElement);

/**
 * 滚动到可视区域
 */
export const scrollIntoView = (el: Element, delay = 300) => {
  // contentEditable 属性设置或返回元素内容是否可编辑。
  const editable = el.getAttribute('contenteditable');
  const isEditable = el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || editable === '' || editable;
  // 可编辑，并不在视图内
  if (isEditable && !isInView(el)) {
    // 让当前的元素滚动到浏览器窗口的可视区域内。
    setTimeout(() => el.scrollIntoView({ block: 'center' }), delay);
  }
};

/**
 * 焦点元素滚动到可视区域
 */
export const activeElementScrollIntoView = () => document.activeElement && scrollIntoView(document.activeElement);

/**
 * 自动计算 rem
 * 以 100px 为基准，相对 750 进行计算
 */
export const autoRem = (min: number, max: number, isResize?: boolean) => {
  const htmlstyle = window.document.getElementsByTagName('html')[0].style;
  const resize = () => {
    const w = window.innerWidth;
    htmlstyle.fontSize = (((w > max && max) || (w < min && min) || w) / max) * 100 + 'px';
  };
  resize();
  if (isResize) {
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }
  return () => {};
};

/**
 * 安卓重定向无效修复
 */
export const locationReplace = (url: string) => {
  if (isAndroid && window.history.replaceState) {
    try {
      window.history.replaceState(null, window.document.title, url);
      window.history.go(0);
      return;
    } catch {}
  }
  window.location.replace(url);
};

/**
 * IOS 键盘遮挡的处理 props
 * getKeyboardCoverProps(props) => newProps
 */
export const getKeyboardCoverProps = (props?: any) => {
  if (!isIOS) return props;

  return {
    ...props,
    onFocus: (...args: any[]) => {
      props?.onFocus(...args);
      document.getElementsByTagName('body')[0].style.height = window.innerHeight + 302 + 'px';
      setTimeout(() => {
        document.body.scrollTop = 302;
        document.documentElement.scrollTop = 302;
      }, 300);
    },
    onBlur: (...args: any[]) => {
      props?.onBlur(...args);
      document.getElementsByTagName('body')[0].style.height = window.innerHeight + 'px';
    },
  };
};

export default {
  ua,
  browser,
  engine,
  os,
  device,
  isIOS,
  isAndroid,
  isIphoneX,
  isInView,
  activeElementIsInView,
  scrollIntoView,
  activeElementScrollIntoView,
  autoRem,
  locationReplace,
  getKeyboardCoverProps,
};
