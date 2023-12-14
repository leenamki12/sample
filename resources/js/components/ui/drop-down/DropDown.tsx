import { Fragment } from 'react';

import { Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

import * as S from './DropDown.styled';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

type TargetType = '_blank' | '_self';

export type LinkProps = {
    label: string;
    path: string;
    target?: TargetType;
};

export type DropDownProps = {
    label: string;
    items: LinkProps[];
};

export default function DropDown({ label, items }: DropDownProps) {
    return (
        <S.MenuWrap as="div">
            {({ open }) => (
                <>
                    <div>
                        <S.MenuButton>
                            {label}
                            <ChevronDownIcon
                                className={classNames(
                                    open ? 'rotate-180' : 'rotate-0',
                                    '-mr-1 h-5 w-5 text-[#333] transition-all'
                                )}
                                aria-hidden="true"
                            />
                        </S.MenuButton>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                    >
                        <S.MenuItems>
                            {items.map(item => (
                                <S.MenuItem key={item.label} as={'div'}>
                                    {({ active }) => (
                                        <a
                                            href={item.path}
                                            target={item.target}
                                            className={classNames(active ? 'bg-gray-100' : '')}
                                        >
                                            {item.label}
                                            <ChevronRightIcon
                                                className="-mr-1 h-5 w-5 text-[#888]"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    )}
                                </S.MenuItem>
                            ))}
                        </S.MenuItems>
                    </Transition>
                </>
            )}
        </S.MenuWrap>
    );
}
