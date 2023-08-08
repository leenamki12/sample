import React from 'react';

import { ChevronRightIcon } from '@heroicons/react/20/solid';

import { ReservationItem } from '../../pages/Dashboard';

const statuses: { [key: string]: string } = {
    pending: 'text-gray-500 bg-gray-100/10 ring-1 ring-inset ring-gray-400',
    completed: 'text-indigo-400 bg-indigo-400/10 ring-1 ring-inset ring-indigo-400',
    waiting: 'text-rose-400 bg-rose-400/10 ring-1 ring-inset ring-rose-400',
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export type Props = {
    Reservations: ReservationItem[];
};

function Table({ Reservations }: Props) {
    return (
        <ul role="list" className="divide-y divide-white/5">
            {Reservations.map(item => (
                <li
                    key={item.id}
                    className="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8"
                >
                    <div className="min-w-0 flex-auto">
                        <div className="flex items-center gap-x-3">
                            <div
                                className={classNames(
                                    statuses[item.status],
                                    'flex-none',
                                    'rounded-full',
                                    'p-1'
                                )}
                            >
                                <div className="h-2 w-2 rounded-full bg-current" />
                            </div>
                            <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                                <a className="flex gap-x-2">
                                    <span className="truncate">{item.customer}</span>
                                    <span className="text-gray-400">/</span>
                                    <span className="whitespace-nowrap">{item.treatements}</span>
                                    <span className="absolute inset-0" />
                                </a>
                            </h2>
                        </div>
                        <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                            <p className="truncate">{item.date}</p>
                            <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <p className="whitespace-nowrap">{item.dateTime}</p>
                            <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            <p className="whitespace-nowrap">{item.company.name}</p>
                        </div>
                    </div>
                    <div
                        className={classNames(
                            statuses[item.status],
                            'flex-none rounded-full px-2 py-1 text-xs font-medium'
                        )}
                    >
                        {item.status}
                    </div>
                    <ChevronRightIcon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                    />
                </li>
            ))}
        </ul>
    );
}

export default Table;
