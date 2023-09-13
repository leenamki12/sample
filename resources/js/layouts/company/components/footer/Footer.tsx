import { useState } from 'react';

import { BasicModal, InnerPrivacyModal } from '@/components/ui';
import FooterLogo from '@assets/common/footer-logo.svg';

import * as S from './Footer.styled';

type ModalType = {
    title: string;
    content: string | React.ReactNode;
};

function Footer() {
    const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);
    const [modalData, setModalData] = useState<ModalType>();

    const modalDatas: ModalType[] = [
        {
            title: '이용약관',
            content: (
                <>
                    이용약관
                    <br />
                    이용약관
                </>
            ),
        },
        {
            title: '개인정보처리방침',
            content: `개인정보처리방침
            개인정보처리방침`,
        },
    ];

    const handlePrivacyModal = (e: React.MouseEvent, item: ModalType) => {
        e.preventDefault();

        setModalData(item);
        setShowPrivacyModal(true);
    };

    const handleClosePrivacyModal = () => {
        setShowPrivacyModal(false);
    };
    return (
        <S.Wrapper>
            <S.LinkList>
                <S.Item>
                    <a href="#">회사소개</a>
                </S.Item>
                {modalDatas.map(item => (
                    <S.Item key={item.title}>
                        <button onClick={e => handlePrivacyModal(e, item)}>{item.title}</button>
                    </S.Item>
                ))}
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
            {modalData && (
                <BasicModal show={showPrivacyModal} onClose={handleClosePrivacyModal} maxWidth="md">
                    <InnerPrivacyModal title={modalData.title} close={handleClosePrivacyModal}>
                        {modalData.content}
                    </InnerPrivacyModal>
                </BasicModal>
            )}
        </S.Wrapper>
    );
}

export default Footer;
