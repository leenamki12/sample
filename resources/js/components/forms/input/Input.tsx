import { FormRule, InputProps } from 'antd';

import * as s from './Input.styled';

type Props<T> = {
    label?: string;
    name: keyof T;
    disabled?: boolean;
    rules?: FormRule[];
    onValueChange: (name: keyof T, value: string) => void;
};

export function FormInput<T = any>({
    label,
    name,
    rules,
    disabled,
    onValueChange,
    ...props
}: Props<T> & InputProps) {
    return (
        <s.Label name={name} rules={rules} label={label}>
            <s.InputItem
                disabled={disabled}
                onChange={e => onValueChange(name, e.target.value)}
                {...props}
            />
        </s.Label>
    );
}

export function FormPassword<T = any>({
    label,
    name,
    rules,
    disabled,
    onValueChange,
    ...props
}: Props<T> & InputProps) {
    return (
        <s.Label name={name} rules={rules} label={label}>
            <s.PasswordItem
                disabled={disabled}
                onChange={e => onValueChange(name, e.target.value)}
                {...props}
            />
        </s.Label>
    );
}
