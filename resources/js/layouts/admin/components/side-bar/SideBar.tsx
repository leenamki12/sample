import { Fragment } from 'react';

import { Disclosure, Transition } from '@headlessui/react';
import { ChevronRightIcon, Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from '@inertiajs/react';

import { transitionOpacity, transitionTranslateateX } from '@/consts';

import * as S from './SideBar.styled';

type Props = {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
function SideBar({ sidebarOpen, setSidebarOpen }: Props) {
    const navigation = [
        {
            name: 'Home',
            href: 'admin',
        },
        {
            name: '병원관리',
            children: [{ name: '대시보드', href: '' }],
        },
        {
            name: '기업관리',
            children: [
                { name: '대시보드', href: '' },
                { name: '목록', href: '' },
            ],
        },
    ];

    return (
        <>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <S.DialogWrap as="div" onClose={setSidebarOpen}>
                    <Transition.Child {...transitionOpacity}>
                        <S.Dim />
                    </Transition.Child>
                    <S.MobileWrapper>
                        <Transition.Child {...transitionTranslateateX}>
                            <S.Panel>
                                <Transition.Child {...transitionOpacity}>
                                    <S.CloseBox>
                                        <button
                                            type="button"
                                            className="-m-2.5 p-2.5"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </S.CloseBox>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <S.SideWrapper>
                                    <S.SideLogo>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="Your Company"
                                        />
                                    </S.SideLogo>
                                    <S.SideNav>
                                        <S.NavList role="list">
                                            {navigation.map(item => (
                                                <li key={item.name}>
                                                    {!item.children ? (
                                                        <S.NavLink
                                                            href={route(item.href)}
                                                            active={route()
                                                                .current(item.href)
                                                                .toString()}
                                                        >
                                                            {item.name}
                                                            {route().current(item.href)}
                                                        </S.NavLink>
                                                    ) : (
                                                        <Disclosure as="div">
                                                            {({ open }) => (
                                                                <>
                                                                    <S.NavButton>
                                                                        <ChevronRightIcon
                                                                            className={classNames(
                                                                                open
                                                                                    ? 'rotate-90 text-gray-500'
                                                                                    : 'text-gray-400',
                                                                                'h-5 w-5 shrink-0'
                                                                            )}
                                                                            aria-hidden="true"
                                                                        />
                                                                        {item.name}
                                                                    </S.NavButton>
                                                                    <Disclosure.Panel
                                                                        as="ul"
                                                                        className="mt-1 px-2"
                                                                    >
                                                                        {item.children.map(
                                                                            subItem => (
                                                                                <li
                                                                                    key={
                                                                                        subItem.name
                                                                                    }
                                                                                >
                                                                                    <Link
                                                                                        href={route(
                                                                                            subItem.href
                                                                                        )}
                                                                                        className="block rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-gray-700"
                                                                                    >
                                                                                        {
                                                                                            subItem.name
                                                                                        }
                                                                                    </Link>
                                                                                </li>
                                                                            )
                                                                        )}
                                                                    </Disclosure.Panel>
                                                                </>
                                                            )}
                                                        </Disclosure>
                                                    )}
                                                </li>
                                            ))}
                                        </S.NavList>
                                        <a
                                            href="#"
                                            className="group -mx-2 mt-auto flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                                        >
                                            <Cog6ToothIcon
                                                className="h-6 w-6 shrink-0"
                                                aria-hidden="true"
                                            />
                                            Settings
                                        </a>
                                    </S.SideNav>
                                </S.SideWrapper>
                            </S.Panel>
                        </Transition.Child>
                    </S.MobileWrapper>
                </S.DialogWrap>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <S.DesktopWapper>
                <S.SideWrapper>
                    <S.SideLogo>
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Your Company"
                        />
                    </S.SideLogo>
                    <S.SideNav>
                        <S.NavList role="list">
                            {navigation.map(item => (
                                <li key={item.name}>
                                    {!item.children ? (
                                        <S.NavLink
                                            href={route(item.href)}
                                            active={route().current(item.href).toString()}
                                        >
                                            {item.name}
                                            {route().current(item.href)}
                                        </S.NavLink>
                                    ) : (
                                        <Disclosure as="div">
                                            {({ open }) => (
                                                <>
                                                    <S.NavButton>
                                                        <ChevronRightIcon
                                                            className={classNames(
                                                                open
                                                                    ? 'rotate-90 text-gray-400'
                                                                    : 'text-gray-400',
                                                                'h-5 w-5 shrink-0'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                        {item.name}
                                                    </S.NavButton>
                                                    <Disclosure.Panel as="ul" className="mt-1 px-2">
                                                        {item.children.map(subItem => (
                                                            <li key={subItem.name}>
                                                                <S.SubNavLink
                                                                    href={route(subItem.href)}
                                                                    active={route()
                                                                        .current(subItem.href)
                                                                        .toString()}
                                                                >
                                                                    {subItem.name}
                                                                </S.SubNavLink>
                                                            </li>
                                                        ))}
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    )}
                                </li>
                            ))}
                        </S.NavList>
                        <a
                            href="#"
                            className="group -mx-2 mt-auto flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                        >
                            <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            Settings
                        </a>
                    </S.SideNav>
                </S.SideWrapper>
            </S.DesktopWapper>
        </>
    );
}

export default SideBar;
