import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as S from './UseGuideSlide.styled';

type UseGuideType = {
    image: string;
    title: string;
};

type Props = {
    items: UseGuideType[];
};

function UseGuildSlide({ items }: Props) {
    return (
        <S.Wrapper>
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
                            '<span class="' + className + '">' + 'STEP' + (index + 1) + '</span>'
                        );
                    },
                }}
            >
                {items.map(item => (
                    <SwiperSlide key={item.title}>
                        <S.InnerBox>
                            <strong>{item.title}</strong>
                            <div>
                                <img src={item.image} alt="" />
                            </div>
                        </S.InnerBox>
                    </SwiperSlide>
                ))}
            </Swiper>
        </S.Wrapper>
    );
}

export default UseGuildSlide;
