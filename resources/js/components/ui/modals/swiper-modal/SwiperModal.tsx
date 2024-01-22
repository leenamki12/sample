import { useEffect, useRef, useState } from 'react';

import { XMarkIcon } from '@heroicons/react/20/solid';
import dayjs from 'dayjs';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavigationOptions, type Swiper as SwiperRef } from 'swiper/types';

import 'swiper/css/navigation';

import { Performance } from '@/types/admin/performance/index';
import ArrowNext from '@assets/pages/icon_swiper_arrow_next.svg';
import ArrowPrev from '@assets/pages/icon_swiper_arrow_prev.svg';

import * as S from './SwiperModal.styled';

type Props = {
    data: Performance;
    isModalOpen?: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
};

function SwiperModal({ data, isModalOpen, setIsModalOpen }: Props) {
    const swiperRef = useRef<SwiperRef>();
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const [isLocked, setIsLocked] = useState<boolean>();

    useEffect(() => {
        swiperRef.current?.update();

        setIsLocked(swiperRef.current?.isLocked);
    }, [isModalOpen, isLocked]);

    return (
        <S.Wrapper isLocked={isLocked}>
            <S.TitleBox>
                <S.TitleContent>
                    <strong>{data.title}</strong>
                    <p>
                        {dayjs(data.date_time).format('YYYY.MM.DD')} ~{' '}
                        {dayjs(data.end_date_time).format('YYYY.MM.DD')} at {data.location}
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
                        641: {
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
                {!isLocked && (
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
                )}
            </S.SliderBox>
            <S.InfoBox>
                {data.part_types.map(part => (
                    <span key={part.id}>{part.name}</span>
                ))}
                <p>WanderLoch Inc.</p>
            </S.InfoBox>
        </S.Wrapper>
    );
}

export default SwiperModal;
