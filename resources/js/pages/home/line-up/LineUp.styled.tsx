import { SwiperSlide } from 'swiper/react';
import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`m-auto w-full pb-[160px] pt-[60px]`}

    h2 {
        ${tw`mb-[70px] text-center text-[60px] font-light leading-[80px]`}
    }

    ${screen('tablet')({ ...tw`py-[50px]` })}

    & > .rfm-marquee-container img {
        ${screen('tablet')({ ...tw`h-[140px]` })}
    }

    h2 {
        ${screen('tablet')({ ...tw`mb-[60px] text-[40px] leading-[40px]` })}
    }
`;

export const Inner = styled.div`
    ${tw`relative z-10 -mt-[360px]`}

    ${screen('tablet')({ ...tw`-mt-[70px]` })}
`;

export const ButtonBox = styled.div`
    ${tw`mt-[100px] flex justify-center`}

    ${screen('tablet')({ ...tw`mt-[50px]` })}
`;

export const SliderWrapper = styled.div`
    ${tw`relative m-auto box-border max-w-[1650px] px-[100px]`}

    ${screen('tablet')({ ...tw`px-[0px]` })}

    .swiper-pagination-bullet {
        ${tw`!border-[2px] !border-black bg-white opacity-100`}
    }

    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        ${tw`w-[50px] rounded bg-black`}
    }
`;

export const SwiperSlideItem = styled(SwiperSlide)`
    ${tw`overflow-hidden rounded`}

    p {
        ${tw`absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/75 text-[22px] text-white opacity-0 duration-300`}

        ${screen('tablet')({ ...tw`bottom-0 top-auto h-[50px] bg-black text-[18px] opacity-100` })}
    }

    &:hover > p {
        ${tw`opacity-100`}
    }
`;

export const SliderPrevButton = styled.div`
    ${tw`absolute left-[10px] top-[50%] h-[60px] w-[60px] translate-y-[-55px] cursor-pointer`}

    ${screen('tablet')({ ...tw`hidden` })}
`;
export const SliderNextButton = styled.div`
    ${tw`absolute right-[10px] top-[50%] h-[60px] w-[60px] translate-y-[-55px] cursor-pointer`}

    ${screen('tablet')({ ...tw`hidden` })}
`;
