import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`p-[60px 40px 80px] rounded bg-white`}
`;

export const ImageBox = styled.div`
    ${tw`mb-[30px] flex justify-center`}
`;

export const InputList = styled.div`
    ${tw`w-full space-y-[12px]`}
`;

export const CheckboxWrapper = styled.div`
    ${tw`mt-[20px] text-[0px]`}
`;

export const ButtonBox = styled.div`
    ${tw`mt-[30px]`}
`;

export const ButtonGroup = styled.div`
    ${tw`mt-[25px] flex items-center justify-center gap-[15px]`}
`;

export const VeticalDivider = styled.span`
    ${tw`block h-[10px] w-[1px] bg-[#1743B1] opacity-50`}
`;
