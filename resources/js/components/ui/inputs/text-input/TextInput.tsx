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

export type InputRefProps = {
    focus: () => void;
    reset: () => void;
    setValue: (value: string) => void;
};

type Props = {
    isFocused?: boolean;
    isEnterDisabled?: boolean;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    onChange?: (id: string, value: string) => void;
    onBlur?: () => void;
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
        onBlur,
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
        reset: () => {
            if (localRef.current) localRef.current.value = '';
        },
        setValue: (value: string) => {
            if (localRef.current) {
                localRef.current.value = value;
                if (id) {
                    onChange?.(id, value);
                }
                setIsEnter(true);
            }
        },
    }));
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (id) {
            onChange?.(id, event.target.value);
        }

        if (!isEnterDisabled) {
            setIsEnter(event.target.value !== '');
        }
    };

    const handleBlur = () => {
        onBlur?.();
        setIsFocus(false);
    };

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

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
                    onBlur={handleBlur}
                    isError={!!error}
                />
            </S.Wrapper>
            {error && <S.Error>{error}</S.Error>}
        </div>
    );
});

export type { Props as TextInputProps };
