import { Head, router } from '@inertiajs/react';

import { InnerContainer } from '@/components/layouts';
import { Button } from '@/components/ui';
import Logo from '@assets/common/header_logo.svg';
import AlbumTest from '@assets/home/test_album01.jpg';
import AlbumDetailTest01 from '@assets/home/test_modal01.jpg';
import AlbumDetailTest02 from '@assets/home/test_modal02.jpg';
import AlbumDetailTest03 from '@assets/home/test_modal03.jpg';
import AlbumTest2 from '@assets/pages/bg_brand_story.jpg';

import { AlbumList, BusinessContent } from './components';
import { AlbumProps } from './components/album-list/AlbumList';
import { ContactContent } from '../contact/components';

import * as S from './Home.styled';

export default function Home() {
    const AlbumItems: AlbumProps[] = [
        {
            title: '조유리 미니 2집\nLOVE  ALL\n미디어 쇼케이스',
            date: '2023-08-09',
            image: AlbumTest,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
            detailImages: [
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
            ],
        },
        {
            title: '조유리 미니 2집\n‘Love ALL’\n미디어 쇼케이스22',
            date: '2023-08-09',
            image: AlbumTest,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
            detailImages: [
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
            ],
        },
        {
            title: '조유리 미니 2집\n‘Love All’\n미디어 쇼케이스333',
            date: '2023-08-09',
            image: AlbumTest,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
            detailImages: [
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
            ],
        },
        {
            title: '조유리 미니 2집\n‘Love All’\n미디어 쇼케이스22',
            date: '2023-08-09',
            image: AlbumTest,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
            detailImages: [
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
            ],
        },
        {
            title: '조유리 미니 2집\n‘Love All’\n미디어 쇼케이스333',
            date: '2023-08-09',
            image: AlbumTest,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
            detailImages: [
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
            ],
        },
        {
            title: '조유리 미니 2집\n‘Love All’\n미디어 쇼케이스22',
            date: '2023-08-09',
            image: AlbumTest,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
            detailImages: [
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
            ],
        },
        {
            title: '조유리 미니 2집\n‘Love All’\n미디어 쇼케이스333',
            date: '2023-08-09',
            image: AlbumTest,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
            detailImages: [
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
            ],
        },
        {
            title: '조유리 미니 2집\n‘Love All’\n미디어 쇼케이스333',
            date: '2023-08-09',
            image: AlbumTest,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
            detailImages: [
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
                AlbumDetailTest01,
                AlbumDetailTest02,
                AlbumDetailTest03,
            ],
        },
    ];

    const AlbumItemsBottom: AlbumProps[] = [
        {
            title: '조유리 미니 2집\nLOVE  ALL\n미디어 쇼케이스',
            date: '2023-08-09',
            image: AlbumTest2,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
        },
        {
            title: '조유리 미니 2집\n‘Love All’\n미디어 쇼케이스22',
            date: '2023-08-09',
            image: AlbumTest2,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
        },
        {
            title: '조유리 미니 2집\n‘Love All’\n미디어 쇼케이스333',
            date: '2023-08-09',
            image: AlbumTest2,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
        },
        {
            title: '조유리 미니 2집\n‘Love All’\n미디어 쇼케이스22',
            date: '2023-08-09',
            image: AlbumTest2,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
        },
        {
            title: '조유리 미니 2집\n‘Love All’\n미디어 쇼케이스333',
            date: '2023-08-09',
            image: AlbumTest2,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
        },
        {
            title: '조유리 미니 2집\n‘Love All’\n미디어 쇼케이스22',
            date: '2023-08-09',
            image: AlbumTest2,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
        },
        {
            title: '조유리 미니 2집\n‘Love All’\n미디어 쇼케이스333',
            date: '2023-08-09',
            image: AlbumTest2,
            location: 'at YES24 LIVE  HALL',
            info: '연출・운영ㅣWanderLoch.Inc',
        },
    ];

    return (
        <S.Wrapper>
            <Head title="Welcome" />
            <S.LogoWrap>
                <img src={Logo} alt="" />
            </S.LogoWrap>
            <S.AlbumWrap>
                <div>
                    <AlbumList albums={AlbumItems} />
                    <AlbumList albums={AlbumItemsBottom} isRtl />
                </div>
                <S.More>
                    <Button
                        label="more info"
                        element="more"
                        onClick={() => router.visit(route('works'))}
                    />
                </S.More>
            </S.AlbumWrap>
            <S.BusinessWrap>
                <InnerContainer>
                    <BusinessContent
                        title="Business"
                        content={`페스티벌 · 공연 기획사 원더로크는 단순 소비재를 넘어
                        자기 표현의 수단이 되는(PROUDABLE) 콘텐츠를 만듭니다.
                        오프라인의 의미와 영역을 확장하며,생산자-소비자 모두를 향해 뻗어 나가는
                        지속가능한 음악 콘텐츠를 구현합니다.`}
                    />
                    <S.More>
                        <Button
                            label="more info"
                            element="more"
                            onClick={() => router.visit(route('about'))}
                        />
                    </S.More>
                </InnerContainer>
            </S.BusinessWrap>
            <div>
                <ContactContent title="Contact" />
            </div>
        </S.Wrapper>
    );
}
