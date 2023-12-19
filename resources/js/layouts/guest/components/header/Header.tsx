import Logo from '@assets/common/header_logo.svg';

import * as S from './Header.styled';

function Header() {
    return (
        <S.Wrapper>
            <S.InnerBox>
                <S.LogoButton href={route('home')}>
                    <img src={Logo} alt="" />
                </S.LogoButton>
                <S.Nav>
                    <li>
                        <a href={route('about')}>About</a>
                    </li>
                    <li>
                        <a href={route('present')}>Present</a>
                    </li>
                    <li>
                        <a href="">Works</a>
                    </li>
                    <li>
                        <a href={route('contact')}>Contact</a>
                    </li>
                </S.Nav>
            </S.InnerBox>
        </S.Wrapper>
    );
}

export default Header;
