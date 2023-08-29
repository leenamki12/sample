import { useState } from 'react';

import { BorderButton, PrimaryButton, SlideModal } from '@/components/ui';

import ReservationForm from '../reservation-form/ReservationForm';

import * as S from './DetailSticky.styled';

function DetailSticky({ userName, id }: { userName: string; id: number }) {
    const [open, setOpen] = useState<boolean>(false);

    const openModal = () => {
        setOpen(true);
    };

    return (
        <S.Wrapper>
            <S.Box>
                <BorderButton
                    label="예약문의"
                    onClick={openModal}
                    className="!h-[50px] !text-lg"
                ></BorderButton>
                <PrimaryButton
                    label="전화상담"
                    className="!h-[50px] !w-1/2 !text-lg"
                    onClick={() => (window.location.href = 'tel:1866-4575')}
                ></PrimaryButton>
            </S.Box>
            <SlideModal show={open} onClose={setOpen} maxWidth="435px" closeable={false}>
                <ReservationForm setOpen={setOpen} hospitalId={id} userName={userName} />
            </SlideModal>
        </S.Wrapper>
    );
}

export default DetailSticky;
