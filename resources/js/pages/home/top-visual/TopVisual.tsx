import React from 'react';

import { router } from '@inertiajs/react';

import { GradientButton } from '@/components/ui';

import * as s from './TopVisual.styled';

const TopVisual = React.forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <s.Wrapper ref={ref}>
            <s.Inner>
                <strong>2024.04.13-14 at KINTEX</strong>
                <p>
                    새로운 공간에서 즐기는 빛의 향연,
                    <br /> 등장부터 활약까지 새로운 음악 페스티벌의 탄생
                </p>
                <GradientButton label="MORE INFO" onClick={() => router.visit(route('about'))} />
            </s.Inner>
        </s.Wrapper>
    );
});

export default TopVisual;
