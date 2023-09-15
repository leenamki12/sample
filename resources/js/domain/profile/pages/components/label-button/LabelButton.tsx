import { HTMLAttributes, PropsWithChildren, useMemo } from 'react';
import React from 'react';

import {
    ButtonProps,
    ButtonStyleProps,
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
} from '@/components/ui';
import { StrKeyArray } from '@/types';

import * as S from './LabelButton.styled';

type Props = {
    label: string;
    buttonType: 'primary' | 'secondary' | 'teriary';
    buttonLabel: string;
} & ButtonStyleProps &
    HTMLAttributes<HTMLButtonElement>;

const buttons: StrKeyArray<React.ComponentType<PropsWithChildren<ButtonProps>>> = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    teriary: TertiaryButton,
};

function LabelButton({ label, buttonType, buttonLabel, ...props }: Props) {
    const ButtonElement = useMemo(() => {
        return buttons[buttonType];
    }, []);

    return (
        <S.Wrapper>
            <span>{label}</span>
            {React.createElement(ButtonElement, { label: buttonLabel, ...props })}
        </S.Wrapper>
    );
}

export default LabelButton;
