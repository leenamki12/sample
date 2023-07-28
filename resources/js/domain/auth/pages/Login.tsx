import { useEffect, FormEventHandler, useMemo } from 'react';

import { Head, router, useForm } from '@inertiajs/react';

import ApplicationLogo from '@/components/inertia/ApplicationLogo';
import { Checkbox, PrimaryButton, TextButton, TextInput } from '@/components/ui';
import GuestLayout from '@/layouts/GuestLayout';
import { ReactComponent as EmailIcon } from '@assets/common/icon_login_email.svg';
import { ReactComponent as PasswordIcon } from '@assets/common/icon_login_password.svg';

import * as S from './styles/Login.styled';
import { UserType } from '../types/enums';

type FormProps = 'email' | 'password' | 'remember';

type Props = {
    status?: string;
    canResetPassword: boolean;
    requestPath?: 'hospital' | 'company' | 'admin';
};

export default function Login({ requestPath }: Props) {
    const { setData, post, reset, errors, clearErrors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const userType = useMemo(() => {
        return requestPath
            ? `${UserType[requestPath]} ${requestPath !== 'admin' ? '사용자' : ''}`
            : '';
    }, [requestPath]);

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

        post(route('login'));
    };

    const handleClickRouteLink = (link: string) => {
        router.visit(route(link));
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
                    <S.ButtonBox>
                        <PrimaryButton type="submit" label={`${userType} 로그인`} />
                    </S.ButtonBox>
                    {requestPath !== 'admin' && (
                        <S.ButtonGroup>
                            <TextButton
                                label="아이디 찾기"
                                color="#888"
                                onClick={() => handleClickRouteLink('password.request')}
                            />
                            <S.VeticalDivider />
                            <TextButton label="비밀번호 찾기" color="#888" />
                            {requestPath === 'company' && (
                                <>
                                    <S.VeticalDivider />
                                    <TextButton
                                        label={`${userType} 회원가입`}
                                        color="#888"
                                        onClick={() => handleClickRouteLink('register')}
                                    />
                                </>
                            )}
                        </S.ButtonGroup>
                    )}
                </S.Wrapper>
            </form>
        </GuestLayout>
    );
}
