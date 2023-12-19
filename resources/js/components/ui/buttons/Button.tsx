import { HTMLAttributes, PropsWithChildren, useMemo } from 'react';
import React from 'react';

import { ButtonProps, ButtonStyleProps } from '@/components/ui';
import { StrKeyArray } from '@/types';

import BorderButton from './BorderButton';
import CancelButton from './CancelButton';
import MoreButton from './MoreButton';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import TertiaryButton from './TertiaryButton';
import TextButton from './TextButton';

type Props = {
    label: string;
    element: 'primary' | 'secondary' | 'teriary' | 'border' | 'cancel' | 'text' | 'more';
    type?: 'button' | 'submit';
} & ButtonStyleProps &
    HTMLAttributes<HTMLButtonElement>;

const buttons: StrKeyArray<React.ComponentType<PropsWithChildren<ButtonProps>>> = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    teriary: TertiaryButton,
    border: BorderButton,
    cancel: CancelButton,
    text: TextButton,
    more: MoreButton,
};

/**
 * @label {string} 버튼이름
 * @buttonElement 버튼 엘리먼트
 * @type 버튼타입
 * @ButtonStyleProps 스타일 관련한 Props BaseButton에서 수정해야함.
 */
function Button({ label, type = 'button', element, ...props }: Props) {
    const ButtonElement = useMemo(() => {
        return buttons[element];
    }, []);

    return React.createElement(ButtonElement, { label, type, ...props });
}

export default Button;
