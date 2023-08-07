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
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    onChange?: (id: string, value: string) => void;
    error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & { isFocused?: boolean };

/**
 * @param isFocused 페이지 접근 focus 여부
 * @param isEnterDisabled 입력 후 input Active 기능 비활성
 * @param icon input icon추가
 * @param error error문구 추가
 */

export default forwardRef(function TextInput(
    {
        onChange,
        defaultValue,
        isEnterDisabled = false,
        isFocused = false,
        className,
        id,
        icon: Icon,
        error,
        ...props
    }: Props,
    ref
) {
    const [isEnter, setIsEnter] = useState<boolean>(false);
    const [isFocus, setIsFocus] = useState<boolean>(false);
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
        if (id) onChange?.(id, event.target.value);

        if (!isEnterDisabled) setIsEnter(event.target.value !== '');
    };

    return (
        <div>
            <S.Wrapper hasIcon={!!Icon} isEnter={isFocus || isEnter} isError={!!error}>
                {Icon && <Icon className="w-[20px]" />}
                <S.Input
                    {...props}
                    id={id}
                    defaultValue={defaultValue}
                    className={className}
                    onChange={handleChange}
                    ref={localRef}
                    isEnter={isEnter}
                    hasIcon={!!Icon}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    isError={!!error}
                />
            </S.Wrapper>
            {error && <S.Error>{error}</S.Error>}
        </div>
    );
});

export type { Props as TextInputProps };
