import { useEffect, FormEventHandler } from 'react';

import { useForm } from '@inertiajs/react';

import { Button, TextInput } from '@/components/ui';
import { ReactComponent as CodeIcon } from '@assets/common/icon_login_code.svg';

import * as S from './styles/Login.styled';

type FormProps = 'authCode';

export default function CodeLogin() {
    const { setData, post, reset, errors, clearErrors } = useForm({
        authCode: '',
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
            reset('authCode');
        };
    }, []);

    return (
        <form onSubmit={submit}>
            <S.InputList>
                <TextInput
                    type="number"
                    id="authCode"
                    placeholder="기업코드를 입력해주세요."
                    isFocused
                    onChange={handleChangeInputData}
                    icon={CodeIcon}
                    error={errors.authCode}
                />
            </S.InputList>
            <S.ButtonBox>
                <Button element="primary" type="submit" label="로그인" />
            </S.ButtonBox>
        </form>
    );
}
