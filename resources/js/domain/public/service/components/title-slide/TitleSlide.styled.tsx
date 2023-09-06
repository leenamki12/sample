import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`flex items-center`}

    .swiper {
        ${tw`m-auto inline-block min-w-[320px] overflow-hidden rounded-lg border-2 border-white mobile:min-w-[160px] mobile:rounded tablet:min-w-[240px]`}
    }

    .swiper-slide {
        ${tw`p-[20px] mobile:p-[10px] tablet:p-[15px]`}
    }
`;
