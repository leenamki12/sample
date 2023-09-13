import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { PageHeader } from '@/components/ui';
import ImageBanner01 from '@assets/company/home/main_banner01.png';
import ImageBanner02 from '@assets/company/home/main_banner02.png';
import ImageBanner03 from '@assets/company/home/main_banner03.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { HospitalList } from '../components';

import * as S from './Dashboard.styled';

function Dashboard() {
    return (
        <S.Wrapper>
            <PageHeader title="" head="홈" />
            <S.BannerBox>
                <Swiper
                    modules={[Pagination, Autoplay, A11y]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <img
                            src={ImageBanner01}
                            alt="병원비 부담 덜어드려요! 제휴 병원 저렴하게 이용해보세요"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={ImageBanner02}
                            alt="위드닥 병원 제휴문의, 지금 우리병원을 등록해보세요!"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src={ImageBanner03}
                            alt="상담 및 예약시 유의사항, 소속명을 알려주셔야 혜택이 적용됩니다."
                        />
                    </SwiperSlide>
                </Swiper>
            </S.BannerBox>
            <HospitalList />
        </S.Wrapper>
    );
}

export default Dashboard;
