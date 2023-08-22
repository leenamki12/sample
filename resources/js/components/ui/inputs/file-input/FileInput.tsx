import { ChangeEvent, InputHTMLAttributes, useState } from 'react';

import { ReactComponent as FileIcon } from '@assets/common/icon_input_file.svg';

import * as S from './FileInput.styled';

type Props = {
    isEnterDisabled?: boolean;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    onChange?: (file: File) => void;
    error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

/**
 * @param icon input icon추가
 * @param error error문구 추가
 */

export default function FileInput({
    onChange,
    defaultValue,
    isEnterDisabled = false,
    className,
    id,
    icon: Icon,
    error,
    placeholder,
    ...props
}: Props) {
    const [isEnter, setIsEnter] = useState<boolean>(false);
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File>();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return;
        }

        if (!isEnterDisabled) {
            setIsEnter(event.target.value !== '');
        }
        onChange?.(event.target.files[0]);
        setSelectedFile(event.target.files[0]);
    };

    return (
        <label htmlFor={id} className="relative">
            <S.Themp isFileSelected={!!selectedFile} isEnter={isEnter || isFocus} isError={!!error}>
                {selectedFile?.name || placeholder}
                <S.Icon>
                    <FileIcon className="h-[22px] w-[22px]" />
                </S.Icon>
            </S.Themp>
            <S.Wrapper isError={!!error}>
                {Icon && <Icon className="w-[20px]" />}
                <S.Input
                    {...props}
                    id={id}
                    defaultValue={defaultValue}
                    className={className}
                    onBlur={() => setIsFocus(false)}
                    onChange={handleChange}
                    isError={!!error}
                    type="file"
                />
            </S.Wrapper>
            {error && <S.Error>{error}</S.Error>}
        </label>
    );
}

export type { Props as FileInputProps };
