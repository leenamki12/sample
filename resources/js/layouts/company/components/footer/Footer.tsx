import FooterLogo from '@assets/common/footer-logo.svg';

import * as S from './Footer.styled';

function Footer() {
    return (
        <S.Container>
            <S.LinkList>
                <S.Item>
                    <a href="#">회사소개</a>
                </S.Item>
                <S.Item>
                    <a href="#">이용약관</a>
                </S.Item>
                <S.Item>
                    <a href="#">개인정보처리방침</a>
                </S.Item>
                <S.Item>
                    <a href="#">병원입점신청</a>
                </S.Item>
            </S.LinkList>
            <S.FooterLogo>
                <a href="/">
                    <img src={FooterLogo} alt="위드닥" />
                </a>
            </S.FooterLogo>
            <S.TextBox>
                <strong>주식회사 가치브라더</strong>
                <p>
                    <strong>대표이사</strong> 임규성
                    <br />
                    <strong>사업자 등록번호</strong> 119-86-81107
                    <br />
                    <strong>구로 오피스</strong> 서울시 구로구 디지털로 31길 19, 404호
                    <br />
                    <strong>강남 오피스</strong> 서울시 강남구 강남대로 302, 6층
                </p>
                <S.Copyright>Copyright © 2023 withbrother. All rights reserved.</S.Copyright>
            </S.TextBox>
        </S.Container>
    );
}

export default Footer;
