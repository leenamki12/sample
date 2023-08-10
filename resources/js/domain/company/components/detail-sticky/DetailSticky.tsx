import { useState } from 'react';

import { BorderButton, PrimaryButton } from '@/components/ui';

import Reservation from '../reservation/Reservation';

import * as S from './DetailSticky.styled';

function DetailSticky() {
    const [open, setOpen] = useState<boolean>(false);

    function openModal() {
        setOpen(true);
        document.documentElement.className = '!pr-[0px]';
    }

    return (
        <S.Container>
            <S.Box>
                <BorderButton
                    label="예약문의"
                    onClick={openModal}
                    className="!h-[50px] !text-[15px]"
                ></BorderButton>
                <PrimaryButton
                    label="전화상담"
                    className="!h-[50px] !w-1/2 !text-[15px]"
                ></PrimaryButton>
            </S.Box>
            <Reservation open={open} setOpen={setOpen} />
        </S.Container>
    );
}

export default DetailSticky;
