import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`flex min-h-screen flex-col items-center bg-gray-100 sm:justify-start`}
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

export const InputButtonBox = styled.div`
    ${tw`flex w-full items-start space-x-[5px]`}

    label,  & > div {
        ${tw`w-full`}
    }

    button {
        ${tw`inline-flex min-w-[125px] max-w-[125px] items-center justify-center self-end text-base font-medium`}
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

export const RowBox = styled.div`
    ${tw`space-y-[10px]`}
`;

export const Divider = styled.div`
    ${tw`ml-[-30px] mr-[-30px] h-[10px] bg-[#f8f8f8]`}
`;

export const PrivacyList = styled.div`
    ${tw`pt-[10px]`}
`;
