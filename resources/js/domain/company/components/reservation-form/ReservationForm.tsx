import { FormEventHandler, useEffect, useState } from 'react';

import { Dialog } from '@headlessui/react';
import { useForm, usePage } from '@inertiajs/react';
import dayjs from 'dayjs';

import {
    BasicModal,
    Button,
    InnerPrivacyModal,
    LabelTextInput,
    PrivacyCheckItem,
} from '@/components/ui';
import { PageProps } from '@/types';

import * as S from './ReservationForm.styled';

type Props = {
    onCloseModal: (open: boolean) => void;
};

type FormProps = {
    hospital_id: number;
    reservation_date: string;
    company_name: string;
    name: string;
    phone: string;
};

type FormKey = 'hospital_id' | 'reservation_date' | 'company_name' | 'name' | 'phone';

function ReservationForm({ onCloseModal }: Props) {
    const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);
    const [isPrivacyChecked, setIsPrivacyChecked] = useState<boolean>(false);
    const [privacyCheckedError, setPrivacyCheckedError] = useState<string>('');

    const { id, auth } = usePage<PageProps>().props;
    const hospitalId = Number(id);

    const { data, setData, post, errors } = useForm<FormProps>({
        hospital_id: hospitalId,
        reservation_date: '',
        company_name: '',
        name: '',
        phone: '',
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
            onError: error => console.log(error),
        });
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

    useEffect(() => {
        if (isPrivacyChecked) {
            setPrivacyCheckedError('');
        }
    }, [isPrivacyChecked]);

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
                            id="reservation_date"
                            isRequired
                            value={data.reservation_date}
                            onChange={handleChangeInputData}
                            error={errors.reservation_date}
                            min={dayjs().add(5, 'day').format('YYYY-MM-DD')}
                        />
                    </div>
                    <div>
                        <LabelTextInput
                            label="기업명"
                            type="text"
                            id="company_name"
                            isRequired
                            value={auth.user.companyName}
                            onChange={handleChangeInputData}
                            error={errors.company_name}
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
                    <div>
                        <LabelTextInput
                            label="연락처"
                            type="tel"
                            id="phone"
                            placeholder="(-) 제외한 숫자만 입력해주세요."
                            isRequired
                            value={data.phone}
                            onChange={handleChangeInputData}
                            error={errors.phone}
                        />
                    </div>
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
