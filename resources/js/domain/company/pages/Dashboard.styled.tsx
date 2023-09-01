import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`p-[30px 30px 70px]`}
`;

export const BannerBox = styled.div`
    ${tw`mb-[50px]`}

    .swiper-pagination {
        ${tw`relative bottom-0 mt-[10px] text-[0px]`}

        .swiper-pagination-bullet {
            ${tw`mx-[3px] bg-[#aaa] opacity-50`}

            &.swiper-pagination-bullet-active {
                ${tw`w-[20px] rounded opacity-100`}
            }
        }
    }
`;
