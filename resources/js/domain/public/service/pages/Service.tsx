import { Head } from '@inertiajs/react';

import Logo from '@assets/common/logo.svg';
import HospitalRolling01 from '@assets/public/service/hospital_rolling01.png';
import HospitalRolling02 from '@assets/public/service/hospital_rolling02.png';
import HospitalRolling03 from '@assets/public/service/hospital_rolling03.png';
import HospitalRolling04 from '@assets/public/service/hospital_rolling04.png';
import IconBubble from '@assets/public/service/service_bubble_icon.svg';
import IconGuideStep01 from '@assets/public/service/service_guide_step01.png';
import IconGuideStep02 from '@assets/public/service/service_guide_step02.png';
import IconGuideStep03 from '@assets/public/service/service_guide_step03.png';
import Partnership from '@assets/public/service/service_partnership.png';
import UseStep01 from '@assets/public/service/service_use_step01.png';
import UseStep02 from '@assets/public/service/service_use_step02.png';
import UseStep03 from '@assets/public/service/service_use_step03.png';
import MainVisual from '@assets/public/service/service_visual.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import {
    HospitalSlide,
    PriceList,
    ReservationGuideList,
    StickyBar,
    TitleSlide,
    UseGuideSlide,
} from '../components';

import * as S from './Service.styled';

type Props = {
    isLoggedIn: boolean;
};

