import { FormEventHandler, useEffect, useRef, useState } from 'react';

import { Dialog } from '@headlessui/react';
import { router, useForm, usePage } from '@inertiajs/react';
import dayjs from 'dayjs';

import {
    BasicModal,
    Button,
    InnerPrivacyModal,
    InputRefProps,
    LabelTextInput,
    PrivacyCheckItem,
    TextInput,
} from '@/components/ui';
import { UserVerifys } from '@/domain/auth/types/register';
import { PageProps } from '@/types';

import * as S from './ReservationForm.styled';

type Props = {
    onCloseModal: (open: boolean) => void;
};

type FormProps = {
    hospitalId: number;
    reservationDate: string;
    companyName: string;
    name: string;
    phone: string;
    phoneAuth: string;
};

type FormKey = 'hospitalId' | 'reservationDate' | 'companyName' | 'name' | 'phone' | 'phoneAuth';

function ReservationForm({ onCloseModal }: Props) {
    const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);
    const [isPrivacyChecked, setIsPrivacyChecked] = useState<boolean>(false);
    const [privacyCheckedError, setPrivacyCheckedError] = useState<string>('');

    const { id, auth } = usePage<PageProps>().props;
    const hospitalId = Number(id);

    const [verifyCodeNumber, setVerifyCodeNumber] = useState(''); //인증번호
    const [isVerifySuccess, setIsVerifySuccess] = useState(false); //인증번호 확인 여부
    const [verifyCodeTime, setVerifyCodeTime] = useState(0); //인증번호 유효시간
    const [verifyButtonTime, setVerifyButtonTime] = useState(0); //재발송 쿨타임

    const codeInputRef = useRef<InputRefProps>(null);

    const { data, setData, post, setError, errors, clearErrors, hasErrors } = useForm<FormProps>({
        hospitalId,
        reservationDate: '',
        companyName: auth.user.companyName,
        name: '',
        phone: '',
        phoneAuth: '',
    });

    const onSubmit: FormEventHandler = e => {
        e.preventDefault();

        if (!isPrivacyChecked) {
            setPrivacyCheckedError('개인정보수집 및 활용동의는 필수입니다.');
            return;
        }

        post(route('reservations.store', { id: hospitalId }), {
            onSuccess: () => {
                alert('예약문의가 접수되었습니다.');
                onCloseModal(false);
            },
        });
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

    const onSendSms = () => {
        router.post(
            route('verifySms.store'),
            {
                phone: data.phone,
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

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as FormKey, value);
    };

    const handleClickCloseModal = () => {
        onCloseModal(false);
    };

    const onClosePrivacyModal = () => {
        setShowPrivacyModal(false);
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

    useEffect(() => {
        if (isPrivacyChecked) {
            setPrivacyCheckedError('');
        }
    }, [isPrivacyChecked]);

    useEffect(() => {
        if (verifyCodeNumber && codeInputRef.current) {
            codeInputRef.current.reset();
            codeInputRef.current.focus();
        }
    }, [verifyCodeNumber]);

    return (
        <S.ModalWrapper>
            <div className="px-4">
                <Dialog.Title className="text-center text-[20px] font-bold leading-8 text-[#111]">
                    온라인 예약문의
                </Dialog.Title>
            </div>
            <S.ContentsBox>
                <S.Form onSubmit={onSubmit}>
                    <div>
                        <LabelTextInput
                            label="예약 희망 일자"
                            type="date"
                            id="reservationDate"
                            isRequired
                            value={data.reservationDate}
                            onChange={handleChangeInputData}
                            error={errors.reservationDate}
                            min={dayjs().add(5, 'day').format('YYYY-MM-DD')}
                        />
                    </div>
                    <div>
                        <LabelTextInput
                            label="기업명"
                            type="text"
                            id="companyName"
                            isRequired
                            value={auth.user.companyName}
                            onChange={handleChangeInputData}
                            error={errors.companyName}
                            readOnly
                        />
                    </div>
                    <div>
                        <LabelTextInput
                            label="고객명"
                            type="text"
                            id="name"
                            placeholder="고객명을 입력해주세요."
                            isRequired
                            value={data.name}
                            onChange={handleChangeInputData}
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
                    <S.Warning>
                        ※ 예약 신청 후, 병원 및 예약센터에서 확인 후 순차적으로 연락을 드립니다.
                    </S.Warning>
                    <div>
                        <PrivacyCheckItem
                            id="privacy"
                            onClick={() => setShowPrivacyModal(true)}
                            onChange={() => setIsPrivacyChecked(!isPrivacyChecked)}
                            checked={isPrivacyChecked}
                            error={privacyCheckedError}
                            label="개인정보수집 및 활용동의 (필수)"
                        />
                        <BasicModal
                            show={showPrivacyModal}
                            onClose={onClosePrivacyModal}
                            maxWidth="md"
                        >
                            <InnerPrivacyModal
                                title="개인정보수집 및 활용동의 안내"
                                onClose={onClosePrivacyModal}
                            >
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용 개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용 개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                                <br />
                                개인정보수집 및 활용동의 내용내용
                            </InnerPrivacyModal>
                        </BasicModal>
                    </div>
                    <div className="flex space-x-[10px]">
                        <Button
                            className="!text-lg"
                            onClick={handleClickCloseModal}
                            label="취소"
                            element="cancel"
                        ></Button>
                        <Button
                            element="primary"
                            label="문의하기"
                            className="!text-lg"
                            type="submit"
                        />
                    </div>
                </S.Form>
            </S.ContentsBox>
        </S.ModalWrapper>
    );
}

export default ReservationForm;
