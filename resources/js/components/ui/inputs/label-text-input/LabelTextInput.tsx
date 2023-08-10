import TextInput, { TextInputProps } from '../text-input/TextInput';

import * as S from './LabelTextInput.styled';

type Props = {
    label: string;
    isRequired?: boolean;
} & TextInputProps;

function LabelTextInput({ label, isRequired, id, ...props }: Props) {
    return (
        <label htmlFor={id}>
            <S.Label>
                {label}
                {isRequired && <span>*</span>}
            </S.Label>
            <TextInput id={id} {...props} />
        </label>
    );
}

export default LabelTextInput;
