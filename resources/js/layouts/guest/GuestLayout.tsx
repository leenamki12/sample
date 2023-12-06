import { PropsWithChildren, useEffect } from 'react';

import Header from './components/header/Header';
import { useHeader } from '../ConnectLayout';
import * as S from '../styles/GuestLayout.styled';

export default function GuestLayout({ children }: PropsWithChildren) {
    const { pageTitle, setPageHeader } = useHeader();
    const currentPath = window.location.pathname;

    useEffect(() => {
        if (currentPath === '/') {
            setPageHeader('');
        }
    }, [currentPath]);

    return (
        <S.Wrapper>
            <Header />
            {children}
        </S.Wrapper>
    );
}
