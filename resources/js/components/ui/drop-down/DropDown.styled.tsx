import { Menu } from '@headlessui/react';
import tw, { styled } from 'twin.macro';

export const MenuWrap = styled(Menu)`
    ${tw`relative inline-block w-full text-left`}
`;

export const MenuButton = styled(Menu.Button)`
    ${tw`inline-flex h-[32px] w-full items-center justify-between bg-white px-[12px] text-left leading-[32px]`}
`;

export const MenuItems = styled(Menu.Items)`
    ${tw`absolute right-0 z-[1] w-full origin-top-right bg-white focus:outline-none`}
`;

export const MenuItem = styled(Menu.Item)`
    a,
    button {
        ${tw`flex items-center justify-between px-[12px] leading-[32px]`}
    }
`;
