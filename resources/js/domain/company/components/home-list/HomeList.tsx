import { useMemo } from 'react';

import dayjs from 'dayjs';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import IconPartner from '@assets/company/common/icon-partner.svg';
import Hospital01Image01 from '@assets/company/home/main-hospital01-banner01.png';
import Hospital02Image01 from '@assets/company/home/main-hospital02-banner01.png';
import Hospital03Image01 from '@assets/company/home/main-hospital03-banner01.png';
import Hospital04Image01 from '@assets/company/home/main-hospital04-banner01.png';
import Hospital05Image01 from '@assets/company/home/main-hospital05-banner01.png';

import 'swiper/css/pagination';
import * as S from './HomeList.styled';

type WorkHour = {
    dayOfWeek: number; // 0~6 = 일~토
    startTime: string;
    endTime: string;
};

type HospitalItem = {
    id: number;
    name: string;
    images: string[];
    content: string;
    address: string;
    isWorking?: boolean;
    workingStatus?: string;
    workingHours?: string;
    hours: WorkHour[];
};

function HomeList() {
    const hospitals: HospitalItem[] = [
        {
            id: 1,
            name: '디에이성형외과의원',
            images: [Hospital01Image01],
            content:
                '눈, 코, 가슴, 안면윤곽, 리프팅 등 분야별 체계적인 협진과 대학병원급 설비 시스템, 강남역 12번 출구',
            address: '서울 강남구 역삼역',
            hours: [
                {
                    dayOfWeek: 1,
                    startTime: '10:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 4,
                    startTime: '10:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 5,
                    startTime: '10:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 6,
                    startTime: '10:00',
                    endTime: '14:00',
                },
            ],
        },
        {
            id: 2,
            name: '라이브치과병원',
            images: [Hospital02Image01],
            content:
                '건강한 삶(LIVE)를 추구하는다년간 임상경험, 꼼꼼한 사후관리, 일요일 진료, 화·목 야간진료',
            address: '서울 강남구 / 인천 부평구',
            hours: [
                {
                    dayOfWeek: 1,
                    startTime: '10:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 2,
                    startTime: '10:00',
                    endTime: '18:00',
                },
                {
                    dayOfWeek: 3,
                    startTime: '08:00',
                    endTime: '11:00',
                },
                {
                    dayOfWeek: 4,
                    startTime: '10:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 5,
                    startTime: '10:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 6,
                    startTime: '10:00',
                    endTime: '14:00',
                },
            ],
        },
        {
            id: 3,
            name: '나나성형외과의원',
            images: [Hospital03Image01],
            content: '나를 위한 성형, 나의 선택, 안면윤곽, 가슴성형, 눈성형, 코성형, 유형별재수술',
            address: '서울 강남구 신논현/논현역',
            hours: [
                {
                    dayOfWeek: 1,
                    startTime: '10:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 2,
                    startTime: '10:00',
                    endTime: '13:00',
                },
                {
                    dayOfWeek: 3,
                    startTime: '10:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 4,
                    startTime: '10:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 5,
                    startTime: '10:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 6,
                    startTime: '10:00',
                    endTime: '14:00',
                },
            ],
        },
        {
            id: 4,
            name: '비앤빛 강남밝은세상안과의원',
            images: [Hospital04Image01],
            content: '시력을디자인하다, 내눈에 맞는 시력교정, 강남역 9번출구, Since1994',
            address: '서울 강남구 역삼역',
            hours: [
                {
                    dayOfWeek: 1,
                    startTime: '09:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 2,
                    startTime: '09:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 3,
                    startTime: '09:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 4,
                    startTime: '09:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 5,
                    startTime: '09:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 6,
                    startTime: '09:00',
                    endTime: '14:00',
                },
            ],
        },
        {
            id: 5,
            name: '모아만의원',
            images: [Hospital05Image01],
            content:
                '서울 강남 신사동, 압구정 모발이식, 헤어라인교정, 탈모치료는 모아만 모발이식입니다.',
            address: '서울 강남구 신사역',
            hours: [
                {
                    dayOfWeek: 1,
                    startTime: '09:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 2,
                    startTime: '09:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 3,
                    startTime: '09:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 4,
                    startTime: '09:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 5,
                    startTime: '09:00',
                    endTime: '19:00',
                },
                {
                    dayOfWeek: 6,
                    startTime: '09:00',
                    endTime: '14:00',
                },
            ],
        },
    ];

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

    return (
        <S.Container>
            {hospitalItems.map(hospital => (
                <S.Item key={hospital.id}>
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
                </S.Item>
            ))}
        </S.Container>
    );
}

export default HomeList;
