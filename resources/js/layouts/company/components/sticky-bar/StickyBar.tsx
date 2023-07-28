import IconBusiness from '@assets/company/common/icon-sticky-business.svg';
import IconHome from '@assets/company/common/icon-sticky-home.svg';
import IconService from '@assets/company/common/icon-sticky-service.svg';
import IconTell from '@assets/company/common/icon-sticky-tell.svg';

import * as S from './StickyBar.styled';

function StickyBar() {
    return (
        <S.Container>
            <S.List>
                <S.Item>
                    <a href="#" className="active">
                        <img src={IconHome} alt="" />
                        <span>홈</span>
                    </a>
                </S.Item>
                <S.Item>
                    <a href="#">
                        <img src={IconService} alt="" />
                        <span>서비스소개</span>
                    </a>
                </S.Item>
                <S.Item>
                    <a href="#">
                        <img src={IconTell} alt="" />
                        <span>전화문의</span>
                    </a>
                </S.Item>
                <S.Item>
                    <a href="#">
                        <img src={IconBusiness} alt="" />
                        <span>제휴문의</span>
                    </a>
                </S.Item>
            </S.List>
        </S.Container>
    );
}

export default StickyBar;
