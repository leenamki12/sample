import { PropsWithChildren } from 'react';

import Header from './components/header/Header';
import * as S from '../styles/GuestLayout.styled';

export default function GuestLayout({ children }: PropsWithChildren) {
    return (
        <S.Wrapper>
            <Header />
            <div className="w-full pb-[75px]">{children}</div>
        </S.Wrapper>
    );
}
