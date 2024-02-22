import Marquee from 'react-fast-marquee';

import { Swiper, SwiperSlide } from 'swiper/react';

import { GradientButton } from '@/components/ui';
import bottomLogo from '@assets/home/image_gallery_bottom.png';

import * as s from './Gallery.styled';

function Gallery() {
    return (
        <s.Wrapper>
            <h2>GALLERY</h2>
            <div className="-mx-[50px]">
                <Swiper spaceBetween={30} slidesPerView={6} style={{ paddingBottom: '30px' }} loop>
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
            </div>
            <div className="-mx-[50px]">
                <Swiper spaceBetween={30} slidesPerView={6} style={{ paddingBottom: '0px' }} loop>
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
            </div>
            <s.ButtonBox>
                <GradientButton label="MORE INFO" />
            </s.ButtonBox>

            <Marquee className="mt-[170px] w-full">
                <img src={bottomLogo} alt="" />
            </Marquee>
        </s.Wrapper>
    );
}

export default Gallery;
