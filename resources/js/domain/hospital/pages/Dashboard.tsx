import { Fragment } from 'react';

import { Menu, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

import ReservationList from '../components/reservation-list';

export type ReservationItem = {
    id: number;
    date: string;
    dateTime: string;
    treatements: string[];
    customer: string;
    birthdate?: string;
    company: {
        name: string;
        team: string;
        staff: string;
    };
    contact: string;
    detail?: string;
    status: 'pending' | 'completed' | 'waiting';
};

const Reservations: ReservationItem[] = [
    {
        id: 1,
        date: '2023-01-23',
        dateTime: 'PM 1:00',
        treatements: ['미니리프팅'],
        customer: '김가치',
        birthdate: '2023-01-23',
        company: {
            name: '가치브라더',
            team: '마케팅',
            staff: '김스텝',
        },
        contact: '010-1234-5678',
        detail: '문의내용을 작성해주세요',
        status: 'waiting',
    },
    {
        id: 2,
        date: '2023-01-23',
        dateTime: 'PM 2:00',
        treatements: ['지방성형'],
        customer: '김가치',
        birthdate: '2023-01-23',
        company: {
            name: '가치브라더',
            team: '마케팅',
            staff: '김스텝',
        },
        contact: '010-1234-5678',
        detail: '문의내용을 작성해주세요',
        status: 'pending',
    },
    {
        id: 3,
        date: '2023-01-23',
        dateTime: 'PM 2:00',
        treatements: ['지방성형'],
        customer: '김가치',
        birthdate: '2023-01-23',
        company: {
            name: '가치브라더',
            team: '마케팅',
            staff: '김스텝',
        },
        contact: '010-1234-5678',
        detail: '문의내용을 작성해주세요',
        status: 'completed',
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}
export default function Dashboard() {
    return (
        <>
            <div className="h-full">
                <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
                    <h1 className="text-base font-semibold leading-7 text-white">상담현황</h1>

                    {/* Sort dropdown */}
                    <Menu as="div" className="relative">
                        <Menu.Button className="flex items-center gap-x-1 text-sm font-medium leading-6 text-white">
                            Sort by
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-500"
                                aria-hidden="true"
                            />
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
                            <Menu.Items className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-50' : '',
                                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                            )}
                                        >
                                            Name
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-50' : '',
                                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                            )}
                                        >
                                            Date updated
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-50' : '',
                                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                            )}
                                        >
                                            Environment
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </header>

                <ReservationList Reservations={Reservations} />
            </div>
        </>
    );
}
