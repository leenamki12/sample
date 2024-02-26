import { PropsWithChildren } from 'react';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import * as s from './GuestLayout.styled';

export default function GuestLayout({ children }: PropsWithChildren) {
    return (
        <s.Wrapper>
            <Header />
            <div className="w-full overflow-x-hidden">{children}</div>
            <Footer />
        </s.Wrapper>
    );
}
