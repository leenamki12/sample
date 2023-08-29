import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`m-auto max-w-[1000px]`}
`;

export const InnerBox = styled.div`
    ${tw`p-[60px 40px]`}
`;

export const SwiperBox = styled.div`
    ${tw`relative pt-[50px]`}

    .swiper-pagination {
        ${tw`relative`}

        .swiper-pagination-bullet {
            ${tw`p-[7px 15px] relative mx-[17px] h-auto w-auto rounded-xl border-[#DFE1E7] bg-[#F9F9F9] text-[#BCC0D4] opacity-100`}

            &.swiper-pagination-bullet-active {
                ${tw`bg-primary text-white`}
            }

            &:before {
                ${tw`absolute left-[-34px] top-1/2 w-[34px] border-t-2 border-dashed content-['']`}
            }

            &:first-of-type:before {
                ${tw`content-none`}
            }
        }
    }
`;
