import { XMarkIcon } from '@heroicons/react/24/outline';
import tw, { styled } from 'twin.macro';

export const AddSectionWrap = styled.div`
    ${tw`bg-gray-100`}
`;

export const GridWrap = styled.div`
    ${tw`mt-3 grid min-h-[auto] auto-rows-min grid-cols-1 gap-5 sm:min-h-[528px] sm:grid-cols-2 sm:gap-6 lg:grid-cols-4`}
`;

export const GridItem = styled.div`
    ${tw`col-span-1 flex h-[66px] cursor-pointer rounded-md bg-[#666] shadow-sm`}
`;

export const GridItemRowNum = styled.div`
    ${tw`flex w-8 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white`}
`;

export const GridContent = styled.div`
    ${tw`relative flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white hover:bg-gray-100`}
`;

export const DeleteButton = styled.button`
    ${tw`absolute right-0 top-0 p-2`}

    &:hover {
        svg {
            ${tw`stroke-gray-500 duration-75`}
        }
    }
`;

export const GridText = styled.div`
    ${tw`flex-1 truncate px-4 py-2 text-sm`}
`;
export const GridTextName = styled.strong`
    ${tw`flex items-center truncate text-xl font-bold text-gray-900`}
`;
export const GridTextCount = styled.span`
    ${tw`text-gray-500`}
`;

export const XmarkIcon = styled(XMarkIcon)`
    ${tw`h-5 w-5`}
`;
