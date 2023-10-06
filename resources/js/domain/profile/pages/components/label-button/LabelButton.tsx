import { HTMLAttributes } from 'react';
import React from 'react';

import { Button, ButtonStyleProps } from '@/components/ui';

import * as S from './LabelButton.styled';

type Props = {
    label: string;
    buttonType: 'primary' | 'secondary' | 'teriary';
    buttonLabel: string;
} & ButtonStyleProps &
    HTMLAttributes<HTMLButtonElement>;

function LabelButton({ label, buttonType, buttonLabel, ...props }: Props) {
    return (
        <S.Wrapper>
            <span>{label}</span>
            {React.createElement(Button, { label: buttonLabel, element: buttonType, ...props })}
        </S.Wrapper>
    );
}

export default LabelButton;
