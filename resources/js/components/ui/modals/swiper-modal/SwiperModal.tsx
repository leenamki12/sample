import { useRef, useState } from 'react';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function SwiperModal() {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <div>
            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                centeredSlides={false}
                spaceBetween={30}
                navigation={true}
            >
                <SwiperSlide>111111</SwiperSlide>
                <SwiperSlide>22222</SwiperSlide>
                <SwiperSlide>33333</SwiperSlide>
                <SwiperSlide>44444</SwiperSlide>
                <SwiperSlide>555555</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SwiperModal;
