import tw, { styled, screen } from 'twin.macro';

export type StyleProps = {
    backgroundImage: string;
};

export const Wrapper = styled.div<StyleProps>`
    ${tw`p-[50px 80px] mt-[40px] flex items-center justify-between bg-cover bg-no-repeat text-left first-of-type:mt-0`}

    background-image: url(${ImageProps => ImageProps.backgroundImage});

    &:nth-of-type(even) {
        ${tw`flex-row-reverse text-right`}

        ${screen('desktop')({ ...tw`flex-col text-left` })}
    }

    ${screen('desktop')({ ...tw`p-[30px 40px] flex-col items-start justify-start` })}

    ${screen('tablet')({ ...tw`mt-[20px] p-[20px] first-of-type:mt-0` })}
`;

export const Title = styled.strong`
    ${tw`inline-block max-w-[590px] text-[40px] leading-tight`}

    ${screen('tablet')({ ...tw`flex flex-wrap items-end gap-[10px] text-[20px]` })}

    span {
        ${tw`inline-block text-lg`}

        ${screen('tablet')({ ...tw`text-xs` })}
    }
`;

export const Text = styled.p`
    ${tw`mt-[20px] text-[25px] leading-normal`}

    ${screen('tablet')({ ...tw`mt-[5px] text-base` })}
`;

export const ButtonBox = styled.div`
    ${tw`mt-[20px]`}

    ${screen('tablet')({ ...tw`w-full` })}

    button {
        ${screen('tablet')({ ...tw`block w-full border text-center` })}

        img {
            ${screen('tablet')({ ...tw`hidden` })}
        }
    }
`;
