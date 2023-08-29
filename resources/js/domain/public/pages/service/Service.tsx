import { Head } from '@inertiajs/react';
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import UseStep01 from '@assets/public/service/service_use_step01.png';
import UseStep02 from '@assets/public/service/service_use_step02.png';
import UseStep03 from '@assets/public/service/service_use_step03.png';

// Import Swiper styles
import 'swiper/css';

import * as S from './Service.styled';

function Service() {
    return (
        <S.Wrapper>
            <Head title="서비스 소개" />
            {/* section-01 */}
            <div className="bg-[#E8F2FC]">
                <S.InnerBox>
                    <div>
                        <strong className="block text-center">
                            기업의 의료복지 서비스
                            <span className="block text-primary">‘위드닥’과 함께하세요.</span>
                        </strong>
                        <p>
                            위드닥은 비급여 병원의 의료서비스를 제휴를 통해 임직원가로 제공하는
                            <strong>‘기업 의료복지 서비스’</strong>입니다.
                        </p>
                    </div>
                    <div className="h-[300px]">image</div>
                </S.InnerBox>
            </div>
            {/* //section-01 */}
            {/* section-02 */}
            <div>
                <S.InnerBox>
                    <strong>도입 및 이용절차</strong>
                    <S.SwiperBox>
                        <div className="swiper-pagination"></div>
                        <Swiper
                            modules={[Pagination, Autoplay, A11y]}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
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
                                <div className="flex flex-col items-center">
                                    <span>기업회원가입</span>
                                    <div>
                                        <img src={UseStep01} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col items-center">
                                    <span>위드닥 승인 및 제휴 코드발급</span>
                                    <div>
                                        <img src={UseStep02} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col items-center">
                                    <span>서비스이용</span>
                                    <div>
                                        <img src={UseStep03} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </S.SwiperBox>
                </S.InnerBox>
            </div>
            {/* //section-02 */}
        </S.Wrapper>
    );
}

export default Service;
