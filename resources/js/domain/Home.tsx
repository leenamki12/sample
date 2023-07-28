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
                    <Link href={'company'} className="text-center">
                        제휴 병원
                        <br /> 혜택 보러가기
                    </Link>
                </div>
                <div>
                    <Link href={'hospital'}>우리 병원 관리하기</Link>
                </div>
            </S.InnerBox>
            <Link href="">제휴 기업 신청하기</Link>
        </S.Wrapper>
    );
}
