import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`h-full min-h-screen`}
`;

export const SideWrapper = styled.div`
    ${tw`h-full`}
`;

export const ContentWrapper = styled.div`
    ${tw`lg:pl-64`}
`;

export const Header = styled.div`
    ${tw`sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between gap-x-4 border-b border-gray-600 bg-[#202123] px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:hidden lg:px-8`}
`;

export const MobileButton = styled.button`
    ${tw`-m-2.5 p-2.5 text-gray-300 lg:hidden`}
`;

type LinkProps = {
    active?: boolean;
};

export const HeaderInfo = styled.div<LinkProps>`
    ${tw`sticky top-[64px] flex h-[55px] items-center justify-end overflow-x-auto overflow-y-hidden scroll-smooth border-b-[1px] bg-white px-[20px] text-center text-sm
        duration-200 lg:top-0
    `}

    ${({ active }) => (active ? tw`translate-y-0` : tw`translate-y-[-100%]`)}
`;

export const Main = styled.main`
    ${tw`max-w-[1200px] px-2 py-2 sm:px-4 sm:py-10`}
`;
