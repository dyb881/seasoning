import { base64ToFile } from '../file-tool';

/**
 * 获取图片对象
 */
export const getImg = (src: string) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.setAttribute('crossorigin', 'anonymous');
    Object.assign(img, { src, onload: () => resolve(img), onerror: reject });
  });
};

/**
 * img 标签转 base64
 */
export const imgToBase64 = (img: HTMLImageElement) => {
  return new Promise<string>((resolve) => {
    const toBase64 = () => {
      const canvas = document.createElement('canvas');
      const { width, height } = img;
      Object.assign(canvas, { width, height });
      const ctx = canvas.getContext('2d');
      ctx!.drawImage(img, 0, 0, width, height);
      const dataURL = canvas.toDataURL('image/png');
      resolve(dataURL);
      img.removeEventListener('load', toBase64);
    };
    img.width ? toBase64() : img.addEventListener('load', toBase64);
  });
};

/**
 * 网络图片转Base64
 */
export const urlToBase64 = async (src: string) => {
  const img = await getImg(src);
  return imgToBase64(img);
};

/**
 * 网络图片转Base64 批量
 */
export const urlToBase64s = (srcs: string[]) => {
  return Promise.all(srcs.map((src) => urlToBase64(src)));
};

/**
 * 网络图片转文件
 */
export const urlToFile = async (src: string, fileName?: string) => {
  const base64 = await urlToBase64(src);
  return base64ToFile(base64, fileName);
};

/**
 * 网络图片转文件 批量
 */
export const urlToFiles = (srcs: string[], fileNames = [] as string[]) => {
  return Promise.all(srcs.map((src, index) => urlToFile(src, fileNames[index])));
};

export default { getImg, imgToBase64, urlToBase64, urlToBase64s, urlToFile, urlToFiles };
