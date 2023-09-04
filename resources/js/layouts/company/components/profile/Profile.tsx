import { Fragment, ReactNode, useState, FormEventHandler } from 'react';

import { Popover, Transition } from '@headlessui/react';
import { router, useForm, usePage } from '@inertiajs/react';

import { Checkbox, TextInput, PrimaryButton } from '@/components/ui';
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

    const { setData, post, errors, clearErrors } = useForm({
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
        setLoginModalShow(false);
        router.post(
            route('logout'),
            {},
            {
                replace: true,
                onFinish: () => {
                    post(route('login'), { replace: true });
                },
            }
        );
    };

    return (
        <>
            <Popover className="relative">
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
                    <Popover.Panel className="absolute left-1/2 z-10 mt-[10px] flex w-screen max-w-min -translate-x-1/2 px-4">
                        <div className="w-32 shrink rounded bg-white p-2 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                            <S.LinkButton type="button" onClick={handleProfile}>
                                프로필
                            </S.LinkButton>
                            <S.LinkButton type="button" onClick={handleLogout}>
                                로그아웃
                            </S.LinkButton>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
            {loginModalShow && (
                <div className="fixed left-0 top-0 z-50 h-full w-full bg-black/60">
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
                            <PrimaryButton type="submit" label="로그인" />
                        </S.ButtonBox>
                    </form>
                </div>
            )}
        </>
    );
}

export default Profile;
