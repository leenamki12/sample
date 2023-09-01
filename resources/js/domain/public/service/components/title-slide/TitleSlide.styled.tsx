import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`flex items-center`}

    .swiper {
        ${tw`m-auto inline-block min-w-[320px] overflow-hidden rounded-lg border-2 border-white`}
    }

    .swiper-slide {
        ${tw`max-h-[115px] p-[20px]`}
    }
`;
