import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`flex h-full w-full items-center justify-center`}
`;

export const Form = styled.form`
    ${tw`w-[435px] rounded bg-white p-[50px]`}
`;

export const Title = styled.h3`
    ${tw`mb-[30px] text-center text-[24px] font-bold`}
`;

export const ButtonBox = styled.div`
    ${tw`mt-[30px] space-y-[10px]`}
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
