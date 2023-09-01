import tw, { css, styled } from 'twin.macro';

type InnerProps = {
    wide?: boolean;
};

type TextProps = {
    color?: string;
};

export const Wrapper = styled.div`
    ${tw`m-auto max-w-[1000px]`}
`;

export const InnerBox = styled.div<InnerProps>`
    ${tw`p-[120px 80px]`}

    ${({ wide }) =>
        wide &&
        css`
            ${tw`px-[0px]`}
        `}
`;

export const TitleBox = styled.div`
    ${tw`flex flex-col items-center`}
`;

export const Title = styled.strong`
    ${tw`block text-center text-[60px] font-bold`}

    span {
        ${tw`block text-primary`}
    }
`;

export const SubText = styled.p<TextProps>`
    ${tw`text-center text-[32px]`}

    ${({ color }) =>
        color &&
        css`
            color: ${color};
        `}
`;

export const SwiperBox = styled.div`
    ${tw`relative mt-[60px]`}

    .swiper-pagination {
        ${tw`relative bottom-0 top-0 mb-[50px]`}

        .swiper-pagination-bullet {
            ${tw`p-[15px 30px] relative mx-[35px] h-auto w-auto rounded-[50px] border-[#DFE1E7] bg-[#F9F9F9] text-[28px] text-[#BCC0D4] opacity-100`}

            &.swiper-pagination-bullet-active {
                ${tw`bg-primary text-white`}
            }

            &:before {
                ${tw`absolute left-[-70px] top-1/2 w-[70px] border-t-2 border-dashed content-['']`}
            }

            &:first-of-type:before {
                ${tw`content-none`}
            }
        }
    }
`;

export const InnerSwiper = styled.div`
    ${tw`flex flex-col items-center`}

    strong {
        ${tw`mb-[30px] block text-center text-[38px] text-primary`}
    }
`;
