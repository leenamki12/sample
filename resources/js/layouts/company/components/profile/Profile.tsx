import { Fragment, ReactNode, useState, FormEventHandler } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { router, useForm, usePage } from '@inertiajs/react';

import ApplicationLogo from '@/components/inertia/ApplicationLogo';
import { TextInput, PrimaryButton, CancelButton } from '@/components/ui';
import { PageProps } from '@/types';
import { ReactComponent as EmailIcon } from '@assets/common/icon_login_email.svg';
import { ReactComponent as PasswordIcon } from '@assets/common/icon_login_password.svg';

import * as S from './Profile.styled';

type FormProps = 'email' | 'password' | 'remember';

type Props = {
    children: ReactNode;
};

function Profile({ children }: Props) {
    const { props } = usePage<PageProps>();
    const user = props.auth.user;

    const handleLogout = () => {
        router.post(route('logout'), {}, { replace: true });
    };

    const [loginModalShow, setLoginModalShow] = useState(false);

    const handleProfile = () => {
        if (user.auth_company) {
            setLoginModalShow(true);
        } else {
            router.visit('/profile');
        }
    };

    const { data, setData, setError, errors, clearErrors } = useForm({
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
        router.post(
            route('login'),
            {
                email: data.email,
                password: data.password,
                remember: data.remember,
            },
            {
                replace: true,
                onSuccess: () => {
                    setLoginModalShow(false);
                    router.visit('/profile');
                },
                onError: error => {
                    if (error.email) {
                        setError('email', error.email);
                    }
                    if (error.password) {
                        setError('password', error.password);
                    }
                },
            }
        );
    };

    return (
        <>
            <Popover className="absolute right-[20px] top-1/2 z-10 -translate-y-1/2">
                <S.Button>{children}</S.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <S.Panel>
                        <S.PanelInner>
                            <S.LinkButton type="button" onClick={handleProfile}>
                                프로필
                            </S.LinkButton>
                            <S.LinkButton type="button" onClick={handleLogout}>
                                로그아웃
                            </S.LinkButton>
                        </S.PanelInner>
                    </S.Panel>
                </Transition>
            </Popover>
            {loginModalShow && (
                <S.ModalWrap>
                    <S.ModalForm onSubmit={submit}>
                        <S.ImageBox>
                            <ApplicationLogo width="w-[94px]" />
                        </S.ImageBox>
                        <S.LogoInfoText>회사 관리자 계정으로 로그인 해주세요.</S.LogoInfoText>
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
                        <S.ButtonBox>
                            <PrimaryButton type="submit" label="로그인" />
                            <CancelButton label="취소" onClick={() => setLoginModalShow(false)} />
                        </S.ButtonBox>
                    </S.ModalForm>
                </S.ModalWrap>
            )}
        </>
    );
}

export default Profile;
