import { Link, usePage } from '@inertiajs/react';

import Logo from '@assets/common/header_logo.svg';

import * as S from './Header.styled';

function Header() {
    const page = usePage();
    const pageUrl = page.url.replace('/', '');

    const headerItems = [
        { key: 'about', value: 'About' },
        { key: 'presents', value: 'Presents' },
        { key: 'works', value: 'Works' },
        { key: 'contact', value: 'Contact' },
    ];

    return (
        <S.Wrapper>
            <S.InnerBox>
                <S.LogoButton href={route('home')}>
                    <img src={Logo} alt="" />
                </S.LogoButton>
                <S.Nav>
                    {headerItems.map(item => (
                        <S.NavItem active={pageUrl === item.key}>
                            <Link href={route(item.key)}>{item.value}</Link>
                        </S.NavItem>
                    ))}
                </S.Nav>
            </S.InnerBox>
        </S.Wrapper>
    );
}

export default Header;
