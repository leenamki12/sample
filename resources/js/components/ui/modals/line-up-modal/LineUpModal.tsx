import { useEffect, useState } from 'react';

import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import { LineUpData } from '@/pages/line-up/constants/lineup';
import instar from '@assets/pages/line-up/icon_instar.png';
import spotify from '@assets/pages/line-up/icon_spotify.png';
import youtube from '@assets/pages/line-up/icon_youtube.png';

import * as s from './LineUpModal.styled';

type Props = {
    items: LineUpData[];
    selectedItemIndex: number;
    onClose: () => void;
};

function LineUpModal({ items, selectedItemIndex, onClose }: Props) {
    const [swiper, setSwiper] = useState<SwiperType>();

    useEffect(() => {
        swiper?.slideToLoop(selectedItemIndex);
    }, [selectedItemIndex]);

    const handleClickSlideTo = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            swiper?.slidePrev();
        } else {
            swiper?.slideNext();
        }
    };

    return (
        <div className="fixed left-0 top-0 z-[90000] flex h-full w-full items-center justify-center bg-black/70">
            <s.SliderContent>
                <Swiper
                    onAfterInit={slide => {
                        slide?.slideToLoop(selectedItemIndex);
                    }}
                    slidesPerView={1}
                    centeredSlides
                    onSwiper={swiper => {
                        setSwiper(swiper);
                    }}
                    autoHeight
                    loop
                >
                    {items.map(item => {
                        return (
                            <SwiperSlide key={item.names.en}>
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-full rounded-t-[20px] tablet:rounded-none"
                                />
                                <div className="justify-center overflow-hidden rounded-b-[20px] bg-white px-[50px] py-[30px] text-center tablet:rounded-none">
                                    <strong className="inline border-t-[2px] border-black pt-[10px] text-center text-[30px]">
                                        {item.names.en}
                                    </strong>
                                    <s.SliderText>{item.explanations.long}</s.SliderText>
                                    <ul className="mt-[20px] flex justify-center gap-[20px]">
                                        {item.links.instagram && (
                                            <li>
                                                <a href={item.links.instagram} target="_blank">
                                                    <img
                                                        src={instar}
                                                        alt={`${item.names.ko} 인스타 바로가기`}
                                                    />
                                                </a>
                                            </li>
                                        )}
                                        {item.links.youtube && (
                                            <li>
                                                <a href={item.links.youtube} target="_blank">
                                                    <img
                                                        src={youtube}
                                                        alt={`${item.names.ko} 유튜브 바로가기`}
                                                    />
                                                </a>
                                            </li>
                                        )}
                                        {item.links.spotify && (
                                            <li>
                                                <a href={item.links.spotify} target="_blank">
                                                    <img
                                                        src={spotify}
                                                        alt={`${item.names.ko} spotify 바로가기`}
                                                    />
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                <s.SliderCloseButton onClick={onClose}>
                    <XMarkIcon className="cursor-pointer fill-white"></XMarkIcon>
                </s.SliderCloseButton>

                <s.SliderPrevButton onClick={() => handleClickSlideTo('prev')}>
                    <ArrowLeftIcon className="cursor-pointer fill-white" />
                </s.SliderPrevButton>
                <s.SliderNextButton onClick={() => handleClickSlideTo('next')}>
                    <ArrowRightIcon className="cursor-pointer fill-white" />
                </s.SliderNextButton>
            </s.SliderContent>
        </div>
    );
}

export default LineUpModal;
