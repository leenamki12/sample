import { Form, FormRule, InputProps, Checkbox } from 'antd';

import * as s from './Input.styled';

type FormItemProps<T> = {
    label?: string;
    name: keyof T;
    disabled?: boolean;
    rules?: FormRule[];
    onValueChange: (name: keyof T, value: string) => void;
};

function FormInput<T = any>({
    label,
    name,
    rules,
    disabled,
    onValueChange,
    ...props
}: FormItemProps<T> & InputProps) {
    return (
        <s.Label name={name} rules={rules}>
            {label && <div>{label}</div>}
            <s.InputItem
                disabled={disabled}
                onChange={e => onValueChange(name, e.target.value)}
                {...props}
            />
        </s.Label>
    );
}

function FormPassword<T = any>({
    label,
    name,
    rules,
    disabled,
    onValueChange,
    ...props
}: FormItemProps<T> & InputProps) {
    return (
        <s.Label name={name} rules={rules}>
            {label && <div>{label}</div>}
            <s.PasswordItem
                disabled={disabled}
                onChange={e => onValueChange(name, e.target.value)}
                {...props}
            />
        </s.Label>
    );
}

type FormCheckboxProps<T> = {
    name: keyof T;
    valuePropName?: string;
    disabled?: boolean;
    onValueChange: (name: keyof T, value: string | boolean) => void;
};

function FormCheckbox<T = any>({
    name,
    valuePropName,
    disabled,
    onValueChange,
    ...props
}: FormCheckboxProps<T> & InputProps) {
    return (
        <Form.Item name={name as string} valuePropName={valuePropName}>
            <Checkbox {...props} onChange={e => onValueChange(name, e.target.checked)}>
                아이디 기억하기
            </Checkbox>
        </Form.Item>
    );
}

const Forms = Object.assign(Form, {
    Input: FormInput,
    Password: FormPassword,
    Checkbox: FormCheckbox,
});

export default Forms;
