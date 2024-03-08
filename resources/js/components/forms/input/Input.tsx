import { Form, FormRule, InputProps } from 'antd';

import * as s from './Input.styled';

type FormItemProps = {
    label?: string;
    name: string;
    disabled?: boolean;
    rules?: FormRule[];
};

function Input({ label, name, rules, disabled, ...props }: FormItemProps & InputProps) {
    return (
        <s.Label name={name} rules={rules}>
            {label && <div>{label}</div>}
            <s.InputItem disabled={disabled} {...props} />
        </s.Label>
    );
}

function Password({ label, name, rules, disabled, ...props }: FormItemProps & InputProps) {
    return (
        <s.Label name={name} rules={rules}>
            {label && <div>{label}</div>}
            <s.PasswordItem disabled={disabled} {...props} />
        </s.Label>
    );
}

const Forms = Object.assign(Form, {
    Input: Input,
    Password: Password,
});

export default Forms;
