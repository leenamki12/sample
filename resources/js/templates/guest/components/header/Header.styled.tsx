import { Link } from '@inertiajs/react';
import tw, { styled, screen } from 'twin.macro';

import allMenuBg from '@assets/common/bg_all_menu.png';
import allMenuBgMobile from '@assets/common/bg_all_menu_m.png';

export const Wrapper = styled.header`
    ${tw`sticky left-0 top-0 z-50 flex h-[100px] w-full items-center border-b-[1px] border-b-[#e9e9e9] bg-white`}

    ${screen('tablet')({ ...tw`h-auto` })}
`;

export const InnerBox = styled.div`
    ${tw`relative mx-auto flex w-full max-w-[1480px] justify-between px-[20px] transition-all`}

    ${screen('tablet')({ ...tw`flex-col items-center px-0` })}

    img {
        ${screen('tablet')({ ...tw`w-[160px]` })}
    }
`;

export const LogoButton = styled(Link)`
    ${tw`min-w-[152px] cursor-pointer p-2`}

    ${screen('tablet')({ ...tw`block min-w-[116px] py-[15px]` })}
`;

export const Nav = styled.ul`
    ${tw`flex items-center gap-[40px]`}

    ${screen('laptop')({ ...tw`hidden` })}

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

export const BuyTicketWrap = styled.div`
    ${tw`fixed right-[0px] top-[140px] z-40`}

    ${screen('tablet')({ ...tw`hidden` })}

    a {
        ${tw`absolute block h-[52px] w-[70%]`}
    }

    .melon {
        ${tw`left-[15%] top-[31%]`}
    }
    .yes24 {
        ${tw`left-[15%] top-[50%]`}
    }
`;

export const AllMenuButton = styled.div`
    ${tw`flex cursor-pointer items-center`}

    ${screen('tablet')({ ...tw`absolute right-2 top-[50%] -mt-[16px]` })}
`;

type AllMenuProps = {
    isActive: boolean;
};

export const AllMenu = styled.div<AllMenuProps>`
    ${tw`fixed top-[100px] z-[9999] flex h-[0] w-full items-center justify-center overflow-hidden duration-200`}

    background:#fff url(${allMenuBg}) no-repeat center center;

    @media (max-width: 768px) {
        background: #fff url(${allMenuBgMobile}) no-repeat center center / 100%;
    }

    ${screen('tablet')({ ...tw`top-[61px] border-t-[1px] border-[#e9e9e9]` })}

    ul {
        ${screen('tablet')({ ...tw`w-full` })}
    }

    ul li a {
        ${tw`block h-[68px] w-[400px] text-center text-[25px] font-light leading-[68px]`}

        ${screen('tablet')({ ...tw`mx-[20px] h-[56px] w-auto text-[22px] leading-[56px]` })}
    }

    ul li a.isActive {
        ${tw`font-bold shadow-md`}
    }

    ${({ isActive }) =>
        isActive &&
        tw`h-[calc(100%-100px)]
    `}
    ${({ isActive }) => isActive && screen('tablet')({ ...tw`h-[calc(100%-61px)]` })}
`;
