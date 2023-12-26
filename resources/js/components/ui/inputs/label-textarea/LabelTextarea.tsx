import { forwardRef } from 'react';

import { TextArea } from '../..';
import { TextareaProps } from '../textarea/Textarea';

import * as S from './LabelTextarea.styled';

type Props = {
    label: string;
    isRequired?: boolean;
} & TextareaProps;

export default forwardRef(function LabelTextarea({ label, isRequired, id, ...props }: Props, ref) {
    return (
        <label htmlFor={id}>
            <S.Label>
                {label}
                {isRequired && <span>*</span>}
            </S.Label>
            <TextArea id={id} ref={ref} {...props} />
        </label>
    );
});
