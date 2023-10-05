import tw, { styled } from 'twin.macro';

export const ColBox = styled.div`
    & + & {
        ${tw`p-[40px 30px] overflow-hidden border-t-[10px] border-[#F8F8F8]`}
    }
`;

export const SectionTitle = styled.strong`
    ${tw`mt-[40px] block text-[20px] font-bold`}

    span {
        ${tw`text-primary`}
    }
`;
