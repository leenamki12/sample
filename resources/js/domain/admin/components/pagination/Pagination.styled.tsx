import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
import tw, { styled } from 'twin.macro';

type NumLinkProps = {
    isActive: boolean;
};

export const Wrapper = styled.div`
    ${tw`mt-12 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0`}
`;

export const NumLink = styled.button<NumLinkProps>`
    ${tw`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}

    ${({ isActive }) =>
        isActive &&
        tw`
         border-blue-500 text-blue-600 hover:border-blue-500 hover:text-blue-600
    `}
`;
export const NumDotted = styled.span`
    ${tw`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500`}
`;
export const NumberBox = styled.div`
    ${tw`hidden md:-mt-px md:flex`}
`;

export const PrevBox = styled.div`
    ${tw`-mt-px flex w-0 flex-1`}
`;
export const NextBox = styled.div`
    ${tw`-mt-px flex w-0 flex-1 justify-end`}
`;

type ArrowLinkProps = {
    hasNext?: boolean;
};
export const ArrowLink = styled.button<ArrowLinkProps>`
    ${tw`inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}

    ${({ hasNext }) =>
        hasNext &&
        tw`
         pl-1 pt-4
    `}
`;

export const PrevIcon = styled(ArrowLongLeftIcon)`
    ${tw`mr-3 h-5 w-5 text-gray-400`}
`;
export const NextIcon = styled(ArrowLongRightIcon)`
    ${tw`ml-3 h-5 w-5 text-gray-400`}
`;
