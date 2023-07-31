import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import IconPartner from '@assets/company/common/icon-partner.svg';

import 'swiper/css/pagination';
import * as S from './HomeList.styled';

function HomeList() {
    return (
        <S.Container>
            <S.Item>
                <div>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            type: 'fraction',
                        }}
                        slidesPerView={1}
                    >
                        <SwiperSlide className="w-full bg-red-300 pb-[100%]"></SwiperSlide>
                        <SwiperSlide className="w-full bg-blue-300 pb-[100%]"></SwiperSlide>
                        <SwiperSlide className="w-full bg-purple-300 pb-[100%]"></SwiperSlide>
                        <SwiperSlide className="w-full bg-red-100 pb-[100%]"></SwiperSlide>
                    </Swiper>
                </div>
                <div className="px-5 py-6">
                    <div className="mb-[9px] flex items-center">
                        <div className="mr-[5px] flex max-w-[55px] items-center justify-center rounded-xl bg-primary px-[8px] py-[4px]">
                            <img src={IconPartner} alt="" className="w-[10px]" />{' '}
                            <span className="pl-[4px] text-[11px] text-white">제휴</span>
                        </div>
                        <strong className="block text-[19px] font-extrabold">
                            디에이성형외과의원
                        </strong>
                    </div>
                    <p className="mb-[9px] text-base text-[#666]">
                        눈, 코, 가슴, 안면윤곽, 리프팅 등 분야별 체계적인 협진과 대학병원급 설비
                        시스템, 강남역 12번 출구
                    </p>
                    <div className="flex text-sm">
                        <p>서울 강남구 역삼역</p>
                        <p className="ml-[10px] pl-[10px]">
                            <strong className="pr-[6px] text-[#5AC4CB]">진료중</strong>
                            오늘 10:00 - 19:00
                        </p>
                    </div>
                </div>
            </S.Item>
        </S.Container>
    );
}

export default HomeList;
