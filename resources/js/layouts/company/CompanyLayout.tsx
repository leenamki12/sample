import { PropsWithChildren, ReactNode } from 'react';

import { User } from '@/types/user';

import Header from './components/header';

export default function CompanyLayout({
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="m-auto min-h-screen max-w-[435px] overflow-hidden bg-white">
                <Header />
                <div className="px-8 pt-8">{children}</div>
            </div>
        </div>
    );
}
