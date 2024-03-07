import { useState } from 'react';
import { MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/20/solid';

import { Tab, Tabs, PageHeader, GradientButton } from '@/components/ui';

import * as s from './Home.styled';
function Home() {
    const [loading] = useKakaoLoader({
        appkey: 'de65bce114fcc172fff6aa219c56c755', // 발급 받은 APPKEY
    });
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        if (index === 1) {
            alert('추후 공개됩니다.');
            return;
        }
        setActiveTab(index);
    };

    return (
        <s.Wrapper>
            {import.meta.env.REACT_APP_MAP_KEY}
            <PageHeader title="MAP" isBackground />
            <Tabs activeTab={activeTab} onTabClick={handleTabClick} className="mb-[70px]">
                <Tab label="오시는 길" />
                <Tab label="페스티벌 맵" />
            </Tabs>
            {activeTab === 0 ? (
                <s.Inner>
                    <s.MapContent>
                        {loading ? (
                            <div className="flex h-full w-full items-center justify-center"></div>
                        ) : (
                            <s.Maps center={{ x: 444038.0, y: 1158213.0 }}>
                                <MapMarker position={{ x: 444038.0, y: 1158213.0 }}>
                                    <div
                                        style={{
                                            display: 'inline-block',
                                            color: '#000',
                                            textAlign: 'center',
                                            margin: 'auto',
                                            padding: '10px',
                                            width: '100%',
                                        }}
                                    >
                                        THE GLOW 2024
                                        <br />
                                        킨텍스 제 1전시장
                                    </div>
                                </MapMarker>
                            </s.Maps>
                        )}
                    </s.MapContent>
                    <s.MapInfoList>
                        <li>
                            <strong>버스</strong>
                            <p>
                                3호선 대화역 5번 출구 039, 082, 9700. 8109. 8407 (킨텍스제1전시장
                                하차)
                            </p>
                        </li>
                        <li>
                            <strong>지하철</strong>
                            <p>3호선 대화역 2번 출구 하차 후 도보 12분</p>
                        </li>
                        <li>
                            <strong>승용차</strong>
                            <p>
                                킨텍스제1전시장 지상주차장
                                <br />
                                주차요금 : 승용, 승합차, 소형 화물(2.5톤 미만) 기본 30분 : 1,500원,
                                추가 10분당 : 500원, 일일요금 : 12,000원
                            </p>
                        </li>
                    </s.MapInfoList>
                    <s.FaqInfo>※주차 관련 상세사항은 FAQ에서 확인 가능합니다.</s.FaqInfo>
                </s.Inner>
            ) : (
                <s.Inner>
                    <s.MapFestivalContent></s.MapFestivalContent>
                    <s.MapFestivalInfoList>
                        <li>• 공연 당일 메인게이트 외부, 내부에 물품보관소가 운영됩니다</li>
                        <li>• 흡연은 별도로 준비된 흡연구역에서만 가능합니다.</li>
                        <li>• 휠체어존에 대한 상세사항은 FAQ에서 확인 가능합니다.</li>
                    </s.MapFestivalInfoList>
                    <s.FestivalInfo>
                        셔틀버스 안내 유료 셔틀버스 안내는 별도 페이지에서 확인해주세요.
                    </s.FestivalInfo>
                </s.Inner>
            )}

            <s.ButtonBox>
                <GradientButton
                    label={
                        <p className="flex w-full items-center gap-[10px]">
                            <em className="pt-[4px]">SHUTTLE BUS</em>
                            <ArrowRightStartOnRectangleIcon className="h-[30px] w-[30px]" />
                        </p>
                    }
                    onClick={() => {
                        window.open('https://intro.queenssmile.co.kr', '_blank');
                    }}
                />
            </s.ButtonBox>
        </s.Wrapper>
    );
}

export default Home;
