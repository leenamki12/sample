import tw, { styled } from 'twin.macro';

export const Wrapper = styled.header`
    ${tw`relative shrink-0 shadow-[0_4px_20px_0_rgba(0,0,0,0.05)]`}
`;

export const InnerBox = styled.div`
    ${tw`mx-auto flex h-20 max-w-7xl items-center justify-between`}
`;

export const BackButton = styled.button`
    ${tw`flex h-full items-center justify-center px-[20px]`}
`;

export const DetailTitle = styled.strong`
    ${tw`line-clamp-3 px-[20px] text-[17px] font-bold leading-[18px]`}
`;

export const Logo = styled.a`
    ${tw`flex h-full justify-center px-[30px]`}

    img {
        ${tw`w-[67px]`}
    }
`;

export const MypageBox = styled.div`
    ${tw`flex h-full shrink-0 items-center`}
`;
