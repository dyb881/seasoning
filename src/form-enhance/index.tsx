import React, { FC } from 'react';
import { FormInstance, useForm } from 'rc-field-form';
import { FieldProps } from 'rc-field-form/es/Field';
import { TGetProps } from '../types';
import { regular } from '../verify';

export type TFormEnhance<T extends FormInstance = FormInstance> = {
  form: T;
  submit: T['submit'];
  reset(): void;
  resetSubmit(): void;
};

/**
 * 表单 hooks 增强
 */
export const useFormEnhance = <T extends TFormEnhance>(useForm: any) => () => {
  const [form] = useForm();
  const { submit, resetFields } = form;

  /**
   * 重置清空表单
   */
  const reset = () => resetFields();

  /**
   * 重置清空表单，并提交表单
   */
  const resetSubmit = () => {
    reset();
    submit();
  };

  return { form, submit, reset, resetSubmit } as T;
};

type RcFieldProps = Omit<FieldProps, 'children'> & { children?: any };

export type TFormItemPropsEnhance<T extends RcFieldProps = RcFieldProps> = Pick<
  T,
  'name' | 'rules' | 'valuePropName' | 'children'
> & {
  hidden?: boolean; // 隐藏表单项
  validator?: (value: any) => string | undefined | Promise<string | undefined>; // 额外验证器
  select?: boolean; // 是否选择器
  required?: boolean | string; // 是否必填
  placeholder?: boolean | string | string[]; // 占位符
  label?: React.ReactNode; // 标签名
  formItemProps?: Partial<T>; // 原本的样式
  [key: string]: any;
};

/**
 * FormItem 增强
 */
export const formItemEnhance = <T extends TFormItemPropsEnhance>(
  Item: FC<any>,
  defaultChildren: (props: T) => JSX.Element
) => {
  const FormItem: FC<T> = (props) => {
    let {
      hidden,
      validator,
      select,
      required,
      placeholder,
      label,
      name,
      rules = [],
      valuePropName,
      formItemProps,
      children,
      ...childrenProps
    } = props;

    // 隐藏表单项
    if (hidden) return null;

    if (!children) children = defaultChildren(props);

    if (name) {
      // 默认提示语
      let text = select ? '请选择' : '请输入';
      // 接入label，如 label:用户名 = 请输入用户名
      if (typeof label === 'string') text += label;

      // 加入必填提示
      if (required) {
        rules.push({
          required: true,
          message: required !== true ? required : typeof placeholder === 'string' ? placeholder : text,
        });
      }

      // 写入默认占位符
      if (placeholder) {
        Object.assign(childrenProps, {
          placeholder: placeholder !== true ? placeholder : typeof required === 'string' ? required : text,
        });
      }

      // 追加验证器
      rules.push({
        validator: async (_rule, value) => {
          let msg;
          // 不可提交空格
          if (value && typeof value === 'string' && !regular.space.test(value)) {
            msg = `${typeof label === 'string' ? label : '输入框'}不可提交空格`;
          }
          // 自定义验证器
          if (!msg && validator) msg = await validator(value);

          msg && (await Promise.reject(msg));
        },
      });
    }

    return (
      <Item {...{ label, name, rules, valuePropName, validateFirst: true }} {...formItemProps}>
        {React.isValidElement(children) ? React.cloneElement(children, childrenProps) : children}
      </Item>
    );
  };

  return FormItem;
};

export default { useFormEnhance, formItemEnhance };
