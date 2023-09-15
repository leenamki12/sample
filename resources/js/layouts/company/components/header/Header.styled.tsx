import tw, { styled } from 'twin.macro';

export const Wrapper = styled.header`
    ${tw`relative shrink-0 shadow-[0_4px_20px_0_rgba(0,0,0,0.05)]`}
`;

export const InnerBox = styled.div`
    ${tw`relative mx-auto flex h-20 items-center`}
`;

export const BackButton = styled.button`
    ${tw`absolute left-[20px] top-1/2 -translate-y-1/2 p-[5px]`}
`;

export const PageTitle = styled.div`
    ${tw`flex w-full justify-center px-[80px]`}

    strong {
        ${tw`line-clamp-3 text-[17px] font-bold leading-[18px]`}
    }
`;

export const Logo = styled.a`
    ${tw`flex h-full justify-center px-[30px]`}

    img {
        ${tw`w-[67px]`}
    }
`;
