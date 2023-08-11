import { useEffect, FormEventHandler } from 'react';

import { Head, useForm } from '@inertiajs/react';
import axios from 'axios';

import {
    LabelTextInput,
    TextInput,
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
    LabelFileInput,
} from '@/components/ui';
import Header from '@/layouts/Header';

import * as S from './styles/Register.styled';
import { PrivacyCheckItem } from '../components';

type FormProps = {
    email: string;
    password: string;
    password_confirmation: string;
    phone: string;
};

type FormKey = 'email' | 'password' | 'password_confirmation' | 'phone';

export default function Register() {
    const { data, setData, reset } = useForm<FormProps>({
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as FormKey, value);
    };

    const submit: FormEventHandler = e => {
        e.preventDefault();

        console.log(data);
        // post(route('register'));
    };

    const onSubmitVerifySms = () => {
        axios
            .post('/verify-sms', {
                phone: data.phone,
            })
            .then(response => {
                // Handle the response data
                console.log(response.data);
            })
            .catch(error => {
                // Handle errors if needed
                console.error(error);
            });
    };

    return (
        <S.Wrapper>
            <Header label="회원가입" maxWidth="435px" />
            <Head title="Register" />
            <S.InnerWrapper>
                <S.Form onSubmit={submit}>
                    <div>
                        <LabelTextInput
                            type="email"
                            id="email"
                            placeholder="이메일 ('@' 이후까지 입력해 주세요.)"
                            isFocused
                            label="이메일"
                            isRequired
                            onChange={handleChangeInputData}
                        />
                    </div>
                    <div>
                        <LabelTextInput
                            type="password"
                            id="password"
                            placeholder="비밀번호를 입력해주세요."
                            label="비밀번호"
                            isRequired
                            onChange={handleChangeInputData}
                        />
                    </div>
                    <div>
                        <LabelTextInput
                            type="password"
                            id="password_confirmation"
                            placeholder="비밀번호를 다시 입력해주세요."
                            label="비밀번호 확인"
                            isRequired
                            onChange={handleChangeInputData}
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
                                onChange={handleChangeInputData}
                            />
                            <SecondaryButton
                                label="인증번호발송"
                                onClick={onSubmitVerifySms}
                                disabled={!data.phone}
                            />
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
                    <div>
                        <LabelTextInput
                            type="number"
                            id="employees"
                            placeholder="임직원수를 입력해주세요."
                            label="임직원수"
                            isRequired
                        />
                    </div>
                    <S.RowBox>
                        <S.InputButtonBox>
                            <LabelTextInput
                                type="text"
                                id="address"
                                placeholder="도로명 주소"
                                label="주소"
                                isRequired
                                readOnly
                            />
                            <TertiaryButton label="주소검색" />
                        </S.InputButtonBox>
                        <S.InputAddressBox>
                            <TextInput
                                type="text"
                                id="postal_code"
                                placeholder="우편번호"
                                readOnly
                            />
                            <TextInput
                                type="text"
                                id="address_detail"
                                placeholder="상세주소를 입력해 주세요."
                            />
                        </S.InputAddressBox>
                    </S.RowBox>
                    <div>
                        <LabelFileInput
                            label="사업자등록증"
                            placeholder="사업자등록증을 첨부해 주세요."
                            isRequired
                        />
                    </div>
                    <S.Divider />
                    <S.PrivacyList>
                        <PrivacyCheckItem id="agreement">이용약관 동의(필수)</PrivacyCheckItem>
                        <PrivacyCheckItem id="privacy">
                            개인정보 수집 및 이용 동의(필수)
                        </PrivacyCheckItem>
                        <PrivacyCheckItem id="marketing">마케팅 활용동의(선택)</PrivacyCheckItem>
                    </S.PrivacyList>
                    <div className="pt-[10px]">
                        <PrimaryButton type="submit" label="가입신청하기" />
                    </div>
                </S.Form>
            </S.InnerWrapper>
        </S.Wrapper>
    );
}
