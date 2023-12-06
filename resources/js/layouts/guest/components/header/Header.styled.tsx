import tw, { styled } from 'twin.macro';

export const Wrapper = styled.header`
    ${tw`relative h-[100px] w-full shrink-0 bg-blackPrimary`}
`;

export const InnerBox = styled.div`
    ${tw`relative mx-auto flex items-center`}
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
