import { useState } from 'react';

import SlideOvers from '@/components/inertia/SlideOvers';
import { BorderButton, PrimaryButton } from '@/components/ui';

import { HospitalItem } from '../../datas';
import Reservation from '../reservation-form/ReservationForm';

import * as S from './DetailSticky.styled';

function DetailSticky({ id }: Pick<HospitalItem, 'id'>) {
    const [open, setOpen] = useState<boolean>(false);

    const openModal = () => {
        setOpen(true);
    };

    return (
        <S.Container>
            <S.Box>
                <BorderButton
                    label="예약문의"
                    onClick={openModal}
                    className="!h-[50px] !text-lg"
                ></BorderButton>
                <PrimaryButton
                    label="전화상담"
                    className="!h-[50px] !w-1/2 !text-lg"
                ></PrimaryButton>
            </S.Box>
            <SlideOvers show={open} onClose={setOpen} maxWidth="435px" closeable={false}>
                <Reservation setOpen={setOpen} hospitalId={id} />
            </SlideOvers>
        </S.Container>
    );
}

export default DetailSticky;
