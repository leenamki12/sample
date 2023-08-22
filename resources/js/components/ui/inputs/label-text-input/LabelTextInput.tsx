import { forwardRef } from 'react';

import TextInput, { TextInputProps } from '../text-input/TextInput';

import * as S from './LabelTextInput.styled';

type Props = {
    label: string;
    isRequired?: boolean;
} & TextInputProps;

export default forwardRef(function LabelTextInput({ label, isRequired, id, ...props }: Props, ref) {
    return (
        <label htmlFor={id}>
            <S.Label>
                {label}
                {isRequired && <span>*</span>}
            </S.Label>
            <TextInput id={id} ref={ref} {...props} />
        </label>
    );
});
