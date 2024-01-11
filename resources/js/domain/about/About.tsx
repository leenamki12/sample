import { InnerContainer, SubTitle } from '@/components/layouts';
import BrandStoryBanner from '@assets/pages/bg_brand_story.jpg';
import BusinessBanner01 from '@assets/pages/bg_business01.jpg';
import BusinessBanner02 from '@assets/pages/bg_business02.jpg';
import BusinessBanner03 from '@assets/pages/bg_business03.jpg';
import BusinessBanner04 from '@assets/pages/bg_business04.jpg';
import BusinessBanner05 from '@assets/pages/bg_business05.jpg';
import BrandStoryLogo from '@assets/pages/image_brand_story_logo.png';

import BrandStory from './components/brand-story/BrandStory';
import BusinessList from './components/business-list/BusinessList';
import GoalList from './components/goal-list/GoalList';
import { ContactContent } from '../contact/components';

import * as S from './About.styled';

function About() {
    return (
        <S.Wrapper>
            <SubTitle title="ABOUT" />
            {/* Brand Story start */}
            <S.Section>
                <InnerContainer isMobileFull>
                    <S.Title>Brand Story</S.Title>
                    <BrandStory logoImage={BrandStoryLogo} backgroundImage={BrandStoryBanner}>
                        페스티벌·공연기획사 원더로크는 데이터 기반의 기획을 통해 단순 소비재를 넘어
                        자기 표현의 수단이 되는(PROUDABLE) 콘텐츠를 만듭니다. 오프라인의 의미와
                        영역을 확장하며, 생산자·소비자 모두를 향해 뻗어나가는 지속가능한 페스티벌을
                        구현합니다. 우리는 누군가의 취향으로 가득 찬 호수를 발견하고 가꾸며, 또 다른
                        호수를 찾아 길을 떠납니다.
                        <br />
                        <span className="text-green">
                            *WanderLoch(원더로크)는 Wanderer(방랑자)와 Loch(호수)의 합성어입니다.
                        </span>
                    </BrandStory>
                </InnerContainer>
            </S.Section>
            {/* Brand Story end */}
            {/* Goal start */}
            <S.Section>
                <InnerContainer>
                    <S.Title>Goal</S.Title>
                    <div>
                        <GoalList
                            title="Mesurable"
                            text="쉽게 희석될 명분 대신 데이터 기반으로 찾아낸 실소비자에 집중합니다."
                        />
                        <GoalList
                            title="Sustainable"
                            text="안정적인 생산을 통해 생산자와 소비자 모두에게 가치있는 콘텐츠를 만듭니다."
                        />
                        <GoalList
                            title="Proudable"
                            text="단순한 소비재를 넘어 자기 표현의 수단이 되고자 합니다."
                        />
                    </div>
                </InnerContainer>
            </S.Section>
            {/* Goal end */}
            {/* Business start */}
            <S.Section>
                <InnerContainer>
                    <S.Title>Business</S.Title>
                    <S.BusinessText>
                        WanderLoch(원더로크)는 문화사업 전반의 비지니스를 다루는 14개의 자체
                        브랜드를 기반으로
                        <br />
                        최고의 음악 창작 콘텐츠를 만드는 마운드미디어의 산하 브랜드입니다.
                    </S.BusinessText>
                    <div>
                        <BusinessList
                            title="Festival"
                            subTitle="페스티벌"
                            text="자체 페스티벌 기획 및 제작"
                            backgroundImage={BusinessBanner01}
                            path="#"
                        />
                        <BusinessList
                            title="Concert & Show"
                            subTitle=" 기획공연"
                            text="브랜드 사전홍보 및 콘텐츠 스토리텔링 각종 콘서트 및 공연 기획 및 제작"
                            backgroundImage={BusinessBanner02}
                            path="works"
                        />
                        <BusinessList
                            title="Venue Agency"
                            subTitle="공간 운영 대행"
                            text="쉽게 희석될 명분 대신 데이터 기반으로 찾아낸 실소비자에 집중합니다."
                            backgroundImage={BusinessBanner03}
                            path="#"
                        />
                        <BusinessList
                            title="Festival & Concert Producing and Opertion Agency"
                            subTitle="페스티벌 및 공연 제작 및 운영 대행"
                            text="타사 기획 페스티벌 및 단독공연 제작,연출 및 운영대행"
                            backgroundImage={BusinessBanner04}
                            path="works"
                        />
                        <BusinessList
                            title="기타"
                            subTitle="Etc."
                            text="페스티벌 MD, 브랜드 홍보 BTL 등 Value-Chain 활용"
                            backgroundImage={BusinessBanner05}
                        />
                    </div>
                </InnerContainer>
            </S.Section>
            {/* Business end */}
            <div>
                <ContactContent title="Contact" />
            </div>
        </S.Wrapper>
    );
}

export default About;
