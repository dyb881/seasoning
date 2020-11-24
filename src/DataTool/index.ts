import qs from 'qs';
import { TOptions } from './types';

/**
 * 转为选项值
 * ['v1','v2'] => [{value: 1, label: 'v1'}, {value: 2, label: 'v2'}]
 */
export const toOptions = (options: TOptions) => {
  const isArray = Array.isArray(options);
  return Object.keys(options).map(k => {
    const option = (options as any)[k];
    if (typeof option === 'object') return option;
    return { label: option, value: isArray ? +k : k };
  });
};

/**
 * 获取 URL 参数
 */
export const getParams = () => {
  return qs.parse(window.location.search.slice(1)) as {
    [key: string]: string;
  };
};

export default {
  toOptions,
  getParams,
};
