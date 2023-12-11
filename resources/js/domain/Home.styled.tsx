import tw, { css, styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`flex w-full flex-col items-center space-y-5`}
`;

export const LogoWrap = styled.div`
    ${tw`flex h-[500px] items-center justify-center`}

    img {
        ${tw`w-[490px]`}
    }
`;

export const AlbumWrap = styled.div`
    ${tw`w-full space-y-[20px] overflow-hidden`}
`;

export const AlbumContent = styled.div`
    ${tw`w-full`}
`;

export const AlbumList = styled.ul`
    ${tw`flex items-center justify-center`}
`;

export const AlbumItem = styled.li`
    ${tw`mr-[20px] h-[450px] min-w-[390px] bg-gray-100`}
`;

export const More = styled.div`
    ${css`
        margin-top: 120px !important;
    `};
    ${tw`flex justify-center`}
`;

export const MoreButton = styled.button`
    ${tw`flex h-[44px] items-center gap-[10px] rounded-full border-[1px] border-white px-[20px] text-white`}

    img {
        ${tw`w-[21px]`}
    }
`;
