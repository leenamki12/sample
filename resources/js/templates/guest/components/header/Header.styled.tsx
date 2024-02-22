import { Link } from '@inertiajs/react';
import tw, { styled, screen } from 'twin.macro';

export const Wrapper = styled.header`
    ${tw`sticky left-0 top-0 z-50 flex h-[100px] w-full items-center border-b-[1px] border-b-[#e9e9e9] bg-white`}

    ${screen('tablet')({ ...tw`h-auto` })}
`;

export const InnerBox = styled.div`
    ${tw`relative mx-auto flex w-full max-w-[1480px] justify-between px-[20px] transition-all`}

    ${screen('tablet')({ ...tw`flex-col items-center px-0` })}
`;

export const LogoButton = styled(Link)`
    ${tw`min-w-[152px] cursor-pointer p-2`}

    ${screen('tablet')({ ...tw`block min-w-[116px] py-[15px]` })}
`;

export const Nav = styled.ul`
    ${tw`flex items-center gap-[40px]`}

    ${screen('tablet')({ ...tw`w-full justify-center gap-[10px] border-t border-[#333] pr-0` })}

    li > a {
        ${tw`text-[20px]`}
        ${screen('desktop')({ ...tw`text-lg` })}

        ${screen('tablet')({ ...tw`block p-[15px] text-base` })}
    }

    li > a:hover {
        ${tw`opacity-80`}
    }
`;

type NavItemProps = {
    active: boolean;
};

export const NavItem = styled.li<NavItemProps>`
    a {
        ${({ active }) => (active ? tw`text-green` : tw`text-white`)}
    }
`;
