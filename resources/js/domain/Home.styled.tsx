import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
    ${tw`flex h-screen w-full flex-col items-center space-y-5 bg-gray-100`}
`;

export const LoginWrapper = styled.div`
    ${tw`p-[60px 30px 80px] h-full bg-white`}
`;

export const ImageBox = styled.div`
    ${tw`mb-[20px] flex justify-center`}
`;

export const LogoInfoText = styled.div`
    ${tw`mb-[30px] text-center text-sm text-[#666]`}
`;

export const Tab = styled.div`
    ${tw`mb-[30px] flex`}
`;

type TabButtonProps = {
    isActive: boolean;
};

export const TabButton = styled.button<TabButtonProps>`
    ${tw`h-[50px] flex-1 border-b border-[#dadada] duration-100`}

    ${({ isActive }) => isActive && tw`border-b-[2px] border-[#111] font-bold`};

    &:hover {
        ${tw`opacity-80`}
    }
`;

export const Divider = styled.div`
    ${tw`ml-[-30px] mr-[-30px] mt-[30px] h-[10px] bg-[#f8f8f8]`}
`;

export const FooterInfo = styled.div`
    ${tw`pt-[30px] text-center text-sm leading-[24px] text-[#666]`}

    a {
        ${tw`font-bold`}
    }
`;

export const ButtonGroup = styled.div`
    ${tw`mt-[25px] flex items-center justify-center gap-[15px]`}
`;

export const VeticalDivider = styled.span`
    ${tw`block h-[10px] w-[1px] bg-[#1743B1] opacity-50`}
`;
