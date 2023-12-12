import tw, { css, styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`mb-[20px] flex w-full flex-col space-y-5 text-white`}
`;

export const InnerWrap = styled.div`
    ${tw`mx-auto max-w-[1200px]`}
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

export const BusinessWrap = styled.div``;

export const Title = styled.strong`
    ${tw`mb-[80px] block text-center text-[50px]`}
`;

export const BusinessContent = styled.div`
    ${tw`relative break-keep border-2 border-white p-[70px] text-center text-[25px] leading-[50px]`}
    clip-path: polygon(7% 0, 100% 0, 100% 0, 100% 86%, 93% 100%, 0 100%, 0 100%, 0 14%);

    &:before {
        ${tw`absolute left-[-9px] top-[21px] block h-[2px] w-[100px] -rotate-[30deg] bg-white content-['']`}
    }

    &:after {
        ${tw`absolute bottom-[22px] right-[-9px] block h-[2px] w-[100px] -rotate-[30deg] bg-white content-['']`}
    }
`;

export const ContactWrap = styled.div`
    ${tw``}
`;
export const ContactContent = styled.div`
    ${tw`text-base`}
`;
