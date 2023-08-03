import { useMemo } from 'react';

import { usePage } from '@inertiajs/react';
import dayjs from 'dayjs';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import IconPartner from '@assets/company/common/icon-partner.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import hospitals, { HospitalItem } from '../../datas';

import * as S from './HospitalDetail.styled';
function HospitalDetail() {
    const { id } = usePage().props;

    console.log(id);

    const hospitalItems = useMemo(() => {
        const newItem: HospitalItem[] = [];

        hospitals.forEach(hospital => {
            const currentDayOfWeek = dayjs().day();
            const currentDayHours = hospital.hours.find(
                date => currentDayOfWeek === date.dayOfWeek
            );

            const now = dayjs().format('HH:mm');

            let isWorking = false;
            let workingStatus = '';
            let workingHours = '';

            if (currentDayHours) {
                const beforeStart = currentDayHours.startTime < now;
                const afterEnd = now < currentDayHours.endTime;
                isWorking = beforeStart && afterEnd;
                workingHours = `${currentDayHours.startTime} - ${currentDayHours.endTime}`;

                if (isWorking) {
                    workingStatus = '진료중';
                } else {
                    !beforeStart ? (workingStatus = '진료예정') : (workingStatus = '진료종료');
                }
            } else {
                workingStatus = '진료없음';
            }

            newItem.push({
                ...hospital,
                isWorking,
                workingStatus,
                workingHours,
            });
        });

        return newItem;
    }, [hospitals]);

    const hospitalData = hospitalItems.find(data => data.id === Number(id));

    console.log(hospitalData);

    return (
        <S.Container>
            <div>
                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        type: 'fraction',
                        renderFraction: function (currentClass, totalClass) {
                            return (
                                '<span class="' +
                                currentClass +
                                '"></span>' +
                                '/' +
                                '<span class="' +
                                totalClass +
                                '"></span>'
                            );
                        },
                    }}
                    slidesPerView={1}
                >
                    {hospitalData?.images.map((image, key) => (
                        <SwiperSlide key={key}>
                            <img src={image} alt="" />
                        </SwiperSlide>
                    ))}
                    <SwiperSlide className="w-full bg-red-300 pb-[100%]"></SwiperSlide>
                    <SwiperSlide className="w-full bg-blue-300 pb-[100%]"></SwiperSlide>
                    <SwiperSlide className="w-full bg-purple-300 pb-[100%]"></SwiperSlide>
                    <SwiperSlide className="w-full bg-red-100 pb-[100%]"></SwiperSlide>
                </Swiper>
            </div>
            <div className="px-5 py-6">
                <S.TitleBox>
                    <S.PartnerBox>
                        <img src={IconPartner} alt="" className="w-[10px]" />
                        <span>제휴</span>
                    </S.PartnerBox>
                    <S.Title>{hospitalData?.name}</S.Title>
                </S.TitleBox>
                <p className="mb-[9px] text-base text-[#666]">{hospitalData?.content}</p>
                <S.InfoBox>
                    <S.Address>{hospitalData?.address}</S.Address>
                    <S.WorkHour>
                        <strong
                            className={
                                hospitalData?.isWorking
                                    ? 'pr-[6px] text-[#5AC4CB]'
                                    : 'pr-[6px] text-red-500'
                            }
                        >
                            {hospitalData?.workingStatus}
                        </strong>
                        {hospitalData?.workingHours && '오늘 ' + hospitalData?.workingHours}
                    </S.WorkHour>
                </S.InfoBox>
            </div>
        </S.Container>
    );
}

export default HospitalDetail;