function Service({ isLoggedIn }: Props) {
    return (
        <S.Wrapper>
            <Head title="서비스 소개" />
            {/* section-01 */}
            <S.Section backgroundColor="#E8F2FC">
                <S.InnerBox className="!pb-0">
                    <S.TitleBox>
                        <div className="mb-[60px] flex items-center justify-center mobile:mb-[30px] tablet:mb-[45px]">
                            <p className="max-w-[115px]">
                                <img src={Logo} alt="" className="mobile:w-[70px]" />
                            </p>
                        </div>
                        <S.Title>
                            기업의 의료복지 서비스
                            <span>‘위드닥’과 함께하세요.</span>
                        </S.Title>
                        <S.SubText
                            color="#666"
                            className="mt-[20px] mobile:mt-[10px] tablet:mt-[15px]"
                        >
                            위드닥은 비급여 병원의 의료서비스를 제휴를 통해
                            <br />
                            임직원가로 제공하는 <strong>‘기업 의료복지 서비스’</strong>입니다.
                        </S.SubText>
                    </S.TitleBox>
                </S.InnerBox>
                <div className="flex items-end justify-end">
                    <img
                        src={MainVisual}
                        alt=""
                        className="mobile:max-w-[90%] tablet:max-w-[90%]"
                    />
                </div>
            </S.Section>
            {/* //section-01 */}
            {/* section-02 */}
            <S.Section>
                <S.InnerBox>
                    <strong className="block text-center text-[50px] font-bold mobile:text-[25px] tablet:text-[38px]">
                        도입 및 이용절차
                    </strong>
                    <UseGuideSlide
                        items={[
                            {
                                image: UseStep01,
                                title: '기업회원가입',
                            },
                            {
                                image: UseStep02,
                                title: '위드닥 승인 및 제휴 코드발급',
                            },
                            {
                                image: UseStep03,
                                title: '서비스이용',
                            },
                        ]}
                    />
                </S.InnerBox>
            </S.Section>
            {/* //section-02 */}
            {/* section-03 */}
            <S.Section backgroundColor="bg-primary">
                <S.InnerBox wide>
                    <S.TitleBox className="mb-[50px] mobile:mb-[25px] tablet:mb-[38px]">
                        <TitleSlide
                            titles={['성형외과', '피부과', '정형외과', '치과', '안과', '건강검진']}
                        />
                        <S.SubTitle
                            color="white"
                            className="mt-[30px] mobile:mt-[15px] tablet:mt-[22px]"
                        >
                            기업의 임직원과 가족까지 <strong>제휴가로 이용가능</strong>
                        </S.SubTitle>
                    </S.TitleBox>
                    <HospitalSlide
                        images={[
                            HospitalRolling01,
                            HospitalRolling02,
                            HospitalRolling03,
                            HospitalRolling04,
                        ]}
                    />
                </S.InnerBox>
            </S.Section>
            {/* //section-03 */}
            {/* section-04 */}
            <S.Section className="pt-[100px] mobile:pt-[50px] tablet:pt-[75px]">
                <S.SubTitle className="mb-[40px] font-bold text-primary mobile:mb-[20px] tablet:mb-[30px]">
                    PARTNERSHIP
                </S.SubTitle>
                <div>
                    <img src={Partnership} alt="" />
                </div>
            </S.Section>
            {/* //section-04 */}
            {/* section-05 */}
            <S.Section backgroundColor="#F2F7FF">
                <S.InnerBox>
                    <S.TitleBox className="mb-[50px] mobile:mb-[25px] tablet:mb-[38px]">
                        <S.Title>
                            가격을 <span>확 낮췄습니다!</span>
                        </S.Title>
                    </S.TitleBox>
                    <PriceList
                        items={[
                            {
                                title: '임플란트 정상가',
                                price: 100,
                            },
                            {
                                title: '이벤트가',
                                price: 64,
                            },
                            {
                                title: '임직원 제휴가',
                                price: 45,
                            },
                        ]}
                    />
                    <S.SubText color="#999" className="mt-[30px] mobile:mt-[15px] tablet:mt-[22px]">
                        *임직원부터 임직원 가족까지 이용 가능합니다.
                    </S.SubText>
                </S.InnerBox>
            </S.Section>
            {/* //section-05 */}
            {/* section-06 */}
            <S.Section>
                <S.InnerBox>
                    <S.TitleBox className="mb-[80px] mobile:mb-[40px] tablet:mb-[60px]">
                        <S.Title className="mb-[10px] mobile:mb-[5px] tablet:mb-[7px]">
                            위드닥 예약 콜센터 <a href="tel:1866-4575">1866-4575</a>
                        </S.Title>
                        <S.SubText>전화 한통으로 편리하게 예약이 가능합니다.</S.SubText>
                    </S.TitleBox>
                    <ReservationGuideList
                        items={[
                            {
                                icon: IconGuideStep01,
                                title: '전화/온라인 접수',
                                text: '전화 또는 온라인으로 간편하게 접수하세요.',
                            },
                            {
                                icon: IconGuideStep02,
                                title: '제휴기업 확인',
                                text: '가입 승인 후 발급된 기업코드(숫자 6자리)를 말씀해 주세요.',
                            },
                            {
                                icon: IconGuideStep03,
                                title: '예약확정',
                                text: '위드닥 콜센터에서 제휴병원의 일정 확인 후 연락을 드립니다.',
                            },
                        ]}
                    />
                </S.InnerBox>
            </S.Section>
            {/* //section-06 */}
            {/* section-07 */}
            <S.Section backgroundColor="bg-primary">
                <S.InnerBox>
                    <S.TitleBox>
                        <div className="mb-[20px] mobile:mb-[10px] tablet:mb-[15px]">
                            <img src={IconBubble} alt="" className="m-auto mobile:max-w-[75%]" />
                        </div>
                        <S.Title className="text-white">
                            <p className="font-normal">기업의 의료복지,</p>
                            지금 문의하세요.
                        </S.Title>
                    </S.TitleBox>
                    <div className="mt-[15px] text-center mobile:mt-[7px] tablet:mt-[12px]">
                        <S.TelButton onClick={() => (window.location.href = 'tel:1866-4575')}>
                            문의전화 <strong>1866-4575</strong>
                        </S.TelButton>
                    </div>
                    <S.SubText
                        color="#88A9FA"
                        className="mt-[50px] mobile:mt-[25px] tablet:mt-[38px]"
                    >
                        * Beta서비스 기간에는 위드닥의 모든 서비스 비용이 무료입니다.
                    </S.SubText>
                </S.InnerBox>
            </S.Section>
            {/* //section-07 */}
            {!isLoggedIn && <StickyBar />}
        </S.Wrapper>
    );
}

export default Service;
