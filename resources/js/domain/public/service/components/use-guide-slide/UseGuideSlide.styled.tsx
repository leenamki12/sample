import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`relative mt-[60px] mobile:mt-[30px] tablet:mt-[45px]`}

    .swiper-pagination {
        ${tw`relative bottom-0 top-0 mb-[50px] flex justify-center gap-[70px] mobile:mb-[25px] mobile:gap-[35px] tablet:mb-[38px] tablet:gap-[52px] `}

        .swiper-pagination-bullet {
            ${tw`p-[15px 30px] mobile:p-[12px 22px] mobile:p-[8px 15px] relative m-0 h-auto w-auto rounded-[50px] border-[#DFE1E7]
                bg-[#F9F9F9] text-[28px] text-[#BCC0D4] opacity-100
                mobile:rounded-[25px] mobile:text-[14px] tablet:rounded-[38px] tablet:text-[21px]
            `}

            &.swiper-pagination-bullet-active {
                ${tw`bg-primary text-white`}
            }

            &:before {
                ${tw`absolute -left-[70px] top-1/2 w-[70px] border-t-2 border-dashed content-['']
                    mobile:-left-[35px] mobile:w-[35px] mobile:border tablet:-left-[52px] tablet:w-[52px]
                `}
            }

            &:first-of-type:before {
                ${tw`content-none`}
            }
        }
    }
`;

export const InnerBox = styled.div`
    ${tw`flex flex-col items-center`}

    strong {
        ${tw`mb-[30px] block text-center text-[38px] font-bold text-primary mobile:mb-[15px] mobile:text-[16px] tablet:mb-[22px] tablet:text-[24px]`}
    }

    img {
        ${tw`m-auto mobile:max-w-[75%] tablet:max-w-[80%]`}
    }
`;
