import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import HomeList from '../components/home-list';

function Dashboard() {
    return (
        <div className="px-8 pt-8">
            <div className="mb-12">
                <Swiper
                    modules={[Pagination, A11y]}
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
            <HomeList />
        </div>
    );
}

export default Dashboard;
