import { FormEventHandler } from 'react';

import { Dialog } from '@headlessui/react';
import { useForm } from '@inertiajs/react';

import { LabelTextInput, PrimaryButton } from '@/components/ui';
import BaseButton from '@/components/ui/buttons/BaseButton';

import * as S from './ReservationForm.styled';

type ModalProps = {
    setOpen: (open: boolean) => void;
    hospitalId: number;
};

type Props = {
    hospital_id: number;
    reservation_date: string;
    company_name: string;
    name: string;
    phone: string;
};

type FormKey = 'hospital_id' | 'reservation_date' | 'company_name' | 'name' | 'phone';

function Reservation({ setOpen, hospitalId }: ModalProps) {
    const { data, setData, post, errors } = useForm<Props>({
        hospital_id: hospitalId,
        reservation_date: '',
        company_name: '',
        name: '',
        phone: '',
    });

    const handleSubmit: FormEventHandler = e => {
        e.preventDefault();

        post(route('reservations.store', { id: hospitalId }), {
            onSuccess: () => alert('예약문의가 접수되었습니다.'),
            onError: error => console.log(error),
        });
    };

    const handleChangeInputData = (id: string, value: string) => {
        setData(id as FormKey, value);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <S.ModalContainer>
            <div className="px-4">
                <Dialog.Title className="text-center text-[20px] font-bold leading-8 text-[#111]">
                    온라인 예약문의
                </Dialog.Title>
            </div>
            <S.ContentsBox>
                <S.Form onSubmit={handleSubmit}>
                    <div>
                        <LabelTextInput
                            label="예약 희망 일자"
                            type="date"
                            id="reservation_date"
                            isRequired
                            value={data.reservation_date}
                            onChange={handleChangeInputData}
                            error={errors.reservation_date}
                        />
                    </div>
                    <div>
                        <LabelTextInput
                            label="기업명"
                            type="text"
                            id="company_name"
                            isRequired
                            value={data.company_name}
                            onChange={handleChangeInputData}
                            error={errors.company_name}
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
                    <div className="flex space-x-[10px]">
                        <BaseButton className="!text-lg" onClick={onClose}>
                            취소
                        </BaseButton>
                        <PrimaryButton label="문의하기" className="!text-lg" type="submit" />
                    </div>
                </S.Form>
            </S.ContentsBox>
        </S.ModalContainer>
    );
}

export default Reservation;
