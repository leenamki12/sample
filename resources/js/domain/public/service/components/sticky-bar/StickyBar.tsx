import { router } from '@inertiajs/react';

import { Button } from '@/components/ui';

import * as S from './StickyBar.styled';

function StickyBar() {
    return (
        <S.Wrapper>
            <S.Box>
                <Button
                    onClick={() => router.visit(route('register'))}
                    label="기업회원가입"
                    element="border"
                ></Button>
                <Button label="제휴문의" element="primary"></Button>
            </S.Box>
        </S.Wrapper>
    );
}

export default StickyBar;
