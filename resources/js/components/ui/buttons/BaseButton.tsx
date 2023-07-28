import { ButtonHTMLAttributes } from 'react';

import { styled } from 'twin.macro';

type Variant = 'default' | 'primary' | 'success' | 'warning' | 'error';
type Size = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /* Button 색상을 결정하는 prop입니다. */
    variant: Variant;

    /* Button Size를 결정하는 prop입니다. */
    size: Size;

    /* Button이 fullWidth를 차지할 것인지 결정하는 prop입니다.*/
    fullWidth: boolean;
}

export type Props = Partial<ButtonProps>;

const ButtonBase = styled.button<Props>`
    display: inline-flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    vertical-align: center;
    position: relative;
    min-width: 64px;
    border: none;
    border-radius: 6px;
    padding: 10px 12px;
    cursor: pointer;

    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    user-select: none;

    transition: background-color 0.1s ease;
`;

export default ButtonBase;
