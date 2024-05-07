import React from 'react';

import { router, usePage } from '@inertiajs/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { GradientButton } from '@/components/ui';
import { Gallery as GalleryType } from '@/pages/gallery/Home';
import bottomLogo from '@assets/home/image_gallery_bottom.png';

import * as s from './Gallery.styled';

const Gallery = React.forwardRef<HTMLDivElement>((_props, ref) => {
    const { galleries } = usePage<{ galleries: GalleryType[] }>().props;

    return (
        <s.Wrapper ref={ref}>
            <h2>GALLERY</h2>
            <s.SliderBox>
                <Swiper
                    centeredSlides
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
                    {galleries.map(
                        (gallery, index) =>
                            index % 2 == 0 &&
                            (gallery.file ? (
                                <SwiperSlide key={index}>
                                    <div>
                                        <img src={gallery.file[0].file_path} alt="" />
                                    </div>
                                </SwiperSlide>
                            ) : (
                                ''
                            ))
                    )}
                </Swiper>
            </s.SliderBox>
            <s.SliderBox>
                <Swiper
                    centeredSlides
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
                    {galleries.map(
                        (gallery, index) =>
                            index % 2 !== 0 &&
                            (gallery.file ? (
                                <SwiperSlide key={index}>
                                    <div>
                                        <img src={gallery.file[0].file_path} alt="" />
                                    </div>
                                </SwiperSlide>
                            ) : (
                                ''
                            ))
                    )}
                </Swiper>
            </s.SliderBox>
            <s.ButtonBox>
                <GradientButton label="MORE INFO" onClick={() => router.visit(route('gallery'))} />
            </s.ButtonBox>

            <s.GalleryMarquee>
                <img src={bottomLogo} alt="" />
            </s.GalleryMarquee>
        </s.Wrapper>
    );
});

export default Gallery;
