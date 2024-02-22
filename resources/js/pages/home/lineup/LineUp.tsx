import { useState } from 'react';
import Marquee from 'react-fast-marquee';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import { Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import { GradientButton, Tab, Tabs } from '@/components/ui';
import bg from '@assets/home/bg_lineup.png';

import { lineUpDatas } from './constants/lineup';
import 'swiper/css/scrollbar';

import * as s from './LineUp.styled';

function LineUp() {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [swiper, setSwiper] = useState<SwiperType>();

    const handleTabClick = (index: number) => {
        setActiveTab(index);

        swiper?.slideTo(0);
    };

    const handleClickSlideTo = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            swiper?.slidePrev();
        } else {
            swiper?.slideNext();
        }
    };

    return (
        <s.Wrapper>
            <Marquee className="w-full">
                <img src={bg} alt="" />
            </Marquee>
            <div className="relative z-10 -mt-[360px]">
                <h2>LINEUP</h2>
                <Tabs activeTab={activeTab} onTabClick={handleTabClick} className="mb-[60px]">
                    <Tab label="04 13 SAT" />
                    <Tab label="04 14 SUN" />
                </Tabs>
                <s.SliderWrapper>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        pagination={{ clickable: true }}
                        onSwiper={swiper => {
                            setSwiper(swiper);
                        }}
                        style={{ paddingBottom: '50px' }}
                    >
                        {lineUpDatas[activeTab].map(item => {
                            return (
                                <s.SwiperSlideItem key={item.name}>
                                    <img src={item.url} alt="" className="w-full" />
                                    <p>{item.name}</p>
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
                    <GradientButton label="MORE INFO" />
                </s.ButtonBox>
            </div>
        </s.Wrapper>
    );
}

export default LineUp;
