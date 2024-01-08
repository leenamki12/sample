import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`mt-12 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0`}
`;

export const NumLink = styled.button`
    ${tw`inline-flex cursor-pointer items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}
`;

export const NumberBox = styled.div`
    ${tw`hidden md:-mt-px md:flex`}
`;
