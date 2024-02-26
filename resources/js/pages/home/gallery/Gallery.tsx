import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { GradientButton } from '@/components/ui';
import bottomLogo from '@assets/home/image_gallery_bottom.png';

import * as s from './Gallery.styled';

const Gallery = React.forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <s.Wrapper ref={ref}>
            <h2>GALLERY</h2>
            <s.SliderBox>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    breakpoints={{
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                    }}
                    style={{ paddingBottom: '30px' }}
                    loop
                >
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-blue-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-red-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-yellow-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-blue-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-red-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-yellow-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-blue-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-red-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-yellow-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-blue-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-red-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-yellow-100">a</div>
                    </SwiperSlide>
                </Swiper>
            </s.SliderBox>
            <s.SliderBox>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    breakpoints={{
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                    }}
                    style={{ paddingBottom: '0px' }}
                    loop
                >
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-blue-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-red-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-yellow-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-blue-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-red-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-yellow-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-blue-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-red-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-yellow-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-blue-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-red-100">a</div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[250px] w-full bg-yellow-100">a</div>
                    </SwiperSlide>
                </Swiper>
            </s.SliderBox>
            <s.ButtonBox>
                <GradientButton label="MORE INFO" />
            </s.ButtonBox>

            <s.GalleryMarquee>
                <img src={bottomLogo} alt="" />
            </s.GalleryMarquee>
        </s.Wrapper>
    );
});

export default Gallery;
