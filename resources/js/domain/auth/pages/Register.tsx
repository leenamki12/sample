import { useEffect, FormEventHandler, useRef, useState } from 'react';
import { Address } from 'react-daum-postcode';

import { useForm, router } from '@inertiajs/react';

import {
    LabelTextInput,
    TextInput,
    LabelFileInput,
    InputRefProps,
    Button,
    AddressModal,
    PrivacyCheckItem,
    PageHeader,
} from '@/components/ui';

import * as S from './styles/Register.styled';
import { UserVerifys } from '../types/register';

type FormProps = {
    email: string;
    password: string;
    password_confirmation: string;
    name: string;
    phone: string;
    phoneAuth: string;
    companiesName: string;
    employees: number | null;
    address: string;
    postalCode: string;
    addressDetail: string;
    businessLicense: File | null;
    marketingConsent: boolean;
};

type FormKey =
    | 'email'
    | 'password'
    | 'password_confirmation'
    | 'name'
    | 'phone'
    | 'phoneAuth'
    | 'companiesName'
    | 'employees'
    | 'address'
    | 'postalCode'
    | 'addressDetail'
    | 'businessLicense'
    | 'marketingConsent';

export default function Register() {
    const { data, setData, reset, errors, setError, post, clearErrors, hasErrors } =
        useForm<FormProps>({
            email: '',
            password: '',
            password_confirmation: '',
            name: '',
            phone: '',
            phoneAuth: '',
            companiesName: '',
            employees: null,
            address: '',
            postalCode: '',
            addressDetail: '',
            businessLicense: null,
            marketingConsent: false,
        });

    const [verifyCodeNumber, setVerifyCodeNumber] = useState(''); //인증번호
    const [isVerifySuccess, setIsVerifySuccess] = useState(false); //인증번호 확인 여부
    const [verifyCodeTime, setVerifyCodeTime] = useState(0); //인증번호 유효시간
    const [verifyButtonTime, setVerifyButtonTime] = useState(0); //재발송 쿨타임
    const [isEmailVaild, setIsEmailVaild] = useState(false);

    const [isAgreementSelected, setIsAgreementSelected] = useState(false);
    const [isPrivacySelected, setIsPrivacySelected] = useState(false);

    const [addressModalShow, setAddressModalShow] = useState(false);

    const codeInputRef = useRef<InputRefProps>(null);
    const addressInputRef = useRef<InputRefProps>(null);
    const postalCodeInputRef = useRef<InputRefProps>(null);

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as FormKey, value);
        clearErrors(id as FormKey);

        if (id === 'email') {
            setIsEmailVaild(false);
        }
    };

    const onSubmit: FormEventHandler = e => {
        e.preventDefault();

        if (!isVerifySuccess) {
            setError('phone', '휴대폰 인증을 진행해주세요.');
            alert('휴대폰 인증을 진행해주세요.');
            return;
        }

        if (!isAgreementSelected) {
            alert('이용약관 동의를 체크해주세요.');
            return;
        }
        if (!isPrivacySelected) {
            alert('개인정보 수집 및 이용 동의를 체크해주세요.');
            return;
        }

        post(route('register'), {
            preserveState: true,
            replace: false,
        });
    };

    const onSendSms = () => {
        router.post(
            route('verifySms.store'),
            {
                phone: data.phone,
                duplicate: true,
            },
            {
                preserveState: true,
                replace: false,
                preserveScroll: true,
                onSuccess: e => {
                    const responseData = e.props.userVerifys as UserVerifys;
                    setVerifyCodeNumber(responseData.code);
                    setVerifyCodeTime(600);
                    setVerifyButtonTime(10);
                    if (hasErrors) {
                        clearErrors('phone');
                        clearErrors('phoneAuth');
                    }
                },
                onError: e => {
                    setError('phone', e.phone);
                },
            }
        );
    };

    const onVerifySms = () => {
        if (data.phoneAuth !== verifyCodeNumber) {
            setError('phoneAuth', '인증번호를 다시 입력해주세요.');
        } else {
            router.get(
                route('verifySms.check'),
                {
                    code: data.phoneAuth,
                    phone: data.phone,
                },
                {
                    preserveState: true,
                    replace: false,
                    preserveScroll: true,
                    onSuccess: response => {
                        const responseData = response.props.userVerifys as UserVerifys;
                        if (!responseData.status) {
                            return;
                        }
                        if (responseData.status === 'success') {
                            setIsVerifySuccess(true);
                        }
                        if (errors.phone) {
                            clearErrors('phone');
                        }
                        clearErrors('phoneAuth');
                    },
                    onError: error => {
                        if (error.phone) setError('phone', error.phone);
                        if (error.phone_auth) setError('phoneAuth', error.phone_auth);
                    },
                }
            );
        }
    };

    const onEmailVaild = () => {
        if (data.email === '') {
            return;
        }

        if (isEmailVaild) {
            return;
        }

        router.get(
            route('email-check'),
            {
                email: data.email,
            },
            {
                preserveState: true,
                replace: false,
                preserveScroll: true,
                onSuccess: () => {
                    setIsEmailVaild(true);
                    clearErrors('email');
                },
                onError: error => {
                    setIsEmailVaild(false);
                    if (error.email) setError('email', error.email);
                },
            }
        );
    };

    const handleFormatSeconds = (timeInSeconds: number) => {
        const seconds = timeInSeconds % 60;
        return `${seconds.toString()}초 후 재시도`;
    };

    const handleFormatMinutes = (timeInSeconds: number) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `인증시간 ${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`;
    };

    const handlePasswordConfirmed = () => {
        if (data.password_confirmation === '') {
            return;
        }

        if (data.password !== data.password_confirmation) {
            setError('password_confirmation', '패스워드가 틀립니다.');
        } else {
            clearErrors('password_confirmation');
        }
    };

    function handleAddressComplete(responseAddress: Address) {
        addressInputRef.current?.setValue(responseAddress.address);
        postalCodeInputRef.current?.setValue(responseAddress.zonecode);
        setData({
            ...data,
            ...{ postalCode: responseAddress.zonecode, address: responseAddress.address },
        });
        setAddressModalShow(false);

        if (errors.address) {
            clearErrors('address');
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setVerifyCodeTime(prevTime => Math.max(prevTime - 1, 0));
            setVerifyButtonTime(prevTime => Math.max(prevTime - 1, 0));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [verifyCodeTime, verifyButtonTime]);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    useEffect(() => {
        if (verifyCodeNumber && codeInputRef.current) {
            codeInputRef.current.reset();
            codeInputRef.current.focus();
        }
    }, [verifyCodeNumber]);

    return (
        <>
            <S.Wrapper>
                <PageHeader title="회원가입" />
                <S.InnerWrapper>
                    <S.Form onSubmit={onSubmit}>
                        <div>
                            <LabelTextInput
                                type="email"
                                id="email"
                                placeholder="이메일 ('@' 이후까지 입력해 주세요.)"
                                isFocused
                                label="이메일"
                                isRequired
                                error={errors.email}
                                onChange={handleChangeInputData}
                                onBlur={onEmailVaild}
                            />
                        </div>
                        <div>
                            <LabelTextInput
                                type="password"
                                id="password"
                                placeholder="영문, 숫자, 특수문자 포함 8자리 이상"
                                label="비밀번호"
                                isRequired
                                error={errors.password}
                                onChange={handleChangeInputData}
                                onBlur={handlePasswordConfirmed}
                            />
                        </div>
                        <div>
                            <LabelTextInput
                                type="password"
                                id="password_confirmation"
                                placeholder="비밀번호를 다시 입력해주세요."
                                label="비밀번호 확인"
                                isRequired
                                error={errors.password_confirmation}
                                onChange={handleChangeInputData}
                                onBlur={handlePasswordConfirmed}
                            />
                        </div>
                        <div>
                            <LabelTextInput
                                type="text"
                                id="name"
                                placeholder="이름을 입력해주세요."
                                onChange={handleChangeInputData}
                                label="이름"
                                isRequired
                                error={errors.name}
                            />
                        </div>
                        <S.RowBox>
                            <S.InputButtonBox isLabel>
                                <LabelTextInput
                                    type="tel"
                                    id="phone"
                                    placeholder="(-) 제외한 숫자만 입력해주세요."
                                    label="휴대폰번호"
                                    isRequired
                                    onChange={handleChangeInputData}
                                    error={errors.phone}
                                    readOnly={isVerifySuccess}
                                />
                                <Button
                                    label={
                                        isVerifySuccess
                                            ? '인증완료'
                                            : verifyCodeNumber
                                            ? verifyButtonTime !== 0
                                                ? handleFormatSeconds(verifyButtonTime)
                                                : '재발송'
                                            : '인증번호발송'
                                    }
                                    onClick={onSendSms}
                                    disabled={
                                        !data.phone ||
                                        isVerifySuccess ||
                                        (!isVerifySuccess && verifyButtonTime !== 0)
                                    }
                                    element="secondary"
                                />
                            </S.InputButtonBox>
                            {verifyCodeNumber && (
                                <S.CodeInputBox>
                                    {isVerifySuccess ? (
                                        <S.SuccessText>인증이 완료되었습니다.</S.SuccessText>
                                    ) : (
                                        <>
                                            <S.InputButtonBox>
                                                <TextInput
                                                    ref={codeInputRef}
                                                    type="number"
                                                    id="phoneAuth"
                                                    placeholder="인증번호 6자리를 입력해 주세요."
                                                    onChange={handleChangeInputData}
                                                    error={errors.phoneAuth}
                                                />
                                                <Button
                                                    element="primary"
                                                    label="인증번호 확인"
                                                    onClick={onVerifySms}
                                                    disabled={!data.phoneAuth}
                                                />
                                            </S.InputButtonBox>
                                            <div className="code_time">
                                                {handleFormatMinutes(verifyCodeTime)}
                                            </div>
                                        </>
                                    )}
                                </S.CodeInputBox>
                            )}
                        </S.RowBox>
                        <div>
                            <LabelTextInput
                                type="text"
                                id="companiesName"
                                placeholder="기업명을 입력해주세요."
                                label="기업명"
                                onChange={handleChangeInputData}
                                isRequired
                                error={errors.companiesName}
                            />
                        </div>
                        <div>
                            <LabelTextInput
                                type="number"
                                id="employees"
                                placeholder="임직원수를 입력해주세요."
                                label="임직원수"
                                onChange={handleChangeInputData}
                                isRequired
                                error={errors.employees}
                            />
                        </div>
                        <S.RowBox isError={!!errors.address}>
                            <S.InputButtonBox isLabel>
                                <LabelTextInput
                                    ref={addressInputRef}
                                    type="text"
                                    id="address"
                                    placeholder="도로명 주소"
                                    label="주소"
                                    isRequired
                                    readOnly
                                />
                                <Button
                                    element="teriary"
                                    label="주소검색"
                                    onClick={() => setAddressModalShow(true)}
                                />
                            </S.InputButtonBox>
                            <S.InputAddressBox>
                                <TextInput
                                    type="text"
                                    id="postalCode"
                                    placeholder="우편번호"
                                    ref={postalCodeInputRef}
                                    readOnly
                                />
                                <TextInput
                                    type="text"
                                    id="addressDetail"
                                    placeholder="상세주소를 입력해 주세요."
                                    onChange={handleChangeInputData}
                                />
                            </S.InputAddressBox>

                            {errors.address && <S.Error>{errors.address}</S.Error>}
                        </S.RowBox>
                        <div>
                            <LabelFileInput
                                id="businessLicense"
                                label="사업자등록증"
                                placeholder="사업자등록증을 첨부해 주세요."
                                onChange={file => {
                                    if (errors.businessLicense) {
                                        clearErrors('businessLicense');
                                    }
                                    setData('businessLicense', file);
                                }}
                                error={errors.businessLicense}
                                isRequired
                            />
                        </div>
                        <S.Divider />
                        <S.PrivacyList>
                            <PrivacyCheckItem
                                id="agreement"
                                onChange={event => setIsAgreementSelected(event.target.checked)}
                                label="이용약관 동의(필수)"
                            />
                            <PrivacyCheckItem
                                id="privacy"
                                onChange={event => setIsPrivacySelected(event.target.checked)}
                                label="개인정보 수집 및 이용 동의(필수)"
                            />
                            <PrivacyCheckItem
                                id="marketingConsent"
                                onChange={event =>
                                    setData('marketingConsent', event.target.checked)
                                }
                                label="마케팅 활용동의(선택)"
                            />
                        </S.PrivacyList>
                        <div className="pt-[10px]">
                            <Button type="submit" label="가입신청하기" element="primary" />
                        </div>
                    </S.Form>
                </S.InnerWrapper>
            </S.Wrapper>
            {addressModalShow && (
                <AddressModal
                    onClickHistoryBack={() => setAddressModalShow(false)}
                    onComplete={handleAddressComplete}
                />
            )}
        </>
    );
}
