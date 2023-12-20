import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react';

import * as S from './Checkbox.styled';

type Props = {
    label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function Checkbox({ className = '', label, ...props }: Props, ref: LegacyRef<HTMLInputElement>) {
    return (
        <S.Label>
            <S.Input {...props} type="checkbox" ref={ref} />
            <span>{label && label}</span>
        </S.Label>
    );
}

export default forwardRef(Checkbox);
