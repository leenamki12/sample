import { useHeader } from '@/layouts/ConnectLayout';
import Logo from '@assets/common/logo.svg';
import IconMypage from '@assets/company/common/icon_mypage.svg';

import Profile from '../profile/Profile';

import * as S from './Header.styled';

function Header() {
    const { pageTitle } = useHeader();

    const handleBack = () => {
        return window.history.back();
    };

    return (
        <S.Wrapper>
            <S.InnerBox>
                {pageTitle ? (
                    <>
                        <S.BackButton onClick={handleBack}>
                            <span className="sr-only">뒤로가기</span>
                        </S.BackButton>
                        <S.DetailTitle>{pageTitle}</S.DetailTitle>
                    </>
                ) : (
                    <S.Logo href="/">
                        <img src={Logo} alt="위드닥" />
                    </S.Logo>
                )}
                <S.MypageBox>
                    <Profile>
                        <img src={IconMypage} alt="마이페이지" />
                    </Profile>
                </S.MypageBox>
            </S.InnerBox>
        </S.Wrapper>
    );
}

export default Header;
