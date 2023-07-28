import FooterLogo from '@assets/common/footer-logo.svg';

import * as S from './Footer.styled';

function Footer() {
    return (
        <S.Container>
            <div className="mb-[30px]">
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
            </div>
            <div className="mb-[25px]">
                <a href="/" className="inline-block">
                    <img src={FooterLogo} alt="위드닥" className="h-[20px] w-auto" />
                </a>
            </div>
            <div className="text-[11px] leading-[22px] text-[#aaa] ">
                <strong>주식회사 가치브라더</strong>
                <p>
                    <strong>대표이사</strong> 임규성
                </p>
                <p>
                    <strong>사업자 등록번호</strong> 119-86-81107
                </p>
                <p>
                    <strong>구로 오피스</strong> 서울시 구로구 디지털로 31길 19, 404호
                </p>
                <p>
                    <strong>강남 오피스</strong> 서울시 강남구 강남대로 302, 6층
                </p>
                <p className="mt-[20px]">Copyright © 2023 withbrother. All rights reserved.</p>
            </div>
        </S.Container>
    );
}

export default Footer;
