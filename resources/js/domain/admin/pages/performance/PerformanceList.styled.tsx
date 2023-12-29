import tw, { styled } from 'twin.macro';

export const ImageBox = styled.div`
    ${tw`h-[100px] w-[100px] overflow-hidden`}

    img {
        ${tw`min-h-[100px] w-full`}
    }
`;

export const TitleBox = styled.div`
    ${tw`max-w-[200px] whitespace-pre sm:max-w-[100%]`}
`;
