import { usePage } from '@inertiajs/react';

import { PageHeader } from '@/components/ui';
import { useHospitalData } from '@/domain/company/datas';
import { PageProps } from '@/types';

import { DetailSticky, OtherPartnerList } from '../../components';
import HospitalTopInfo from '../../components/hospital-top-info/HospitalTopInfo';

import * as S from './HospitalDetail.styled';

type HospitalDetailProps = {
    id: string;
} & PageProps;

function HospitalDetail() {
    const { getData } = useHospitalData();
    const { id } = usePage<HospitalDetailProps>().props;

    const hospitalData = getData(id);

    return (
        hospitalData && (
            <div>
                <PageHeader title={hospitalData.name} />
                <HospitalTopInfo data={hospitalData} />
                <S.ColBox>
                    <div>
                        {hospitalData.detailImages ? (
                            <>
                                {hospitalData.detailImages.basic.map((image, key) => (
                                    <div key={key}>
                                        <img src={image} alt="" />
                                    </div>
                                ))}
                                <div className="relative">
                                    <img src={hospitalData.detailImages.map} alt="" />
                                    <a
                                        href={hospitalData.addressLink}
                                        target="_blank"
                                        className={`absolute bottom-[10%] left-[8%] z-[2] h-[10%] w-[85%] text-transparent`}
                                    >
                                        상세보기
                                    </a>
                                </div>
                                <div>
                                    <img src={hospitalData.detailImages.workHour} alt="" />
                                </div>
                            </>
                        ) : (
                            <div className="flex h-[500px] items-center justify-center bg-gray-100 font-semibold">
                                이미지 준비중
                            </div>
                        )}
                    </div>
                    <S.SectionTitle>다른 제휴병원 혜택 확인하기</S.SectionTitle>
                    <OtherPartnerList />
                </S.ColBox>
                <DetailSticky />
            </div>
        )
    );
}

export default HospitalDetail;
