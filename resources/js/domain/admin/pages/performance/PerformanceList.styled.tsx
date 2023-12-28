import tw, { styled } from 'twin.macro';

export const ImageBox = styled.div`
    ${tw`h-[100px] w-[100px]`}

    img {
        width: 100%;
        height: 100%;
    }
`;

export const TitleBox = styled.div`
    ${tw`max-w-[200px] whitespace-pre sm:max-w-[100%]`}
`;
