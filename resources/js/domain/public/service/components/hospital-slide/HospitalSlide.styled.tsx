import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    .swiper-wrapper {
        ${tw`ease-linear`}
    }

    .swiper-slide {
        ${tw`max-w-[255px]`}

        img {
            ${tw`opacity-50`}
        }
    }
`;
