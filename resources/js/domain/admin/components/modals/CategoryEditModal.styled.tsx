import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/60`}
`;

export const Form = styled.form`
    ${tw`p-[120px 20px 120px] relative w-[435px] overflow-hidden rounded bg-white`}
`;

export const Title = styled.h3`
    ${tw`absolute left-0 top-0 mb-[30px] w-full border-b-[1px] p-[20px] text-left text-[20px] font-bold`}
`;

export const ButtonBox = styled.div`
    ${tw`absolute bottom-0 left-0 mt-[30px] flex w-full items-center`}

    button {
        ${tw`rounded-none`}
    }
`;

export const ImageBox = styled.div`
    ${tw`mb-[20px] flex justify-center`}
`;

export const InputList = styled.div`
    ${tw`w-full space-y-[12px]`}
`;

export const Divider = styled.div`
    ${tw`my-[20px] h-[1px] w-full bg-[#f5f5f5]`}
`;
