import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`flex w-full flex-col space-y-5 text-white`}
`;

export const LogoWrap = styled.div`
    ${tw`flex items-center justify-center py-[200px]`}

    img {
        ${tw`w-full max-w-[490px]`}

        ${screen('tablet')({ ...tw`max-w-[170px]` })}
    }

    ${screen('tablet')({ ...tw`py-[66px]` })}
`;

export const PerformanceWrap = styled.div`
    ${tw`w-full overflow-hidden pb-[100px]`}
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
