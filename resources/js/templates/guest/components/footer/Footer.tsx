import { usePage } from '@inertiajs/react';

import BuyMelon from '@assets/common/button_buy_melon.png';
import BuyYes24 from '@assets/common/button_buy_yes24.png';
import FooterLogo from '@assets/common/footer_logo.png';
import IconInstar from '@assets/common/icon_instar.png';
import IconBlack from '@assets/common/icon_xmark.png';
import Logo from '@assets/common/logo.png';

import * as s from './Footer.styled';

function Footer() {
    const url = usePage().url;

    const handleScrollToTop = () => {
        const element = document.getElementById('app');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
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
                        <s.SnsList>
                            <li>
                                <a href="">
                                    <img src={IconInstar} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img src={IconBlack} alt="" />
                                </a>
                            </li>
                        </s.SnsList>
                        <s.Copyright>© COPYRIGHT WANDERLOCH all rights reserved</s.Copyright>
                        {url !== '/' && (
                            <s.TopBox>
                                <button type="button" onClick={handleScrollToTop}>
                                    <span></span>
                                    TOP
                                </button>
                            </s.TopBox>
                        )}
                    </div>
                </s.InnerBox>
            </s.Wrapper>
            <s.BuyWrapper>
                <s.BuyInner>
                    <div>
                        <img src={FooterLogo} alt="" />
                    </div>
                    <dl>
                        <dt>BUY NOW!</dt>
                        <dd>
                            <a href="">
                                <img src={BuyMelon} alt="" />
                            </a>
                            <a href="">
                                <img src={BuyYes24} alt="" />
                            </a>
                        </dd>
                    </dl>
                    <div className="bg"></div>
                </s.BuyInner>
            </s.BuyWrapper>
        </>
    );
}

export default Footer;
