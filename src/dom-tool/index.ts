import once from 'lodash/once';

/**
 * 插入样式
 */
export const installLink = (href: string) =>
  new Promise<void>((r) => {
    const script = document.createElement('link');
    script.rel = 'Stylesheet';
    script.href = href;
    script.onload = () => r();
    document.body.appendChild(script);
  });

/**
 * 插入脚本
 */
export const installScript = (src: string) =>
  new Promise<void>((r) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => r();
    document.body.appendChild(script);
  });

/**
 * 单次插入样式
 */
export const installLinkOne = (href: string) => once(() => installLink(href));

/**
 * 单次插入脚本
 */
export const installScriptOne = (src: string) => once(() => installScript(src));

export default {
  installLink,
  installScript,
  installLinkOne,
  installScriptOne,
};
