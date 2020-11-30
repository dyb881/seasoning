---
nav:
  title: Common
  path: /common
group:
  title: Tools
  path: /tools
order: 12
---

# 表单增强工具

基于 [rc-field-form](https://github.com/react-component/field-form) 封装的表单增强工具

## 使用方法

### 直接使用

```tsx
/**
 * iframe: 50
 */
import React from 'react';
import Form, { FormInstance, useForm as useFormSource, Field } from 'rc-field-form';
import { FieldProps } from 'rc-field-form/es/Field';
import { formEnhance } from 'seasoning';
import { TFormEnhance, TFormItemPropsEnhance } from 'seasoning/es/form-enhance';

const { useFormEnhance, formItemEnhance } = formEnhance;

// ------------------------ 类型增强 ------------------------ //

type TForm = TFormEnhance<FormInstance>;

type TFormItemProps = TFormItemPropsEnhance<FieldProps>;

// ------------------------ 类型增强 ------------------------ //

// ------------------------ 表单增强 ------------------------ //

const useForm = useFormEnhance<TForm>(useFormSource);

const FormItem = formItemEnhance<TFormItemProps>(Field, () => <input />);

// ------------------------ 表单增强 ------------------------ //

export default () => {
  const { form, submit } = useForm();

  return (
    <Form form={form} onFinish={console.log}>
      <FormItem name="username" label="username" placeholder required />
      <FormItem name="password" label="password" placeholder required />
      <button onClick={submit}>提交</button>
    </Form>
  );
};
```

### 在 antd 下使用

```tsx
/**
 * iframe: 250
 */
import React from 'react';
import { Form, Input, Button } from 'antd';
import { FormInstance } from 'antd/es/form';
import { FormItemProps } from 'antd/es/form/FormItem';
import { formEnhance } from 'seasoning';
import { TFormEnhance, TFormItemPropsEnhance } from 'seasoning/es/form-enhance';

const { useFormEnhance, formItemEnhance } = formEnhance;

// ------------------------ 类型增强 ------------------------ //

type TForm = TFormEnhance<FormInstance>;

type TFormItemProps = TFormItemPropsEnhance<FormItemProps>;

// ------------------------ 类型增强 ------------------------ //

// ------------------------ 表单增强 ------------------------ //

const useForm = useFormEnhance<TForm>(Form.useForm);

const FormItem = formItemEnhance<TFormItemProps>(Form.Item, () => <Input />);

// ------------------------ 表单增强 ------------------------ //

export default () => {
  const { form, submit } = useForm();

  return (
    <Form form={form} onFinish={console.log}>
      <FormItem name="username" label="username" placeholder required />
      <FormItem name="password" label="password" placeholder required />
      <Button onClick={submit}>提交</Button>
    </Form>
  );
};
```

## 方法列表

一般情况下 Typescript 代码提示完全可以明白使用方法。如有不明的情况请跳转[函数定义](https://github.com/dyb881/seasoning/blob/master/src/form-enhance/index.ts)

| Function        | Description   |
| --------------- | ------------- |
| useFormEnhance  | useForm 增强  |
| formItemEnhance | FormItem 增强 |
