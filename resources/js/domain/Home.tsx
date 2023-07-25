import { Head, Link } from '@inertiajs/react';

import Logo from '@assets/common/logo.svg';

import * as S from './Home.styled';

export default function Home() {
    return (
        <S.Wrapper>
            <Head title="Welcome" />
            <img src={Logo} />
            <S.InnerBox>
                <div>
                    <Link href={'company'}>기업</Link>
                </div>
                <div>
                    <Link href={'hospital'}>병원</Link>
                </div>
            </S.InnerBox>
        </S.Wrapper>
    );
}
