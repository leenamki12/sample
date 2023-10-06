import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import IconPartner from '@assets/company/common/icon_partner.svg';

import { HospitalItem } from '../../datas';

import * as S from './HospitalTopInfo.styled';

type Props = {
    data: HospitalItem;
    type?: 'list' | 'detail';
};

function HospitalTopInfo({ data, type = 'detail' }: Props) {
    return (
        <>
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
                        {data.images.map((image, key) => (
                            <SwiperSlide key={key}>
                                <img src={image} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </S.SwiperBox>
                <S.TextBox type={type}>
                    <S.TitleBox>
                        <S.PartnerBox>
                            <img src={IconPartner} alt="" />
                            <span>제휴</span>
                        </S.PartnerBox>
                        <S.Title>{data.name}</S.Title>
                    </S.TitleBox>
                    <S.ContentBox>{data.content}</S.ContentBox>
                    <S.InfoBox>
                        <S.Address>{data.address}</S.Address>
                        <S.WorkHour isWorking={data.isWorking}>
                            <strong>{data.workingStatus}</strong>
                            {'오늘 ' + data.workingHours}
                        </S.WorkHour>
                    </S.InfoBox>
                </S.TextBox>
            </S.ColBox>
        </>
    );
}

export default HospitalTopInfo;
