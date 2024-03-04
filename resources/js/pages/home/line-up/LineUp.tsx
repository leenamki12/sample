import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import { router } from '@inertiajs/react';
import { Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import { GradientButton, Tab, Tabs } from '@/components/ui';
import LineUpModal from '@/components/ui/modals/line-up-modal/LineUpModal';
import { lineUpDatas } from '@/pages/line-up/constants/lineup';
import bg from '@assets/home/bg_lineup.png';

import 'swiper/css/scrollbar';

import * as s from './LineUp.styled';

const LineUp = React.forwardRef<HTMLDivElement>((_props, ref) => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [swiper, setSwiper] = useState<SwiperType>();
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

    const handleTabClick = (index: number) => {
        setActiveTab(index);

        swiper?.slideToLoop(0);
        swiper?.slideReset();
    };

    const handleClickSlideTo = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            swiper?.slidePrev();
        } else {
            swiper?.slideNext();
        }
    };

    return (
        <>
            <s.Wrapper ref={ref}>
                <Marquee className="w-full">
                    <img src={bg} alt="" />
                </Marquee>
                <s.Inner>
                    <h2>LINEUP</h2>
                    <Tabs activeTab={activeTab} onTabClick={handleTabClick} className="mb-[60px]">
                        <Tab label="04 13 SAT" />
                        <Tab label="04 14 SUN" />
                    </Tabs>
                    <s.SliderWrapper>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={20}
                            slidesPerView={1.4}
                            centeredSlides
                            loop
                            pagination={{ clickable: true }}
                            onSwiper={swiper => {
                                setSwiper(swiper);
                            }}
                            style={{ paddingBottom: '50px' }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                    centeredSlides: false,
                                    loop: false,
                                },
                            }}
                        >
                            {lineUpDatas[activeTab].map((item, index) => {
                                return (
                                    <s.SwiperSlideItem
                                        key={item.names.en}
                                        onClick={() => setSelectedItemIndex(index)}
                                    >
                                        <img src={item.image} alt="" className="w-full" />
                                        <p>
                                            <div>{item.names.en}</div>
                                            <div>{item.names.ko}</div>
                                        </p>
                                    </s.SwiperSlideItem>
                                );
                            })}
                        </Swiper>
                        <s.SliderPrevButton onClick={() => handleClickSlideTo('prev')}>
                            <ArrowLeftIcon />
                        </s.SliderPrevButton>
                        <s.SliderNextButton onClick={() => handleClickSlideTo('next')}>
                            <ArrowRightIcon />
                        </s.SliderNextButton>
                    </s.SliderWrapper>
                    <s.ButtonBox>
                        <GradientButton
                            label="MORE INFO"
                            onClick={() => router.visit(route('line-up'))}
                        />
                    </s.ButtonBox>
                </s.Inner>
            </s.Wrapper>
            {selectedItemIndex !== null && (
                <LineUpModal
                    items={lineUpDatas[activeTab]}
                    selectedItemIndex={selectedItemIndex}
                    onClose={() => setSelectedItemIndex(null)}
                />
            )}
        </>
    );
});

export default LineUp;
