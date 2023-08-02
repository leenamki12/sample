import { PropsWithChildren, ReactNode } from 'react';

import { User } from '@/types/user';

import Footer from './components/footer';
import Header from './components/header';
import StickyBar from './components/sticky-bar';

export default function CompanyLayout({
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="m-auto min-h-screen max-w-[435px] bg-white">
                {/*  overflow-hidden */}
                <Header />
                <div>{children}</div>
                <Footer />
                <StickyBar />
            </div>
        </div>
    );
}
