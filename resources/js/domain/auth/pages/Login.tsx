import { useEffect, FormEventHandler } from 'react';

import { Head, useForm } from '@inertiajs/react';

import ApplicationLogo from '@/components/inertia/ApplicationLogo';
import { TextInput } from '@/components/ui';
import GuestLayout from '@/layouts/GuestLayout';

import * as S from './styles/Login.styled';

type Props = {
    status?: string;
    canResetPassword: boolean;
    requestPath?: 'hospital' | 'company' | 'admin';
};

export default function Login({ requestPath }: Props) {
    console.log(requestPath, 'requestPath');

    const { data, setData, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = e => {
        e.preventDefault();

        console.log(data);

        //post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="로그인" />
            <form onSubmit={submit}>
                <S.Wrapper className="w-[375px]">
                    <div className="mb-[30px]">
                        <ApplicationLogo width="w-[104px]" />
                    </div>
                    <S.InputList>
                        <TextInput
                            type="email"
                            name="email"
                            placeholder="이메일"
                            isFocused
                            onChange={setData}
                        />
                        <TextInput
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                            onChange={setData}
                        />
                    </S.InputList>
                </S.Wrapper>
                <button type="submit">로그인</button>
            </form>
        </GuestLayout>
    );
}
