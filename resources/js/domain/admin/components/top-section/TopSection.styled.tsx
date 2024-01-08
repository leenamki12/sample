import tw, { styled } from 'twin.macro';

export const Divider = styled.div`
    ${tw`m-[20px 0 40px] h-[1px] w-full bg-gray-200`}
`;

export const Title = styled.h3`
    ${tw`text-[20px] font-bold`}
`;

export const ButtonWrap = styled.div`
    button {
        ${tw`h-[36px] w-auto max-w-[100px] px-[20px] text-sm`}
    }
`;
