import DropDown, { LinkProps } from '@/components/ui/drop-down/DropDown';
import Logo from '@assets/common/footer_logo.svg';
import TopArrow from '@assets/common/icon_footer_top_arrow.svg';

import * as S from './Footer.styled';

function Footer() {
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

    return (
        <S.Wrapper>
            <S.InnerBox>
                <S.FamilyBox>
                    <DropDown label="Family Site" items={familySiteLinks} />
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
