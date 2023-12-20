import tw, { styled, screen } from 'twin.macro';

export type StyleProps = {
    backgroundImage: string;
};

export const ImageBox = styled.div<StyleProps>`
    ${tw`mb-[80px] h-[600px] w-full bg-white`}

    ${screen('desktop')({ ...tw`mt-[50px] h-[350px]` })}

    ${screen('tablet')({ ...tw`mb-[50px] h-[185px] text-[30px]` })}

    & > div {
        background-image: url(${ImageProps => ImageProps.backgroundImage});

        ${tw`flex h-full w-full items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat`}

        ${screen('desktop')({ ...tw`bg-local` })}

        img {
            ${screen('desktop')({ ...tw`max-w-[30%]` })}
        }
    }
`;

export const TextBox = styled.div`
    ${tw`mx-auto max-w-[1000px] text-2xl leading-loose`}

    ${screen('desktop')({ ...tw`px-[20px]` })}

    ${screen('tablet')({ ...tw`text-lg` })}
`;
