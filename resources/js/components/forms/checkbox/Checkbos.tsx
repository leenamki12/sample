import { Checkbox, Form, InputProps, Switch } from 'antd';

type FormCheckboxProps<T> = {
    name: keyof T;
    valuePropName?: string;
    disabled?: boolean;
    onValueChange: (name: keyof T, value: string | boolean) => void;
};

export function FormCheckbox<T = any>({
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
export function FormSwitch<T = any>({
    name,
    valuePropName,
    onValueChange,
    label,
}: FormCheckboxProps<T> & { label?: string }) {
    return (
        <Form.Item label={label} name={name as string} valuePropName={valuePropName}>
            <Switch onChange={checked => onValueChange(name, checked)} />
        </Form.Item>
    );
}
