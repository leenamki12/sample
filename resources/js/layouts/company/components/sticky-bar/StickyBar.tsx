import { Link } from '@inertiajs/react';

import IconBusiness from '@assets/company/common/icon-sticky-business.svg';
import IconHome from '@assets/company/common/icon-sticky-home.svg';
import IconService from '@assets/company/common/icon-sticky-service.svg';
import IconTell from '@assets/company/common/icon-sticky-tell.svg';

import * as S from './StickyBar.styled';

function StickyBar() {
    const stikyItems = [
        {
            title: '홈',
            icon: IconHome,
            href: 'company',
        },
        {
            title: '서비스소개',
            icon: IconService,
            href: '#',
        },
        {
            title: '전화문의',
            icon: IconTell,
            href: '#',
        },
        {
            title: '제휴문의',
            icon: IconBusiness,
            href: '#',
        },
    ];

    return (
        <S.Container>
            <S.List>
                {stikyItems.map(item => (
                    <S.Item key={item.title}>
                        <Link
                            href={item.href || ''}
                            className={
                                route().current(item.href)
                                    ? 'font-bold text-primary'
                                    : 'text-[#bbb]'
                            }
                        >
                            <img src={item.icon} alt="" />
                            <span>{item.title}</span>
                        </Link>
                    </S.Item>
                ))}
            </S.List>
        </S.Container>
    );
}

export default StickyBar;
