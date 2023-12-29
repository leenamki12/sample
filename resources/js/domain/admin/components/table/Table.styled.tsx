import tw, { styled } from 'twin.macro';

export const Wrapper = styled.table`
    ${tw`min-w-full divide-y divide-gray-300 border-b`}
`;

export const Th = styled.th`
    ${tw`p-2 py-3 pl-3 text-left text-sm font-semibold text-gray-900`}

    label {
        ${tw`flex h-full items-center`}
    }
`;

export const Thead = styled.thead`
    ${tw`bg-gray-50`}
`;

export const Tbody = styled.thead`
    ${tw`divide-y divide-gray-200 bg-white`}
`;
export const Tr = styled.tr`
    ${tw`duration-200`}

    &:hover {
        ${tw`cursor-pointer bg-gray-100 duration-200`}
    }
`;

export const Td = styled.td`
    ${tw`whitespace-nowrap p-2 pl-3 text-sm font-medium text-gray-900`}

    div {
        ${tw`min-w-[80px] whitespace-nowrap sm:whitespace-normal`}
    }

    label {
        ${tw`flex h-full items-center`}
    }
`;

export const Empty = styled.div`
    ${tw`h-[200px] bg-gray-50 text-center leading-[200px] sm:h-[500px] sm:leading-[500px]`}
`;

export const ButtonWrap = styled.div`
    ${tw`mt-[20px] flex justify-between`}

    button {
        ${tw`h-[36px] w-auto max-w-[100px] px-[20px] text-sm`}
    }
`;
