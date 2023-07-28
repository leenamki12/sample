import { useEffect, FormEventHandler } from 'react';

import { Head, useForm } from '@inertiajs/react';

import ApplicationLogo from '@/components/inertia/ApplicationLogo';
import { Checkbox, TextInput } from '@/components/ui';
import GuestLayout from '@/layouts/GuestLayout';
import { ReactComponent as EmailIcon } from '@assets/common/icon_login_email.svg';
import { ReactComponent as PasswordIcon } from '@assets/common/icon_login_password.svg';

import * as S from './styles/Login.styled';

type FormProps = 'email' | 'password' | 'remember';

// type Props = {
//     status?: string;
//     canResetPassword: boolean;
//     //requestPath?: 'hospital' | 'company' | 'admin';
// };

export default function Login() {
    const { setData, post, reset, errors, clearErrors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as FormProps, value);
        clearErrors(id as FormProps);
    };

    const submit: FormEventHandler = e => {
        e.preventDefault();

        console.log(errors);

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="로그인" />
            <form onSubmit={submit}>
                <S.Wrapper className="w-[375px]">
                    <S.ImageBox>
                        <ApplicationLogo width="w-[104px]" />
                    </S.ImageBox>
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
                </S.Wrapper>
                <button type="submit">로그인</button>
            </form>
        </GuestLayout>
    );
}
