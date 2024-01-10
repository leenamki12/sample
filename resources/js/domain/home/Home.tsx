import { Head, router, usePage } from '@inertiajs/react';

import { InnerContainer } from '@/components/layouts';
import { Button } from '@/components/ui';
import { PageProps } from '@/types';
import Logo from '@assets/common/header_logo.svg';

import { PerformanceList, BusinessContent } from './components';
import { ContactContent } from '../contact/components';

import * as S from './Home.styled';

export default function Home() {
    const { performances } = usePage<PageProps>().props;

    const performanceTopItems = performances.data.slice(0, performances.total / 2);

    const performanceBottomItems = performances.data.slice(
        performances.total / 2,
        performances.total
    );

    return (
        <S.Wrapper>
            <Head title="Welcome" />
            <S.LogoWrap>
                <img src={Logo} alt="" />
            </S.LogoWrap>
            {performanceTopItems.length > 0 && performanceBottomItems.length > 0 && (
                <S.PerformanceWrap>
                    <div>
                        <PerformanceList datas={performanceTopItems} />
                        <PerformanceList datas={performanceBottomItems} isRtl />
                    </div>
                    <S.More>
                        <Button
                            label="more info"
                            element="more"
                            onClick={() => router.visit(route('works'))}
                        />
                    </S.More>
                </S.PerformanceWrap>
            )}
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
