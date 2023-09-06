import tw, { css, styled } from 'twin.macro';

type InnerProps = {
    wide?: boolean;
};

type TextProps = {
    color?: string;
};

type SrctionProps = {
    backgroundColor?: string;
};

export const Wrapper = styled.div`
    ${tw`m-auto min-w-[360px] max-w-[1000px]`}
`;

export const Section = styled.div<SrctionProps>`
    ${({ backgroundColor }) =>
        backgroundColor === 'bg-primary'
            ? css`
                  ${tw`bg-primary`}
              `
            : css`
                  background-color: ${backgroundColor};
              `}
`;

export const InnerBox = styled.div<InnerProps>`
    ${tw`p-[120px 80px] tablet:p-[90px 60px] mobile:p-[60px 40px]`}

    ${({ wide }) =>
        wide &&
        css`
            ${tw`px-[0px] mobile:px-[0px] tablet:px-[0px]`}
        `}
`;

export const TitleBox = styled.div`
    ${tw`flex flex-col items-center`}
`;

export const Title = styled.strong`
    ${tw`block break-keep text-center text-[60px] font-bold mobile:text-[30px] tablet:text-[45px]`}

    span, a {
        ${tw`block text-primary`}
    }
`;

export const SubTitle = styled.p<TextProps>`
    ${tw`text-center text-[32px] mobile:text-[16px] tablet:text-[24px]`}

    ${({ color }) =>
        color &&
        css`
            color: ${color};
        `}
`;

export const SubText = styled.p<TextProps>`
    ${tw`break-keep text-center text-[28px] leading-[44px] mobile:text-base tablet:text-[21px] tablet:leading-[33px]`}

    ${({ color }) =>
        color &&
        css`
            color: ${color};
        `}
`;

export const TelButton = styled.button`
    ${tw`p-[20px 40px] min-w-[530px] rounded border-2 border-white/20 bg-opacity-20 bg-gradient-to-b from-white/20 to-primary/20 text-[32px] text-white
        mobile:min-w-[inherit] mobile:border mobile:py-[10px] mobile:text-[16px]
        tablet:min-w-[inherit] tablet:py-[15px] tablet:text-[24px]
    `}
`;
