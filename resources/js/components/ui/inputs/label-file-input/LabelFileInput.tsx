import FileInput, { FileInputProps } from '../file-input/FileInput';

import * as S from './LabelFIleInput.styled';

type Props = {
    label: string;
    isRequired?: boolean;
} & FileInputProps;

function LabelTextInput({ label, isRequired, id, ...props }: Props) {
    return (
        <label htmlFor={id}>
            <S.Label>
                {label}
                {isRequired && <span>*</span>}
            </S.Label>
            <FileInput id={id} {...props} />
        </label>
    );
}

export default LabelTextInput;
