import { BorderButton, PrimaryButton } from '@/components/ui';

import * as S from './DetailSticky.styled';

function DetailSticky() {
    return (
        <S.Container>
            <S.Box>
                <BorderButton label="예약문의" className="!h-[50px] !text-[15px]"></BorderButton>
                <PrimaryButton
                    label="전화상담"
                    className="!h-[50px] !w-1/2  !text-[15px]"
                ></PrimaryButton>
            </S.Box>
        </S.Container>
    );
}

export default DetailSticky;
