import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    & + & {
        ${tw`mt-[40px]`}
    }
`;

export const Title = styled.h3`
    ${tw`mb-3 text-base font-semibold leading-6 text-gray-900`}
`;
