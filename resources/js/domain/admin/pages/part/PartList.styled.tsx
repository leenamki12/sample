import tw, { styled } from 'twin.macro';

export const AddSectionWrap = styled.div`
    ${tw`bg-gray-100`}
`;

export const GridWrap = styled.div`
    ${tw`mt-3 grid min-h-[auto] grid-cols-1 gap-5 sm:min-h-[528px] sm:grid-cols-2 sm:gap-6 lg:grid-cols-4`}
`;

export const GridItem = styled.div`
    ${tw`col-span-1 flex h-[66px] rounded-md bg-gray-400 shadow-sm`}
`;

export const GridItemRowNum = styled.div`
    ${tw`flex w-8 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white`}
`;

export const GridContent = styled.div`
    ${tw`relative flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white`}
`;

export const DeleteButton = styled.button`
    ${tw`absolute right-0 top-0 p-2`}

    &:hover {
        svg {
            ${tw`stroke-gray-500 delay-100`}
        }
    }
`;
