import { useState, PropsWithChildren, ReactNode, useEffect } from 'react';

import { Bars3Icon } from '@heroicons/react/24/outline';

import { User } from '@/types/user';

import SideBar from './components/side-bar/SideBar';

import * as S from './AdminLayout.styled';

export default function AdminLayout({
    user,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [scrollDelta, setScrollDelta] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const direction = scrollY < lastScrollY;
            if (direction !== scrollDelta) {
                setScrollDelta(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollDelta]);

    return (
        <S.Wrapper>
            <S.SideWrapper>
                <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            </S.SideWrapper>
            <S.ContentWrapper>
                <S.Header>
                    <S.MobileButton type="button" onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </S.MobileButton>

                    <div className="flex items-center gap-x-4 text-white">위드닥 관리자</div>
                </S.Header>
                <S.HeaderInfo active={scrollDelta}>{user.identification}</S.HeaderInfo>
                <main className="max-w-[1200px] px-0 sm:px-4">{children}</main>
            </S.ContentWrapper>
        </S.Wrapper>
    );
}
