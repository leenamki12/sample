import { JSXElementConstructor, PropsWithChildren, ReactElement, ReactNode, useState } from 'react';
import React from 'react';

import { User } from '@/types/user';

import { Header, Footer, StickyBar } from './components';

export default function CompanyLayout({
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [isHistory, setIsHitory] = useState(false);

    const clonedChildren = React.cloneElement(
        children as ReactElement<any, string | JSXElementConstructor<any>>,
        {
            setIsHitory: setIsHitory,
        }
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="m-auto min-h-screen max-w-[435px] bg-white">
                {/*  overflow-hidden */}
                <Header history={isHistory} />
                {clonedChildren}
                <Footer />
                <StickyBar />
            </div>
        </div>
    );
}
