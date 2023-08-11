import { Link } from '@inertiajs/react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import IconPartner from '@assets/company/common/icon-partner.svg';

import 'swiper/css/pagination';
import useHospitalData from '../../datas';

import * as S from './HomeList.styled';

function HomeList() {
    const hospitalData = useHospitalData();

    return (
        <>
            {hospitalData.map(hospital => (
                <S.Item key={hospital.id}>
                    <Link href={`company/detail/${hospital.id}`}>
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
                                {hospital.images.map((image, key) => (
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
                                <S.Title>{hospital.name}</S.Title>
                            </S.TitleBox>
                            <p className="mb-[9px] text-base text-[#666]">{hospital.content}</p>
                            <S.InfoBox>
                                <S.Address>{hospital.address}</S.Address>
                                <S.WorkHour>
                                    <strong
                                        className={
                                            hospital.isWorking
                                                ? 'pr-[6px] text-[#5AC4CB]'
                                                : 'pr-[6px] text-red-500'
                                        }
                                    >
                                        {hospital.workingStatus}
                                    </strong>
                                    {hospital.workingHours && '오늘 ' + hospital.workingHours}
                                </S.WorkHour>
                            </S.InfoBox>
                        </div>
                    </Link>
                </S.Item>
            ))}
        </>
    );
}

export default HomeList;
