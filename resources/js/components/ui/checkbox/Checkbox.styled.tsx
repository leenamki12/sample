import tw, { styled } from 'twin.macro';

export const Label = styled.label`
    ${tw`inline-flex h-[20px] items-center gap-[8px] text-sm text-[#888]`}

    span {
    }
`;

export const Input = styled.input`
    ${tw`h-[20px] w-[20px] rounded-sm border-gray-300 text-[#181717] focus:ring-[#181717]`}
`;
