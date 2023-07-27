import tw, { styled } from 'twin.macro';

export const Label = styled.label`
    ${tw`flex items-center gap-[8px] text-sm text-[#888]`}

    span {
    }
`;

export const Input = styled.input`
    ${tw`h-[20px] w-[20px] rounded-sm border-gray-300 text-primary shadow-sm focus:ring-primary`}
`;
