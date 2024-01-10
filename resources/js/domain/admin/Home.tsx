import { useEffect, FormEventHandler } from 'react';

import { useForm } from '@inertiajs/react';

import { Button, Checkbox, TextInput } from '@/components/ui';
import { ReactComponent as EmailIcon } from '@assets/common/icon_login_email.svg';
import { ReactComponent as PasswordIcon } from '@assets/common/icon_login_password.svg';

import * as S from './Home.styled';

type FormProps = 'identification' | 'password' | 'remember';

function Home() {
    const { setData, post, reset, errors, clearErrors } = useForm({
        identification: '',
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
        <S.Form onSubmit={submit}>
            <S.InputList>
                <TextInput
                    type="text"
                    id="identification"
                    placeholder="아이디"
                    isFocused
                    onChange={handleChangeInputData}
                    icon={EmailIcon}
                    error={errors.identification}
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
                <Checkbox
                    label="아이디 저장"
                    onChange={e => setData('remember', e.target.checked)}
                />
            </S.CheckboxWrapper>
            <S.ButtonBox>
                <Button element="primary" type="submit" label="로그인" />
            </S.ButtonBox>
        </S.Form>
    );
}

export default Home;
