import { serialize } from 'object-to-formdata';
import qs from 'qs';
import {
  Application,
  TConfig,
  TErrorTexts,
  TInterceptorsRequest,
  TInterceptorsResponse,
  TRequestFunction,
} from './types';
import { consoleStyle } from './config';
import StyleConsole from '../StyleConsole';

/**
 * 根据数据类型生成方法
 */
const toBodyFuns = {
  [Application.Json]: JSON.stringify,
  [Application.Form]: qs.stringify,
};

/**
 * data 转为请求主体
 */
export const toBody = (config: TConfig) => {
  if (config.method === 'GET') {
    // 把参数转化后拼接到 url
    const params = qs.stringify(config.data);
    if (params) config.url += `?${params}`;
  } else {
    const toBodyFun = toBodyFuns[config.headers?.['Content-Type']!];
    const { data } = config;
    if (toBodyFun) {
      // 根据请求类型处理转化 data 为 body
      config.body = toBodyFun(data);
    } else {
      // 把 data 转化为 FormData 对象赋值到 body
      config.body = data instanceof FormData ? data : serialize(data);
    }
  }
  return config;
};

/**
 * 异常分析 错误信息 => 错误解析文本
 */
export const errorMatchText = (errorTexts: TErrorTexts, error: any) => {
  const errorText = (typeof error === 'object' && error.message) || error;
  for (const [key, item] of Object.entries(errorTexts)) {
    // 正则匹配得到错误文本
    if (new RegExp(key).test(errorText)) return item;
  }
  return '其他错误';
};

const urlReg = /^http/;

/**
 * 判断是否完整 url
 */
export const isCompleteUrl = (url: string) => urlReg.test(url);

/**
 * 统计时间
 */
export const statisticalTime = () => {
  const start = new Date();
  return () => {
    const end = new Date();
    return {
      start: start.toTimeString(),
      end: end.toTimeString(),
      total: `${(+end - +start) / 1000}秒`,
    };
  };
};

/**
 * 如果配置为文本类型，直接写入 label
 */
export const labelToConfig = (config?: TConfig | string) => {
  return typeof config === 'string' ? { label: config } : config;
};

/**
 * 请求拦截
 */
export const interceptorsRequest: TInterceptorsRequest = config => config;

/**
 * 响应拦截
 */
export const interceptorsResponse: TInterceptorsResponse = (res, _config) => res;

/**
 * 请求方法
 */
export const requestFunction: TRequestFunction = config => {
  // 转为主体
  config = toBody(config);

  // 请求控制器
  const controller = new AbortController();
  config.signal = controller.signal;

  // 请求超时
  const timeout = new Promise((_, reject) =>
    setTimeout(() => {
      controller.abort(); // 终止请求
      reject('request timeout');
    }, config.timeout)
  );

  return Promise.race([fetch(config.url!, config), timeout]).then(response => {
    if (response instanceof Response) {
      const { responseType } = config;

      if (responseType !== 'json' && responseType && response[responseType]) {
        // 返回特定解析类型
        return { [responseType]: response[responseType]() };
      }

      return response.json();
    }
    return response;
  });
};

const { group } = new StyleConsole(consoleStyle);

/**
 * 打印日志
 * 请求配置的 请求标签 label 代表打印日志的 文本内容
 */
export const log = {
  request: (config: TConfig) => {
    group.request(`Request: ${config.label || config.url} ⇅`, () => {
      console.log('请求类型：', config.method);
      console.log('请求地址：', config.url);
      console.log('请求数据：', config.data || '无');
      console.log('请求配置：', config);
    });
  },
  response: (res: any, { label, url }: TConfig, success: boolean) => {
    let title = `Response: ${label || url} ${success ? '√' : '×'}`;
    if (res.time?.total) title += ` 用时：${res.time.total}`;
    group[success ? 'success' : 'fail'](title, () => {
      console.log('响应数据：', res);
      if (!success) {
        console.log('响应异常：', res.error || '无');
        console.log('异常解析：', res.errorText);
      }
    });
  },
};
