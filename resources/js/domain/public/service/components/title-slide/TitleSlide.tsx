import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as S from './TitleSlide.styled';

type Props = {
    titles: string[];
};

function TitleSlide({ titles }: Props) {
    return (
        <S.Wrapper>
            <Swiper
                modules={[Autoplay]}
                direction={'vertical'}
                speed={500}
                autoHeight={true}
                autoplay={{
                    delay: 1300,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
                slidesPerView={1}
                loop={true}
                height={60}
                breakpoints={{
                    641: {
                        height: 90,
                    },
                    769: {
                        height: 115,
                    },
                }}
            >
                {titles.map(title => (
                    <SwiperSlide key={title}>
                        <strong className="block text-center text-[50px] font-bold text-white mobile:text-[25px] tablet:text-[38px]">
                            {title}
                        </strong>
                    </SwiperSlide>
                ))}
            </Swiper>
        </S.Wrapper>
    );
}

export default TitleSlide;
