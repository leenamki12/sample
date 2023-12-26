import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`items-center justify-center`}
`;

export const Form = styled.form`
    ${tw`p-[0px 10px 120px] relative overflow-hidden`}
`;

export const ButtonBox = styled.div`
    ${tw`mt-[30px] flex w-full items-center justify-center`}

    button {
        ${tw`max-w-[200px] rounded`}
    }
`;

export const ImageBox = styled.div`
    ${tw`mb-[20px] flex justify-center`}
`;

export const InputList = styled.div`
    ${tw`w-full space-y-[15px]`}

    label {
        ${tw`block`}
    }
`;

export const Divider = styled.div`
    ${tw`my-[20px] h-[1px] w-full bg-[#f5f5f5]`}
`;

export const DateList = styled.ul`
    ${tw`space-y-1`}
`;

export const DateItem = styled.li`
    ${tw`text-right text-[14px] text-gray-500`}
`;
