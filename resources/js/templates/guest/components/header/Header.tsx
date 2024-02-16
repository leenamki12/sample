import * as S from './Header.styled';

function Header() {
    return (
        <S.Wrapper>
            <S.InnerBox>
                <S.LogoButton href={route('home')}>로고</S.LogoButton>
                <S.Nav></S.Nav>
            </S.InnerBox>
        </S.Wrapper>
    );
}

export default Header;
