import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Dashboard() {
    return (
        <div>
            <div className="mb-12">
                <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide className="h-32 w-full rounded-2xl bg-slate-300">
                        banner1
                    </SwiperSlide>
                    <SwiperSlide className="h-32 w-full rounded-2xl bg-slate-200">
                        banner2
                    </SwiperSlide>
                    <SwiperSlide className="h-32 w-full rounded-2xl bg-slate-400">
                        banner3
                    </SwiperSlide>
                    <SwiperSlide className="h-32 w-full rounded-2xl bg-slate-300">
                        banner4
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <div className="mb-16 overflow-hidden rounded-2xl shadow-[10px_10px_30px_5px_rgba(0,0,0,0.08)]">
                    <div className="w-full bg-red-300 pb-[100%]"></div>
                    <div className="px-5 py-6">
                        <strong>디에이성형외과의원</strong>
                        <p className="text-sm">
                            눈, 코, 가슴, 안면윤곽, 리프팅 등 분야별 체계적인 협진과 대학병원급 설비
                            시스템, 강남역 12번 출구
                        </p>
                        <div className="flex">
                            <p>서울 강남구 역삼역</p>
                            <p>
                                <span>진료중</span> 오늘 10:00 - 19:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
