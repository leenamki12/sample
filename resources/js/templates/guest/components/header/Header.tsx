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
                        <a href="">GALLERY</a>
                    </li>
                </s.Nav>
                <div>전체 메뉴</div>
            </s.InnerBox>
        </s.Wrapper>
    );
}

export default Header;
