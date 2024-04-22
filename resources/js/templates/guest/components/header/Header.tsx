import { useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { Link, usePage } from '@inertiajs/react';

import Logo from '@assets/common/logo.png';

import * as s from './Header.styled';

function Header() {
    const url = usePage().url;
    const [isAllMenuOpen, setIsAllMenuOpen] = useState(false);
    const noticeFormData = {
        start_date: '',
        end_date: '',
        is_published: 'true',
        is_main_published: 'all',
        title: '',
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
                    <s.LogoButton href={route('home')}>
                        <img src={Logo} alt="" />
                    </s.LogoButton>
                    {!isAllMenuOpen && (
                        <s.Nav>
                            <li>
                                <Link
                                    href={route('notice', noticeFormData)}
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
                                    href={route('faqs', faqFormData)}
                                    className={url === '/faqs' ? 'isActive' : ''}
                                >
                                    FAQS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('gallery')}
                                    className={url === '/gallery' ? 'isActive' : ''}
                                >
                                    GALLERY
                                </Link>
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
                </s.InnerBox>
            </s.Wrapper>
            <s.AllMenu isActive={isAllMenuOpen}>
                <ul>
                    <li>
                        <Link
                            href={route('notice', noticeFormData)}
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
                            href={route('faqs', faqFormData)}
                            className={url === '/faqs' ? 'isActive' : ''}
                            onClick={() => setIsAllMenuOpen(false)}
                        >
                            FAQS
                        </Link>
                    </li>
                    <li>
                        <button type="button" onClick={() => alert('추후 공개됩니다.')}>
                            GALLERY
                        </button>
                    </li>
                </ul>
            </s.AllMenu>
        </>
    );
}

export default Header;
