import { PropsWithChildren, ReactNode } from 'react';

import { User } from '@/types/user';

import { Header, Footer, StickyBar } from './components';

export default function CompanyLayout({
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="m-auto min-h-screen max-w-[435px] bg-white">
                {/*  overflow-hidden */}
                <Header />
                {children}
                <Footer />
                <StickyBar />
            </div>
        </div>
    );
}
