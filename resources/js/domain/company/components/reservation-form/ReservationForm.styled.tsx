import tw, { css, styled } from 'twin.macro';

export const ModalWrapper = styled.div`
    ${tw`p-[50px 0px 40px] flex h-auto flex-col rounded-t-xl bg-white`}
`;

export const ContentsBox = styled.div`
    ${tw`scrollbar relative mt-6 max-h-[700px] flex-1 px-[30px]`}

    & input,
    & input::placeholder {
        ${tw`text-base`}
    }
`;

export const Form = styled.form`
    ${tw`space-y-[20px]`}
`;

export const Warning = styled.div`
    ${tw`break-keep rounded border border-primary bg-[#EBF1FF]/70 p-[18px] text-center text-base font-bold text-primary`}
`;

type RowBoxProps = {
    isError?: boolean;
};

export const RowBox = styled.div<RowBoxProps>`
    ${tw`space-y-[10px]`}

    input {
        ${({ isError }) => isError && tw`border-2 border-red-500`};
    }
`;

type InputButtonBoxProps = {
    isLabel?: boolean;
};

export const InputButtonBox = styled.div<InputButtonBoxProps>`
    ${tw`flex w-full items-start space-x-[5px]`}

    label,  & > div {
        ${tw`w-full`}
    }

    button {
        ${tw`mt-[0] inline-flex min-w-[125px] max-w-[125px] items-center justify-center self-start text-base`}

        ${({ isLabel }) =>
            isLabel &&
            css`
                margin-top: 27px;
            `};
    }
`;

export const CodeInputBox = styled.div`
    ${tw`space-y-2`}

    & > .code_time {
        ${tw`text-sm font-bold text-red-500`}
    }
`;

export const SuccessText = styled.div`
    ${tw`text-sm font-bold text-primary`}
`;
