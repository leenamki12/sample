import { useEffect, FormEventHandler, useRef } from 'react';

import { Head, useForm } from '@inertiajs/react';

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
    phone_auth: string;
};

type FormKey = 'email' | 'password' | 'password_confirmation' | 'phone' | 'phone_auth';

export default function Register() {
    const { data, setData, reset, errors, post } = useForm<FormProps>({
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        phone_auth: '',
    });

    //const [smsCode, setSmsCode] = useState('');
    const smsInputRef = useRef<HTMLInputElement>(null);

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

    const onSendSms = () => {
        const min = 100000; // 6자리 숫자의 최소값
        const max = 999999; // 6자리 숫자의 최대값
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const verifyData = {
            code: `${randomNumber}`,
            phone: data.phone,
        };
        post('/verify-sms', {
            data: verifyData,
            replace: false,
            onSuccess: e => {
                console.log(e);
            },
        });

        smsInputRef.current?.focus();
    };

    // const onVerifySms = () => {
    //     console.log(data.phone_auth, smsCode);
    //     if (data.phone_auth !== smsCode) {
    //         setError('phone_auth', '인증번호를 다시 입력해주세요.');
    //     }
    // };

    // useEffect(() => {
    //     smsInputRef.current?.focus();
    // }, [smsCode]);

    useEffect(() => {
        console.log(errors);
    }, [errors]);

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
                                error={errors.phone}
                            />
                            <SecondaryButton
                                label="인증번호발송"
                                onClick={onSendSms}
                                disabled={!data.phone}
                            />
                        </S.InputButtonBox>
                        {/* {smsCode && (
                            <S.InputButtonBox>
                                <TextInput
                                    ref={smsInputRef}
                                    type="tel"
                                    id="phone_auth"
                                    placeholder="인증번호를 입력해 주세요."
                                    onChange={handleChangeInputData}
                                    error={errors.phone_auth}
                                />
                                <PrimaryButton
                                    label="인증번호 확인"
                                    onClick={onVerifySms}
                                    disabled={!data.phone_auth}
                                />
                            </S.InputButtonBox>
                        )} */}
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
