import tw, { styled } from 'twin.macro';

export const Wrapper = styled.header`
    ${tw`shrink-0 shadow-[0_4px_20px_0_rgba(0,0,0,0.05)]`}
`;

export const InnerBox = styled.div`
    ${tw`mx-auto flex h-20 max-w-7xl items-center justify-between px-8`}
`;

export const BackButton = styled.button`
    ${tw`relative flex h-[30px] w-[30px] items-center justify-center`}

    &:before {
        ${tw`absolute h-[15px] w-[15px] -rotate-45 border-l-[3px] border-t-[3px] border-[#333] content-['']`}
    }
`;

export const DetailTitle = styled.strong`
    ${tw`line-clamp-3 px-[20px] text-[17px] font-bold leading-[18px]`}
`;

export const Logo = styled.a`
    ${tw`-m-1.5 p-1.5`}

    img {
        ${tw`h-8 w-auto`}
    }
`;

export const MypageBox = styled.div`
    ${tw`flex shrink-0 items-center gap-x-8`}
`;
