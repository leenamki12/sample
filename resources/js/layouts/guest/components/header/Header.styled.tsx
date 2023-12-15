import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.header`
    ${tw`relative flex h-[100px] w-full items-center border-b-[1px] border-b-white bg-blackPrimary`}

    ${screen('tablet')({ ...tw`h-auto` })}
`;

export const InnerBox = styled.div`
    ${tw`relative mx-auto flex w-full max-w-[1480px] justify-between px-[20px] transition-all`}

    ${screen('tablet')({ ...tw`flex-col items-center px-0` })}
`;

export const LogoButton = styled.a`
    ${tw`min-w-[152px] cursor-pointer p-2`}

    ${screen('tablet')({ ...tw`block min-w-[116px] py-[15px]` })}
`;

export const Nav = styled.ul`
    ${tw`flex items-center gap-[50px] pr-2`}

    ${screen('tablet')({ ...tw`w-full justify-center gap-[10px] border-t border-[#333] pr-0` })}

    li > a {
        ${tw`font-pretendard text-[20px] text-white`}

        ${screen('desktop')({ ...tw`text-lg` })}

        ${screen('tablet')({ ...tw`block p-[15px] text-base` })}
    }
`;
