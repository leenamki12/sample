import tw, { styled } from 'twin.macro';

export const TitleBox = styled.div`
    ${tw`border-b border-b-secondary p-[20px] font-medium`}
`;

export const Close = styled.div`
    ${tw`absolute right-0 top-0 hidden pr-4 pt-4 sm:block`}

    button {
        ${tw`rounded-md bg-white text-gray-400 hover:text-gray-500`}
    }
`;

export const TextBox = styled.div`
    ${tw`scrollbar max-h-[400px] overflow-y-auto p-[30px] text-base`}
`;
