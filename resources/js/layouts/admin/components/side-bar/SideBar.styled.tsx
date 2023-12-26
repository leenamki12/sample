import { Dialog, Disclosure } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import tw, { styled } from 'twin.macro';

export const Dim = styled.div`
    ${tw`fixed inset-0 bg-gray-900/80`}
`;

export const DesktopWapper = styled.div`
    ${tw`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col`}
`;

export const SideWrapper = styled.div`
    ${tw`flex grow flex-col gap-y-5 overflow-y-auto bg-[#202123] px-6 pb-4`}
`;

export const SideLogo = styled.div`
    ${tw`flex h-16 shrink-0 items-center`}
`;

export const SideNav = styled.nav`
    ${tw`flex flex-1 flex-col`}
`;

export const DialogWrap = styled(Dialog)`
    ${tw`relative z-50 lg:hidden`}
`;

export const NavList = styled.ul`
    ${tw`-mx-2 space-y-1`}
`;

type LinkProps = {
    active?: string;
};

export const NavLink = styled(Link)<LinkProps>`
    ${({ active }) =>
        active === 'true'
            ? tw`bg-[#555] text-white`
            : tw`text-gray-400 hover:bg-[#555] hover:text-white`}

    ${tw`flex gap-x-3 rounded-md p-2  pl-4 text-sm font-semibold leading-6`}
`;

export const NavButton = styled(Disclosure.Button)<LinkProps>`
    ${({ active }) =>
        active === 'true'
            ? tw`bg-[#555] text-white`
            : tw`text-gray-400 hover:bg-[#555] hover:text-white`}

    ${tw`flex w-full items-center justify-between gap-x-3 rounded-md p-2 pl-4 text-sm font-semibold leading-6`}
`;

export const SubNavLink = styled(Link)<LinkProps>`
    ${({ active }) => (active === 'true' ? tw` text-white` : tw`text-gray-400 hover:opacity-50`)}

    ${tw`flex gap-x-3 rounded-md p-2 pl-4 text-sm font-semibold leading-6`}
`;

export const MobileWrapper = styled.div`
    ${tw`fixed inset-0 flex`}
`;

export const Panel = styled(Dialog.Panel)`
    ${tw`relative mr-16 flex w-full max-w-xs flex-1`}
`;

export const CloseBox = styled.div`
    ${tw`absolute left-full top-0 flex w-16 justify-center pt-5`}
`;
