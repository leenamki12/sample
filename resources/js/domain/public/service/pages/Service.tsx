import { Head } from '@inertiajs/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import HospitalRolling01 from '@assets/public/service/hospital_rolling01.png';
import HospitalRolling02 from '@assets/public/service/hospital_rolling02.png';
import HospitalRolling03 from '@assets/public/service/hospital_rolling03.png';
import HospitalRolling04 from '@assets/public/service/hospital_rolling04.png';
import UseStep01 from '@assets/public/service/service_use_step01.png';
import UseStep02 from '@assets/public/service/service_use_step02.png';
import UseStep03 from '@assets/public/service/service_use_step03.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { HospitalSlide, TitleSlide } from '../components';

import * as S from './Service.styled';

function Service() {
    return (
        <S.Wrapper>
            <Head title="서비스 소개" />
            {/* section-01 */}
            <div className="bg-[#E8F2FC]">
                <S.InnerBox>
                    <S.TitleBox>
                        <S.Title>
                            기업의 의료복지 서비스
                            <span>‘위드닥’과 함께하세요.</span>
                        </S.Title>
                        <p>
                            위드닥은 비급여 병원의 의료서비스를 제휴를 통해 임직원가로 제공하는
                            <strong>‘기업 의료복지 서비스’</strong>입니다.
                        </p>
                    </S.TitleBox>
                    <div className="h-[300px]">image</div>
                </S.InnerBox>
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
                    <TitleSlide
                        titles={['성형외과', '피부과', '정형외과', '치과', '안과', '건강검진']}
                    />
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
        </S.Wrapper>
    );
}

export default Service;
