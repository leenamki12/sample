import { Head } from '@inertiajs/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Logo from '@assets/common/logo.svg';
import HospitalRolling01 from '@assets/public/service/hospital_rolling01.png';
import HospitalRolling02 from '@assets/public/service/hospital_rolling02.png';
import HospitalRolling03 from '@assets/public/service/hospital_rolling03.png';
import HospitalRolling04 from '@assets/public/service/hospital_rolling04.png';
import IconBubble from '@assets/public/service/service_bubble_icon.svg';
import IconGuideStep01 from '@assets/public/service/service_guide_step01.svg';
import IconGuideStep02 from '@assets/public/service/service_guide_step02.svg';
import IconGuideStep03 from '@assets/public/service/service_guide_step03.svg';
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
} from '../components';

import * as S from './Service.styled';

function Service() {
    return (
        <S.Wrapper>
            <Head title="서비스 소개" />
            {/* section-01 */}
            <div className="bg-[#E8F2FC]">
                <S.InnerBox className="!pb-0">
                    <S.TitleBox>
                        <div className="mb-[60px] flex items-center justify-center">
                            <p className="max-w-[115px]">
                                <img src={Logo} alt="" />
                            </p>
                        </div>
                        <S.Title>
                            기업의 의료복지 서비스
                            <span>‘위드닥’과 함께하세요.</span>
                        </S.Title>
                        <S.SubText className="mt-[20px] text-[28px] leading-[44px] text-[#666]">
                            위드닥은 비급여 병원의 의료서비스를 제휴를 통해
                            <br />
                            임직원가로 제공하는 <strong>‘기업 의료복지 서비스’</strong>입니다.
                        </S.SubText>
                    </S.TitleBox>
                </S.InnerBox>
                <div className="flex items-end justify-end">
                    <img src={MainVisual} alt="" />
                </div>
            </div>
            {/* //section-01 */}
            {/* section-02 */}
            <div>
                <S.InnerBox>
                    <strong className="block text-center text-[50px] font-bold">
                        도입 및 이용절차
                    </strong>
                    <S.SwiperBox>
                        <div className="swiper-pagination"></div>
                        <Swiper
                            modules={[EffectFade, Pagination, Autoplay]}
                            effect={'fade'}
                            fadeEffect={{ crossFade: true }}
                            speed={500}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            slidesPerView={1}
                            pagination={{
                                el: '.swiper-pagination',
                                clickable: false,
                                renderBullet: function (index, className) {
                                    return (
                                        '<span class="' +
                                        className +
                                        '">' +
                                        'step' +
                                        (index + 1) +
                                        '</span>'
                                    );
                                },
                            }}
                        >
                            <SwiperSlide>
                                <S.InnerSwiper>
                                    <strong>기업회원가입</strong>
                                    <div>
                                        <img src={UseStep01} alt="" />
                                    </div>
                                </S.InnerSwiper>
                            </SwiperSlide>
                            <SwiperSlide>
                                <S.InnerSwiper>
                                    <strong>위드닥 승인 및 제휴 코드발급</strong>
                                    <div>
                                        <img src={UseStep02} alt="" />
                                    </div>
                                </S.InnerSwiper>
                            </SwiperSlide>
                            <SwiperSlide>
                                <S.InnerSwiper>
                                    <strong>서비스이용</strong>
                                    <div>
                                        <img src={UseStep03} alt="" />
                                    </div>
                                </S.InnerSwiper>
                            </SwiperSlide>
                        </Swiper>
                    </S.SwiperBox>
                </S.InnerBox>
            </div>
            {/* //section-02 */}
            {/* section-03 */}
            <div className="bg-primary">
                <S.InnerBox wide>
                    <S.TitleBox className="mb-[50px]">
                        <TitleSlide
                            titles={['성형외과', '피부과', '정형외과', '치과', '안과', '건강검진']}
                        />
                        <S.SubText color="white" className="mt-[30px]">
                            기업의 임직원과 가족까지 <strong>제휴가로 이용가능</strong>
                        </S.SubText>
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
            </div>
            {/* //section-03 */}
            {/* section-04 */}
            <div className="pt-[100px]">
                <p className="mb-[40px] text-center text-[32px] font-bold text-primary">
                    PARTNERSHIP
                </p>
                <div>
                    <img src={Partnership} alt="" />
                </div>
            </div>
            {/* //section-04 */}
            {/* section-05 */}
            <div className="bg-[#F2F7FF]">
                <S.InnerBox>
                    <S.TitleBox className="mb-[50px]">
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
                </S.InnerBox>
            </div>
            {/* //section-05 */}
            {/* section-06 */}
            <div>
                <S.InnerBox>
                    <S.TitleBox className="mb-[80px]">
                        <S.Title className="mb-[10px]">
                            위드닥 예약 콜센터 <span>1866-4575</span>
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
            </div>
            {/* //section-06 */}
            {/* section-07 */}
            <div className="bg-primary">
                <S.InnerBox>
                    <S.TitleBox>
                        <div className="mb-[20px]">
                            <img src={IconBubble} alt="" />
                        </div>
                        <S.Title className="text-white">
                            <p className="font-normal">기업의 의료복지,</p>
                            지금 문의하세요.
                        </S.Title>
                    </S.TitleBox>
                    <div className="mt-[15px] text-center">
                        <button className="min-w-[530px] rounded border-2 border-white/20 bg-opacity-20 bg-gradient-to-b from-white/20 to-primary/20 p-[20px] text-[32px] text-white">
                            문의전화 <strong>1866-4575</strong>
                        </button>
                    </div>
                </S.InnerBox>
            </div>
            {/* //section-07 */}
            <StickyBar />
        </S.Wrapper>
    );
}

export default Service;
