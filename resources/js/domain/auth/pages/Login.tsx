import { useEffect, FormEventHandler } from 'react';

import { useForm } from '@inertiajs/react';

import { Button, Checkbox, TextInput } from '@/components/ui';
import { ReactComponent as EmailIcon } from '@assets/common/icon_login_email.svg';
import { ReactComponent as PasswordIcon } from '@assets/common/icon_login_password.svg';

import * as S from './styles/Login.styled';

type FormProps = 'email' | 'password' | 'remember';

export default function Login() {
    const { setData, post, reset, errors, clearErrors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as FormProps, value);
        clearErrors(id as FormProps);
    };

    const submit: FormEventHandler = e => {
        e.preventDefault();

        post(route('login'), { replace: true });
    };

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    return (
        <form onSubmit={submit}>
            <S.InputList>
                <TextInput
                    type="email"
                    id="email"
                    placeholder="이메일"
                    isFocused
                    onChange={handleChangeInputData}
                    icon={EmailIcon}
                    error={errors.email}
                />
                <TextInput
                    type="password"
                    id="password"
                    placeholder="비밀번호"
                    onChange={handleChangeInputData}
                    icon={PasswordIcon}
                    error={errors.password}
                />
            </S.InputList>
            <S.CheckboxWrapper>
                <Checkbox label="아이디 저장" />
            </S.CheckboxWrapper>
            <S.ButtonBox>
                <Button element="primary" type="submit" label="로그인" />
            </S.ButtonBox>
        </form>
    );
}
