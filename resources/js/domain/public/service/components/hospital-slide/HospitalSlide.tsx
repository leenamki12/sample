import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as S from './HospitalSlide.styled';

type Props = {
    images: string[];
};

function HospitalSlide({ images }: Props) {
    return (
        <S.Wrapper>
            <Swiper
                modules={[Autoplay]}
                speed={5000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: true,
                }}
                allowTouchMove={false}
                slidesPerView={'auto'}
                spaceBetween={30}
                loop={true}
            >
                {images.map(image => (
                    <SwiperSlide key={image}>
                        <img src={image} alt="" />
                    </SwiperSlide>
                ))}
                {images.map(image => (
                    <SwiperSlide key={image}>
                        <img src={image} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </S.Wrapper>
    );
}

export default HospitalSlide;
