import tw, { styled, screen } from 'twin.macro';

export type StyleProps = {
    backgroundImage: string;
};

export const ImageBox = styled.div<StyleProps>`
    ${tw`mb-[80px] h-[600px] w-full bg-white`}

    & > div {
        background-image: url(${ImageProps => ImageProps.backgroundImage});

        ${tw`flex h-full w-full items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat`}
    }
`;

export const TextBox = styled.div`
    ${tw`mx-auto max-w-[1000px] text-2xl leading-loose`}
`;
