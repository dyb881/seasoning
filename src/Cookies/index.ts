/**
 * Cookie 控制器
 */
export default class Cookies {
  /**
   * 读取cookie
   */
  static get = (name: string) => {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    let arr = document.cookie.match(reg);
    return arr ? decodeURI(arr[2]) : null;
  };

  /**
   * 批量读取cookie
   */
  static getBatch = (names: string[]) => {
    return names.reduce((o: string[], i) => {
      o[o.length] = Cookies.get(i)!;
      return o;
    }, []);
  };

  /**
   * 写入cookie
   * expiredays 过期时间/ms
   * domain 写入域名
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
   * 批量写入cookie
   */
  static setBatch = (data: any, expiredays = 0, domain?: string) => {
    Object.keys(data).forEach(name => {
      Cookies.set(name, data[name], expiredays, domain);
    });
  };
}
