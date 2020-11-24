export type TStyles = { [key: string]: string };

/**
 * 带颜色的控制台对象
 */
export default class StyleConsole<T extends TStyles> {
  Styles: T;
  log: { [key in keyof T]: (text: string) => void };
  group: { [key in keyof T]: (text: string, content: () => void) => void };

  constructor(Styles: T) {
    this.Styles = Styles;

    this.log = this.createFuns((color, text: string) => {
      console.log(`%c${text}`, color);
    });

    this.group = this.createFuns((color, text: string, content: () => void) => {
      console.groupCollapsed(`%c${text}`, color);
      content?.();
      console.groupEnd();
    });
  }

  private createFuns = (fun: (color: keyof T, ...args: any[]) => void) => {
    const colorKeys = Object.keys(this.Styles) as (keyof T)[];
    type TFuns = {
      [key in keyof T]: (...args: any[]) => void;
    };
    const funs: Partial<TFuns> = {};
    colorKeys.forEach(key => {
      funs[key] = (...args: any[]) => fun(this.Styles[key], ...args);
    });
    return funs as TFuns;
  };
}
