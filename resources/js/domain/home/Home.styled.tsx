import tw, { css, styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`mb-[20px] flex w-full flex-col space-y-5 text-white`}
`;

export const InnerWrap = styled.div`
    ${tw`mx-auto max-w-[1200px]`}
`;

export const LogoWrap = styled.div`
    ${tw`p-[200px 0 100px] flex items-center justify-center`}

    img {
        ${tw`w-full max-w-[490px]`}
    }
`;

export const AlbumWrap = styled.div`
    ${tw`w-full space-y-5 overflow-hidden py-[100px]`}
`;

export const AlbumContent = styled.div`
    ${tw`mt-[20px]`}
`;

export const More = styled.div`
    ${css`
        margin-top: 120px !important;
    `};
    ${tw`flex justify-center`}
`;

export const MoreButton = styled.button`
    ${tw`flex h-[44px] items-center gap-[10px] rounded-full border-2 border-white px-[20px] font-bold text-white`}

    img {
        ${tw`w-[21px]`}
    }
`;

export const BusinessWrap = styled.div`
    ${tw`p-[100px 0 80px 0]`}
`;

export const ContactWrap = styled.div`
    ${tw`pt-[100px]`}
`;
