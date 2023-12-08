import tw, { styled } from 'twin.macro';

export const Wrapper = styled.header`
    ${tw`relative flex h-[100px] w-full items-center border-b-[1px] border-b-white bg-blackPrimary`}
`;

export const InnerBox = styled.div`
    ${tw`relative mx-auto flex w-full max-w-[1520px] justify-between`}
`;

export const LogoButton = styled.a`
    ${tw`cursor-pointer p-2`}
`;

export const Nav = styled.ul`
    ${tw`flex items-center gap-[50px] pr-2`}

    li > a {
        ${tw`font-pretendard text-white`}
    }
`;
