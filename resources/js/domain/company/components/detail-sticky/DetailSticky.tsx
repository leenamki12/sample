import { useState } from 'react';

import { Button, SlideModal } from '@/components/ui';

import ReservationForm from '../reservation-form/ReservationForm';

import * as S from './DetailSticky.styled';

function DetailSticky() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const handleClickModalOpen = () => {
        setModalOpen(true);
    };

    const handleClickTel = () => {
        window.location.href = 'tel:1866-4575';
    };

    return (
        <S.Wrapper>
            <S.Box>
                <Button label="예약문의" onClick={handleClickModalOpen} element="border" />
                <Button element="primary" label="전화상담" onClick={handleClickTel} />
            </S.Box>
            <SlideModal show={modalOpen} onClose={setModalOpen} maxWidth="435px" closeable={false}>
                <ReservationForm onCloseModal={setModalOpen} />
            </SlideModal>
        </S.Wrapper>
    );
}

export default DetailSticky;
