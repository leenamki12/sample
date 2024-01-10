import tw, { styled, screen, css } from 'twin.macro';

type SwiperProps = {
    isLocked?: boolean;
};

export const Wrapper = styled.div<SwiperProps>`
    ${tw`mx-auto max-w-[1740px] px-[20px] text-center text-white`}

    ${screen('tablet')({ ...tw`px-[0px]` })}

    ${SwiperProps =>
        SwiperProps.isLocked &&
        css`
            .swiper-wrapper {
                ${tw`justify-center`}
            }
        `}
`;

export const TitleBox = styled.div`
    ${tw`relative mb-[50px]`}
`;

export const TitleContent = styled.div`
    ${tw`px-[60px]`}

    strong {
        ${tw`block font-pretendard text-[28px]`}

        ${screen('tablet')({ ...tw`text-[20px]` })}
    }

    p {
        ${tw`mt-[15px] font-pretendard text-lg font-bold`}

        ${screen('tablet')({ ...tw`mt-[5px] text-base` })}
    }
`;

export const CloseButton = styled.div`
    ${tw`absolute right-0 top-0 cursor-pointer`}
`;

export const SliderBox = styled.div`
    ${tw`relative mx-auto max-w-[1720px] px-[90px]`}

    ${screen('tablet')({ ...tw`px-[40px]` })}
`;

export const ImageBox = styled.div`
    ${tw`max-h-[500px] max-w-[500px] shadow-[0px_40px_70px_0px_rgba(0,0,0,0.5)]`}

    img {
        ${tw`h-full w-full object-cover`}
    }
`;

export const NavigationBox = styled.div`
    ${tw`absolute left-0 right-0 top-0 mx-auto h-full w-full`}

    button {
        ${tw`absolute top-1/2 z-[1] flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/50 bg-white/30 `}

        ${screen('tablet')({ ...tw`h-[30px] w-[30px]` })}

        &.prevButton {
            ${tw`left-0`}

            img {
                ${tw`-ml-[5px]`}

                ${screen('tablet')({ ...tw`-ml-[3px] h-[16px]` })}
            }
        }

        &.nextButton {
            ${tw`right-0`}

            img {
                ${tw`-mr-[5px]`}

                ${screen('tablet')({ ...tw`-mr-[3px] h-[16px]` })}
            }
        }
    }
`;

export const InfoBox = styled.div`
    ${tw`mt-[50px] flex flex-wrap items-center justify-center font-pretendard text-[20px] font-bold`}

    span {
        &:before {
            ${tw`inline-block px-[5px] content-['·']`}
        }

        &:first-of-type:before {
            ${tw`hidden`}
        }
    }

    p {
        &::before {
            ${tw`inline-block px-[5px] content-['|']`}
        }
    }

    ${screen('tablet')({ ...tw`mt-[20px] text-base` })}
`;
