/**
 * 获取图片对象
 */
export const getImg = (src: string) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    Object.assign(img, { src, onload: () => resolve(img), onerror: reject });
  });
};

/**
 * img 标签转 base64
 */
export const imgToBase64 = (img: HTMLImageElement) => {
  return new Promise<string>(resolve => {
    img.onload = () => {
      const { width, height } = img;
      const canvas = document.createElement('canvas');
      Object.assign(canvas, { width, height });
      const ctx = canvas.getContext('2d');
      ctx!.drawImage(img, 0, 0, width, height);
      const dataURL = canvas.toDataURL('image/png');
      resolve(dataURL);
    };
  });
};

export default { getImg, imgToBase64 };
