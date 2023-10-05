import { Swiper, SwiperSlide } from 'swiper/react';

import ImageHospital01 from '@assets/company/detail/detail_other_hospital01.png';
import ImageHospital02 from '@assets/company/detail/detail_other_hospital02.png';
import ImageHospital03 from '@assets/company/detail/detail_other_hospital03.png';

import * as S from './OtherPartnerList.styled';
import 'swiper/css';

function OtherPartnerList() {
    return (
        <S.Wrapper>
            <Swiper slidesPerView="auto" centeredSlides={false} spaceBetween={30} grabCursor={true}>
                <SwiperSlide>
                    <S.ImageBox>
                        <img src={ImageHospital01} alt="" />
                    </S.ImageBox>
                    <S.TextBox>
                        <strong>나나성형외과의원</strong>
                        <p>서울 강남구 강남역</p>
                    </S.TextBox>
                </SwiperSlide>
                <SwiperSlide>
                    <S.ImageBox>
                        <img src={ImageHospital02} alt="" />
                    </S.ImageBox>
                    <S.TextBox>
                        <strong>비앤빛 강남밝은세상안과의원</strong>
                        <p>서울 강남구 신논현/논현역</p>
                    </S.TextBox>
                </SwiperSlide>
                <SwiperSlide>
                    <S.ImageBox>
                        <img src={ImageHospital03} alt="" />
                    </S.ImageBox>
                    <S.TextBox>
                        <strong>모아만의원</strong>
                        <p>서울 강남구 신사역</p>
                    </S.TextBox>
                </SwiperSlide>
            </Swiper>
        </S.Wrapper>
    );
}

export default OtherPartnerList;
