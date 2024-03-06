import { useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { Link, usePage } from '@inertiajs/react';

import buyTicket from '@assets/common/img_top_buyticket.png';
import Logo from '@assets/common/logo.png';

import * as s from './Header.styled';

function Header() {
    const url = usePage().url;
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
                                <Link
                                    href={route('notice')}
                                    className={url === '/notice' ? 'isActive' : ''}
                                >
                                    NOTICE
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('line-up')}
                                    className={url === '/line-up' ? 'isActive' : ''}
                                >
                                    LINE UP
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('ticket')}
                                    className={url === '/ticket' ? 'isActive' : ''}
                                >
                                    TICKET
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('map')}
                                    className={url === '/map' ? 'isActive' : ''}
                                >
                                    MAP
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('time-table')}
                                    className={url === '/time-table' ? 'isActive' : ''}
                                >
                                    TIMETABLE
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('faqs')}
                                    className={url === '/faqs' ? 'isActive' : ''}
                                >
                                    FAQS
                                </Link>
                            </li>
                            <li>
                                <button type="button" onClick={() => alert('준비중입니다.')}>
                                    GALLERY
                                </button>
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
                        <a
                            href="https://ticket.melon.com/performance/index.htm?prodId=209446"
                            target="blank"
                            className="melon"
                        >
                            <div className="hidden">멜론에서 예매 하러 가기</div>
                        </a>
                        <a
                            href="http://ticket.yes24.com/New/Perf/Detail/Detail.aspx?IdPerf=48649"
                            target="blank"
                            className="yes24"
                        >
                            <div className="hidden">yes24에서 예매 하러 가기</div>
                        </a>
                    </s.BuyTicketWrap>
                </s.InnerBox>
            </s.Wrapper>
            <s.AllMenu isActive={isAllMenuOpen}>
                <ul>
                    <li>
                        <Link
                            href={route('notice')}
                            className={url === '/notice' ? 'isActive' : ''}
                            onClick={() => setIsAllMenuOpen(false)}
                        >
                            NOTICE
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route('line-up')}
                            className={url === '/line-up' ? 'isActive' : ''}
                            onClick={() => setIsAllMenuOpen(false)}
                        >
                            LINE UP
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route('ticket')}
                            className={url === '/ticket' ? 'isActive' : ''}
                            onClick={() => setIsAllMenuOpen(false)}
                        >
                            TICKET
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route('map')}
                            className={url === '/map' ? 'isActive' : ''}
                            onClick={() => setIsAllMenuOpen(false)}
                        >
                            MAP
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route('time-table')}
                            className={url === '/time-table' ? 'isActive' : ''}
                            onClick={() => setIsAllMenuOpen(false)}
                        >
                            TIMETABLE
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route('faqs')}
                            className={url === '/faqs' ? 'isActive' : ''}
                            onClick={() => setIsAllMenuOpen(false)}
                        >
                            FAQS
                        </Link>
                    </li>
                    <li>
                        <button type="button" onClick={() => alert('준비중입니다.')}>
                            GALLERY
                        </button>
                    </li>
                </ul>
            </s.AllMenu>
        </>
    );
}

export default Header;
