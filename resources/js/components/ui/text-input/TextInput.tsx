import {
    ChangeEvent,
    InputHTMLAttributes,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';

import * as S from './TextInput.styled';

type Props = {
    isFocused?: boolean;
    isEnterDisabled?: boolean;
    onChange: (name: string, value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & { isFocused?: boolean };

/**
 * @param isFocused 페이지 접근 focus 여부
 * @param isEnterDisabled 입력 후 input Active 기능 비활성
 */

export default forwardRef(function TextInput(
    {
        onChange,
        defaultValue,
        isEnterDisabled = false,
        isFocused = false,
        className,
        name,
        ...props
    }: Props,
    ref
) {
    const [isEnter, setIsEnter] = useState<boolean>(false);
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (name) onChange(name, event.target.value);

        if (!isEnterDisabled) setIsEnter(event.target.value !== '');
    };

    return (
        <S.Wrapper>
            <S.Input
                {...props}
                name={name}
                defaultValue={defaultValue}
                className={className}
                onChange={handleChange}
                ref={localRef}
                isEnter={isEnter}
            />
        </S.Wrapper>
    );
});
