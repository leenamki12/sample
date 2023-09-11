import { useState } from 'react';

import { Head, router } from '@inertiajs/react';

import ApplicationLogo from '@/components/inertia/ApplicationLogo';
import { TextButton } from '@/components/ui';

import CodeLogin from './auth/pages/CodeLogin';
import Login from './auth/pages/Login';

import * as S from './Home.styled';

type LoginType = 'code' | 'user';

export default function Home() {
    const [loginFormType, setLoginFormType] = useState<LoginType>('code');

    const handleClickRouteLink = (link: string) => {
        router.visit(route(link));
    };
    return (
        <S.Wrapper>
            <Head title="Welcome" />
            <S.LoginWrapper className="w-[435px]">
                <S.ImageBox>
                    <ApplicationLogo width="w-[94px]" />
                </S.ImageBox>
                <S.LogoInfoText>로그인 후 위드닥이 준비한 의료혜택을 누려보세요</S.LogoInfoText>
                <S.Tab>
                    <S.TabButton
                        type="button"
                        onClick={() => setLoginFormType('code')}
                        isActive={loginFormType === 'code'}
                    >
                        기업코드
                    </S.TabButton>
                    <S.TabButton
                        type="button"
                        onClick={() => setLoginFormType('user')}
                        isActive={loginFormType === 'user'}
                    >
                        로그인
                    </S.TabButton>
                </S.Tab>

                {loginFormType === 'code' ? <CodeLogin /> : <Login />}

                <S.ButtonGroup>
                    <TextButton
                        label="아이디 찾기"
                        color="#888"
                        onClick={() => handleClickRouteLink('password.request')}
                    />
                    <S.VeticalDivider />
                    <TextButton label="비밀번호 찾기" color="#888" />
                    <S.VeticalDivider />
                    <TextButton
                        label="회원가입"
                        color="#888"
                        onClick={() => handleClickRouteLink('register')}
                    />
                </S.ButtonGroup>
                <S.Divider />
                <S.FooterInfo>
                    위드닥 고객사 임직원들을 위한 제휴몰입니다.
                    <br />
                    임직원 인증코드로 로그인한 고객만 세부내용을 하실수 있습니다.
                    <br />
                    <br />
                    이용중 불편한 사항이 있는 경우
                    <br />
                    콜센터 <a href="tel:02-546-7946">02-546-7946</a>으로 문의하시기 바랍니다.
                    <br /> 콜센터 운영시간 : 평일 09:00~18:00
                </S.FooterInfo>
            </S.LoginWrapper>
        </S.Wrapper>
    );
}
