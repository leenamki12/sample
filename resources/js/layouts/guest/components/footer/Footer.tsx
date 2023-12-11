import { useState } from 'react';

import Logo from '@assets/common/footer_logo.svg';
import TopArrow from '@assets/common/icon_footer_top_arrow.svg';

import * as S from './Footer.styled';

type TargetType = '_blank' | '_self';

interface LinkProps {
    label: string;
    path: string;
    target?: TargetType;
}

function Footer() {
    const [isToggle, setIsToggle] = useState<boolean>(false);

    const familySiteLinks: LinkProps[] = [
        {
            label: 'The Glow',
            path: '#',
            target: '_blank',
        },
        {
            label: 'Wanderloch Hall',
            path: '#',
            target: '_blank',
        },
    ];

    const handleScrollToTop = () => {
        const element = document.getElementById('app');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleToggleMenu = () => {
        setIsToggle(prev => !prev);
    };

    return (
        <S.Wrapper>
            <S.InnerBox>
                <S.FamilyBox>
                    <button onClick={handleToggleMenu}>Family Site</button>
                    <S.SiteList className={isToggle ? 'block' : 'hidden'}>
                        {familySiteLinks.map(site => (
                            <li key={site.label}>
                                <a href={site.path} target={site.target}>
                                    {site.label}
                                </a>
                            </li>
                        ))}
                    </S.SiteList>
                </S.FamilyBox>
                <div className="relative text-center">
                    <S.LogoButton>
                        <img src={Logo} alt="" />
                    </S.LogoButton>
                    <S.Copyright>Copyright WanderLoch Inc. all rights reserved.</S.Copyright>
                    <S.TopBox>
                        <button type="button" onClick={handleScrollToTop}>
                            <span>
                                <img src={TopArrow} alt="" />
                            </span>
                            TOP
                        </button>
                    </S.TopBox>
                </div>
            </S.InnerBox>
        </S.Wrapper>
    );
}

export default Footer;
