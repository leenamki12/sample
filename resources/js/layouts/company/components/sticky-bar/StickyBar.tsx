import IconBusiness from '@assets/company/common/icon_sticky_business.svg';
import IconHome from '@assets/company/common/icon_sticky_home.svg';
import IconService from '@assets/company/common/icon_sticky_service.svg';
import IconTell from '@assets/company/common/icon_sticky_tell.svg';

import * as S from './StickyBar.styled';

type Props = {
    title: string;
    icon: string;
    href: string;
    target?: '_blank' | '_self';
};

function StickyBar() {
    const stikyItems: Props[] = [
        {
            title: '홈',
            icon: IconHome,
            href: '/',
        },
        {
            title: '서비스소개',
            icon: IconService,
            href: route('service'),
            target: '_blank',
        },
        {
            title: '전화문의',
            icon: IconTell,
            href: 'tel:1866-4575',
        },
        {
            title: '제휴문의',
            icon: IconBusiness,
            href: '#',
        },
    ];

    return (
        <S.Wrapper>
            <S.List>
                {stikyItems.map(item => (
                    <S.Item key={item.title}>
                        <a
                            href={item.href || ''}
                            className={
                                route().current(item.href)
                                    ? 'font-bold text-primary'
                                    : 'text-[#bbb]'
                            }
                            target={item.target}
                        >
                            <img src={item.icon} alt="" />
                            <span>{item.title}</span>
                        </a>
                    </S.Item>
                ))}
            </S.List>
        </S.Wrapper>
    );
}

export default StickyBar;
