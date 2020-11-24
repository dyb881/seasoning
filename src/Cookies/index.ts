/**
 * Cookie 控制器
 */
export default class Cookies {
  /**
   * 读取cookies
   */
  static get = (name: string) => {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    let arr = document.cookie.match(reg);
    return arr ? decodeURI(arr[2]) : null;
  };

  /**
   * 批量读取cookies
   */
  static getBatch = (names: string[]) => {
    return names.reduce((o: string[], i) => {
      o[o.length] = Cookies.get(i)!;
      return o;
    }, []);
  };

  /**
   * 写入 cookie
   * expiredays 过期时间/ms
   */
  static set = (
    name: string,
    value: string,
    expiredays = 0,
    domain?: string,
  ) => {
    const exdate = new Date();
    exdate.setTime(+exdate + expiredays);
    document.cookie = `${name}=${escape(value)}${
      expiredays ? `;expires=${(exdate as any).toGMTString()}` : ''
    }${domain ? `;path=/;domain=${domain}` : ''}`;
  };

  /**
   * 批量写入 cookies
   */
  static setBatch = (data: any, expiredays = 0, domain?: string) => {
    Object.keys(data).forEach(name => {
      Cookies.set(name, data[name], expiredays, domain);
    });
  };
}
