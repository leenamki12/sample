import { router } from '@inertiajs/react';

import { BorderButton, PrimaryButton } from '@/components/ui';

import * as S from './StickyBar.styled';

function StickyBar() {
    return (
        <S.Wrapper>
            <S.Box>
                <BorderButton
                    onClick={() => router.visit(route('register'))}
                    label="기업회원가입"
                ></BorderButton>
                <PrimaryButton label="제휴문의"></PrimaryButton>
            </S.Box>
        </S.Wrapper>
    );
}

export default StickyBar;
