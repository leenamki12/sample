import { usePage } from '@inertiajs/react';

import useHospitalData from '@/domain/company/datas';
import Logo from '@assets/common/logo.svg';
import IconMypage from '@assets/company/common/icon_mypage.svg';

import Profile from '../profile/Profile';

import * as S from './Header.styled';

function Header() {
    const { id } = usePage().props;

    const HospitalName = useHospitalData().find(data => data.id === Number(id))?.name;

    const handleBack = () => {
        return window.history.back();
    };

    return (
        <S.Wrapper>
            <S.InnerBox>
                {HospitalName ? (
                    <>
                        <S.BackButton onClick={handleBack}>
                            <span className="sr-only">뒤로가기</span>
                        </S.BackButton>
                        <S.DetailTitle>{HospitalName}</S.DetailTitle>
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
