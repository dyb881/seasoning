/**
 * 创建带颜色的控制台对象
 */
const createStyleConsole = (color: string) => {
  /**
   * 单行日志
   */
  const log = (text: string) => {
    console.log(`%c${text}`, color);
  };

  /**
   * 日志组
   */
  const group = (text: string, content: () => void) => {
    console.groupCollapsed(`%c${text}`, color);
    content?.();
    console.groupEnd();
  };

  return { log, group };
};

/**
 * 创建多个带颜色的控制台对象
 */
const styleConsole = <T extends { [key: string]: string }>(colors: T) => {
  const funs: any = {};
  const keys = Object.keys(colors) as (keyof T)[];
  keys.forEach(key => {
    funs[key] = createStyleConsole(colors[key]);
  });
  return funs as {
    [key in keyof T]: ReturnType<typeof createStyleConsole>;
  };
};

export default styleConsole;
