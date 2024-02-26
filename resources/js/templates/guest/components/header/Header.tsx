import { useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';

import buyTicket from '@assets/common/img_top_buyticket.png';
import Logo from '@assets/common/logo.png';

import * as s from './Header.styled';

function Header() {
    const [isAllMenuOpen, setIsAllMenuOpen] = useState(false);
    return (
        <>
            <s.Wrapper>
                <s.InnerBox>
                    <s.LogoButton href={route('home')}>
                        <img src={Logo} alt="" />
                    </s.LogoButton>
                    {!isAllMenuOpen && (
                        <s.Nav>
                            <li>
                                <a href="">NOTICE</a>
                            </li>
                            <li>
                                <a href="">LINE UP</a>
                            </li>
                            <li>
                                <a href="">TICKET</a>
                            </li>
                            <li>
                                <a href="">MAP</a>
                            </li>
                            <li>
                                <a href="">TIMETABLE</a>
                            </li>
                            <li>
                                <a href="">FAQS</a>
                            </li>
                            <li>
                                <a href="">CALLERY</a>
                            </li>
                        </s.Nav>
                    )}
                    <s.AllMenuButton onClick={() => setIsAllMenuOpen(!isAllMenuOpen)}>
                        {isAllMenuOpen ? (
                            <XMarkIcon className="h-[32px] w-[32px]" />
                        ) : (
                            <Bars3Icon className="h-[32px] w-[32px]" />
                        )}
                    </s.AllMenuButton>
                    <s.BuyTicketWrap>
                        <img src={buyTicket} alt="" />
                        <a href="" className="melon"></a>
                        <a href="" className="yes24"></a>
                    </s.BuyTicketWrap>
                </s.InnerBox>
            </s.Wrapper>
            <s.AllMenu isActive={isAllMenuOpen}>
                <ul>
                    <li>
                        <a href="">NOTICE</a>
                    </li>
                    <li>
                        <a href="">LINE UP</a>
                    </li>
                    <li>
                        <a href="">TICKET</a>
                    </li>
                    <li>
                        <a href="">MAP</a>
                    </li>
                    <li>
                        <a href="">TIMETABLE</a>
                    </li>
                    <li>
                        <a href="">FAQS</a>
                    </li>
                    <li>
                        <a href="">CALLERY</a>
                    </li>
                </ul>
            </s.AllMenu>
        </>
    );
}

export default Header;
