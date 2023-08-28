import { Head, usePage } from '@inertiajs/react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import IconPartner from '@assets/company/common/icon_partner.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { DetailSticky, OtherPartnerList } from '../../components';
import useHospitalData from '../../datas';

import * as S from './HospitalDetail.styled';

function HospitalDetail() {
    const { id, auth } = usePage().props;

    const userName = auth.user.name;

    const hospitalData = useHospitalData().find(data => data.id === Number(id));

    if (!hospitalData) {
        return null;
    }

    return (
        <div>
            <Head title={hospitalData?.name} />
            <S.ColBox>
                <S.SwiperBox>
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
                    </Swiper>
                </S.SwiperBox>
                <S.TextBox>
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
                </S.TextBox>
            </S.ColBox>
            <S.ColBox>
                <S.SectionTitle>
                    진료항목{' '}
                    <span className="text-primary">{hospitalData?.treatmentItems.length}</span>
                </S.SectionTitle>
                <S.TreatmentList>
                    {hospitalData?.treatmentItems.map(item => <li key={item}>{item}</li>)}
                </S.TreatmentList>
            </S.ColBox>
            <S.ColBox>
                <div className="mb-[40px] ">
                    {hospitalData?.detailImages ? (
                        <>
                            {hospitalData?.detailImages.basic.map((image, key) => (
                                <div key={key}>
                                    <img src={image} alt="" />
                                </div>
                            ))}
                            <div className="relative">
                                <img src={hospitalData?.detailImages.map} alt="" />
                                <a
                                    href="#"
                                    className={`absolute bottom-[10%] left-[8%] z-[2] h-[10%] w-[85%] text-transparent`}
                                >
                                    상세보기
                                </a>
                            </div>
                            <div>
                                <img src={hospitalData?.detailImages.workHour} alt="" />
                            </div>
                        </>
                    ) : (
                        <div className="h-[500px] bg-slate-300">이미지 준비중</div>
                    )}
                </div>
                <S.SectionTitle>다른 제휴병원 혜택 확인하기</S.SectionTitle>
                <OtherPartnerList />
            </S.ColBox>
            <DetailSticky id={hospitalData.id} userName={userName} />
        </div>
    );
}

export default HospitalDetail;
