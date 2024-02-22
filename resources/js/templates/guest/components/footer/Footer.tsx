import Logo from '@assets/common/logo.png';

import * as s from './Footer.styled';

function Footer() {
    const handleScrollToTop = () => {
        const element = document.getElementById('app');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <s.Wrapper>
            <s.InnerBox>
                <div className="relative text-center">
                    <s.LogoButton>
                        <img src={Logo} alt="" />
                    </s.LogoButton>
                    <s.LinkBox>
                        <dt>Quick Links</dt>
                        <dd>
                            <ul>
                                <li>
                                    <a href="">HOME</a>
                                </li>
                                <li>
                                    <a href="">ABOUT</a>
                                </li>
                                <li>
                                    <a href="">FAQ</a>
                                </li>
                                <li>
                                    <a href="">LINEUP</a>
                                </li>
                                <li>
                                    <a href="">TICKET</a>
                                </li>
                            </ul>
                        </dd>
                    </s.LinkBox>
                    <s.InfoBox>
                        <dt>Contact info</dt>
                        <dd>hello@Wandrrloch.com</dd>
                    </s.InfoBox>
                    <s.Copyright>© COPYRIGHT WANDERLOCH all rights reserved</s.Copyright>
                    <s.TopBox>
                        <button type="button" onClick={handleScrollToTop}>
                            <span></span>
                            TOP
                        </button>
                    </s.TopBox>
                </div>
            </s.InnerBox>
        </s.Wrapper>
    );
}

export default Footer;
