import { Bars3Icon } from '@heroicons/react/20/solid';

import Logo from '@assets/common/logo.png';

import * as s from './Header.styled';

function Header() {
    return (
        <s.Wrapper>
            <s.InnerBox>
                <s.LogoButton href={route('home')}>
                    <img src={Logo} alt="" />
                </s.LogoButton>
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
                <div>
                    <Bars3Icon className="h-[32px] w-[32px]" />
                </div>
            </s.InnerBox>
        </s.Wrapper>
    );
}

export default Header;
