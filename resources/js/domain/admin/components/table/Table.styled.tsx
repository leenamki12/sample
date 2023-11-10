import tw, { styled } from 'twin.macro';

export const Wrapper = styled.table`
    ${tw`min-w-full divide-y divide-gray-300 border-b`}
`;

export const Th = styled.th`
    ${tw`py-3.5 pl-2 pr-2 text-left text-sm font-semibold text-gray-900`}
`;

export const Thead = styled.thead`
    ${tw`bg-gray-50`}
`;

export const Tbody = styled.thead`
    ${tw`divide-y divide-gray-200 bg-white`}
`;

export const Td = styled.td`
    ${tw`whitespace-nowrap py-[10px] pl-3 pr-2 text-sm font-medium text-gray-900`}

    div {
        ${tw`min-w-[80px] whitespace-nowrap sm:whitespace-normal`}
    }
`;

export const Empty = styled.div`
    ${tw`h-[200px] text-center leading-[200px] sm:h-[500px] sm:leading-[500px]`}
`;
