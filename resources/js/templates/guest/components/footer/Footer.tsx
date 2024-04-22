import { ArrowUpIcon } from '@heroicons/react/20/solid';
import { Link, usePage } from '@inertiajs/react';

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
    const faqFormData = {
        start_date: '',
        end_date: '',
        category: 'TICKET',
        is_published: 'true',
        is_main_published: 'all',
        title: '',
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
                                        <Link href={route('home')}>HOME</Link>
                                    </li>
                                    <li>
                                        <Link href={route('about')}>ABOUT</Link>
                                    </li>
                                    <li>
                                        <Link href={route('faqs', faqFormData)}>FAQ</Link>
                                    </li>
                                    <li>
                                        <Link href={route('line-up')}>LINEUP</Link>
                                    </li>
                                    <li>
                                        <Link href={route('ticket')}>TICKET</Link>
                                    </li>
                                </ul>
                            </dd>
                        </s.LinkBox>
                        <s.InfoBox>
                            <dt>Contact info</dt>
                            <dd>
                                <a href="mailto:hello@wanderloch.com">hello@wanderloch.com</a>
                            </dd>
                        </s.InfoBox>
                        <s.SnsList>
                            <li>
                                <a href="https://www.instagram.com/theglowseoul/" target="_blank">
                                    <img src={IconInstar} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/theglowseoul" target="_blank">
                                    <img src={IconBlack} alt="" />
                                </a>
                            </li>
                        </s.SnsList>
                        <s.Copyright>© COPYRIGHT WANDERLOCH all rights reserved</s.Copyright>
                        {url !== '/' && (
                            <s.TopBox>
                                <button type="button" onClick={handleScrollToTop}>
                                    <span>
                                        <ArrowUpIcon className="w-[30px]" />
                                    </span>
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
                        <img src={FooterLogo} alt="the glow 2024" />
                    </div>
                    <div className="bg"></div>
                </s.BuyInner>
            </s.BuyWrapper>
        </>
    );
}

export default Footer;
