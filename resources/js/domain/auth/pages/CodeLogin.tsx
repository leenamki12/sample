import { useEffect, FormEventHandler } from 'react';

import { useForm } from '@inertiajs/react';

import { PrimaryButton, TextInput } from '@/components/ui';
import { ReactComponent as CodeIcon } from '@assets/common/icon_login_code.svg';

import * as S from './styles/Login.styled';

type FormProps = 'auth_code';

export default function CodeLogin() {
    const { setData, post, reset, errors, clearErrors } = useForm({
        auth_code: '',
    });

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as FormProps, value);
        clearErrors(id as FormProps);
    };

    const submit: FormEventHandler = e => {
        e.preventDefault();
        post(route('code-login'), { replace: true });
    };

    useEffect(() => {
        return () => {
            reset('auth_code');
        };
    }, []);

    return (
        <form onSubmit={submit}>
            <S.InputList>
                <TextInput
                    type="number"
                    id="auth_code"
                    placeholder="기업코드를 입력해주세요."
                    isFocused
                    onChange={handleChangeInputData}
                    icon={CodeIcon}
                    error={errors.auth_code}
                />
            </S.InputList>
            <S.ButtonBox>
                <PrimaryButton type="submit" label="로그인" />
            </S.ButtonBox>
        </form>
    );
}
