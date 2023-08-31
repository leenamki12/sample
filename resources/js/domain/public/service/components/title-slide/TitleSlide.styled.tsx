import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`m-auto max-h-[75px] max-w-[320px] overflow-hidden rounded-lg border-2 border-white`}

    .swiper-slide {
        ${tw`max-h-[75px]`}
    }
`;
