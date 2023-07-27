import Logo from '@assets/common/logo.svg';

type Props = {
    width?: string;
};

export default function ApplicationLogo({ width }: Props) {
    return <img src={Logo} className={`${width}`} alt="위드닥 로고" />;
}
