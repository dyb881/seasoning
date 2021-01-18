// 在body插入一个input[type="file"]用于文件上传使用
let input: HTMLInputElement;

/**
 * 从文件选择器获取文件
 */
export const getFile = (multiple?: boolean) => {
  if (!input) {
    input = document.createElement('input');
    document.body.appendChild(input);
  }
  return new Promise<FileList>((resolve, reject) => {
    Object.assign(input, {
      accept: '*/*',
      multiple,
      onchange: () => {
        input.files ? resolve(input.files) : reject();
      },
      onerror: reject,
      type: 'file',
      hidden: true,
      value: null,
    });
    input.click();
  });
};

type TFiles = File | FileList | File[];

/**
 * 判断文件拓展名
 * 注意后缀名使用小写即可
 */
export const inExtname = (files: TFiles, extnames: string[]): boolean => {
  if (files instanceof File) {
    return extnames.includes(files.name.replace(/.+\./, '').toLowerCase());
  }
  return Array.from(files).every((file) => inExtname(file, extnames));
};

/**
 * 文件转Base64
 */
export const fileToBase64 = async (file: File, maxSize?: number) => {
  // 根据尺寸压缩图片
  if (maxSize) {
    const { getBase64Strings } = await import('exif-rotate-js');
    const [base64] = await getBase64Strings([file], { maxSize });
    return base64;
  }

  return new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
};

/**
 * 文件转Base64 批量
 */
export const fileToBase64s = (files: FileList | File[], maxSize?: number) => {
  return Promise.all(Array.from(files).map((file) => fileToBase64(file, maxSize)));
};

/**
 * base64 转 blob
 */
export const base64ToBlob = (base64: string) => {
  const arr = base64.split(',');
  const type = (arr[0].match(/:(.*?);/) || [])[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type });
};

/**
 * blob 转 文件
 */
export const blobToFile = (blob: Blob, fileName: string) => {
  const file: any = blob;
  file.lastModifiedDate = new Date();
  file.name = fileName;
  return file as File;
};

/**
 * base64 转 文件
 */
export const base64ToFile = (base64: string, fileName = 'file.jpg') => {
  const blob = base64ToBlob(base64);
  const file = blobToFile(blob, fileName);
  return file;
};

/**
 * base64 转 文件 批量
 */
export const base64ToFiles = (base64s: string[], fileNames = [] as string[]) => {
  return Promise.all(base64s.map((base64, index) => base64ToFile(base64, fileNames[index])));
};

/**
 * blob 下载成文件
 */
export const blobDownload = (blob: Blob, fileName: string) => {
  const a = document.createElement('a');
  a.href = window.URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(a.href);
};

/**
 * base64 下载成文件
 */
export const base64Download = (base64: string, fileName: string) => {
  const blob = base64ToBlob(base64);
  blobDownload(blob, fileName);
};

type TOptions = {
  multiple?: boolean;
  extnames?: string[];
  maxSize?: number;
  onFile?: () => void; // 选中文件后
};

/**
 * 直接获取 base64
 * 添加 maxSize 参数后，会根据尺寸压缩并解决图片旋转的问题
 */
export const getBase64s = async ({ multiple, extnames, maxSize, onFile } = {} as TOptions) => {
  const files = await getFile(multiple);

  onFile?.();

  // 验证文件后缀名
  if (extnames?.length && !inExtname(files, extnames)) {
    throw new Error(`仅允许选择后缀名为：${extnames.join('、')}的文件`);
  }

  return fileToBase64s(files, maxSize);
};

/**
 * 获取处理后的文件
 * 添加 maxSize 参数后，会根据尺寸压缩并解决图片旋转的问题
 */
export const getFiles = async ({ multiple, extnames, maxSize, onFile } = {} as TOptions) => {
  const files = await getFile(multiple);

  onFile?.();

  // 验证文件后缀名
  if (extnames?.length && !inExtname(files, extnames)) {
    throw new Error(`仅允许选择后缀名为：${extnames.join('、')}的文件`);
  }

  const base64s = await fileToBase64s(files, maxSize);

  return base64ToFiles(
    base64s,
    Array.from(files).map((file) => file.name)
  );
};

export default {
  getFile,
  inExtname,
  fileToBase64,
  fileToBase64s,
  base64ToBlob,
  blobToFile,
  base64ToFile,
  base64ToFiles,
  blobDownload,
  base64Download,
  getBase64s,
  getFiles,
};
