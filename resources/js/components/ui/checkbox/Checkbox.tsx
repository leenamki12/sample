import { InputHTMLAttributes } from 'react';

import * as S from './Checkbox.styled';

type Props = {
    label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({ className = '', label, ...props }: Props) {
    return (
        <S.Label>
            <S.Input {...props} type="checkbox" />
            <span>{label && label}</span>
        </S.Label>
    );
}
