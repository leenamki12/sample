import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`mb-[20px] flex w-full flex-col space-y-5 text-white`}
`;

export const InnerWrap = styled.div`
    ${tw`mx-auto max-w-[1240px] px-[20px]`}
`;

export const LogoWrap = styled.div`
    ${tw`flex items-center justify-center py-[200px]`}

    img {
        ${tw`w-full max-w-[490px]`}

        ${screen('tablet')({ ...tw`max-w-[170px]` })}
    }

    ${screen('tablet')({ ...tw`py-[66px]` })}
`;

export const AlbumWrap = styled.div`
    ${tw`w-full overflow-hidden pb-[100px]`}
`;

export const AlbumContent = styled.div`
    &:last-of-type {
        ${tw`mt-[20px]`}
    }
`;

export const More = styled.div`
    ${tw`mt-[120px] flex justify-center`}

    ${screen('tablet')({ ...tw`mt-[70px]` })}
`;

export const MoreButton = styled.button`
    ${tw`flex h-[44px] items-center gap-[10px] rounded-full border-2 border-white px-[20px] font-bold text-white`}

    img {
        ${tw`w-[21px]`}
    }
`;

export const BusinessWrap = styled.div`
    ${tw`p-[100px 0 80px 0]`}

    ${screen('tablet')({ ...tw`py-[50px]` })}
`;

export const ContactWrap = styled.div`
    ${tw`pt-[100px]`}

    ${screen('tablet')({ ...tw`pt-[80px]` })}
`;
