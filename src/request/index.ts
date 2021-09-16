import {
  interceptorsRequest,
  interceptorsResponse,
  isCompleteUrl,
  statisticalTime,
  requestFunction,
  labelToConfig,
  errorMatchText,
  log,
} from './tool';
import { defaultConfig, errorTexts, statusCodeKeys, messageKeys, successCodes } from './config';
import { TConfig, TRequestConfig, TRequestReturn } from './types';
import pickBy from 'lodash/pickBy';

/**
 * 请求器
 */
export default class Request {
  host = '';
  apiPath = '';
  console = true;
  defaultConfig = defaultConfig;
  errorTexts = errorTexts;
  statusCodeKeys = statusCodeKeys;
  messageKeys = messageKeys;
  successCodes = successCodes;
  interceptorsRequest = interceptorsRequest;
  interceptorsResponse = interceptorsResponse;
  requestFunction = requestFunction;
  config?: TRequestConfig;

  get baseURL() {
    return this.host + this.apiPath;
  }

  constructor(config?: TRequestConfig) {
    config && this.init(config);
  }

  /**
   * 克隆请求器
   * 在当前请求器配置基础上合并配置，并生成新的请求
   * 主要用于一个项目面向多个服务的场景
   */
  clone = (config: TRequestConfig) => new Request({ ...this.config, ...config });

  /**
   * 初始化
   */
  private init = (config: TRequestConfig) => {
    const { defaultConfig, errorTexts, ...configs } = config;
    Object.assign(this.defaultConfig, defaultConfig);
    Object.assign(this.errorTexts, errorTexts);
    Object.assign(
      this,
      pickBy(configs, (i) => i !== undefined)
    );
    this.config = config;
  };

  /**
   * 执行请求
   */
  private request = (configs: TConfig) => {
    let { url = '', ...config } = configs;

    // 非完整 url 的情况下，拼接地址
    if (!isCompleteUrl(url)) url = this.baseURL + url;

    // 请求拦截
    config = this.interceptorsRequest({ url, ...this.defaultConfig, ...config });

    // 打印请求日志
    if (this.console) log.request(config);

    // 开始统计时间
    const st = statisticalTime();

    // 执行请求
    return this.requestFunction(config)
      .catch((error) => {
        // 异常分析
        return { error, errorText: errorMatchText(this.errorTexts, error) };
      })
      .then((res) => {
        // 无错误信息，并且响应类型是 json
        if (!res.errorText && config.responseType === 'json') {
          // 获取匹配的状态码
          const code = this.statusCodeKeys.reduce((code, key) => res[key] ?? code, '');
          // 当成功状态码匹配失败，既是请求失败
          if (!this.successCodes.includes(code)) {
            res.error = code;
            // 匹配获取提示信息，并赋值给错误文本属性
            res.errorText = this.messageKeys.reduce((msg, key) => res[key] || msg, '请求异常');
          }
        }

        res.ok = !res.errorText; // 错误文本为空时，即是请求成功

        // 响应拦截
        res = this.interceptorsResponse({ time: st(), ...res }, config);

        // 打印响应日志
        if (this.console) log.response(res, config, res.ok);

        return res as TRequestReturn;
      });
  };

  /**
   * 缓存的请求
   */
  private caches: { [key: string]: TRequestReturn } = {};

  /**
   * 请求中
   */
  private requestLoadings: { [key: string]: boolean } = {};

  /**
   * 创建请求器
   */
  private createRequest = (method: TConfig['method'], configs?: TConfig) => {
    return (url: string, data?: object, ...args: (TConfig | string)[]) => {
      const config = Object.assign({ method, url, data }, configs, ...args.map((i) => labelToConfig(i)));
      const { cacheKey, clearCacheKey } = config;
      if (!cacheKey) {
        let res = this.request(config);

        // 请求成功时，清除缓存
        if (clearCacheKey)
          res = res.then((res) => {
            if (res.ok) delete this.caches[clearCacheKey];
            return res;
          });

        return res;
      }

      /**
       * 接口缓存
       * 多个地方同时请求同一个cacheKey，可以共用一次接口请求
       */
      const request = async () => {
        // 正在请求中
        if (this.requestLoadings[cacheKey]) {
          // 暂停一段时间
          await new Promise((r) => setTimeout(r, 500));
          // 再次请求
          const res: TRequestReturn = await request();
          return res;
        }

        this.requestLoadings[cacheKey] = true;
        const res = this.caches[cacheKey] || (await this.request(config));
        // 写入缓存
        if (res.ok) this.caches[cacheKey] = res;
        this.requestLoadings[cacheKey] = false;
        return res;
      };

      return request();
    };
  };

  get = this.createRequest('GET');
  post = this.createRequest('POST');
  put = this.createRequest('PUT');
  patch = this.createRequest('PATCH');
  del = this.createRequest('DELETE');
  upload = this.createRequest('POST', { headers: {} });
}
