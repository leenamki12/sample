import Logo from '@assets/common/logo.svg';

export default function ApplicationLogo({ width }: { width: string }) {
    return <img src={Logo} className={`w-[${width}]`} alt="위드닥 로고" />;
}
