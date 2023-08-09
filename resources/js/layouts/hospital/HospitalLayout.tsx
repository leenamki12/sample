import { useState, PropsWithChildren, ReactNode, Fragment } from 'react';

import { Dialog, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';
import { Link } from '@inertiajs/react';

import { User } from '@/types/user';

import Sidebar from './components/side-bar/SideBar';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function HospitalLayout({
    user,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const userNavigation = [
        { name: 'Your profile', href: '#' },
        { name: 'Sign out', href: 'logout' },
    ];

    return (
        <div className="h-full min-h-screen bg-gray-900">
            <div className="h-full">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            </div>
            <div className="lg:pl-72">
                <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-600 bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                    <button
                        type="button"
                        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Separator */}
                    <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

                    <div className="flex flex-1 gap-x-4 self-stretch bg-gray-900">
                        <form className="relative flex flex-1" action="#" method="GET">
                            <label htmlFor="search-field" className="sr-only">
                                Search
                            </label>
                            <MagnifyingGlassIcon
                                className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            <input
                                id="search-field"
                                className="block h-full w-full border-0 bg-gray-900 py-0 pl-8 pr-0 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                placeholder="Search..."
                                type="search"
                                name="search"
                            />
                        </form>
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            <button
                                type="button"
                                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Separator */}
                            <div
                                className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
                                aria-hidden="true"
                            />

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative">
                                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                                    <span className="sr-only">Open user menu</span>
                                    <span className="hidden lg:flex lg:items-center">
                                        <span
                                            className="text-sm font-semibold leading-6 text-white"
                                            aria-hidden="true"
                                        >
                                            {user.name}
                                        </span>
                                        <ChevronDownIcon
                                            className="ml-2 h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                        {userNavigation.map(item => (
                                            <Menu.Item key={item.name}>
                                                {({ active }) => (
                                                    <Link
                                                        href={route('logout')}
                                                        className={classNames(
                                                            active ? 'bg-gray-50' : '',
                                                            'block w-full px-3 py-1 text-sm leading-6 text-gray-900'
                                                        )}
                                                        method="post"
                                                        as="button"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
                <main className="px-4 sm:px-6 lg:px-8">{children}</main>
            </div>
        </div>
    );
}
