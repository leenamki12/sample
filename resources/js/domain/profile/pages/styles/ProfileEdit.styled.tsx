import tw, { css, styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`flex flex-col items-center bg-gray-100 sm:justify-start`}
`;

export const InnerWrapper = styled.div`
    ${tw`p-[40px 30px] w-full max-w-[435px] bg-white`}
`;

export const Form = styled.form`
    ${tw`space-y-[20px]`}

    input {
        ${tw`text-base`}
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

export const InputAddressBox = styled.div`
    ${tw`flex w-full space-x-[5px]`}

    & > div {
        ${tw`w-full`}
    }

    & > div:first-of-type {
        ${tw`inline-flex min-w-[125px] max-w-[125px] items-center justify-center self-end text-base font-medium`}
    }
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

export const Divider = styled.div`
    ${tw`ml-[-30px] mr-[-30px] h-[10px] bg-[#f8f8f8]`}
`;

export const PrivacyList = styled.div`
    ${tw`pt-[10px]`}
`;

export const SuccessText = styled.div`
    ${tw`text-sm font-bold text-primary`}
`;

export const CodeInputBox = styled.div`
    ${tw`space-y-2`}

    & > .code_time {
        ${tw`text-sm font-bold text-red-500`}
    }
`;

export const Error = styled.div`
    ${tw`mt-1 text-sm text-red-500`}
`;

// type ModalProps = {
//     isShow: boolean;
// };

export const AddressModal = styled.div`
    ${tw` fixed left-0 right-0 top-0 z-10 flex h-screen flex-col items-center justify-center`}

    & > .PostModal {
        ${tw`h-screen`}
    }
`;

export const AddressModalHeader = styled.div`
    ${tw`sticky top-0 z-10 flex h-[70px] w-full items-center justify-center border-b border-gray-500 bg-white px-[100px]`}

    h2 {
        ${tw`text-xl font-bold`}
    }

    button {
        ${tw`absolute left-0 top-0 flex h-[70px] w-[90px] items-center justify-center`}

        svg {
            ${tw`w-[30px] text-xl font-bold`}
        }
    }
`;
