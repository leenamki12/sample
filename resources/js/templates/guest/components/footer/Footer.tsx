import DropDown, { LinkProps } from '@/components/ui/drop-down/DropDown';

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
                    <S.LogoButton>로고</S.LogoButton>
                    <S.Copyright>Copyright WanderLoch Inc. all rights reserved.</S.Copyright>
                    <S.TopBox>
                        <button type="button" onClick={handleScrollToTop}>
                            <span></span>
                            TOP
                        </button>
                    </S.TopBox>
                </div>
            </S.InnerBox>
        </S.Wrapper>
    );
}

export default Footer;
