import tw, { styled, screen } from 'twin.macro';

export type StyleProps = {
    backgroundImage: string;
};

export const Wrapper = styled.div<StyleProps>`
    ${tw`p-[50px 80px] mt-[40px] flex items-center justify-between bg-cover bg-no-repeat text-left first-of-type:mt-0`}

    background-image: url(${ImageProps => ImageProps.backgroundImage});

    &:nth-of-type(even) {
        ${tw`flex-row-reverse text-right`}
    }
`;

export const Title = styled.strong`
    ${tw`block max-w-[590px] text-[40px]`}

    span {
        ${tw`inline-block text-base font-normal`}
    }
`;

export const Text = styled.p`
    ${tw`mt-[20px] text-[25px] leading-normal`}
`;
