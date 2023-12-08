import { PropsWithChildren } from 'react';

import Header from './components/header/Header';
import * as S from '../styles/GuestLayout.styled';

export default function GuestLayout({ children }: PropsWithChildren) {
    return (
        <S.Wrapper>
            <Header />
            {children}
        </S.Wrapper>
    );
}
