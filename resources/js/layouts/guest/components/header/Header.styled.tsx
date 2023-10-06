import tw, { styled } from 'twin.macro';

export const Wrapper = styled.header`
    ${tw`relative w-full max-w-[435px] shrink-0 bg-white shadow-[0_4px_20px_0_rgba(0,0,0,0.05)]`}
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
