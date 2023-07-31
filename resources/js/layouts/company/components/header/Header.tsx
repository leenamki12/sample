import Logo from '@assets/common/logo.svg';
import IconMypage from '@assets/company/common/icon-mypage.svg';

function Header() {
    return (
        <header className="shrink-0 shadow-[0_4px_20px_0_rgba(0,0,0,0.05)]">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
                <a href="/" className="-m-1.5 p-1.5">
                    <img className="h-8 w-auto" src={Logo} alt="위드닥" />
                </a>
                <div className="flex items-center gap-x-8">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img className="h-7 w-auto" src={IconMypage} alt="마이페이지" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
