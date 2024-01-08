import { useRef } from 'react';

import { XMarkIcon } from '@heroicons/react/20/solid';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavigationOptions, type Swiper as SwiperRef } from 'swiper/types';

import 'swiper/css/navigation';
import 'swiper/css/navigation';

import { Performance } from '@/types/admin/performance/index';
import ArrowNext from '@assets/pages/icon_swiper_arrow_next.svg';
import ArrowPrev from '@assets/pages/icon_swiper_arrow_prev.svg';

import * as S from './SwiperModal.styled';

type Props = {
    data: Performance;
    setIsModalOpen: (isModalOpen: boolean) => void;
};

function SwiperModal({ data, setIsModalOpen }: Props) {
    const swiperRef = useRef<SwiperRef>();
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <S.Wrapper>
            <S.TitleBox>
                <S.TitleContent>
                    <strong>{data.title}</strong>
                    <p>
                        {data.date_time} {data.location}
                    </p>
                </S.TitleContent>
                <S.CloseButton onClick={() => setIsModalOpen(false)}>
                    <XMarkIcon className="h-10 w-10" aria-hidden="true" />
                </S.CloseButton>
            </S.TitleBox>
            <S.SliderBox>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={swiper => {
                        swiperRef.current = swiper;

                        (swiper.params.navigation as NavigationOptions).prevEl = prevRef.current;
                        (swiper.params.navigation as NavigationOptions).nextEl = nextRef.current;
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {data.images?.map((image, index) => (
                        <SwiperSlide key={index}>
                            <S.ImageBox>
                                <img src={`storage/${image.file_path}`} alt="" />
                            </S.ImageBox>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <S.NavigationBox>
                    <button
                        type="button"
                        className="prevButton"
                        ref={prevRef}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <img src={ArrowPrev} alt="" />
                        <p className="sr-only">이전</p>
                    </button>
                    <button
                        type="button"
                        className="nextButton"
                        ref={nextRef}
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <img src={ArrowNext} alt="" />
                        <p className="sr-only">다음</p>
                    </button>
                </S.NavigationBox>
            </S.SliderBox>
            <S.InfoBox>
                {/* {data.partTypes.map(part => (
                    <span key={part.id}>part.name</span>
                ))} */}
            </S.InfoBox>
        </S.Wrapper>
    );
}

export default SwiperModal;
