import { useHeader } from '@/layouts/ConnectLayout';
import IconHistoryBack from '@assets/common/icon_historyback_arrow.svg';
import IconMypage from '@assets/common/icon_mypage.svg';
import Logo from '@assets/common/logo.svg';

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
                            <img
                                src={IconHistoryBack}
                                alt=""
                                className="h-[35px] w-[35px] max-w-[35px]"
                            />
                        </S.BackButton>
                        <S.PageTitle>
                            <strong>{pageTitle}</strong>
                        </S.PageTitle>
                    </>
                ) : (
                    <S.Logo href="/">
                        <img src={Logo} alt="위드닥" />
                    </S.Logo>
                )}
                <Profile>
                    <img src={IconMypage} alt="마이페이지" />
                </Profile>
            </S.InnerBox>
        </S.Wrapper>
    );
}

export default Header;
