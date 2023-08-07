import { useEffect, FormEventHandler } from 'react';

import { Head, useForm } from '@inertiajs/react';

import { LabelTextInput, TextInput, PrimaryButton, SecondaryButton } from '@/components/ui';
import Header from '@/layouts/Header';

import * as S from './styles/Register.styled';

type Props = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    file: File | null;
};

export default function Register() {
    const { data, reset } = useForm<Props>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        file: null,
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = e => {
        e.preventDefault();

        console.log(data);
        // post(route('register'));
    };

    return (
        <S.Wrapper>
            <Header label="회원가입" maxWidth="435px" />
            <Head title="Register" />
            <S.InnerWrapper>
                <S.Form onSubmit={submit}>
                    <div>
                        <LabelTextInput
                            type="text"
                            id="identifier"
                            placeholder="아이디를 입력해주세요."
                            isFocused
                            label="아이디"
                            isRequired
                        />
                    </div>
                    <div>
                        <LabelTextInput
                            type="password"
                            id="password"
                            placeholder="비밀번호를 입력해주세요."
                            label="비밀번호"
                            isRequired
                        />
                    </div>
                    <div>
                        <LabelTextInput
                            type="password"
                            id="password_confirmation"
                            placeholder="비밀번호를 다시 입력해주세요."
                            label="비밀번호 확인"
                            isRequired
                        />
                    </div>
                    <S.RowBox>
                        <S.InputButtonBox>
                            <LabelTextInput
                                type="tel"
                                id="phone"
                                placeholder="(-) 제외한 숫자만 입력해주세요."
                                label="휴대폰번호"
                                isRequired
                            />
                            <SecondaryButton label="인증번호발송" disabled />
                        </S.InputButtonBox>
                        <S.InputButtonBox>
                            <TextInput
                                type="tel"
                                id="phone_auth"
                                placeholder="인증번호를 입력해 주세요."
                            />
                            <PrimaryButton label="인증번호 확인" disabled />
                        </S.InputButtonBox>
                    </S.RowBox>
                </S.Form>
            </S.InnerWrapper>
        </S.Wrapper>
    );
}
