import { BorderButton, PrimaryButton } from '@/components/ui';

import * as S from './StickyBar.styled';

function StickyBar() {
    return (
        <S.Wrapper>
            <S.Box>
                <BorderButton
                    label="기업회원가입"
                    className="!h-[100px] !text-[30px]"
                ></BorderButton>
                <PrimaryButton label="제휴문의" className="!h-[100px] !text-[30px]"></PrimaryButton>
            </S.Box>
        </S.Wrapper>
    );
}

export default StickyBar;
